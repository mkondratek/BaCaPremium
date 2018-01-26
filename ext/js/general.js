
/* global variables */
var __current_href = window.location.href;
var __isuptodate = false;
var __is_sum_set = false;
var __is_footer = false;
var __needing_char_fix = '(ProblemStatistics|ResultsPanel|SubmitDetails)';
/*  ^ ^ ^ ^ ^ ^ ^   */

function makeInfo() {
    var info = document.createElement('div');
    info.className = 'info';
    document.body.appendChild(info);
}

function setInfo() {
    $(".info").html("<a href=\"https://github.com/mkondratek/BaCaPremium\" class=\"github-corner\" aria-label=\"View source on Github\"><svg width=\"50\" height=\"50\" viewBox=\"0 0 250 250\" style=\"fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;\" aria-hidden=\"true\"><path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path><path d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\" fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path><path d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\" fill=\"currentColor\" class=\"octo-body\"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>");
    // $(".info").html("<a href=\"https://github.com/mkondratek/BaCaPremium\" aria-label=\"View source on Github\"><svg width=\"80\" height=\"80\" viewBox=\"0 0 250 250\" style=\"fill:#151513; color:#fff; position: absolute; top: 0; border: 0; left: 0; transform: scale(-1, 1);\" aria-hidden=\"true\"><path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path><path d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\" fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path><path d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\" fill=\"currentColor\" class=\"octo-body\"></path></svg><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style></a>");
}

function changeMid() {
    const list = document.getElementsByClassName("testerka");
    list[0].className = "card-panel light-green lighten-4";
}

function makeHeader() {
    var header = document.createElement('nav');
    header.className = 'nav-extended light-green darken-1';

    var headerHtml = "<div class=\"nav-wrapper\">\
                      <a href=\"#\" class=\"brand-logo\"><img src=\"https://sites.google.com/site/bacahelp/_/rsrc/1258364135081/config/app/images/customLogo/customLogo.gif?revision=1\"></a>\
                      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\
                        <li><a class=\"grey-text text-lighten-3\" href=\"#ProblemsPanel\">ZADANIA</a></li>\
                        <li><a class=\"grey-text text-lighten-3\" href=\"#SendSubmit\">WYSYŁANIE</a></li>\
                        <li><a class=\"grey-text text-lighten-3\" href=\"#ResultsPanel\">WYNIKI</a></li>\
                        <li><a class=\"grey-text text-lighten-3\" href=\"#MyPoint\">MOJE PUNKTY</a></li>\
                        <li><a class=\"grey-text text-lighten-3\" href=\"#SettingsPanel\">USTAWIENIA</a></li>\
                        <li><a class=\"grey-text text-lighten-3\" href=\"#ChangePassword\">ZMIANA HASŁA</a></li>\
                        <li><a class=\"grey-text text-lighten-3\" href=\"#LogoutPanel\">WYLOGUJ</a></li>\
                      </ul>\
                    </div>";
                
    $( header ).html( headerHtml );
    document.body.appendChild( header );
}

function makeFooter() {
    var footer = document.createElement('footer');
    footer.className = 'page-footer light-green darken-1';

    var footerHtml = "<div class=\"container\">\
                        <div class=\"row\">\
                          <div class=\"col l6 s12\">\
                            <h5 class=\"white-text\"></h5>\
                            <p class=\"grey-text text-lighten-4\">Projekt współfinansowany przez Unię Europejską w ramach Europejskiego Funduszu Społecznego.</p>\
                          </div>\
                          <div class=\"col l4 offset-l2 s12\">\
                            <h5 class=\"white-text\">MENU</h5>\
                            <ul>\
                              <li><a class=\"grey-text text-lighten-3\" href=\"#ProblemsPanel\">Zadania</a></li>\
                              <li><a class=\"grey-text text-lighten-3\" href=\"#SendSubmit\">Wysyłanie</a></li>\
                              <li><a class=\"grey-text text-lighten-3\" href=\"#ResultsPanel\">Wyniki</a></li>\
                              <li><a class=\"grey-text text-lighten-3\" href=\"#MyPoint\">Moje punkty</a></li>\
                            </ul>\
                          </div>\
                        </div>\
                      </div>\
                      <div class=\"footer-copyright\">\
                        <div class=\"container\">\
                        © 2018 BaCa Premium\
                        <a class=\"grey-text text-lighten-4 right\" href=\"https://github.com/mkondratek/BaCaPremium\">GitHub</a>\
                        </div>\
                      </div>";
    
    $( footer ).html( footerHtml );
    document.body.appendChild( footer );

    changeMid();
}

function init() {
    if (!__isuptodate) {
        // console.log(new Date().toString());
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

    if( !__is_footer ) {
        makeFooter();
        __is_footer = true;
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

    makeHeader();
});

function waitForInit() {
    if ( $('.testerka').length !== 0 || $('.card-panel').length !== 0 ) {
        init();
    } else {
        // console.log(new Date().toString());
        setTimeout(waitForInit, 50);
    }
}
