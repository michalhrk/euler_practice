function findSum(num1, num2 , max) {
    var numArray = [];

    for (var i = num1; i<max; i += num1) {
        numArray.push(i);
    }
    for (var j = num2; j < max; j+=num2) {
        if(numArray.indexOf(j) === -1) {
            numArray.push(j);
        }
    }

    var s = 0;
    numArray.forEach(function(item){
        s += item;
    });
    return s;
}

function findSum2(a, b , max) {
var sum = 0;
for (var i = a; i < max; i++) {
    if (i % a === 0 || i % b === 0) {
        sum += i;
    }
}
return sum;
}
debug(findSum(3, 5, 1000));
debug(findSum2(3, 5, 1000));
