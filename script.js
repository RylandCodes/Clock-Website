const timeText = document.getElementById('time-text');

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  timeText.innerHTML = `${hours}:${minutes}:${seconds}`;
}

updateTime();

setInterval(() => {
  updateTime();
}, 1000);
