
/* global variables */
var __current_href = window.location.href;
var __isuptodate = false;
var __is_sum_set = false;
var __needing_char_fix = '(ProblemStatistics|ResultsPanel|SubmitDetails)';
/*  ^ ^ ^ ^ ^ ^ ^   */

function makeInfo() {
    var info = document.createElement('div');
    info.className = 'info';
    document.body.appendChild(info);
}

function setInfo() {
    $(".info").html('Work in progress!<br>' + __current_href);
}

function init() {
    if (!__isuptodate) {
        console.log(new Date().toString());
        __current_href = window.location.href;
        setInfo();

        if (__current_href.match(__needing_char_fix) !== null) {
            setTimeout(fixThemAll, 50);
        }
        if (__current_href.match("SubmitDetails") !== null) {
            setTimeout(hideLogs, 50);
        }

        __isuptodate = true;
    }

    if( !__is_sum_set && __current_href.match("MyPoint") !== null ) {
        setTimeout(sumPoints, 50);
        __is_sum_set = true;
    }
}

$(document).click( function () {
    __isuptodate = false;
    setTimeout(waitForInit, 100);
});

window.onhashchange = function () {
    __isuptodate = false;
    setTimeout(waitForInit, 100);
};

$(document).ready( function() {
    waitForInit();
    makeInfo();
});

function waitForInit() {
    if ($('.testerka').length !== 0) {
        init();
    } else {
        console.log(new Date().toString());
        setTimeout(waitForInit, 50);
    }
}