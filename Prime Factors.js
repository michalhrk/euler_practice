function primeFacrot(num) {
	var i;
	var x;
	var numX;
	x = 0
	i = 2
	numX = Math.sqrt(num);
	debug(numX)
	for ( i = 2; i <= numX; i++ ) {
		if ( num % i == 0 ) {
			//debug(i)
		}
		debug(i)
	}
}

debug(primeFacrot(100))

