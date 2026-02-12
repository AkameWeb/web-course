function displayTime() {

    const element = document.getElementById("clock");
    const now = new Date();
    element.innerHTML = now.toLocaleTimeString();
    setTimeout(displayTime, 1000);
}

window.onload = displayTime;