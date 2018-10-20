var operators = {
    add: function(x,y) {
        return x+y;
    },
    subtract: function(x,y){
        return x-y;
    },
    multiply: function(x,y){
        return x*y;
    },
    divide: function(x,y){
        return x/y;
    }
}

console.log(operators.add(10,5));
console.log(operators.subtract(10,5));
console.log(operators.multiply(10,5));
console.log(operators.divide(10,5));