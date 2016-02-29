var Prime = (function () {
    function Prime(num) {
        this.num = Math.sqrt(num);
    }
    Prime.prototype.isPrime = function (num) {
        for (var i = 2; i <= num; i++) {
            if (num % i == 0) {
            }
            primeList.push(num);
        }
    };
    Prime.prototype.addToList = function (num) {
    };
    return Prime;
}());
var primeList;
