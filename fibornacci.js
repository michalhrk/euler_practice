
function fibb(max) {

var iX;
var i;
var y;
var evenSum;

iX = 0;
i = 1;
y = 0;
evenSum = 0;
while ( i < max ) {
	y = i;
	i += iX;
	iX = y;
	if ( i%2 === 0 ) {
		evenSum += i
	}
	
}
return evenSum
}
debug(fibb(4000000));