let hasOpened = false;

function startGame() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("game").classList.remove("hidden");

  // Nhạc nền và pháo bông
  const bgMusic = document.getElementById("bg-music");
  const firework = document.getElementById("firework");
  if (bgMusic) bgMusic.play();
  if (firework) {
    firework.volume = 1.0;
    firework.play();
  }

  // Biểu tượng cung xuất hiện ngay, số lượng giảm còn 4/5
  const container = document.getElementById("cancer-container");
  container.classList.remove("hidden");
  container.innerHTML = ""; // clear lần trước nếu có
  const num = Math.floor((window.innerWidth * window.innerHeight / 1100) * 0.8); // giảm còn 4/5
  for (let i = 0; i < Math.max(36, num); i++) {
    const img = document.createElement("img");
    img.src = "cancer-symbol.png";
    img.className = "cancer";
    img.style.left = Math.random() * 100 + "vw";
    img.style.top = Math.random() * 100 + "vh";
    img.style.animationDelay = (Math.random() * 6) + "s";
    container.appendChild(img);
  }
}

function openBag(el) {
  if (hasOpened) return;
  hasOpened = true;

  document.querySelectorAll(".bag").forEach(b => b.style.opacity = 0.3);

  const popup = document.getElementById("popup");
  const rewardImage = document.getElementById("rewardImage");
  const giftMusic = document.getElementById("gift-music");

  // Random ảnh thưởng
  const random = Math.random() > 0.5 ? "Dress1.jpg" : "Dress2.jpg";
  rewardImage.src = random;
  rewardImage.style.display = "block";

  popup.classList.remove("hidden");
  if (giftMusic) giftMusic.play();

  setTimeout(() => {
    popup.classList.add("hidden");
    document.querySelector(".bag-container").style.display = "none";
    document.getElementById("title").style.display = "none";
    // Hiện dòng chữ cuối cùng
    const finalMsg = document.getElementById("final-message");
    finalMsg.classList.remove("hidden");
    finalMsg.classList.add("show");
  }, 1200);
}
