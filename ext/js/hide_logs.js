function hideLogs() {
    var logs_div = "body > div.testerka > table.testerka-srodek > tbody > tr > td:nth-child(2) > div > table > tbody > tr:nth-child(10) > td";
    
    if ($("#logs_button").length === 0) {
        var button = document.createElement("button");
        button.id = "logs_button";
        button.width = 50;
        button.height = 23;
        button.innerHTML = "Pokaż logi";

        button.onclick = function () {
            this.innerHTML = (this.innerHTML === "Pokaż logi" ? "Schowaj logi" : "Pokaż logi");
            $("#logs_button").css({"margin-bottom":(this.innerHTML === "Pokaż logi" ? "10px" : "0")});
            $(logs_div + " > div").toggle();
        };

        $(logs_div).prepend(button);
        $("#logs_button").css({"margin-bottom":"10px"});

        $(logs_div + " > div").toggle();
    }
}