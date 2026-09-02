// content.js
console.log("NCNU 交通安全測驗小幫手已載入");

// 預設開啟「自動作答」，讓使用者點擊後才掃描 (此版本已預設開啟且隱藏開關)
let isAutoEnabled = true; 
// 預設開啟「影片自動輔助」 (此版本已預設開啟且隱藏開關)
let isVideoAutoEnabled = true;

// 注入懸浮 UI
function injectUI() {
    // 如果已經存在就不要重複注入
    if (document.getElementById('ncnu-helper-widget')) return;

    const widget = document.createElement('div');
    widget.id = 'ncnu-helper-widget';
    // 設定懸浮樣式 (預設在左下角)
    widget.style.position = 'fixed';
    widget.style.bottom = '20px';
    widget.style.left = '20px';
    widget.style.width = '300px';
    widget.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
    widget.style.color = '#f8fafc';
    widget.style.padding = '20px';
    widget.style.borderRadius = '12px';
    widget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5)';
    widget.style.zIndex = '999999'; // 確保在最上層
    widget.style.fontFamily = 'sans-serif';
    widget.style.backdropFilter = 'blur(10px)';
    widget.style.border = '1px solid rgba(255,255,255,0.1)';

    // 建立 HTML 內容
    widget.innerHTML = `
        <div id="ncnu-widget-header" style="position: relative; text-align: center; margin-bottom: 20px; cursor: move; user-select: none; padding-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);" title="按住這裡可以拖曳面板">
            <button id="ncnu-minimize-btn" style="position: absolute; top: -5px; right: -5px; background: rgba(255,255,255,0.1); border: none; color: white; border-radius: 50%; width: 24px; height: 24px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; transition: background 0.2s; z-index: 2;" title="最小化">-</button>
            <h1 id="ncnu-widget-title" style="margin: 0; font-size: 20px; font-weight: 700; background: linear-gradient(to right, #38bdf8, #818cf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; pointer-events: none;">NCNU 安全小幫手</h1>
            <p id="ncnu-widget-desc" style="margin: 5px 0 0; font-size: 12px; color: #94a3b8; pointer-events: none;">Moodle 自動化輔助工具 (可拖曳)</p>
            <div id="ncnu-dot-icon" style="display: none; font-size: 24px; pointer-events: none;">🛡️</div>
        </div>
        <div id="ncnu-widget-body">
            <!-- 設定選項已移除，功能在背景自動執行 -->
            
            <button id="ncnu-scan-btn" style="width: 100%; padding: 12px; background: linear-gradient(135deg, #3b82f6, #6366f1); color: white; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; display: flex; justify-content: center; align-items: center; margin-bottom: 8px;">
                <span id="ncnu-btn-text">立即掃描畫面</span>
            </button>

            <button id="ncnu-hack-btn" style="width: 100%; padding: 12px; background: linear-gradient(135deg, #f97316, #ef4444); color: white; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; display: flex; justify-content: center; align-items: center;" title="危險操作：將會快轉影片至下一個題目的時間點。">
                <span id="ncnu-hack-text">⏭️ 跳至下一題</span>
            </button>
            
            <div id="ncnu-result-area" style="margin-top: 16px; font-size: 13px; color: #a7f3d0; text-align: center; line-height: 1.5; min-height: 40px;">小幫手已準備就緒！</div>
        </div>
    `;

    document.body.appendChild(widget);

    // 最小化功能
    let isMinimized = false;
    const minimizeBtn = document.getElementById('ncnu-minimize-btn');
    const widgetBody = document.getElementById('ncnu-widget-body');
    const widgetHeader = document.getElementById('ncnu-widget-header');
    const widgetTitle = document.getElementById('ncnu-widget-title');
    const widgetDesc = document.getElementById('ncnu-widget-desc');
    const dotIcon = document.getElementById('ncnu-dot-icon');

    function toggleMinimize() {
        isMinimized = !isMinimized;
        
        // 加入轉場動畫
        widget.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        setTimeout(() => {
            widget.style.transition = '';
        }, 300);

        if (isMinimized) {
            // 紀錄縮小前的位置，並確保改用 top/left 定位以便動畫順暢
            const rect = widget.getBoundingClientRect();
            if (widget.style.bottom) {
                widget.style.top = rect.top + 'px';
                widget.style.bottom = '';
            }
            widget.dataset.originalTop = widget.style.top;
            widget.dataset.originalLeft = widget.style.left || (rect.left + 'px');
            
            widgetBody.style.display = 'none';
            widgetTitle.style.display = 'none';
            widgetDesc.style.display = 'none';
            minimizeBtn.style.display = 'none';
            dotIcon.style.display = 'block';
            
            widget.dataset.originalWidth = widget.style.width;
            widget.dataset.originalPadding = widget.style.padding;
            widget.dataset.originalBorderRadius = widget.style.borderRadius;
            
            widget.style.width = '60px';
            widget.style.height = '60px';
            widget.style.padding = '0';
            widget.style.borderRadius = '50%';
            widget.style.display = 'flex';
            widget.style.alignItems = 'center';
            widget.style.justifyContent = 'center';
            
            // 判斷要往左下還是右下縮小
            const centerX = rect.left + (rect.width / 2);
            if (centerX < window.innerWidth / 2) {
                // 往左下
                widget.style.left = '20px';
            } else {
                // 往右下
                widget.style.left = (window.innerWidth - 80) + 'px';
            }
            widget.style.top = (window.innerHeight - 80) + 'px';
            
            widgetHeader.style.marginBottom = '0';
            widgetHeader.style.paddingBottom = '0';
            widgetHeader.style.borderBottom = 'none';
            widgetHeader.style.width = '100%';
            widgetHeader.style.height = '100%';
            widgetHeader.style.display = 'flex';
            widgetHeader.style.alignItems = 'center';
            widgetHeader.style.justifyContent = 'center';
            widgetHeader.title = "點擊還原，或按住拖曳";
        } else {
            widgetBody.style.display = 'block';
            widgetTitle.style.display = 'block';
            widgetDesc.style.display = 'block';
            minimizeBtn.style.display = 'flex';
            dotIcon.style.display = 'none';
            
            widget.style.width = widget.dataset.originalWidth || '300px';
            widget.style.height = 'auto';
            widget.style.padding = widget.dataset.originalPadding || '20px';
            widget.style.borderRadius = widget.dataset.originalBorderRadius || '12px';
            widget.style.display = 'block';
            
            // 恢復原本的位置
            if (widget.dataset.originalTop !== undefined && widget.dataset.originalLeft !== undefined) {
                widget.style.top = widget.dataset.originalTop;
                widget.style.left = widget.dataset.originalLeft;
            }
            
            widgetHeader.style.marginBottom = '20px';
            widgetHeader.style.paddingBottom = '10px';
            widgetHeader.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            widgetHeader.style.display = 'block';
            widgetHeader.title = "按住這裡可以拖曳面板";
        }
    }

    minimizeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMinimize();
    });

    // 實作拖曳功能
    const header = document.getElementById('ncnu-widget-header');
    let isDragging = false;
    let hasMoved = false;
    let initialX, initialY;
    let startMouseX, startMouseY;

    header.addEventListener('mousedown', (e) => {
        if (e.target === minimizeBtn) return;
        isDragging = true;
        hasMoved = false;
        startMouseX = e.clientX;
        startMouseY = e.clientY;
        const rect = widget.getBoundingClientRect();
        
        // 將定位方式改為 top / left，方便拖曳計算
        if (widget.style.bottom) {
            widget.style.top = rect.top + 'px';
            widget.style.bottom = '';
        }
        
        initialX = e.clientX - rect.left;
        initialY = e.clientY - rect.top;
        header.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        if (Math.abs(e.clientX - startMouseX) > 3 || Math.abs(e.clientY - startMouseY) > 3) {
            hasMoved = true;
        }
        
        let currentX = e.clientX - initialX;
        let currentY = e.clientY - initialY;
        
        // 確保不會拖出視窗外
        currentX = Math.max(0, Math.min(currentX, window.innerWidth - widget.offsetWidth));
        currentY = Math.max(0, Math.min(currentY, window.innerHeight - widget.offsetHeight));

        widget.style.left = currentX + 'px';
        widget.style.top = currentY + 'px';
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        header.style.cursor = 'move';
        
        if (isMinimized && !hasMoved) {
            toggleMinimize();
        }
    });

    // 綁定按鈕與開關事件
    const scanBtn = document.getElementById('ncnu-scan-btn');
    const resultArea = document.getElementById('ncnu-result-area');
    const btnText = document.getElementById('ncnu-btn-text');

    const hackBtn = document.getElementById('ncnu-hack-btn');
    if (hackBtn) {
        hackBtn.addEventListener('click', () => {
            if (!confirm('【警告】這將會跳過影片，直接前往下一個出現題目的時間點。\n\n若你觀看時間極短，後台記錄可能會判定為異常。\n確定要執行嗎？')) {
                return;
            }
            
            const hackText = document.getElementById('ncnu-hack-text');
            hackText.innerText = "正在尋找題目...";
            hackBtn.style.opacity = '0.7';
            hackBtn.disabled = true;

            // 尋找 H5P iframe
            const iframes = document.querySelectorAll('iframe.h5p-iframe');
            if (iframes.length === 0) {
                resultArea.style.color = "#ef4444";
                resultArea.innerText = "❌ 找不到 H5P 影片模組！";
                hackText.innerText = "⏭️ 跳至下一題";
                hackBtn.style.opacity = '1';
                hackBtn.disabled = false;
                return;
            }

            iframes.forEach(iframe => {
                const doc = iframe.contentDocument || iframe.contentWindow.document;
                
                // 檢查是否已經注入過
                if (!doc.getElementById('ncnu-inject-script')) {
                    const script = doc.createElement('script');
                    script.id = 'ncnu-inject-script';
                    script.src = chrome.runtime.getURL('inject.js');
                    doc.head.appendChild(script);
                }
                
                // 等待一下讓腳本載入後，發送觸發指令
                setTimeout(() => {
                    iframe.contentWindow.postMessage({ type: 'NCNU_HACK_TRIGGER' }, '*');
                }, 500);
            });
        });
    }

    // 監聽來自 injected script 的訊息
    window.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'NCNU_JUMP_SUCCESS') {
            resultArea.style.color = "#10b981";
            resultArea.innerText = "✅ 成功跳轉至下一題！";
            const hackText = document.getElementById('ncnu-hack-text');
            if (hackText) {
                hackText.innerText = "⏭️ 跳至下一題";
                hackBtn.style.opacity = '1';
                hackBtn.disabled = false;
            }
        } else if (event.data && event.data.type === 'NCNU_JUMP_DONE') {
            resultArea.style.color = "#3b82f6";
            resultArea.innerText = "ℹ️ 影片後面已經沒有題目了。";
            const hackText = document.getElementById('ncnu-hack-text');
            if (hackText) {
                hackText.innerText = "⏭️ 跳至下一題";
                hackBtn.style.opacity = '1';
                hackBtn.disabled = false;
            }
        } else if (event.data && event.data.type === 'NCNU_HACK_FAIL') {
            resultArea.style.color = "#ef4444";
            resultArea.innerText = "❌ 跳轉失敗：" + (event.data.error || "未知錯誤");
            const hackText = document.getElementById('ncnu-hack-text');
            if (hackText) {
                hackText.innerText = "⏭️ 跳至下一題";
                hackBtn.style.opacity = '1';
                hackBtn.disabled = false;
            }
        } else if (event.data && event.data.type === 'NCNU_HACK_SUCCESS') {
            // 兼容舊版訊息
            resultArea.style.color = "#10b981";
            resultArea.innerText = "✅ xAPI 封包已成功發送！";
            const hackText = document.getElementById('ncnu-hack-text');
            if (hackText) {
                hackText.innerText = "⏭️ 跳至下一題";
                hackBtn.style.opacity = '1';
                hackBtn.disabled = false;
            }
        }
    });

    // 手動掃描
    scanBtn.addEventListener('click', () => {
        btnText.innerText = "掃描中...";
        scanBtn.style.opacity = '0.7';
        scanBtn.disabled = true;
        resultArea.style.color = "#94a3b8";
        resultArea.innerText = "正在分析網頁題目...";

        // 模擬延遲以顯示動畫效果
        setTimeout(() => {
            handleH5PVideo();
            const stats = handleQuiz();
            
            btnText.innerText = "立即掃描畫面";
            scanBtn.style.opacity = '1';
            scanBtn.disabled = false;
            
            if (stats.totalFound === 0) {
                resultArea.style.color = "#fcd34d";
                resultArea.innerText = `掃描完成！但畫面上找不到任何題目。\n(可能是 Moodle 標籤不同或尚未進入測驗)`;
            } else {
                let msg = `🎉 掃描完成！\n共發現 ${stats.totalFound} 題，成功預填 ${stats.answered} 題。`;
                if (stats.missed && stats.missed.length > 0) {
                    msg += `\n⚠️ 漏填/找不到答案的題號：${stats.missed.join(', ')}`;
                    resultArea.style.color = "#fca5a5"; // 紅色系警告
                } else {
                    resultArea.style.color = "#a7f3d0"; // 綠色系成功
                }
                resultArea.innerText = msg;
            }
        }, 500);
    });
}

