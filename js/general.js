function setInfo() {
    var info = document.createElement('div');
    info.className = 'info';
    info.innerHTML = 'Work in progress!<br>' + window.location.href;
    document.body.appendChild(info);
}

setInfo();
