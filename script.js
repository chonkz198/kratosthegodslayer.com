
function handleOrientationChange() {
    const body = document.getElementById('main-body');

    if (window.matchMedia("(orientation: portrait)").matches) {
        body.style.backgroundImage = 'url("img/portrait-background.jpg")';
    } else {
        body.style.backgroundImage = 'url("img/landscape-background.jpg")';
    }
}

// Initial call to set the correct background on page load
handleOrientationChange();

// Listen for orientation changes
window.addEventListener('orientationchange', handleOrientationChange);