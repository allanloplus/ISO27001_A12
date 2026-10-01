/*
 * 課程腳本：ISO/IEC 27001:2022 資訊安全事件管理（運作流程分類）
 *
 * 每個 scene：
 *   sec   章節標籤（顯示於左上角）
 *   title 本頁標題
 *   html  白板內容；帶 data-step="n" 的元素會在對白 step >= n 時出現
 *   lines 對白；who: A = Allan 老師、R = 助教阿拉蕾
 *         act: talk | point | jump | think | shock | happy | wave
 *         step: 這句開始時要顯示到第幾個 step（之後的對白沿用）
 *         tts: 若發音需要調整，可另外指定朗讀文字
 */
window.SCENES = [
  /* ───────────── 開場 ───────────── */
  {
    sec: "開場",
    title: "資訊安全事件管理",
    html: `
      <div class="cover">
        <div class="cover-kicker">ISO/IEC 27001:2022 附錄A｜控制屬性・運作流程</div>
        <h1 class="cover-title">資訊安全事件管理</h1>
        <div class="cover-en">Information security event management</div>
        <div class="cover-chips" data-step="1">
          <span class="chip c1">① ISMS 作業重點</span>
          <span class="chip c2">② 稽核查核重點</span>
          <span class="chip c3">③ 常見的缺失</span>
        </div>
        <div class="cover-by">講師 Allan Lo｜ISMS／PIMS 輔導顧問・驗證稽核員</div>
      </div>`,
    lines: [
      { who: "A", act: "wave", say: "各位同學大家好！我是 Allan 老師，平常是 ISMS 輔導顧問，也是驗證公司的稽核員。" },
      { who: "R", act: "jump", say: "嗯～哈囉！我是助教阿拉蕾！今天要跟老師一起抓資安小怪獸！" },
      { who: "A", act: "talk", say: "今天的主題，是 ISO 27001 2022 年版附錄A 裡，以「運作流程」歸類的「資訊安全事件管理」。" , tts: "今天的主題，是ISO 27001，2022年版附錄A裡，以「運作流程」歸類的「資訊安全事件管理」。" },
      { who: "A", act: "point", step: 1, say: "我們會從三個角度來看：ISMS 作業重點、稽核查核重點，還有最精彩的——常見的缺失。", tts: "我們會從三個角度來看：ISMS作業重點、稽核查核重點，還有最精彩的，常見的缺失。" },
      { who: "R", act: "happy", say: "缺失我最喜歡了！看別人被開缺失，好紓壓喔～" },
      { who: "A", act: "talk", say: "阿拉蕾，等一下輪到你們公司，就笑不出來了啦。" }
    ]
  },

  /* ───────────── 全貌 ───────────── */
  {
    sec: "流程全貌",
    title: "一張圖看懂事件管理流程",
    html: `
      <div class="flowmap">
        <div class="fm-plan" data-step="1">
          <div class="fm-roles"><span>高階管理階層</span><span>管理階層</span></div>
          <div class="fm-code">5.24</div>
          <div class="fm-name">資訊安全事故管理<br>規劃及準備</div>
          <div class="fm-fix" data-step="2">講義誤植為 5.29 → 正確為 <b>5.24</b></div>
        </div>
        <div class="fm-comm" data-step="3"><span class="fm-commlbl">溝通</span></div>
        <div class="fm-roleset" data-step="3">建立事故管理<br>過程、角色及責任</div>
        <div class="fm-band" data-step="4"></div>
        <div class="fm-node n1" data-step="4"><b>6.8</b>資訊安全<br>事件通報</div>
        <div class="fm-node n2" data-step="4"><b>5.25</b>資訊安全事件<br>之評鑑及決策</div>
        <div class="fm-node n3" data-step="4"><b>5.26</b>對資訊安全<br>事故之回應</div>
        <div class="fm-node n4" data-step="4"><b>5.28</b>證據<br>之蒐集</div>
        <div class="fm-node n5" data-step="4"><b>5.27</b>由資訊安全<br>事故中學習</div>
        <div class="fm-base" data-step="5">
          <div><b>8.15</b>存錄</div>
          <div><b>8.16</b>監視活動</div>
          <div><b>8.17</b>鐘訊同步</div>
        </div>
        <div class="fm-feed-h" data-step="5"></div>
        <div class="fm-feed-v" data-step="5"></div>
      </div>`,
    lines: [
      { who: "A", act: "point", step: 1, say: "先看全貌。整個流程的起點，是「資訊安全事故管理規劃及準備」，由高階管理階層和管理階層負責。" },
      { who: "R", act: "think", say: "老師老師，講義上這一格寫的是 5.29 耶？", tts: "老師老師，講義上這一格寫的是五點二九耶？" },
      { who: "A", act: "point", step: 2, say: "抓得好！2022 年版的規劃及準備是 5.24；5.29 是「中斷期間的資訊安全」。稽核時條文編號一定要對。", tts: "抓得好！2022年版的規劃及準備是五點二四；五點二九是「中斷期間的資訊安全」。稽核時條文編號一定要對。" },
      { who: "A", act: "talk", step: 3, say: "規劃好之後，要建立事故管理的過程、角色及責任，並且跟相關人員充分溝通。" },
      { who: "A", act: "point", step: 4, say: "接著是主線：6.8 通報、5.25 評鑑及決策、5.26 回應、5.28 證據蒐集，最後是 5.27 從事故中學習。", tts: "接著是主線：六點八通報、五點二五評鑑及決策、五點二六回應、五點二八證據蒐集，最後是五點二七從事故中學習。" },
      { who: "A", act: "talk", step: 5, say: "下面這塊綠色的基礎建設很重要：8.15 存錄、8.16 監視活動、8.17 鐘訊同步。它們是偵測的來源，也是證據的基礎。", tts: "下面這塊綠色的基礎建設很重要：八點一五存錄、八點一六監視活動、八點一七鐘訊同步。它們是偵測的來源，也是證據的基礎。" },
      { who: "R", act: "happy", say: "我懂了！日誌是監視器、監視活動是保全、鐘訊同步就是大家的手錶要對時！" },
      { who: "A", act: "talk", say: "比喻得很好！手錶不準，監視器錄到的時間就對不起來，證據力就打折了。" }
    ]
  },

  /* ───────────── 事件 vs 事故 ───────────── */
  {
    sec: "觀念暖身",
    title: "事件 Event ≠ 事故 Incident",
    html: `
      <div class="evinc">
        <div class="ev card" data-step="1">
          <div class="ev-tag">資訊安全事件 Event</div>
          <p>可能與資訊安全有關的狀況，值得被注意、被記錄。</p>
          <ul><li>防毒軟體告警</li><li>帳號連續登入失敗</li><li>收到可疑郵件</li></ul>
        </div>
        <div class="funnel" data-step="3">
          <div class="fn-top">很多</div>
          <div class="fn-mid">5.25<br>評鑑・決策</div>
          <div class="fn-bot">少數</div>
        </div>
        <div class="inc card" data-step="2">
          <div class="inc-tag">資訊安全事故 Incident</div>
          <p>經評鑑後，很可能危害營運或威脅資訊安全的事件。</p>
          <ul><li>勒索軟體加密檔案</li><li>個人資料外洩</li><li>官網遭置換</li></ul>
        </div>
      </div>`,
    lines: [
      { who: "R", act: "think", say: "老師，「事件」跟「事故」聽起來好像，到底差在哪裡？" },
      { who: "A", act: "point", step: 1, say: "「事件」是發生了可能跟資安有關的狀況，例如防毒告警、帳號連續登入失敗、收到可疑郵件。" },
      { who: "A", act: "point", step: 2, say: "「事故」是經過評鑑後，確認很可能危害營運或資訊安全的事件，像勒索軟體加密、個資外洩、官網被置換。" },
      { who: "A", act: "talk", step: 3, say: "所以事件很多、事故比較少，中間的過濾器，就是 5.25 的評鑑及決策。", tts: "所以事件很多、事故比較少，中間的過濾器，就是五點二五的評鑑及決策。" },
      { who: "R", act: "happy", say: "就像打噴嚏是事件，確診流感才是事故！" },
      { who: "A", act: "talk", say: "嗯，這個比喻，老師給你八十分。" }
    ]
  },

  /* ───────────── 作業重點 1：5.24 ───────────── */
  {
    sec: "① ISMS 作業重點",
    title: "5.24 事故管理規劃及準備",
    html: `
      <ol class="checks">
        <li data-step="1"><b>事故管理程序</b><span>通報 → 評鑑 → 回應 → 蒐證 → 學習，全流程寫清楚</span></li>
        <li data-step="2"><b>角色與責任</b><span>事故處理小組（IRT）、對外窗口、夜間假日值班與代理人</span></li>
        <li data-step="3"><b>事故分級標準</b><span>依 C／I／A、個資、營運中斷、商譽影響定義等級</span></li>
        <li data-step="4"><b>對外通報</b><span>主管機關、客戶、個資當事人、執法機關：時限與窗口先定好</span></li>
        <li data-step="5"><b>能力與資源</b><span>聯絡清單、值班表、演練、外部事故應變廠商（先簽約）</span></li>
      </ol>`,
    lines: [
      { who: "A", act: "talk", say: "進入第一部分：ISMS 作業重點。先從 5.24 規劃及準備開始。", tts: "進入第一部分：ISMS作業重點。先從五點二四規劃及準備開始。" },
      { who: "A", act: "point", step: 1, say: "第一，要有事故管理程序，把通報、評鑑、回應、蒐證、學習這整條流程寫清楚。" },
      { who: "A", act: "point", step: 2, say: "第二，角色與責任。誰是事故處理小組？誰是對外窗口？晚上和假日找誰？代理人又是誰？" },
      { who: "A", act: "point", step: 3, say: "第三，分級標準。依照對機密性、完整性、可用性，還有個資、營運和商譽的影響，定義事故等級。" },
      { who: "A", act: "point", step: 4, say: "第四，對外通報。主管機關、客戶、個資當事人，各自的時限和窗口，要事先定好。" },
      { who: "A", act: "point", step: 5, say: "第五，能力和資源。聯絡清單、值班表、演練，還有外部的事故應變廠商，最好平時就把合約簽好。" },
      { who: "R", act: "shock", say: "哇！出事的時候才找廠商，會不會來不及？" },
      { who: "A", act: "talk", say: "一定來不及！真的出事那一刻，好的應變團隊都在忙，臨時報價、跑採購流程，黃金時間早就過了。" }
    ]
  },

  /* ───────────── 作業重點 2：8.15/8.16/8.17 ───────────── */
  {
    sec: "① ISMS 作業重點",
    title: "偵測的基礎：存錄・監視・鐘訊同步",
    html: `
      <div class="tri">
        <div class="tri-col" data-step="1">
          <div class="tri-code">8.15</div><div class="tri-name">存錄 Logging</div>
          <ul><li>使用者活動、例外、錯誤、安全事件</li><li>特權帳號操作要記</li><li>防竄改、集中保存</li><li>定義保存期限</li></ul>
        </div>
        <div class="tri-col" data-step="3">
          <div class="tri-code">8.16</div><div class="tri-name">監視活動 Monitoring</div>
          <ul><li>先建立「正常」基準線</li><li>網路、系統、應用異常偵測</li><li>告警門檻與處理責任</li><li>SIEM／SOC／MDR</li></ul>
        </div>
        <div class="tri-col" data-step="4">
          <div class="tri-code">8.17</div><div class="tri-name">鐘訊同步 Clock sync</div>
          <ul><li>對時到核准的時間源（NTP）</li><li>時區一致（UTC+8？UTC？）</li><li>地端、雲端、網通設備都要</li></ul>
        </div>
      </div>`,
    lines: [
      { who: "A", act: "point", step: 1, say: "8.15 存錄：要記錄使用者活動、例外、錯誤和安全事件。日誌要防竄改，也要定義保存期限，特權帳號的操作更要記。", tts: "八點一五存錄：要記錄使用者活動、例外、錯誤和安全事件。日誌要防竄改，也要定義保存期限，特權帳號的操作更要記。" },
      { who: "R", act: "think", say: "如果管理員自己可以刪日誌，那不就是小偷自己管監視器？" },
      { who: "A", act: "point", step: 2, say: "完全正確！所以日誌最好即時集中送到另一台主機，而且管理權限要分開。" },
      { who: "A", act: "point", step: 3, say: "8.16 監視活動：先建立正常行為的基準線，才知道什麼叫異常。告警要有門檻，也要有人負責看、負責處理。", tts: "八點一六監視活動：先建立正常行為的基準線，才知道什麼叫異常。告警要有門檻，也要有人負責看、負責處理。" },
      { who: "A", act: "point", step: 4, say: "8.17 鐘訊同步：所有系統都要對時到核准的時間來源，例如內部的 NTP 伺服器，時區也要一致。", tts: "八點一七鐘訊同步：所有系統都要對時到核准的時間來源，例如內部的NTP伺服器，時區也要一致。" },
      { who: "R", act: "happy", say: "這樣比對日誌的時候，時間軸才排得起來！" }
    ]
  },

  /* ───────────── 作業重點 3：6.8 + 5.25 ───────────── */
  {
    sec: "① ISMS 作業重點",
    title: "6.8 事件通報 ＋ 5.25 評鑑及決策",
    html: `
      <div class="split">
        <div class="report card" data-step="1">
          <div class="h3">6.8 通報管道</div>
          <div class="pill-row"><span>服務台分機</span><span>資安信箱</span><span>線上表單</span><span>主管</span></div>
          <div class="motto">看到就說，不要自己處理</div>
          <p class="note" data-step="2">不要求、也不鼓勵員工自行測試可疑弱點，以免破壞證據或觸法。</p>
        </div>
        <div class="grade card" data-step="3">
          <div class="h3">5.25 分級與決策（範例）</div>
          <table>
            <tr><th>等級</th><th>情境</th><th>決策</th></tr>
            <tr class="lv1" data-step="4"><td>低</td><td>釣魚信，無人點擊</td><td>服務台記錄結案</td></tr>
            <tr class="lv2" data-step="4"><td>中</td><td>單機中毒，已隔離</td><td>資訊部處理＋登錄</td></tr>
            <tr class="lv3" data-step="4"><td>高</td><td>多台加密／個資外洩</td><td>啟動 IRT、通報高層、對外通報</td></tr>
          </table>
          <p class="note" data-step="5">評鑑結果與「決策理由」要留下紀錄。</p>
        </div>
      </div>`,
    lines: [
      { who: "A", act: "point", step: 1, say: "6.8 資訊安全事件通報：要提供簡單、而且大家都知道的通報管道，像服務台、資安信箱、線上表單。", tts: "六點八資訊安全事件通報：要提供簡單、而且大家都知道的通報管道，像服務台、資安信箱、線上表單。" },
      { who: "A", act: "talk", step: 2, say: "重點是「看到就說」。而且不要讓員工自己去測試可疑的弱點，不然好心反而會破壞證據，甚至觸法。" },
      { who: "R", act: "shock", say: "原來不能自己當柯南！" },
      { who: "A", act: "point", step: 3, say: "收到通報後，就進入 5.25 評鑑及決策：依分級標準，判斷這是不是事故、是哪一級。", tts: "收到通報後，就進入五點二五評鑑及決策：依分級標準，判斷這是不是事故、是哪一級。" },
      { who: "A", act: "point", step: 4, say: "例如釣魚信沒人點，服務台記錄結案；單機中毒已隔離，資訊部處理；多台主機被加密或個資外洩，就要啟動事故處理小組，往上通報、對外通報。" },
      { who: "A", act: "talk", step: 5, say: "評鑑的結果，還有決策的理由，都要留下紀錄。這是稽核員一定會看的地方。" }
    ]
  },

  /* ───────────── 作業重點 4：5.26 + 5.28 ───────────── */
  {
    sec: "① ISMS 作業重點",
    title: "5.26 事故回應 ＋ 5.28 證據蒐集",
    html: `
      <div class="resp">
        <div class="steps4" data-step="1">
          <div><b>圍堵</b><span>隔離主機、停用帳號</span></div>
          <div><b>根除</b><span>清除後門與惡意程式</span></div>
          <div><b>復原</b><span>乾淨備份還原、驗證後上線</span></div>
          <div class="comm"><b>溝通</b><span>高層、員工、客戶、主管機關</span></div>
        </div>
        <div class="evid card" data-step="3">
          <div class="h3">5.28 證據蒐集</div>
          <div class="evid-row"><span>識別</span><i></i><span>蒐集</span><i></i><span>取得</span><i></i><span>保存</span></div>
          <ul>
            <li><b>監管鏈 Chain of custody</b>：誰、何時、取得什麼、如何保管</li>
            <li><b>先取證、再處置</b>：記憶體與磁碟映像、日誌匯出、雜湊值</li>
            <li>考量法律上的可採性，必要時委請鑑識專業</li>
          </ul>
        </div>
      </div>`,
    lines: [
      { who: "A", act: "point", step: 1, say: "5.26 事故回應，一般有四個動作：圍堵、根除、復原，還有貫穿全程的溝通。", tts: "五點二六事故回應，一般有四個動作：圍堵、根除、復原，還有貫穿全程的溝通。" },
      { who: "A", act: "talk", step: 2, say: "圍堵是先止血，例如隔離中毒主機、停用被盜帳號；根除是清掉後門和惡意程式；復原是從乾淨的備份還原，確認正常再上線。" },
      { who: "A", act: "point", step: 3, say: "5.28 證據蒐集：要能識別、蒐集、取得及保存證據，並且保留監管鏈，也就是誰、在什麼時間、拿了什麼證據、怎麼保管。", tts: "五點二八證據蒐集：要能識別、蒐集、取得及保存證據，並且保留監管鏈，也就是誰、在什麼時間、拿了什麼證據、怎麼保管。" },
      { who: "R", act: "think", say: "那中毒的電腦，可以直接重灌嗎？這樣比較快耶！" },
      { who: "A", act: "shock", say: "千萬不要！先做記憶體和硬碟映像、保留日誌，再處置。一重灌，攻擊路徑就查不到了，要提告也沒有證據。" }
    ]
  },

  /* ───────────── 作業重點 5：5.27 ───────────── */
  {
    sec: "① ISMS 作業重點",
    title: "5.27 由資訊安全事故中學習",
    html: `
      <div class="loop">
        <div class="lp lp1" data-step="1"><b>根因分析</b><span>5 Whys、魚骨圖<br>不要只寫「人為疏失」</span></div>
        <div class="lp lp2" data-step="2"><b>矯正措施</b><span>連結條文 10.2<br>追蹤有效性</span></div>
        <div class="lp lp3" data-step="2"><b>更新風險</b><span>風險評鑑、控制措施<br>適用性聲明</span></div>
        <div class="lp lp4" data-step="3"><b>訓練與演練</b><span>把真實案例<br>變成教材</span></div>
        <div class="lp lp5" data-step="3"><b>管理審查</b><span>事故趨勢<br>納入 9.3 輸入</span></div>
        <div class="lp-core">同樣的事故<br><b>不發生第二次</b></div>
      </div>`,
    lines: [
      { who: "A", act: "point", step: 1, say: "最後是 5.27 從事故中學習。事故結案前要做根因分析，找出真正的原因，而不是只寫一句「人為疏失」。", tts: "最後是五點二七從事故中學習。事故結案前要做根因分析，找出真正的原因，而不是只寫一句「人為疏失」。" },
      { who: "A", act: "point", step: 2, say: "然後連結到條文 10.2 的矯正措施，必要時更新風險評鑑和控制措施。", tts: "然後連結到條文十點二的矯正措施，必要時更新風險評鑑和控制措施。" },
      { who: "A", act: "point", step: 3, say: "再把經驗回饋到教育訓練和演練，並且把事故趨勢放進管理審查。" },
      { who: "R", act: "happy", say: "所以事故不是丟臉的事，是免費的教材！" },
      { who: "A", act: "talk", say: "不是免費喔，通常是很貴的學費。所以更要學到東西。" }
    ]
  },

  /* ───────────── 管理實務案例 ───────────── */
  {
    sec: "管理實務案例",
    title: "案例：中型製造業的勒索軟體週末",
    html: `
      <div class="case">
        <div class="tl">
          <div class="tl-i" data-step="1"><time>週五 21:40</time><p>EDR 告警「可疑 PowerShell」，只寄到上班信箱，<b>無人值班</b></p><em data-step="6">8.16</em></div>
          <div class="tl-i" data-step="2"><time>週六 02:15</time><p>攻擊者以<b>未啟用 MFA</b> 的 VPN 帳號登入，內網橫向移動</p><em data-step="6">5.25</em></div>
          <div class="tl-i" data-step="3"><time>週一 08:30</time><p>生產排程系統、檔案伺服器<b>全部被加密</b></p><em data-step="6">5.26</em></div>
          <div class="tl-i bad" data-step="4"><time>週一 09:10</time><p>IT 主管為求快，<b>直接重灌</b>兩台主機，證據消失</p><em data-step="6">5.28</em></div>
          <div class="tl-i bad" data-step="5"><time>週一 14:00</time><p>才通知總經理；客戶交期延誤，<b>無人對外溝通</b></p><em data-step="6">6.8</em></div>
        </div>
        <div class="fixes" data-step="7">
          <div class="h3">改善後</div>
          <span>告警分級＋委外 MDR 24h 值班</span>
          <span>VPN 強制 MFA</span>
          <span>離線／不可變備份</span>
          <span>事故應變手冊＋年度演練</span>
          <span>先蒐證、再處置</span>
        </div>
      </div>`,
    lines: [
      { who: "A", act: "talk", say: "來看一個實際的管理案例，這是綜合多家企業的情境改編的。一家中型製造業，遇到勒索軟體。" },
      { who: "A", act: "point", step: 1, say: "週五晚上九點四十分，EDR 跳出可疑 PowerShell 的告警，但告警只寄到上班信箱，沒有人值班。", tts: "週五晚上九點四十分，EDR跳出可疑PowerShell的告警，但告警只寄到上班信箱，沒有人值班。" },
      { who: "A", act: "point", step: 2, say: "半夜兩點，攻擊者用一個沒有多因子驗證的 VPN 帳號，在內網橫向移動。" },
      { who: "A", act: "point", step: 3, say: "週一早上，生產排程系統和檔案伺服器，全部被加密。" },
      { who: "A", act: "shock", step: 4, say: "更慘的是，IT 主管為了趕快恢復，直接重灌兩台主機，證據全部消失。", tts: "更慘的是，IT主管為了趕快恢復，直接重灌兩台主機，證據全部消失。" },
      { who: "R", act: "shock", say: "啊！那就不知道駭客是從哪裡進來的了！" },
      { who: "A", act: "point", step: 5, say: "而且下午兩點才通知總經理，客戶交期延誤，也沒有人出面溝通。" },
      { who: "A", act: "talk", step: 6, say: "對應控制措施：8.16 告警沒人處理、6.8 和 5.25 通報分級失靈、5.28 蒐證被破壞、5.26 回應缺乏溝通。", tts: "對應控制措施：八點一六告警沒人處理、六點八和五點二五通報分級失靈、五點二八蒐證被破壞、五點二六回應缺乏溝通。" },
      { who: "A", act: "happy", step: 7, say: "改善後，他們導入告警分級和委外 MDR 值班、VPN 強制多因子驗證、離線備份、事故應變手冊和年度演練，並且規定先蒐證、再處置。", tts: "改善後，他們導入告警分級和委外MDR值班、VPN強制多因子驗證、離線備份、事故應變手冊和年度演練，並且規定先蒐證、再處置。" },
      { who: "R", act: "happy", say: "被打一次就學乖，這就是 5.27 的精神！", tts: "被打一次就學乖，這就是五點二七的精神！" }
    ]
  },

  /* ───────────── 稽核重點 1 ───────────── */
  {
    sec: "② 稽核查核重點",
    title: "三管齊下：文件・訪談・紀錄",
    html: `
      <div class="audit3">
        <div class="au card" data-step="1"><div class="au-h">文件面</div>
          <ul><li>事故管理程序是否涵蓋全流程</li><li>分級標準、通報時限是否明確</li><li>聯絡清單是否為最新版本</li></ul>
          <div class="tip">稽核小技巧：現場撥一通窗口電話</div></div>
        <div class="au card" data-step="2"><div class="au-h">訪談面</div>
          <ul><li>隨機問同仁：「收到可疑郵件怎麼辦？」</li><li>問 IRT 成員：「你的角色是什麼？」</li><li>答案與程序一致才算落實</li></ul></div>
        <div class="au card" data-step="3"><div class="au-h">紀錄面</div>
          <ul><li>事件／事故登錄表</li><li>演練紀錄與檢討報告</li><li>矯正措施追蹤</li></ul>
          <div class="tip warn" data-step="4">「全年零事件」→ 要追問！</div></div>
      </div>`,
    lines: [
      { who: "A", act: "talk", say: "第二部分，稽核查核重點。現在換我戴上稽核員的帽子。" },
      { who: "R", act: "jump", say: "我也要戴！嗶嗶！稽核員阿拉蕾上線！" },
      { who: "A", act: "point", step: 1, say: "文件面：看事故管理程序、分級標準、通報時限，還有聯絡清單是不是最新的。我常常現場打一通電話，測試窗口通不通。" },
      { who: "A", act: "point", step: 2, say: "訪談面：隨機找一位同仁問：「收到可疑郵件，你會怎麼做？」答案跟程序一致，才代表真的有落實。" },
      { who: "A", act: "point", step: 3, say: "紀錄面：調閱事件和事故登錄表、演練紀錄、檢討報告，還有矯正措施的追蹤。" },
      { who: "A", act: "think", step: 4, say: "如果受稽單位說：「我們這一年零事件」，我反而會追問：是真的沒有，還是沒發現、沒記錄？" },
      { who: "R", act: "think", say: "零事件不是好事喔？" },
      { who: "A", act: "talk", say: "有防毒、有防火牆，一整年連一筆攔截紀錄都沒有，通常代表事件沒有被記錄，而不是沒有發生。" }
    ]
  },

  /* ───────────── 稽核重點 2：追蹤法 ───────────── */
  {
    sec: "② 稽核查核重點",
    title: "追蹤法：抽一筆事件單，一條線拉到底",
    html: `
      <div class="trace">
        <div class="tr-start" data-step="1">抽樣<br>事件單</div>
        <div class="tr-back" data-step="2">
          <div class="tr-lbl">◀ 往前追</div>
          <span><b>8.15/8.16</b>原始告警與日誌</span>
          <span><b>8.17</b>各系統時間戳一致？</span>
        </div>
        <div class="tr-fwd" data-step="3">
          <div class="tr-lbl">往後追 ▶</div>
          <span><b>6.8</b>何時通報</span>
          <span><b>5.25</b>分級與理由</span>
          <span><b>5.26</b>處置紀錄</span>
          <span><b>5.28</b>證據保存</span>
          <span><b>5.27/10.2</b>根因・矯正</span>
        </div>
        <div class="tr-tech" data-step="4">
          <b>技術抽查</b>
          <span>NTP 設定畫面</span><span>日誌保存期限與存取權限</span><span>SIEM 告警處理率</span><span>管理者帳號操作日誌</span>
        </div>
      </div>`,
    lines: [
      { who: "A", act: "point", step: 1, say: "我最推薦的稽核手法，叫做「追蹤法」。從事件登錄表抽一筆，一路往前追、往後追。" },
      { who: "A", act: "point", step: 2, say: "往前追原始的告警跟日誌，看 8.15、8.16 有沒有真的在運作；再對照各系統的時間戳記，驗證 8.17 鐘訊同步。", tts: "往前追原始的告警跟日誌，看八點一五、八點一六有沒有真的在運作；再對照各系統的時間戳記，驗證八點一七鐘訊同步。" },
      { who: "A", act: "point", step: 3, say: "往後追：什麼時候通報、怎麼分級、理由是什麼、做了哪些處置、證據怎麼保存，最後有沒有根因分析和矯正措施。" },
      { who: "A", act: "point", step: 4, say: "技術面也要抽查：NTP 設定、日誌的保存期限跟存取權限、SIEM 告警的處理率，以及管理者帳號的操作日誌。", tts: "技術面也要抽查：NTP設定、日誌的保存期限跟存取權限、SIEM告警的處理率，以及管理者帳號的操作日誌。" },
      { who: "R", act: "happy", say: "好像在玩偵探遊戲，一條線索拉到底！" },
      { who: "A", act: "talk", say: "沒錯！哪一段線斷掉，那裡就是缺失的線索。" }
    ]
  },

  /* ───────────── 稽核重點 3：對外通報 ───────────── */
  {
    sec: "② 稽核查核重點",
    title: "對外通報：法規與合約時限",
    html: `
      <table class="law">
        <tr><th>依據</th><th>適用對象</th><th>重點時限／要求</th></tr>
        <tr data-step="1"><td>資通安全管理法<br><small>資通安全事件通報及應變辦法</small></td><td>公務機關<br>特定非公務機關</td><td>知悉資安事件後 <b>1 小時內</b> 通報</td></tr>
        <tr data-step="2"><td>同上</td><td>同上</td><td>第一、二級：<b>72 小時內</b>完成損害控制或復原<br>第三、四級：<b>36 小時內</b></td></tr>
        <tr data-step="3"><td>個人資料保護法<br><small>及目的事業主管機關規定</small></td><td>公務／非公務機關</td><td>查明後<b>通知當事人</b>；依規定<b>通報主管機關</b></td></tr>
        <tr data-step="3"><td>客戶合約／SLA</td><td>委外、雲端服務</td><td>依合約約定之通報時限與配合調查義務</td></tr>
      </table>
      <p class="foot" data-step="4">※ 法規會修訂：稽核時以組織「法規鑑別清單」所列之最新適用要求與合約為準。</p>`,
    lines: [
      { who: "A", act: "point", step: 1, say: "稽核時也會檢查對外通報有沒有符合法規。以資通安全管理法為例，公務機關和特定非公務機關，知悉資安事件後一小時內要通報。" },
      { who: "A", act: "point", step: 2, say: "第一、二級事件，要在七十二小時內完成損害控制或復原；第三、四級，則是三十六小時內。" },
      { who: "A", act: "point", step: 3, say: "涉及個資外洩，要依個資法和目的事業主管機關的規定，通知當事人、通報主管機關。另外，別忘了客戶合約裡的通報條款。" },
      { who: "R", act: "think", say: "老師，法規會改嗎？" },
      { who: "A", act: "talk", step: 4, say: "會！所以法規鑑別清單要定期更新。稽核時，以組織適用的最新法規和合約為準。" }
    ]
  },

  /* ───────────── 常見缺失 1 ───────────── */
  {
    sec: "③ 常見的缺失",
    title: "缺失大揭密（上）",
    html: `
      <div class="ngs">
        <div class="ng" data-step="1"><i>1</i><div><b>聯絡清單過期</b><span>IRT 成員已離職、窗口電話停話</span></div><em>NG</em></div>
        <div class="ng" data-step="2"><i>2</i><div><b>全年零事件紀錄</b><span>防毒攔截上百次，登錄表卻空白；事件定義不清</span></div><em>NG</em></div>
        <div class="ng" data-step="3"><i>3</i><div><b>分級標準缺漏</b><span>程序寫「重大事故通報總經理」，卻沒定義何謂重大</span></div><em>NG</em></div>
        <div class="ng" data-step="4"><i>4</i><div><b>時間不同步</b><span>防火牆 UTC、伺服器 UTC+8，日誌差 8 小時</span></div><em>NG</em></div>
        <div class="ng" data-step="5"><i>5</i><div><b>日誌可被刪改</b><span>管理者可清除自身操作日誌；保存期限僅 7 天</span></div><em>NG</em></div>
      </div>`,
    lines: [
      { who: "A", act: "talk", say: "最後一部分，大家最期待的：常見的缺失！" },
      { who: "R", act: "jump", say: "蓋章時間到！NG！NG！", tts: "蓋章時間到！N G！N G！" },
      { who: "A", act: "point", step: 1, say: "第一，聯絡清單過期。事故處理小組的成員早就離職了，窗口電話也停話了。" },
      { who: "A", act: "point", step: 2, say: "第二，全年零事件紀錄。防毒明明攔截了上百次，事件登錄表卻是空的，因為根本沒定義什麼要記。" },
      { who: "A", act: "point", step: 3, say: "第三，分級標準缺漏。程序寫「重大事故要通報總經理」，但沒有定義什麼叫重大。" },
      { who: "A", act: "point", step: 4, say: "第四，時間不同步。我看過防火牆用 UTC、伺服器用台灣時間，差了八小時，日誌完全對不起來。", tts: "第四，時間不同步。我看過防火牆用UTC、伺服器用台灣時間，差了八小時，日誌完全對不起來。" },
      { who: "A", act: "point", step: 5, say: "第五，日誌可以被刪改。系統管理員可以清除自己的操作日誌，或是保存期限只有七天。" }
    ]
  },

  /* ───────────── 常見缺失 2 ───────────── */
  {
    sec: "③ 常見的缺失",
    title: "缺失大揭密（下）",
    html: `
      <div class="ngs">
        <div class="ng" data-step="1"><i>6</i><div><b>告警無人處理</b><span>SIEM 每天上千筆告警，無處理紀錄（告警疲勞）</span></div><em>NG</em></div>
        <div class="ng" data-step="2"><i>7</i><div><b>先重灌再說</b><span>未保存證據、無監管鏈紀錄</span></div><em>NG</em></div>
        <div class="ng" data-step="3"><i>8</i><div><b>結案沒有根因</b><span>原因一律「人為疏失」，同類事件重複發生</span></div><em>NG</em></div>
        <div class="ng" data-step="4"><i>9</i><div><b>演練流於形式</b><span>只有簽到表與照片，無檢討、無改善追蹤</span></div><em>NG</em></div>
        <div class="ng" data-step="5"><i>10</i><div><b>供應商未納入</b><span>雲端／委外合約未約定事故通報時限與配合調查</span></div><em>NG</em></div>
      </div>`,
    lines: [
      { who: "A", act: "point", step: 1, say: "第六，告警沒有人處理。SIEM 一天上千筆告警，大家都麻痺了，也沒有處理紀錄。", tts: "第六，告警沒有人處理。SIEM一天上千筆告警，大家都麻痺了，也沒有處理紀錄。" },
      { who: "A", act: "point", step: 2, say: "第七，先重灌再說。沒有保存證據，也沒有監管鏈紀錄。" },
      { who: "A", act: "point", step: 3, say: "第八，結案沒有根因分析。原因一律寫人為疏失，結果同樣的事件一再發生。" },
      { who: "A", act: "point", step: 4, say: "第九，演練流於形式。只有簽到表和照片，沒有檢討，也沒有追蹤改善。" },
      { who: "A", act: "point", step: 5, say: "第十，供應商沒有納入。雲端或委外合約裡，沒有約定事故通報時限，以及配合調查的條款。" },
      { who: "R", act: "shock", say: "哇，十個缺失，我們公司好像中了一半……" },
      { who: "A", act: "happy", say: "沒關係，今天自己發現，總比驗證稽核時被發現好！" }
    ]
  },

  /* ───────────── 缺失陳述寫法 ───────────── */
  {
    sec: "③ 常見的缺失",
    title: "稽核員小教室：缺失怎麼寫才服人",
    html: `
      <div class="finding">
        <div class="fd fd1" data-step="1"><b>要求</b><p>ISO/IEC 27001:2022 附錄A 8.17 要求：組織所使用之資訊處理設施的時鐘，應同步至經核准的時間源。</p></div>
        <div class="fd fd2" data-step="2"><b>事實／證據</b><p>抽查防火牆與 AD 伺服器 2026/08/12 之登入日誌，防火牆採 UTC、AD 採 UTC+8，同一登入事件時間相差 8 小時；組織未定義核准之時間源。</p></div>
        <div class="fd fd3" data-step="3"><b>落差／影響</b><p>未能確保系統時鐘同步，影響事件關聯分析與證據之可信度。</p></div>
      </div>`,
    lines: [
      { who: "A", act: "talk", say: "給在場的內稽人員一個小技巧：缺失要怎麼寫，才能讓受稽單位心服口服？" },
      { who: "A", act: "point", step: 1, say: "第一段寫「要求」，清楚引用條文。" },
      { who: "A", act: "point", step: 2, say: "第二段寫「事實證據」，要具體：抽了什麼、哪一天、看到了什麼。" },
      { who: "A", act: "point", step: 3, say: "第三段寫「落差和影響」。這樣受稽單位就知道問題在哪裡，也比較好做根因分析。" },
      { who: "R", act: "happy", say: "要求、證據、落差，三段式！阿拉蕾記起來了！" }
    ]
  },

  /* ───────────── 小測驗 ───────────── */
  {
    sec: "隨堂小測驗",
    title: "阿拉蕾出題時間",
    html: `
      <div class="quiz">
        <div class="q">員工電腦突然跳出勒索訊息，<b>第一步</b>該怎麼做？</div>
        <div class="opts">
          <div class="opt">A．立刻重灌，恢復上班</div>
          <div class="opt ok">B．拔網路線隔離，並依程序通報</div>
          <div class="opt">C．先上網找解密工具</div>
          <div class="opt">D．趕快付贖金</div>
        </div>
        <div class="ans" data-step="1">答案 B：先隔離、再通報，保留現場給事故處理小組</div>
      </div>`,
    lines: [
      { who: "R", act: "jump", say: "換阿拉蕾出題！員工電腦跳出勒索訊息，第一步該怎麼做？A 立刻重灌、B 拔網路線並依程序通報、C 上網找解密工具、D 付贖金！", tts: "換阿拉蕾出題！員工電腦跳出勒索訊息，第一步該怎麼做？A，立刻重灌。B，拔網路線並依程序通報。C，上網找解密工具。D，付贖金！" },
      { who: "A", act: "think", say: "嗯，這題出得好。大家先想三秒鐘。一、二、三！" },
      { who: "A", act: "happy", step: 1, say: "答案是 B！先隔離、再通報，把現場留給事故處理小組。重灌會破壞證據，付贖金更不是第一步。", tts: "答案是B！先隔離、再通報，把現場留給事故處理小組。重灌會破壞證據，付贖金更不是第一步。" },
      { who: "R", act: "happy", say: "答對的同學，給自己拍拍手！" }
    ]
  },

  /* ───────────── 總結 ───────────── */
  {
    sec: "總結",
    title: "今天帶走三件事",
    html: `
      <div class="sum">
        <div class="sm sm1" data-step="1"><div class="sm-h">ISMS 作業重點</div>
          <div class="chain"><span>準備</span><span>偵測</span><span>通報</span><span>判斷</span><span>回應</span><span>蒐證</span><span>學習</span></div></div>
        <div class="sm sm2" data-step="2"><div class="sm-h">稽核查核重點</div>
          <div class="bul"><span>文件・訪談・紀錄<br>三管齊下</span><span>追蹤法<br>一條線拉到底</span><span>技術抽查<br>NTP／日誌／告警</span></div></div>
        <div class="sm sm3" data-step="3"><div class="sm-h">常見的缺失</div>
          <div class="bul"><span>聯絡清單過期</span><span>全年零事件</span><span>時間不同步</span><span>先重灌再說</span><span>結案沒有根因</span></div></div>
      </div>`,
    lines: [
      { who: "A", act: "point", step: 1, say: "最後總結。作業重點記七個詞：準備、偵測、通報、判斷、回應、蒐證、學習。" },
      { who: "A", act: "point", step: 2, say: "稽核重點：文件、訪談、紀錄三管齊下，再用追蹤法一條線拉到底。" },
      { who: "A", act: "point", step: 3, say: "常見缺失：清單過期、全年零事件、時間不同步、先重灌再說，還有結案沒有根因。" },
      { who: "R", act: "wave", say: "謝謝大家！我是助教阿拉蕾，我們下次見！嗯～拜拜！" },
      { who: "A", act: "wave", say: "我是 Allan 老師，祝大家稽核順利、資安平安！", tts: "我是Allan老師，祝大家稽核順利、資安平安！" }
    ]
  }
];
