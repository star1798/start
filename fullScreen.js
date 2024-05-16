function enter(ele) {
    if (ele.requestFullScreen) {
        ele.requestFullScreen();
    } else if (ele.mozRequestFullScreen) {
        ele.mozRequestFullScreen();
    } else if (ele.webkitRequestFullScreen) {
        ele.webkitRequestFullScreen();
    } else if (ele.msRequestFullScreen) {
        ele.msRequestFullScreen()
    }
}
function exit() {
    if (document.exitFullScreen) {
        document.exitFullScreen();
    } else if (document.mozCancelFullScreen) {
        document.mozRequestFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    } else if (document.msExitFullScreen) {
        document.msExitFullScreen()
    }
}

function fullEle() {
    return document.fullscreenElement || document.mozFullScreenElement || document.msFullScreenElement || document.webkitFullScreenElement || null;
}

function isFull() {
    return Boolean(fullEle());
}

function toggle(ele) {
    console.log(isFull())
    isFull() ? exit() : enter(ele)
}