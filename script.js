const music = document.getElementById("music");
const btn = document.getElementById("btn");

function toggleMusic() {
    if (music.paused) {
        music.play();
        btn.innerHTML = "⏸ หยุดเพลง";
    } else {
        music.pause();
        btn.innerHTML = "▶ คลิกเพื่อฟัง";
    }
}

// เมื่อเพลงเล่นจบ ให้ปุ่มกลับเป็นเหมือนเดิม
music.addEventListener("ended", function () {
    btn.innerHTML = "▶ คลิกเพื่อฟัง";
});