// 確保 DOM 載入後注入 UI
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectUI);
} else {
    injectUI();
}

// 模組一：H5P 影片自動點擊與加速 (根據 VIDEO_BYPASS_DOC.md 實作)
function handleH5PVideo() {
    // Helper function to process a specific document context (main doc or iframe)
    const processContext = (doc) => {
        try {
            // 步驟 1：解除隱藏視窗 (點擊紫色氣泡)
            const interactionBtns = doc.querySelectorAll('.h5p-interaction[role="button"]');
            interactionBtns.forEach(btn => {
                const label = btn.querySelector('.h5p-interaction-label-text p');
                if (label && (label.textContent.includes('是否繼續播放') || label.textContent.includes('是否繼續觀看'))) {
                    if (btn.getAttribute('aria-expanded') === 'false') {
                        btn.click();
                        console.log('[NCNU 小幫手] 點擊了影片繼續氣泡');
                    }
                }
            });

            // 步驟 2：選取通關選項 (點擊「是」)
            const h5pOptions = doc.querySelectorAll('li.h5p-sc-alternative');
            h5pOptions.forEach(option => {
                const textEl = option.querySelector('.h5p-sc-label p') || option.querySelector('.h5p-sc-label');
                if (textEl && (textEl.textContent.trim() === '是' || textEl.textContent.includes('是'))) {
                    if (option.getAttribute('aria-checked') !== 'true' && !option.classList.contains('h5p-sc-selected')) {
                        option.click();
                        console.log('[NCNU 小幫手] 點擊了「是」選項');
                    }
                }
            });

            // 步驟 3：恢復影片播放 (點擊「繼續」)
            const continueBtns = doc.querySelectorAll('.h5p-joubelui-button, .h5p-continue-button, button');
            continueBtns.forEach(btn => {
                // 如果是特定的 H5P class，或是文字符合
                const btnText = btn.textContent ? btn.textContent.trim() : '';
                const isH5PBtn = btn.classList.contains('h5p-joubelui-button') || btn.classList.contains('h5p-continue-button');
                
                if (isH5PBtn || btnText === '繼續' || btnText === 'Continue') {
                    // 確保按鈕在畫面上可見
                    const rect = btn.getBoundingClientRect();
                    const isVisible = rect.width > 0 && rect.height > 0 && btn.style.display !== 'none';
                    if (isVisible) {
                        btn.click();
                        console.log('[NCNU 小幫手] 點擊了繼續按鈕');
                    }
                }
            });

            // 步驟 4：影片結束自動提交 (點擊 Submit Answers)
            const submitBtns = doc.querySelectorAll('button');
            submitBtns.forEach(btn => {
                const btnText = btn.textContent ? btn.textContent.trim() : '';
                if (btnText === 'Submit Answers' || btnText === '提交答案' || btnText === '送出答案') {
                    const rect = btn.getBoundingClientRect();
                    const isVisible = rect.width > 0 && rect.height > 0 && btn.style.display !== 'none';
                    if (isVisible) {
                        btn.click();
                        console.log('[NCNU 小幫手] 點擊了影片結束的 Submit Answers 按鈕');
                    }
                }
            });

            // 步驟 5：送出完成後自動點擊下一部影片 (Moodle 導覽)
            if (doc.body && (doc.body.textContent.includes('Your answers have been submitted!') || 
                             doc.body.textContent.includes('Your answers have been submitted.') || 
                             doc.body.textContent.includes('已送出答案') ||
                             doc.body.textContent.includes('Answers submitted'))) {
                
                if (!window._ncnuHelperNextClicked) {
                    window._ncnuHelperNextClicked = true;
                    console.log('[NCNU 小幫手] 偵測到影片已完成，準備跳轉至下一個活動...');
                    
                    try {
                        // 因為文字是在 iframe 中偵測到的，跳轉按鈕則是在最上層的 Moodle 主網頁
                        const topDoc = window.top.document;
                        const nextLink = topDoc.getElementById('next-activity-link');
                        if (nextLink) {
                            console.log('[NCNU 小幫手] 成功找到下一頁按鈕：', nextLink.textContent.trim());
                            nextLink.click();
                            return;
                        }
                        
                        // 備案：如果沒有 ID，尋找包含 ► 的 <a>
                        const nextLinks = topDoc.querySelectorAll('a');
                        for (let a of nextLinks) {
                            if (a.textContent && a.textContent.includes('►')) {
                                console.log('[NCNU 小幫手] 成功找到下一頁連結 (備案)：', a.textContent.trim());
                                a.click();
                                return;
                            }
                        }
                    } catch(e) {
                        console.log('[NCNU 小幫手] 無法存取主網頁 DOM，退回在當前視窗尋找');
                        const nextLink = document.getElementById('next-activity-link');
                        if (nextLink) nextLink.click();
                    }
                }
            }
        } catch (e) {
            // 忽略跨網域 iframe 讀取錯誤
        }
    };

    // 處理主網頁
    processContext(document);

    // 處理 Moodle 中常見的 iframe 包裝
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        try {
            if (iframe.contentDocument) {
                processContext(iframe.contentDocument);
            }
        } catch (e) {
            // 同源政策阻擋時跳過
        }
    });

    // 步驟 3：恢復影片播放 (點擊「繼續」)
    const continueBtns = document.querySelectorAll('button');
    continueBtns.forEach(btn => {
        const btnText = btn.innerText.trim();
        if (btnText === '繼續' || btnText === 'Continue' || btn.classList.contains('h5p-continue-button') || btn.classList.contains('h5p-joubelui-button')) {
            // 確保按鈕可見才點擊
            if (btn.style.display !== 'none') {
                btn.click();
            }
        }
    });
    
    // 步驟 4：(可選功能) 影片自動加速
    // 預設將影片加速至 16 倍，若要使用可解除註解或由設定開關控制
    /*
    const videoElements = document.querySelectorAll('video');
    videoElements.forEach(video => {
        if (video.playbackRate !== 16) {
            video.playbackRate = 16;
            // 如果影片因為某些原因暫停了，嘗試自動播放
            if (video.paused && !document.querySelector('.h5p-interaction[role="button"][aria-expanded="true"]')) {
                video.play().catch(e => console.log('Auto-play prevented by browser', e));
            }
        }
    });
    */
}

