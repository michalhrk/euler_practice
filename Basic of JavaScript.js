/*
Vaues considerd as False

0 -0 NaN
""
false
null
undefined
*/
const SPENDING_TRESHOLD = 200;
const TAX_RATE = 0.08;
const PTHONE_PRICE;
const ACCESSORY_PRICE = 9.99;

var banl_balance = 303.91;
var amount = 0;

function calculateTax(amount) {
	return amount * TAX_RATE;
}

function formatAmount(amount) {
	return "$" + amount.toFixed ( 2 );
}

while (amount < banl_balance) {
	amount += PTHONE_PRICE;

	if (amount < SPENDING_TRESHOLD) {
		amount += ACCESSORY_PRICE;
	}
}

amount += calculateTax( amount );
debug()