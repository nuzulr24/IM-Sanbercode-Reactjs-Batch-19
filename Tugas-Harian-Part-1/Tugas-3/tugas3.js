// soal ke 1 (penggabungan string)
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
console.log(kataPertama + " " + kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1) + " " + kataKetiga + " " + kataKeempat.toUpperCase())

// soal ke 2 (penjumlahan aritmatika)
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
console.log(parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat));

// soal ke 3 (pemecahan value string)
var kalimat = 'wah javascript itu keren sekali';
var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(14, 18);
var kataKeempat = kalimat.substring(18, 24);
var kataKelima = kalimat.substring(24, 31);

// console.log(kalimat.split(" "));

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);

// soal ke 4 (statement condition using if else)
var nilai = 75; // atau yang lain

if (nilai >= 80) {
    console.log('A');
} else if (nilai >= 70 && nilai < 80) {
    console.log('B');
} else if (nilai >= 60 && nilai < 70) {
    console.log('C');
} else if (nilai >= 50 && nilai < 60) {
    console.log('D');
} else if (nilai < 50) {
    console.log('E');
}

// soal ke 5 (statement condition using switch and case)
var tanggal = 24;
var bulan = 12;
var tahun = 1999;

switch (bulan) {
    case 1:
        console.log(tanggal + " Januari " + tahun);
        break;
    case 2:
        console.log(tanggal + " Februari " + tahun);
        break;
    case 3:
        console.log(tanggal + " Maret " + tahun);
        break;
    case 12:
        console.log(tanggal + " Desember " + tahun);
        break;

    default:
        console.log(tanggal + " Juli " + tahun);
        break;
}