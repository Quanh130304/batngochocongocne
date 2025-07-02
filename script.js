let hasOpened = false;

function startGame() {
  // Ẩn màn hình intro khi người dùng nhấn nút
  document.getElementById("intro").style.display = "none";
  
  // Hiển thị màn hình game
  document.getElementById("game").classList.remove("hidden");

  // Phát nhạc nền và hiệu ứng pháo bông
  const bgMusic = document.getElementById("bg-music");
  const firework = document.getElementById("firework");

  bgMusic.play();
  firework.volume = 1.0; // 🔊 Tăng âm lượng của pháo bông lên tối đa
  firework.play();

  // Hiển thị biểu tượng cung (cancer symbol)
  const container = document.getElementById("cancer-container");
  container.classList.remove("hidden");
  
  // Tạo nhiều biểu tượng cung
  for (let i = 0; i < 20; i++) { 
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

  const random = Math.random() > 0.5 ? "Dress1.jpg" : "Dress2.jpg";
  rewardImage.src = random;
  rewardImage.style.display = "block"; // đảm bảo hiện ảnh

  popup.classList.remove("hidden");
  giftMusic.play();

  setTimeout(() => {
    popup.classList.add("hidden");
    document.querySelector(".bag-container").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("final-message").classList.remove("hidden");
  }, 1200); // tăng thời gian popup để kịp xem ảnh
}
