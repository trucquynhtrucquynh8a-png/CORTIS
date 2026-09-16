const audio = document.getElementById("audio");
const playButton = document.getElementById("playButton");
const vinyl = document.querySelector(".vinyl");

audio.src = "./music/moneymoneymoney.mp3";
audio.preload = "auto";

function playMusic() {
audio.play()
.then(function () {
if (vinyl) vinyl.classList.add("playing");
if (playButton) playButton.textContent = "⏸";
})
.catch(function (error) {
console.log("Autoplay bị trình duyệt chặn:", error);
});
}

function pauseMusic() {
audio.pause();

```
if (vinyl) vinyl.classList.remove("playing");
if (playButton) playButton.textContent = "▶";
```

}

function toggleMusic() {
if (audio.paused) {
playMusic();
} else {
pauseMusic();
}
}

if (playButton) {
playButton.addEventListener("click", toggleMusic);
}

audio.addEventListener("play", function () {
if (vinyl) vinyl.classList.add("playing");
if (playButton) playButton.textContent = "⏸";
});

audio.addEventListener("pause", function () {
if (vinyl) vinyl.classList.remove("playing");
if (playButton) playButton.textContent = "▶";
});

window.addEventListener("load", function () {
playMusic();
});
