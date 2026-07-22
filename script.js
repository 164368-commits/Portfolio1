const music = document.getElementById("music");
const btn = document.getElementById("btn");
const img = document.querySelector(".image-container img");

function toggleMusic() {
    if (music.paused) {
        music.play();
        btn.innerHTML = "⏸ หยุดฟัง";
        btn.style.background = "#9C27B0"; // สีม่วง
        img.style.animation = "spin 10s linear infinite";
    } else {
        music.pause();
        btn.innerHTML = "▶ คลิกเพื่อฟัง";
        btn.style.background = "#ff4081"; // สีชมพู
        img.style.animation = "";
    }
}

// เมื่อเพลงจบ
music.addEventListener("ended", function () {
    btn.innerHTML = "▶ คลิกเพื่อฟัง";
    btn.style.background = "#ff4081";
    img.style.animation = "";
});
