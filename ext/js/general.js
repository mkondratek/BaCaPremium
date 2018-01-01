
/* global variables */
var __current_href = window.location.href;
var __isuptodate = false;
var __attempts = 0;
/*  ^ ^ ^ ^ ^ ^ ^   */

function makeInfo() {
    var info = document.createElement('div');
    info.className = 'info';
    document.body.appendChild(info);
}

function setInfo() {
    $(".info").html('Work in progress!<br>' + __current_href);
}

function executor(__name, __func) {
    if ($(__name).is(':visible')) {
        console.log("READY!");
        __attempts = 0;
        __func();
    } else if (__attempts < 100) {
        console.log("W8ING: " + __attempts);
        __attempts++;
        setTimeout(executor(__name, __func), 50);
    } else {
        console.log("ABORTED!");
        __attempts = 0;
    }
}

function run() {
    if (!__isuptodate) {
        console.log(new Date().toString());
        __current_href = window.location.href;
        setInfo();

        if (__current_href.match('(ProblemStatistics|ResultsPanel)') !== null) {
            executor('tr.testerka-th', fixThemAll);
        }

        __isuptodate = true;
    }
}

$(document).click( function () {
    __isuptodate = false;
    run();
});

$(document).ready( function() {
    makeInfo();

    // var s = document.createElement("script");
    // s.defer = true;
    // s.innerHTML = "run();";
    // var __cnt = 0;
    //  while (__cnt++ < 100) { setTimeout(run, 50); }
    //
    // document.body.appendChild(s);
});
