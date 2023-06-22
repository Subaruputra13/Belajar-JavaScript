// fungsi dengan var
const belajar = () => {
  var pekerjaan = "developer";

  var materiBelajar = "belajar golang";

  if (pekerjaan == "developer") {
    var materiBelajar = "belajar javascript";
    console.log(materiBelajar);
  }

  console.log(materiBelajar);
};
// end

// fungsi dengan let
const belajarLet = () => {
  var pekerjaan = "developer";

  var materiBelajar = "belajar php";

  if (pekerjaan == "developer") {
    let materiBelajar = "belajar javascript";
    console.log(materiBelajar);
  }

  console.log(materiBelajar);
};
// end

// template literal
const templateLiteral = () => {
  var name = "Alfian Subaru Putra";
  var age = 20;

  console.log("Nama saya adalah : " + name + ", umur saya adalah " + age);
};
// end

// arrow funcion
const perkalian = (a, b) => a * b;
// OR
const perkalian1 = (a, b) => {
  return a * b;
};
// end

// arrow function without param
const sayHello = () => {
  console.log("Hello World !");
};

const newSayHello = () => "Hello Man !";
// end

// arrow function with params
const greeting = (guestname) => {
  return `Welcome Back to Codepolitan, ${guestname}`;
};

const newGreeting = (guestname) => `Welcome Back to Codepolitan, ${guestname}`;
// end

// arrow function map
const angka = [1, 2, 3, 4];

const angkaBaru = angka.map(function (element) {
  return element * 2;
});

const angkaBaru1 = angka.map((element) => element * 2);
// end

// Spread Syntax / Clone array
const angkaX = [1, 2, 3, 4];

const angkaY = [...angkaX];

angkaY[1] = 10;
// end

// Spread Syntax / Clone Object
const mobilSubaru = {
  nama: "Subaru",
  merk: "toyota",
  warna: "hitam",
};

var mobilWanda = { ...mobilSubaru };

mobilWanda = {
  nama: "Wanda",
  merk: "merci",
  warna: "ungu",
};
// end

// Concat Array
const nilaiKelasA = [10, 20, 30];

const nilaiKelasB = [40, 50, 60];

const nilaiGabung = [...nilaiKelasA, ...nilaiKelasB];

nilaiGabung[0] = 100;
// end

// Concat Object
const namaMahasiswaB = ["beny", "boby", "bianca"];
const namaMahasiswa = ["andrea", "beby", ...namaMahasiswaB, "clarissa"];

namaMahasiswa[2] = "Subaru";
//end

// Function Parameter
const perkaliaAngka = (a, b, c, d, e) => a * b * c * d * e;

const data = [1, 2, 3, 4, 5];

const hasil = perkaliaAngka(...data);
//end

// Destructuring Array
const huruf = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

const [huruf1, ...sisanya] = huruf;
// end

// Destructuring Object
const nilai = {
  subaru: 100,
  wanda: 90,
  pati: 82,
  rizkiandiaka: 99,
};

const { wanda } = nilai;
// end

// Object Literal Enhancement
const nama = "Alfian Subaru Putra";
const usia = 20;
const kelamin = "Pria";

const saya = {
  nama,
  usia,
  kelamin,
  hobi: "pingpong",
};
// end

// Manipulasi Array
const ang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter() memfilter array yang di tampilkan
const baru = ang.filter((element) => true);

const baru1 = ang.filter((element) => element > 5);

// FindIndex() mencari index
const daftarSiswa = [
  { id: 1, nama: "Aura" },
  { id: 2, nama: "Bryan" },
  { id: 3, nama: "Charlie" },
  { id: 4, nama: "Diandra" },
];

const charlie = daftarSiswa.findIndex((siswa) => siswa.nama == "Diandra");

// Splice() menyisipkan ke tengah
const namaBulan = ["Januari", "Maret", "April"];

namaBulan.splice(1, 0, "februari");

// Sort()
const angkaSort = [6, 5, 7, 4, 2, 3, 1, 9, 10];

// console.log(
//   angkaSort.sort(function (a, b) {
//     return b - a;
//   })
// );

// Looping For .. of
for (const v of daftarSiswa) {
  //   console.log(v.nama);
}

// end
