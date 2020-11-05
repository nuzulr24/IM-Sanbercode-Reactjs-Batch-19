// soal 1 (looping)

var i = 0;
while(i <= 20) {
    i++;
    if(i % 2 === 0) {
        console.log(i + ". I love coding");
    }
}

var s = 20;
while(s > 1) {
    if(s % 2 === 0) {
        console.log(s + ". Iam a frontend developer");
    }
    s--;
}

// soal ke 2

for(q = 1; q <= 20; q++) {
    if (q % 2 === 0) {
        console.log(q + " - berkualitas");
    } else if (q % 3 === 0) {
        console.log(q + " - i love coding");
    } else {
        console.log(q + " - santai");
    }
}

// soal ke-3

for (b = 1; b <= 6; b++) {
    for(j = 1; j <= b; j++) {
        console.log("#");
    }
    console.log("\n");
}

// soal ke-4
var kalimat = "saya sangat senang belajar javascript";
console.log(kalimat.split(' '));

// soal ke-5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
for(z = 0; z < daftarBuah.length; z++) {
    console.log(daftarBuah[z])
}
