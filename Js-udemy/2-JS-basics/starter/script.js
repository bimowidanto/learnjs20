//variable
let namaDepan = 'john';
let namaBelakang = ' smith';
console.log(namaDepan);

let = namaPanjang = namaDepan + namaBelakang;
console.log(namaPanjang);

let age = 18;
age = 20;
console.log('Umur ' + age)
//==================================
//coding challenge
//==================================
let beratMark = 78; //kg
let tinggiMark = 1.68; //meter

let beratJohn = 92;
let tinggiJohn = 1.95;

let BMIMark = beratMark / (tinggiMark * tinggiMark);
let BMIJohn = beratJohn / (tinggiJohn * tinggiJohn);
console.log(BMIMark, BMIJohn);

let markTertinggiBMI = BMIMark > BMIJohn;
console.log('apa Mark\'s BMI lebih tinggi dari john\'s ?' + ' ' + markTertinggiBMI);

//luas lingkaran
let d = 14
let r = d/2
let luas = Math.PI * r * r
console.log(luas);
//total luas lingkaran
console.log(Math.round(luas))



/*
if / else statement
*/
let namaDepan1 = 'andy';
let status = 'single';

if (status === 'married') {
    console.log(namaDepan1 + ' sudah menikah!') 
} else {
    console.log(namaDepan1 + ' belum menikah')
}

let sudahMenikah = true;
if (sudahMenikah) {
    console.log(namaDepan1 + ' sudah menikah!');
}else{
    console.log(namaDepan1 + ' belum menikah');
}

let beratAndy = 78;
let tinggiAndy = 1.70;

let beratHery = 83;
let tinggiHery = 1.90;

let BMIAndy = beratAndy / (tinggiAndy * tinggiAndy);
let BMIHery = beratHery / (tinggiHery * tinggiHery);

if (BMIAndy > BMIHery) {
    console.log('andy\'s BMI lebih tinggi dari Hery\'s.');
}else{
    console.log('Hery\'s BMI lebih tinggi dari Andy\'s.');
}

//Basic boolean logic
/*
- AND (&&) => true if ALL are true
- OR (||) = > true if ONE is true
- NOT (!) => inverts true/false value
*/
let namaDepan2 = 'john';
let umur1 = 29;

if (umur1 < 13) {
    console.log(namaDepan2 + ' adalah anak-anak.'); 
} else if (umur1 >= 13 && umur1 < 20) {
    console.log(namaDepan2 + ' adalah remaja.');
} else if (umur1 >= 28 && umur1 < 30) {
    console.log(namaDepan2 + ' adalah dewasa.');
} else {
    console.log(namaDepan2 + ' adalah orang tua.');
}

/*
Operator ternary and switch statement
*/
let namaDepan3 = 'joni';
let age1 = 19;

//ternary operator
age >= 18 
? console.log(namaDepan3 + ' minuman dingin.')
: console.log(namaDepan3 + ' minuman panas.');

let minuman = age >= 18 ? 'dingin' : 'panas';
console.log(minuman);

















