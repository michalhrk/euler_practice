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
console.log(findSum(3, 5, 1000));