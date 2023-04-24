let ucReqem = prompt("add 3 numbers spilited by , ");
let a = ucReqem.split(",").at(0);
let b = ucReqem.split(",").at(1);
let c = ucReqem.split(",").at(2);

const middleOfThree = (a, b, c) => {
    x = a - b;
    y = b - c;
    z = a - c;
    if (x * y > 0) {
        return b;
    } else if (x * z > 0) {
        return c;
    } else if ((x == 0) || (y == 0) || (z == 0)) {
        return ("two or more numbers are the same");
    } else if (isNaN( a )|| isNaN(b) || isNan(c)) {
        return ('not a number');
        //niye bu ikisi tek tek isleyir ama birlikde islemir
    } else {
        return a;
    }
};
console.log ( middleOfThree(a, b, c) );
alert ( middleOfThree(a, b, c));
