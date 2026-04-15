var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";

// 2. 建立 XMLHttpRequest 物件
var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();

// 3. 當請求狀態改變時的處理
xhr.onreadystatechange = function() {
    // readyState 4: 請求已完成, status 200: 成功
    if (this.readyState == 4 && this.status == 200) {
        var dataset = JSON.parse(this.responseText);
        addNewData(dataset);
    }
};

// 4. 將資料加入表格的函式
function addNewData(dataset) {
    var myTable = document.getElementById("csie");
    
    dataset.forEach(function(data, index) {
        // 在表格末尾插入新行
        var row = myTable.insertRow(-1);
        
        // 插入儲存格並寫入資料
        row.insertCell(0).innerHTML = data['title'];
        
        // 根據 JSON 結構，地點與票價在 showInfo 陣列的第一筆
        if (data['showInfo'] && data['showInfo'].length > 0) {
            row.insertCell(1).innerHTML = data['showInfo'][0]['location'];
            row.insertCell(2).innerHTML = data['showInfo'][0]['price'];
        } else {
            row.insertCell(1).innerHTML = "無資訊";
            row.insertCell(2).innerHTML = "無資訊";
        }
    });
}

// 5. 刪除舊資料的函式 (配合 HTML 按鈕)
function delOldData() {
    var myTable = document.getElementById("csie");
    // 保留第一行 (表頭)，刪除其餘所有行
    while (myTable.rows.length > 1) {
        myTable.deleteRow(1);
    }
}
style.css
/* 設定表格基本樣式 */
#csie {
  width: 100%;
  border-collapse: collapse; /* 讓邊框合併成一條線 */
  margin-top: 20px;
  font-family: "Microsoft JhengHei", Arial, sans-serif; /* 設定繁體中文字體 */
}

/* 設定表頭 (th) 的顏色與樣式 */
#csie th {
  background-color: #00b06b; /* 圖片中的綠色 */
  color: white;             /* 文字轉成白色 */
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}

/* 設定一般儲存格 (td) 的樣式 */
#csie td {
  padding: 10px;
  border: 1px solid #ddd;
  line-height: 1.5;
}

/* 實作斑馬紋 (Striped)：偶數列變淺灰色 */
#csie tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* 滑鼠移上去時變色 (Hover) */
#csie tr:hover {
  background-color: #e9ecef;
}

/* 讓標題置中並增加間距 */
h1 {
  color: #333;
  margin-bottom: 30px;
}