// 模組二：Moodle 測驗自動作答
function handleQuiz() {
    const questions = document.querySelectorAll('.que');
    let stats = { totalFound: questions.length, answered: 0, missed: [] };
    console.log(`[NCNU 小幫手] 畫面上找到 ${questions.length} 個題目區塊 (.que)`);
    
    questions.forEach((que, index) => {
        // 檢查小幫手是否已經處理過這題 (利用提示框是否存在來判斷)
        // 這樣一旦小幫手作答過，就不會再介入，允許使用者手動修改答案而不被覆蓋
        if (que.querySelector('.ncnu-helper-hint')) {
            stats.answered++;
            return;
        }

        const qtextElement = que.querySelector('.qtext');
        if (!qtextElement) {
            stats.missed.push(index + 1);
            console.log(`[NCNU 小幫手] 第 ${index + 1} 題找不到文字內容區塊 (.qtext)`);
            return;
        }

        const rawText = qtextElement.innerText || qtextElement.textContent;
        // 清除所有標點符號、空白，只保留中英文與數字，這樣全半形的逗號、問號不同也能完美比對
        const cleanText = (text) => text.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, '');
        const cleanedText = cleanText(rawText);
        console.log(`[NCNU 小幫手] 第 ${index + 1} 題擷取文字為: ${cleanedText}`);

        if (typeof questionsDB === 'undefined') {
            console.error('[NCNU 小幫手] 錯誤：題庫 questionsDB 未載入！');
            return;
        }

        const matchedVariants = questionsDB.filter(q => {
            const cleanQ = cleanText(q.question);
            return cleanedText.includes(cleanQ) || cleanQ.includes(cleanedText);
        });

        if (matchedVariants.length > 0) {
            let matchedData = matchedVariants[0];
            const inputs = Array.from(que.querySelectorAll('input[type="radio"]'));
            
            // 收集該題所有選項的文字 (找 input 所在的父節點文字)
            const optionTexts = inputs.map(input => {
                const parent = input.parentElement;
                return parent ? cleanText(parent.innerText || parent.textContent) : "";
            });

            // 如果有多個同名題目 (例如「依據圖示...」有十幾題)
            // 利用畫面上的選項文字來過濾出真正的題目
            if (matchedVariants.length > 1) {
                for (let variant of matchedVariants) {
                    const cleanAns = cleanText(variant.answer_text);
                    if (optionTexts.some(optText => optText.includes(cleanAns) || cleanAns.includes(optText))) {
                        matchedData = variant;
                        break;
                    }
                }
            }

            let targetInput = null;
            const cleanTargetAns = cleanText(matchedData.answer_text);
            
            // 策略 A：用文字精準比對 (可防 Moodle 選項順序打亂，也能精準定位同名題)
            for (let i = 0; i < inputs.length; i++) {
                const optText = optionTexts[i];
                if (optText.includes(cleanTargetAns) || cleanTargetAns.includes(optText)) {
                    targetInput = inputs[i];
                    break;
                }
            }

            // 策略 B：如果文字對不上，退回使用題庫原廠的數字 Index
            if (!targetInput) {
                const targetIndex = parseInt(matchedData.answer) - 1;
                if (inputs[targetIndex]) {
                    targetInput = inputs[targetIndex];
                }
            }

            if (targetInput) {
                stats.answered++;
                console.log(`[NCNU 小幫手] 第 ${index + 1} 題比對成功！答案選項為 ${matchedData.answer_text}`);
                
                // 檢查是否已經插入提示，避免重複插入
                let hint = que.querySelector('.ncnu-helper-hint');
                if (!hint) {
                    hint = document.createElement('div');
                    hint.className = 'ncnu-helper-hint';
                    hint.style.color = '#28a745'; // 綠色
                    hint.style.fontWeight = 'bold';
                    hint.style.marginTop = '10px';
                    hint.style.padding = '10px';
                    hint.style.backgroundColor = '#d4edda';
                    hint.style.border = '1px solid #c3e6cb';
                    hint.style.borderRadius = '5px';
                    hint.innerText = `💡 小幫手提示：正確答案是 [ ${matchedData.answer_text || matchedData.answer} ]`;
                    
                    // 將提示插入到題目下方
                    qtextElement.appendChild(hint);
                }

                // 自動點擊對應選項
                if (!targetInput.checked) {
                    console.log(`[NCNU 小幫手] 自動點擊第 ${index + 1} 題選項`);
                    targetInput.click();
                }
            } else {
                stats.missed.push(index + 1);
                console.log(`[NCNU 小幫手] 第 ${index + 1} 題找到題庫，但找不到對應的選項按鈕，共有 ${inputs.length} 個 radio button`);
            }
        } else {
            stats.missed.push(index + 1);
            console.log(`[NCNU 小幫手] 第 ${index + 1} 題在題庫中找不到配對資料。`);
        }
    });

    return stats;
}

// 每 2 秒執行一次非同步掃描
setInterval(() => {
    // H5P 影片互動泡泡永遠在背景自動偵測點擊，依據使用者的開關決定
    if (isVideoAutoEnabled) {
        handleH5PVideo();
    }
    
    // 測驗題目的自動掃描與答題，依據使用者的開關決定
    if (isAutoEnabled) {
        handleQuiz();
    }
}, 2000);
