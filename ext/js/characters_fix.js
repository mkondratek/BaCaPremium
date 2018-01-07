var are_fixed = false;

function charFix(item, from_str, to_str) {
    if (__current_href.match(__needing_char_fix) === null) {
        console.log('cf: location changed to ' + __current_href);
    }

    if (item.innerHTML.match(to_str) !== null) {
        console.log('cf: match of "' + to_str + '" found in " ' + item.innerHTML);
    }

    are_fixed = (are_fixed || __current_href.match(__needing_char_fix) === null);
    are_fixed = (are_fixed || item.innerHTML.match(to_str) !== null);
    item.innerHTML = item.innerHTML.replace(new RegExp(from_str), to_str);
}

function fixThemAll() {
    console.log('fixThemAll()');

    are_fixed = false;
    var items = $('.testerka-table tr');

    for (var i = 0; i < items.length; i++) {
        charFix(items[i], 'b....d', 'błąd');
        charFix(items[i], 'nag....wka', 'nagłówka');
        charFix(items[i], 'b....d', 'błąd');
        charFix(items[i], 'wyj..cia', 'wyjścia');
        charFix(items[i], 'b....d', 'błąd');
        charFix(items[i], 'z..a odpowied.', 'zła odpowiedź');
    }

    if (!are_fixed) {
        setTimeout(fixThemAll, 50);
    }

}