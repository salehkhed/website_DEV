document.addEventListener("DOMContentLoaded", function () {
    const chronoElement = document.getElementById("chrono");
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    function updateChrono() {
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;

            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }

        const formattedTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
        chronoElement.textContent = formattedTime;
    }

    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }

    // Mettre à jour le chronomètre toutes les 1000 millisecondes (1 seconde)
    setInterval(updateChrono, 1000);
});
