let ucReqem = prompt("vergulle ayrilmiz uc reqem daxil ediniz");
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
    } else if (x || y || z == 0) {
        return ("iki ve ya uc daxil edilmis eded eynidir")
    } else if (isNaN( a || b || c )) {
        return ('yanlis deyer daxil edilib')
        //niye bu ikisi tek tek isleyir ama birlikde islemir
    } else {
        return a;
    }
};
console.log ( middleOfThree(a, b, c) );
const middle = alert ( middleOfThree(a, b, c));
