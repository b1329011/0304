// 我們使用 allorigins 這個代理服務，幫我們繞過 CORS 限制
var flickrUrl = 'https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1';
var dataUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(flickrUrl);

function getimg() {
  console.log("偵探出動：透過代理伺服器連線中...");
  var xhr = new XMLHttpRequest();
  xhr.open('GET', dataUrl, true);
  
  xhr.onload = function() {
    try {
      var data = JSON.parse(this.responseText);
      console.log("偵探回報：成功拿到資料！", data);
      add_new_img(data.items);
    } catch(e) {
      console.error("解析失敗，請檢查資料格式：" + e);
    }
  };
  
  xhr.onerror = function() {
    console.error("連線還是失敗。這可能是因為代理伺服器暫時忙碌。");
  };
  
  xhr.send();
}

// add_new_img 函式保持不變...
function add_new_img(dataset) {
  var gallery = document.getElementById('gallery');
  gallery.innerHTML = ''; 
  dataset.slice(0, 6).forEach(function(item) {
    var img = document.createElement('img');
    img.src = item.media.m; 
    gallery.appendChild(img);
  });
}
