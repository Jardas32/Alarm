const clock = document.querySelector('.clock');
const taimerInput = document.querySelector('.taimer');
const container = document.querySelector('.container');
const btStop = document.querySelector('.btStop');
const text = document.querySelector('.text');
let alarmTime = null;
let alarmTriggered = false;

btStop.addEventListener('click', () => {
    location.reload();
});

taimerInput.addEventListener('change', () => {
    // Убедимся, что значение содержит секунды
    let value = taimerInput.value;
    if (value.length === 5) {
        value += ':00'; // добавляем секунды, если их нет
    }
    alarmTime = value;
    alarmTriggered = false;
});

function getTims() {
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 8); // HH:MM:SS
    clock.textContent = currentTime;

    if (alarmTime && currentTime === alarmTime && !alarmTriggered) {
        text.style.display = `block`;
        let audios = document.createElement('audio');
        audios.setAttribute('src', 'src');
        audios.setAttribute('autoplay', 'autoplay');
        audios.src = `audio/ptica.mp3`;
        container.append(audios);
        alarmTriggered = true;
    }
};

setInterval(getTims, 1000);
getTims();
