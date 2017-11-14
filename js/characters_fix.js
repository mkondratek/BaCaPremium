function charFix(__cls_name, __regex, __to) {
    /* cell index in stats is 0, in results is 6 */
    var __index = -1;
    __index = (__current_href.indexOf('ProblemStatistics') !== -1 ? 0 : __index);
    __index = (__current_href.indexOf('ResultsPanel')      !== -1 ? 6 : __index);

    if (__index !== -1) {
        console.log('fixing characters in ' + (__index === 0 ? 'stats' : 'results'));

        var __obj_arr = document.getElementsByClassName(__cls_name);
        for (var i = 0; i < __obj_arr.length; i++) {
            var __str = __obj_arr[i].cells[__index].innerHTML;
            __obj_arr[i].cells[__index].innerHTML = __str.replace(new RegExp(__regex), __to);
        }

        // if (__index === 6) { //todo replace in listBox
        //     __obj_arr = document.getElementsByClassName('gwt-listBox');
        //     for (i = 0; i < __obj_arr.length; i++) {
        //         __str = __obj_arr[i].innerHTML;
        //         __obj_arr[i].innerHTML = __str.replace(new RegExp(__regex), __to);
        //         __obj_arr[i].value = __str.replace(new RegExp(__regex), __to);
        //     }
        // }
    }
}

function fixThemAll() {
    charFix('status_HEA', 'b....d', 'błąd');
    charFix('status_HEA', 'nag....wka', 'nagłówka');
    charFix('status_CMP', 'b....d', 'błąd');
    charFix('status_RTE', 'wyj..cia', 'wyjścia');
    charFix('status_RTE', 'b....d', 'błąd');
    charFix('status_ANS', 'z..a odpowied.', 'zła odpowiedź');
}