function makeInfo() {
    var info = document.createElement('div');
    info.className = 'info';
    document.body.appendChild(info);
}

function setInfo() {
    var info = document.getElementsByClassName('info');
    info[0].innerHTML = 'Work in progress!<br>' + __current_href;
}

/* global variables */
var __current_href = window.location.href;
/*  ^ ^ ^ ^ ^ ^ ^   */

makeInfo();

window.onclick = function () {
    __current_href = window.location.href;
    setInfo();

    if (__current_href.match('(ProblemStatistics|ResultsPanel)') !== null) {
        setTimeout(fixThemAll(), 800);
    }
};