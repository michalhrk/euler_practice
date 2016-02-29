class Prime {
    num: number;
    constructor (num: number) {
        this.num = Math.sqrt(num);   
            
    }
    isPrime (num) {
        for (var i = 2; i <= num; i++) {
            if (num % i == 0) {
            }
            primeList.push(num);
        }
    }
    addToList (num) {
        
    }
}

var primeList: number[];
