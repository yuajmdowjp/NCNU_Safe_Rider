const questionsDB = [
  {
    "question": "依據圖示,哪一位駕駛人配戴機車安全帽才「正確」?",
    "answer": "3",
    "answer_text": "C"
  },
  {
    "question": "依據圖示,違反下列哪項規定?",
    "answer": "3",
    "answer_text": "附載人數規定。"
  },
  {
    "question": "依據圖示,有關機車載物寬度A何者「正確」?",
    "answer": "1",
    "answer_text": "不超過機車的左右把手外緣各10公分。"
  },
  {
    "question": "依據圖示,有關機車載物長度C何者「正確」?",
    "answer": "1",
    "answer_text": "自後輪輪軸起不超過50公分。"
  },
  {
    "question": "依據圖示,三角形「△」標記代表何意義?",
    "answer": "2",
    "answer_text": "尋找「輪胎胎面磨耗指示平台」位置的導引記號。"
  },
  {
    "question": "依據圖示,機車輪胎之紅色圈選處,代表的意義為何?",
    "answer": "3",
    "answer_text": "輪胎胎面之「磨耗指示平台」,若輪胎溝紋磨耗到此點時,就應更換輪胎。"
  },
  {
    "question": "依據圖示,當機車直行時,哪些區域是駕駛人無法利用照後鏡看見的視野範圍?",
    "answer": "1",
    "answer_text": "A、C、E。"
  },
  {
    "question": "依據圖示,當騎機車並行於汽車的左側或右側時,要注意圖中哪些區域,以免因視野死角而發生事故?",
    "answer": "2",
    "answer_text": "A～E。"
  },
  {
    "question": "依據圖示,當汽車要左轉時,後方的機車駕駛人要特別小心,是因為汽車駕駛人看不到圖中哪個區域?",
    "answer": "1",
    "answer_text": "A。"
  },
  {
    "question": "依據圖示,當汽車要右轉時,後方的機車駕駛人要特別小心,是因為汽車駕駛人看不到圖中哪個區域?",
    "answer": "3",
    "answer_text": "E。"
  },
  {
    "question": "依據圖示,大型車右轉時,機車駕駛人應避免進入的內輪差範圍為何?",
    "answer": "2",
    "answer_text": "B區域。"
  },
  {
    "question": "依據圖示,騎乘機車右轉彎時,應如何行駛較安全?",
    "answer": "2",
    "answer_text": "靠邊暫停於A處,待大型車轉彎後再行轉彎。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何行駛較安全?",
    "answer": "1",
    "answer_text": "A、B。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何行駛較安全?",
    "answer": "2",
    "answer_text": "放慢車速,遠離並避讓大型車先行。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何行駛較能確保行車安全?",
    "answer": "1",
    "answer_text": "應先放鬆油門減速行駛,以免在轉彎時失控。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何行駛較能確保行車安全?",
    "answer": "3",
    "answer_text": "保持適當速度。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何行駛較能確保行車安全?",
    "answer": "2",
    "answer_text": "應把車頭逐漸轉正,安全確認沒問題後,即可加速前進。"
  },
  {
    "question": "依據圖示,機車駕駛人右轉時應如何行駛?",
    "answer": "1",
    "answer_text": "停車並讓行人優先通過,待行人穿越後再行駛。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何行駛?",
    "answer": "1",
    "answer_text": "仍應停於A區,讓行人優先通過。"
  },
  {
    "question": "依據圖示,機車駕駛人「X」直行時,應如何行駛較安全?",
    "answer": "2",
    "answer_text": "仍應停於A區,待前方壅堵車流疏通後,再通過路口。"
  },
  {
    "question": "依據圖示,機車駕駛人的行駛方式何者容易發生危險?",
    "answer": "1",
    "answer_text": "雖尚未通過停止線,但仍可加速前行通過路口。"
  },
  {
    "question": "依據圖示,機車駕駛人應停於圖中何處?",
    "answer": "1",
    "answer_text": "A區。"
  },
  {
    "question": "依據圖示,機車不可行駛在哪一個車道上?",
    "answer": "1",
    "answer_text": "A車道。"
  },
  {
    "question": "依據圖示,機車不可行駛在哪一個車道上?",
    "answer": "1",
    "answer_text": "A車道。"
  },
  {
    "question": "依據圖示,機車不可行駛在哪一個車道上?",
    "answer": "3",
    "answer_text": "C車道。"
  },
  {
    "question": "依據圖示,普通重型機車駕駛人「Y」兩段式左轉從A區行駛至B待轉區時,該如何行駛較安全?",
    "answer": "2",
    "answer_text": "需顯示右方向燈,先變換至外側車道後,再行駛至B區。"
  },
  {
    "question": "依據圖示,「X」機車駕駛人若想要左轉,應該如何行駛較安全?",
    "answer": "2",
    "answer_text": "應距交岔路口30公尺前顯示左轉方向燈,換入內側車道,行駛到交岔路口中心處,確認對向來車安全無誤再左轉。"
  },
  {
    "question": "依據圖示,「X」機車駕駛人若想要右轉,應該如何行駛較安全?",
    "answer": "2",
    "answer_text": "應距交岔路口30公尺前顯示右轉方向燈,慢慢換入外側車道,行駛到路口後再右轉。"
  },
  {
    "question": "依據圖示,機車駕駛人若發現前方汽車車速過慢,是否可超車?",
    "answer": "1",
    "answer_text": "不可以。"
  },
  {
    "question": "依據圖示,機車駕駛人若發現前方汽車車速過慢,是否可超車?",
    "answer": "3",
    "answer_text": "可以自前方車輛的左側超車。"
  },
  {
    "question": "依據圖示,機車駕駛人若發現前方汽車車速過慢,是否可超車?",
    "answer": "1",
    "answer_text": "不可以。"
  },
  {
    "question": "依據圖示,下列哪個敘述較安全?",
    "answer": "1",
    "answer_text": "機車應讓汽車先行。"
  },
  {
    "question": "依據圖示,為何機車應讓汽車先行?",
    "answer": "2",
    "answer_text": "支道車應讓幹道車先行。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何行駛較安全?",
    "answer": "1",
    "answer_text": "應先暫停並左右擺頭查看,等汽車通過後再繼續通行。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何行駛較安全?",
    "answer": "1",
    "answer_text": "機車行至路口時應減速接近,並小心通過路口。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何行駛較安全?",
    "answer": "1",
    "answer_text": "減速並暫停,讓汽車先行。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何行駛較安全?",
    "answer": "2",
    "answer_text": "減速慢行,應左右擺頭查看兩側是否有來車再通行。"
  },
  {
    "question": "依據圖示,機車駕駛人在狹窄道路中,應如何行駛較安全?",
    "answer": "1",
    "answer_text": "機車駕駛人應停靠於路旁,讓汽車優先通行。"
  },
  {
    "question": "依據圖示,若機車欲減速,機車駕駛人應如何操作煞車較安全?",
    "answer": "1",
    "answer_text": "以前輪煞車為主,後輪煞車為輔進行操作。"
  },
  {
    "question": "依據圖示,機車駕駛人遇突然迴轉之汽車,應如何操作煞車較安全?",
    "answer": "3",
    "answer_text": "應立即放鬆油門,並同時使用前後煞車,一次完成煞車動作。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何行駛較安全?",
    "answer": "1",
    "answer_text": "應讓圓環內的車輛先行通過,再進入圓環。"
  },
  {
    "question": "依據圖示,B車與A車同時要通過路口時,B車應如何行駛較安全?",
    "answer": "2",
    "answer_text": "停車並讓A車優先通行。"
  },
  {
    "question": "依據圖示,汽、機車同時行經此路段時,機車駕駛人應如何行駛較安全?",
    "answer": "1",
    "answer_text": "減速並讓汽車優先通行。"
  },
  {
    "question": "依據圖示,機車駕駛人在此環境中,應如何行駛較安全?",
    "answer": "2",
    "answer_text": "因路面濕滑,應減速慢行且要與前車保持更長的安全距離。"
  },
  {
    "question": "依據圖示,機車駕駛人應該如何行駛較安全?",
    "answer": "3",
    "answer_text": "減速並與路邊車輛保持一個車門以上的間隔。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何行駛較安全?",
    "answer": "1",
    "answer_text": "前方視野死角處,應減速慢行並隨時注意車前狀況。"
  },
  {
    "question": "依據圖示,騎機車行經圖中巷口時,應如何行駛較安全?",
    "answer": "2",
    "answer_text": "減速並觀察反射鏡,以及擺頭查看左方是否有來車。"
  },
  {
    "question": "依據圖示,圖中機車駕駛人可以左轉進入巷口嗎?",
    "answer": "2",
    "answer_text": "不可以。"
  },
  {
    "question": "依據圖示,圖中巷口裝設反射鏡的主要用意為何?",
    "answer": "1",
    "answer_text": "機車駕駛人可利用反射鏡觀察巷道來車狀況。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何行駛較安全?",
    "answer": "2",
    "answer_text": "應立即靠右側避讓,讓救護車優先通行。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何行駛較安全?",
    "answer": "2",
    "answer_text": "不論號誌為何,應立即避讓優先通行。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何行駛較安全?",
    "answer": "3",
    "answer_text": "等候公車駛離後再繼續行駛。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何行駛較安全?",
    "answer": "1",
    "answer_text": "要先減速行駛,以免在轉彎時失控滑倒。"
  },
  {
    "question": "依據圖示,機車駕駛人行駛時遇前方狀況,應如何行駛較安全?",
    "answer": "3",
    "answer_text": "應減速停車,不要強行超越。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何行駛比較安全?",
    "answer": "1",
    "answer_text": "應減速並停止於平交道遮斷器前。"
  },
  {
    "question": "依據圖示,機車駕駛人轉彎行經此路面時,應如何行駛較安全?",
    "answer": "1",
    "answer_text": "應盡量避開或減速慢行。"
  },
  {
    "question": "依據圖示,下雨天行經此標線時,應如何行駛較安全?",
    "answer": "1",
    "answer_text": "行駛時應盡量避開。"
  },
  {
    "question": "依據圖示,機車駕駛人行經此路面時,應如何行駛較安全?",
    "answer": "1",
    "answer_text": "應盡量避開或減速慢行。"
  },
  {
    "question": "依據圖示,機車駕駛人是否可以變換車道超車?",
    "answer": "1",
    "answer_text": "不可以。"
  },
  {
    "question": "依據圖示,機車駕駛人操作方式何者「錯誤」?",
    "answer": "2",
    "answer_text": "依車道照明度,適時開亮頭燈。"
  },
  {
    "question": "依據圖示,行車前的輪胎檢查內容為何?",
    "answer": "3",
    "answer_text": "以上皆是。"
  },
  {
    "question": "機車駕駛人於騎乘機車前應做那些檢查?",
    "answer": "1",
    "answer_text": "行車前,應檢查輪胎、燈光、喇叭、煞車及油料,以確保行車安全。"
  },
  {
    "question": "機車排氣管的設備何者正確?",
    "answer": "1",
    "answer_text": "A"
  },
  {
    "question": "依據圖示,何者為正確之乘坐方式?",
    "answer": "1",
    "answer_text": "A"
  },
  {
    "question": "依據圖示,何者為安全載運寵物的方式?",
    "answer": "3",
    "answer_text": "C"
  },
  {
    "question": "圖中何者為安全載運貨物的方式?",
    "answer": "2",
    "answer_text": "B"
  },
  {
    "question": "依據圖示,方向燈的顏色,何者正確?",
    "answer": "1",
    "answer_text": "橙色"
  },
  {
    "question": "依據圖示,哪輛機車尾燈的燈光符合規定?",
    "answer": "3",
    "answer_text": "C"
  },
  {
    "question": "依據圖示,機車駕駛人應如何起駛才正確?",
    "answer": "3",
    "answer_text": "顯示方向燈並擺頭察看前、後方,確認無行人及車輛後起駛。"
  },
  {
    "question": "依據圖示,機車駕駛人停車位置,何者正確?",
    "answer": "3",
    "answer_text": "C"
  },
  {
    "question": "依據圖示,機車停放位置下列敘述何者正確?",
    "answer": "2",
    "answer_text": "禁止臨時停車標線之左、右道路範圍內均不得停車。"
  },
  {
    "question": "依據圖示,機車駕駛人行經彎道,何者行為正確?",
    "answer": "2",
    "answer_text": "B駕駛人減速慢行,不超車,避免車速過快衝入對向車道。"
  },
  {
    "question": "依據圖示中標誌,機車駕駛人違反什麼規定?",
    "answer": "3",
    "answer_text": "未依遵行之方向行駛。"
  },
  {
    "question": "依據圖示,機車駕駛人的行駛方式何者錯誤?",
    "answer": "3",
    "answer_text": "C"
  },
  {
    "question": "依據圖示,機車駕駛人應如何安全行駛?",
    "answer": "2",
    "answer_text": "減速慢行,並做隨時停車之準備。"
  },
  {
    "question": "依據圖示,機車駕駛人的行為何者錯誤?",
    "answer": "1",
    "answer_text": "猛按喇叭後直接搶先轉彎。"
  },
  {
    "question": "依據圖示,機車在前方路口欲右轉,應依哪條路線行駛?",
    "answer": "3",
    "answer_text": "C"
  },
  {
    "question": "依據圖示,機車駕駛人遇障礙物煞車時,反應順序為何?",
    "answer": "2",
    "answer_text": "B→A→C"
  },
  {
    "question": "依據圖示,他們要回家,應該怎麼辦?",
    "answer": "1",
    "answer_text": "搭乘大眾運輸工具或親友接送。"
  },
  {
    "question": "機車駕駛人行駛途中,手機鈴聲響起,應如何處理才正確?",
    "answer": "1",
    "answer_text": "A"
  },
  {
    "question": "依據圖示,何種行為屬於違規?",
    "answer": "3",
    "answer_text": "以上皆是。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何正確超越前車?",
    "answer": "3",
    "answer_text": "顯示左方向燈並與前車左側保持半公尺以上之間隔。"
  },
  {
    "question": "依據圖示,機車駕駛人在哪個區域可跨越分向線超車?",
    "answer": "3",
    "answer_text": "C"
  },
  {
    "question": "依據圖示,不同車速時之視野範圍,請依車速由慢至快排列:",
    "answer": "2",
    "answer_text": "B→C→A"
  },
  {
    "question": "依據圖示,機車駕駛人何時可開啟遠光燈?",
    "answer": "2",
    "answer_text": "B"
  },
  {
    "question": "機車駕駛人行經圖中路段,何者正確?",
    "answer": "1",
    "answer_text": "應減速慢行,並依速限標誌指示行駛。"
  },
  {
    "question": "依據圖示,機車駕駛人A,發現違規車輛,應如何安全行駛?",
    "answer": "2",
    "answer_text": "注意機車動向,減速通過。"
  },
  {
    "question": "圖中哪位機車駕駛人之行為錯誤?",
    "answer": "1",
    "answer_text": "A"
  },
  {
    "question": "依據圖示,在平交道發生車輛故障時,處理順序為何?",
    "answer": "2",
    "answer_text": "C→B→A"
  },
  {
    "question": "依據圖示,機車駕駛人應如何安全行駛?",
    "answer": "2",
    "answer_text": "開啟頭燈,駛入Y車道。"
  },
  {
    "question": "圖中A、B機車駕駛人依據號誌燈號,誰可直行或右轉行駛?",
    "answer": "1",
    "answer_text": "A"
  },
  {
    "question": "依據圖示,機車駕駛人應如何安全行駛?",
    "answer": "3",
    "answer_text": "注意汽車動向,減速通過。"
  },
  {
    "question": "依據圖示,機車駕駛人遇到蜂群時,應如何安全行駛?",
    "answer": "1",
    "answer_text": "繞道或後退離開,避免動作過大。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何行駛?",
    "answer": "3",
    "answer_text": "減速後顯示左方向燈,察看照後鏡,確認無來車後,變換至鄰近車道。"
  },
  {
    "question": "依據圖示,機車駕駛人發現人孔蓋時應如何應變?",
    "answer": "2",
    "answer_text": "放鬆油門,穩握把手。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何行駛?",
    "answer": "3",
    "answer_text": "顯示左方向燈,並察看有無來車再變換車道,行駛Y路線。"
  },
  {
    "question": "依據圖示,機車駕駛人在此環境中,應如何安全行駛?",
    "answer": "2",
    "answer_text": "B"
  },
  {
    "question": "依據圖示,何者行為較安全?",
    "answer": "2",
    "answer_text": "B"
  },
  {
    "question": "依據圖示,機車駕駛人應如何安全行駛?",
    "answer": "2",
    "answer_text": "依速限行駛,注意遵守標誌,並開亮頭燈。"
  },
  {
    "question": "依據圖示,機車駕駛人哪項行為錯誤?",
    "answer": "3",
    "answer_text": "猛按鳴喇叭,加速行駛。"
  },
  {
    "question": "依據圖示,機車駕駛人之行為何者錯誤?",
    "answer": "3",
    "answer_text": "加速繼續行駛通過。"
  },
  {
    "question": "依據圖示,天氣寒冷時,機車駕駛人的行為何種方式安全?",
    "answer": "1",
    "answer_text": "A"
  },
  {
    "question": "依據圖示,機車駕駛人應如何安全行駛?",
    "answer": "1",
    "answer_text": "靠右行駛,避免爬坡的視野死角。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何安全行駛?",
    "answer": "2",
    "answer_text": "注意前方車輛,適當減速因應。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何安全行駛?",
    "answer": "2",
    "answer_text": "確認道路狀況或改道行駛。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何安全行駛?",
    "answer": "3",
    "answer_text": "減速慢行,避免因視野死角造成危險。"
  },
  {
    "question": "依據圖示,機車駕駛人通過路口時,如何行駛較為安全?",
    "answer": "3",
    "answer_text": "減速慢行,禮讓幼童專用車。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何安全行駛?",
    "answer": "1",
    "answer_text": "應讓外緣汽車優先通行。"
  },
  {
    "question": "依據圖示,兩車進入同一車道,何者應該先行?",
    "answer": "2",
    "answer_text": "A車先行。"
  },
  {
    "question": "機車駕駛人行經路口處如何安全行駛較安全?",
    "answer": "3",
    "answer_text": "減速慢行,注意違規車輛之動向。"
  },
  {
    "question": "依據圖示,請排列優先路權的順序:",
    "answer": "2",
    "answer_text": "C→B→A"
  },
  {
    "question": "依據圖中警察手勢,哪輛機車應停止?",
    "answer": "3",
    "answer_text": "C"
  },
  {
    "question": "依據圖示,機車駕駛人應如何安全行駛?",
    "answer": "1",
    "answer_text": "A"
  },
  {
    "question": "依據圖示,機車駕駛人應如何正確反應?",
    "answer": "2",
    "answer_text": "不要強行超越,應減速慢行並做隨時停車之準備。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何處理?",
    "answer": "3",
    "answer_text": "以上皆是。"
  },
  {
    "question": "依據圖示,機車駕駛人應如何安全行駛?",
    "answer": "1",
    "answer_text": "注意前方車輛動態,小心變換車道,減速通過。"
  },
  {
    "question": "依據圖示,哪一區域對機車駕駛人潛藏道路風險?",
    "answer": "1",
    "answer_text": "A"
  },
  {
    "question": "依據圖示,當機車駕駛人遇此情形,應該如何行駛?",
    "answer": "1",
    "answer_text": "應減速慢行,小心通過。"
  },
  {
    "question": "依據圖示,當機車故障時,駕駛人應該如何處理?",
    "answer": "1",
    "answer_text": "A"
  },
  {
    "question": "依據圖示,哪個輪胎之胎壓是正常的?",
    "answer": "3",
    "answer_text": "C"
  }
];
