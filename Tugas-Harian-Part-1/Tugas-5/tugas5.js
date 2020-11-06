// soal ke 1
function hallo() {
    return "Halo Sanbers!";
}
console.log(hallo());

// soal ke 2
function kalikan(num, num2) {
    return num * num2;
}

var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48

// soal ke 3
function introduce(name, age, address, hobby) {
    return "Nama saya " + name + ", umur saya " + age + " tahun" + " alamat saya di jalan belum jadi, dan saya punya hobby yaitu " + hobby;
}
 
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!" 

// soal ke 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var daftarPeserta = {
    nama: arrayDaftarPeserta[0],
    kelamin: arrayDaftarPeserta[1],
    hobby: arrayDaftarPeserta[2],
    tahun: arrayDaftarPeserta[3]
}
console.log(daftarPeserta);

// soal ke 5
var daftarItem = [
    {
        nama: "strawberry",
        warna: "merah",
        ada_bijinya: "tidak",
        harga: 9000
    },
    {
        nama: "jeruk",
        warna: "oranye",
        ada_bijinya: "ada",
        harga: 8000
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        ada_bijinya: "ada",
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        ada_bijinya: "tidak",
        harga: 5000
    },
];

console.log(daftarItem[0]);

// soal ke 6
function jadikanArray(namanya, durasinya, genreny, tahunnya) {
    var dataFilm = [];
  
    var opsi = {};
    opsi.namai = namanya;
    opsi.durasi = durasinya;
    opsi.genre = genreny;
    opsi.tahun = tahunnya;
    dataFilm.push(opsi);

    return dataFilm;
  }

var isi = jadikanArray("Nuzul", "5000", "Pop", "2050");
console.log(isi);