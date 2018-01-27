function sumPoints() {
	var points_div = "body > div.card-panel.blue-grey.lighten-4 > table.testerka-srodek > tbody > tr > td:nth-child(2) > div > table > tbody > tr:nth-child(2) > td > table > tbody:nth-child(1) > tr:nth-child(2) > td > table";
	var points_table = "body > div.card-panel.blue-grey.lighten-4 > table.testerka-srodek > tbody > tr > td:nth-child(2) > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody:nth-child(2)";
	var your_sum_td = "body > div.card-panel.blue-grey.lighten-4 > table.testerka-srodek > tbody > tr > td:nth-child(2) > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody:nth-child(4) > tr > td:nth-child(2)";
	var your_sum = 0;
	var max_sum = 0;

	$( points_table ).each( function() {
		var $tds = $( this ).find( 'td' );

		for( i = 4; i < $tds.length; i = i + 3 ) {
			if( $tds.length != 0 ) {
				your_sum += parseInt( $tds.eq( i ).text() );
				max_sum += parseInt( $tds.eq( i + 1 ).text() );
			}
		}

	});

	var half = max_sum * 0.51;

	$( points_div ).append( "<colgroup><col><col><col></colgroup><tbody><tr class=\"testerka-th\"><td>Suma punktow:</td><td>" + your_sum + "</td><td>" + max_sum + "</td></tr></tbody>" );

	if( your_sum >= half ) {
		$( your_sum_td ).css( "background-color", "#00CC66" );
	}
	else {
		$( your_sum_td ).css( "background-color", "#CC0000" );
	}
}