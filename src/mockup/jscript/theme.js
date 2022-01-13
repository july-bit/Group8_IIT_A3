function lightmode() {
    const wasLightmode = localStorage.getItem('lightmode') === 'true';
    localStorage.setItem('lightmode', !wasLightmode);
    const element = document.body;
    element.classList.toggle('light-mode', !wasLightmode);
}

function onload() {
    document.body.classList.toggle('light-mode', localStorage.getItem('lightmode') === 'true');
}