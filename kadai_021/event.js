const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  // setTimeoutの中で文章を変更する
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});