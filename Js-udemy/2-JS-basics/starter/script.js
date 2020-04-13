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






















