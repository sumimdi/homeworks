let kmhSpeed = 75;
mps = kmhSpeed * 5/18;
console.log( mps, `mps`);

let num = 57;
console.log(num ** 5);
console.log(num %3);

const firstName = 'Alan';
const lastName = 'Turing';
console.log('Your name is', firstName, lastName,'.');

let fName = 'Alan';
let lName = 'Turing';
let greet = `Sizi bir daha görməyimizə şadıq, ${fName} ${lName}.`;
console.log(greet);

let fullName = 'Alan Turning';
console.log(fullName.length);

let fstName = 'Sumaya';
let lstName = 'Mohammadi';
console.log(fstName[0] + lstName[0]);

let custumerName = prompt('ad soyad');
let soyad = custumerName.split(' ').at(1);
let ad = custumerName.split(' ').at(0);
console.log( soyad , ad );

let istifadeciAdi = prompt('adinizi daxil edin');
let salamlama = alert(`Salam ${istifadeciAdi}!`); 

const birinci = prompt("eded daxil adin");
const ikinci = prompt("eded daxil adin");
console.log( +birinci + +ikinci);
console.log( birinci - ikinci);
console.log( birinci * ikinci);
console.log( birinci / ikinci);

let ilk = 12345;
let son = 98765;
let vurma = ilk * son;
console.log(String(vurma)[5]);

let onuncu = prompt('salam ad ve soyad');
let adi = onuncu.split(' ').at(0);
console.log('Salam', adi );

const reqem = prompt('pulunuzu daxil edin.');
const manatla = reqem.split('.').at(0);
const qepik = reqem.split(".").at(1);
console.log(manatla, 'manat', qepik, 'qepik');

let onuc = prompt("Soyad ad ata adinizi daxil edin.");
let ln = onuc.split(' ').at(0);
let fn = onuc.split(' ').at(1);
let frn = onuc.split(" ").at (2);
console.log( ln , fn[0] + "." + frn[0] );