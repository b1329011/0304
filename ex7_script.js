let text = "";
let errorCount = 0; // 💡 新增：用來記錄連續打錯的次數
const display = document.getElementById("textDisplay");
const input = document.getElementById("inputBox");

function randomLetter() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return letters[Math.floor(Math.random() * letters.length)];
}

function updateDisplay() {
  display.textContent = text;
}

input.addEventListener("input", () => {
  const char = input.value.toLowerCase();
  input.value = "";

  if (!char.match(/[a-z]/)) return;

  // --- 核心邏輯修改開始 ---
  
  if (text.length > 0 && char === text[0]) {
    // ✅ 打對了
    text = text.slice(1);
    errorCount = 0; // 打對就歸零，重新計算連續錯誤
  } else {
    // ❌ 打錯了
    text += char;
    errorCount++; // 累計錯誤次數
    
    // 判斷是否連續錯三次
    if (errorCount === 3) {
      // 額外增加 3 個亂數產生的字串
      for (let i = 0; i < 3; i++) {
        text += randomLetter();
      }
      errorCount = 0; // 處罰完後歸零，或是看你想讓它繼續累加
      console.log("連續錯三次！處罰增加 3 個字");
    }
  }

  // 原本的規則：每次輸入（不論對錯）額外加 0~2 個隨機字母
  const extraCount = Math.floor(Math.random() * 3);
  for (let i = 0; i < extraCount; i++) {
    text += randomLetter();
  }

  // --- 核心邏輯修改結束 ---

  updateDisplay();
});

updateDisplay();
