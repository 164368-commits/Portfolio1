const music = document.getElementById("music");
const btn = document.getElementById("btn");

function toggleMusic() {
    if (music.paused) {
        music.play();
        btn.innerHTML = "⏸ หยุดเพลง";
    } else {
        music.pause();
        btn.innerHTML = "▶ เล่นเพลง";
    }
}
