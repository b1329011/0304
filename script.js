var count = 1;

function addfunction() {
    var btn = document.createElement("BUTTON");
    
    btn.innerHTML = `CLICK ME (${count})`;
    
    btn.setAttribute("id", "btn_" + count++);
    
    btn.setAttribute("class", "btn btn-outline-danger m-1");
    
    console.log(btn);
    
    document.body.appendChild(btn);
}

function delfunction() {
    var lastId = "btn_" + (--count);
    var btn = document.getElementById(lastId);
    
    if (btn) {
        console.log(btn);
        document.body.removeChild(btn);
    } else {
        count = 1;
        console.log("沒有按鈕可以刪");
    }
}
