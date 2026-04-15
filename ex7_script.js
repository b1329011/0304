let text = "";
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

  // 如果等於第一個字 → 刪掉
  if (text.length > 0 && char === text[0]) {
    text = text.slice(1);
  } else {
    text += char;
  }

  // 加 0~2 個隨機字母
  const extraCount = Math.floor(Math.random() * 3);
  for (let i = 0; i < extraCount; i++) {
    text += randomLetter();
  }

  updateDisplay();
});

updateDisplay();
