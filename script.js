let hasOpened = false;

function startGame() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("game").classList.remove("hidden");

  const bgMusic = document.getElementById("bg-music");
  const firework = document.getElementById("firework");

  bgMusic.play();
  firework.volume = 1.0; // 🔊 Tăng âm lượng boom lên tối đa
  firework.play();

  // Hiển thị biểu tượng cung
  const container = document.getElementById("cancer-container");
  container.classList.remove("hidden");
  for (let i = 0; i < 20; i++) { // Nếu bạn muốn nhiều biểu tượng hơn
    const img = document.createElement("img");
    img.src = "cancer-symbol.png";
    img.className = "cancer";
    img.style.left = Math.random() * 100 + "%";
    img.style.top = (30 + Math.random() * 50) + "%";
    img.style.animationDelay = (Math.random() * 4) + "s";
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

  const random = Math.random() > 0.5 ? "dress1.jpg" : "dress2.jpg";
  rewardImage.src = random;

  popup.classList.remove("hidden");
  giftMusic.play();

  setTimeout(() => {
    popup.classList.add("hidden");
    document.querySelector(".bag-container").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("final-message").classList.remove("hidden");
  }, 500);
}
