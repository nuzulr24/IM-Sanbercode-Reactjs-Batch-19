// soal ke 1
const hitung = (angka1,angka2) => {
    return 3.14*angka1*angka2;
}
console.log(hitung(20,20));

// soal ke 2
const literal = (kalimat, kalimat1, kalimat2, kalimat3, kalimat4) => {
    return `${kalimat} ${kalimat1} ${kalimat2} ${kalimat3} ${kalimat3} ${kalimat4}`;
}
let kalimat = "saya adalah seorang frontend developer".split(" ");
console.log(kalimat[0],kalimat[1],kalimat[2],kalimat[3],kalimat[4]);

// soal ke 3
const newFunction = (firstName, lastName) => {
    return {
      firstName: firstName,
      lastName: lastName,
      fullName: function(){
        console.log(firstName + " " + lastName)
      }
    }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName();

// soal ke 4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

const {firstName, lastName, destination, occupation} = newObject;
console.log(firstName);

// soal ke 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
//Driver Code
console.log(...west,...east);