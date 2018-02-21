module.exports = function solveEquation(equation) {

    var arr = equation.split(' ');

    var a = parseInt(arr[0]);
    var b = parseInt(arr[3] + arr[4]);
    var c = parseInt(arr[7] + arr[8]);

    var descr = Math.pow(b,2) - 4*a*c;

    var x1 = Math.round((-b + Math.ceil(Math.sqrt(descr)))/(2*a));
    var x2 = Math.round((-b - Math.ceil(Math.sqrt(descr)))/(2*a));

    var result = [];
    result[0] = x1;
    result[1] = x2;

    if(result[0]>=result[1]){
        var t = result[0];
        result[0] = result[1];
        result[1] = t;
    }
    return result;
}
