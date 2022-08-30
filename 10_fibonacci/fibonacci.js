const fibonacci = function(num) {
    num = parseInt(num);
    let a = 0;
    let b = 1;
    let c = num;
    if (num < 0) {
        return "OOPS";
    } else {
    for (i = 2; i <=num; i++) {
        c = a+b;
        a = b;
        b = c;
        }
    return c;
    }
};


// Do not edit below this line
module.exports = fibonacci;
