function changeMid() {
    const list = document.getElementsByClassName("testerka");
    list[0].className = "card-panel blue-grey lighten-4";
}

function changeTables() {
    $( '.testerka-th td' ).css( "background-color", "#b0bec5" );

    const tables = document.getElementsByClassName("testerka-table");

    for( i = 0; i < tables.length; i++ ) {
        tables[i].className = "bordered highlight";
    }
}

function changeButtons() {
    const buttons = document.getElementsByClassName("gwt-Button");

    for( i = 0; i < buttons.length; i++ ) {
        buttons[i].className = "waves-effect waves-light btn blue-grey lighten-2";
    }
}

function changeDropdowns() {
    const dropdowns = document.getElementsByClassName("gwt-ListBox");

    for( i = 0; i < dropdowns.length; i++ ) {
        dropdowns[i].className = "dropdown-button btn blue-grey lighten-2";
    }
}

function makeFooter() {
    var footer = document.createElement('footer');
    footer.className = 'page-footer blue-grey lighten-1';

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