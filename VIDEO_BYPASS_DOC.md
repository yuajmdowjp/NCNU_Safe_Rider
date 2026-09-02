# H5P 影片自動化破解模組 - 開發實作文檔

## 1. 破解原理與 DOM 結構分析

H5P 互動影片為了防止使用者掛機，會在中途暫停並動態生成確認視窗。透過解析網頁的 DOM 結構，擴充功能可以模擬真人行為，在元素出現的瞬間自動完成點擊。

* **互動氣泡 (Interaction Button)：** 影片暫停時，首先出現的是一個帶有 `role="button"` 的紫色標籤，內部包含 `<p>是否繼續播放</p>`。該元素具有 `aria-expanded` 屬性，控制視窗的開合狀態。
* **作答選項 (Radio Alternatives)：** 點開氣泡後，DOM 會生成一個 `<ul>` 列表，包含多個 `<li class="h5p-sc-alternative" role="radio">`。正確選項的文字包裹於內部的 `.h5p-sc-label p` 標籤中。
* **繼續按鈕 (Continue Button)：** 選取「是」之後，最外層會出現一個 `<button>`，其文字內容為「繼續」或「Continue」。

## 2. 核心破解腳本 (`content.js` 節錄)

擴充功能利用 `setInterval` 建立一個高頻率（每 2 秒）的掃描迴圈，不斷尋找上述三個關鍵元素並依序觸發 `.click()` 事件。

```javascript
setInterval(() => {
    // 步驟 1：解除隱藏視窗 (點擊紫色氣泡)
    const interactionBtns = document.querySelectorAll('.h5p-interaction[role="button"]');
    interactionBtns.forEach(btn => {
        const label = btn.querySelector('.h5p-interaction-label-text p');
        if (label && (label.innerText.includes('是否繼續播放') || label.innerText.includes('是否繼續觀看'))) {
            if (btn.getAttribute('aria-expanded') === 'false') {
                btn.click();
            }
        }
    });

    // 步驟 2：選取通關選項 (點擊「是」)
    const h5pOptions = document.querySelectorAll('li.h5p-sc-alternative');
    h5pOptions.forEach(option => {
        const textEl = option.querySelector('.h5p-sc-label p');
        if (textEl && textEl.innerText.trim() === '是') {
            if (option.getAttribute('aria-checked') !== 'true' && !option.classList.contains('h5p-sc-selected')) {
                option.click();
            }
        }
    });

    // 步驟 3：恢復影片播放 (點擊「繼續」)
    const continueBtns = document.querySelectorAll('button');
    continueBtns.forEach(btn => {
        const btnText = btn.innerText.trim();
        if (btnText === '繼續' || btnText === 'Continue') {
            btn.click();
        }
    });
}, 2000);

```

## 3. 防呆機制與邊界處理

為了防止擴充功能陷入無限點擊的死迴圈（Infinite Loop）導致瀏覽器崩潰，腳本中加入了嚴格的狀態鎖定機制。

* **氣泡展開鎖定：** 腳本在執行 `btn.click()` 前，會先檢查 `btn.getAttribute('aria-expanded') === 'false'`。若氣泡已經是展開狀態（`true`），則跳過點擊，避免干擾後續的選項生成。
* **選項選取鎖定：** 點擊「是」之前，必須檢查該 `<li>` 元素是否已經包含 `.h5p-sc-selected` 類別，或 `aria-checked` 是否為 `true`。這確保了同一個選項不會被每 2 秒重複點擊一次。

## 4. 進階探討：API 封包偽造 (秒殺機制)

雖然目前的 DOM 模擬點擊法最為穩定且安全，但若追求「不需等待影片播完」的瞬間完成（解法 2），則需要攔截 H5P 模組與 Moodle 伺服器之間的通訊。

* **封包分析：** H5P 在影片結束時，會透過 XHR/Fetch 發送一組帶有 `statement`（包含互動結果與分數）及 `sesskey`（Moodle Session 密鑰）的 JSON 封包至後端 API 端點（通常是 `xAPI` 相關路徑）。
* **風險評估：** 攔截並偽造此 API 請求可以瞬間送出「影片已看完且滿分」的紀錄。然而，若 Moodle 伺服器後端有驗證「請求發送時間」與「影片總長度」的差值，這種做法極易觸發防作弊警報，建議作為技術研究而非正式部署的方案。
