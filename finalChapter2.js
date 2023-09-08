// awal nomor 1
// const kalimat1 = "andini sangat mencintai kamu selamanya";
// const kalimat2 = "gunung bromo tak akan mampu mengambarkan besarnya cintaku padamu";
// function changeWord(selectedText, changedText, text) {
//   const findText = new RegExp(selectedText, "gi");
//   return text.replaceAll(selectedText, changedText);
// }
// console.log(changeWord("andini", "akmal", kalimat1));
// console.log(changeWord("bromo", "semeru", kalimat2));

// baris 1 dan 2 saya membuat variable yang berisi string
// baris 3 membuat function dengan nama changeWord dan 3 parameter
// baris 4 saya mengembalikan parameter text ke changeword, replace all yang berarti selectedText adalah kata yang mau di ganti dan changeText kata yang akan menggantikan
// baris 5 adalah penutup dari function
// baris 6 yaitu menampilkan dan mengisi parameter dari function, "andini" adalah kata awal yang mau di ganti (selectedText), dan "akmal" adalah kata yang akan menggantikan (changeText), dan kalimat1 yaitu untuk menampilkan isi kalimat1
// barsi 7 prosesnya sama dengan baris 6
// akhir nomor 1

// awal nomor 2
// const checkTypeNumber = (angka) => {
//   if (angka) {
//     if (typeof angka === "number") {
//       if (angka % 2 == 0) {
//         return angka + " : Bilangan genap";
//       } else {
//         return angka + " : Bilangan ganjil";
//       }
//     } else {
//       return "Error : invalid data type";
//     }
//   } else {
//     return "Error : Bro where is the parameter";
//   }
// };
// console.log(checkTypeNumber(10));
// console.log(checkTypeNumber(9));
// console.log(checkTypeNumber("3"));
// console.log(checkTypeNumber({}));
// console.log(checkTypeNumber([]));
// console.log(checkTypeNumber());

// baris pertama membuat function dengan nama CheckTypeNumber dengan 1 parameter (angka)
// lalu baris selanjutnya saya membuat if bersarang, jika yang di masukan angka maka masuk ke kondisi selanjutnya
// lalu jika type yang di masukan angka number maka masuk ke kondisi selanjutnya
// lalu jika angka yang di bagi 2 sisa hasilnya 0 maka mengembalikan angka yang di masukan di argument dan string bilangan genap
// lalu di kondisi else (salah) jika yang angka yang di masukan sisa hasil baginya 1 makan mengembalikan angka yang di masukan dan string bilangan ganjil
// lalu di kondisi else untuk if jika yang di masukan tipe number,makan mengembalikan string "Error : invalid data type"
// lalu untuk else yang terakhir itu jika yang di masukan angka atau kosong maka mengembalikan string Error : Bro where is the parameter
// lalu conso.log untuk mengisi parameter di function checkTypeNumber
// akhir nomor 2

// awal nomor 3

// function getAngkaTerbesarKedua(dataAngka) {
//   if (!dataAngka) {
//     return "Error: please input score array ";
//   }
//   const sorting = dataAngka.sort(function (a, b) {
//     return b - a;
//   });
//   return sorting[1];
// }
// const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
// console.log(getAngkaTerbesarKedua(dataAngka));
// console.log(getAngkaTerbesarKedua(0));
// console.log(getAngkaTerbesarKedua());

// di baris pertama saya membuat function biasa dengan nama getAngkaTerbesarKedua dan satu parameter yang bernama dataAngka
// lalu di baris selanjutnya saya memberikan if jika bukan data angka yang di masukan maka mengembalikan string "Error: please input score array
// lalu di baris selanjutnya const sorting yaitu saya membuat variable dengan nama sorting, lalu data angka di sort yang bertujuan untuk mengurutkan dari angka kecil ke terbesar
// lalu function dengan parameter a,b itu untuk mengembalikan jadi angka terbesar ke kecil
// lallu return sorting [1] yang berarti mengembalikan variable sorting yang memanggil array ke 1 dari hasil sort
// lalu const dataAngka itu untuk menampung array
// lalu console.log itu untuk menampilkan yang di dalamkurungnya isi dari parameter dataAngka
// akhir nomor 3

// awal nomor 4
// const dataPenjualanPakAldi = [
//   {
//     namaProduct: "sepatu futsal nike Vapor academy 8",
//     hargaSatuan: 760000,
//     kategori: "sepatu sport ",
//     totalTerjual: 90,
//   },
//   {
//     namaProduct: "sepatu warior tristan black brown high",
//     hargaSatuan: 960000,
//     kategori: "sepatu sneaker ",
//     totalTerjual: 37,
//   },
//   {
//     namaProduct: "sepatu warior tristan maroon high",
//     hargaSatuan: 360000,
//     kategori: "sepatu sport ",
//     totalTerjual: 90,
//   },
//   {
//     namaProduct: "sepatu warior rainbrow tosca corduroy",
//     hargaSatuan: 120000,
//     kategori: "sepatu sneaker ",
//     totalTerjual: 90,
//   },
// ];
// hitungTotalPenjualan = (dataPenjualan) => {
//   let total = 0;
//   dataPenjualanPakAldi.filter((value) => {
//     if (dataPenjualanPakAldi == dataPenjualan) {
//       if (typeof value.totalTerjual == "number") {
//         total += value.totalTerjual;
//       }
//     }
//   });
//   return { total: total };
// };
// console.log(hitungTotalPenjualan(dataPenjualanPakAldi));

// pertama saya membuat function hitungTotalPenjualan dengan parameter dataPenjualan
// lalu di baris selanjutnya saya membuat variabel kosong yang berfungsi untuk menampung jumlah total terjual
// lalu saya membuat data filter yang berfungsi untuk memfilter data array
// lalu di dalam filternya saya membuat if untuk algoritmanya jika dataPenjualanPakAldi == dataPenjualan maka masuk ke kondisi selanjutnya
// jika typedata total terjual == number maka jumlah total terjual di masukan ke variable total
// lalu saya mereturn total di bagian akhir baris function
// lalu di baris selanjutnya console.log function hitungTotalPenjualan yang di dalamnya dataPenjualanPakAldi
// akhir nomor 4

// awal nomor 5
// const dataPenjualanNovel = [
//   {
//     idProduct: "BOOK002421",
//     namaProduk: "Pulang - Pergi",
//     penulis: "Tere Liye",
//     hargaBeli: 60000,
//     hargaJual: 86000,
//     totalTerjual: 150,
//     sisaStok: 17,
//   },
//   {
//     idProduct: "BOOK002351",
//     namaProduk: "Selamat Tinggal",
//     penulis: "Tere Liye",
//     hargaBeli: 75000,
//     hargaJual: 103000,
//     totalTerjual: 171,
//     sisaStok: 20,
//   },
//   {
//     idProduct: "BOOK002941",
//     namaProduk: "Garis Waktu",
//     penulis: "Fiersa Besari",
//     hargaBeli: 67000,
//     hargaJual: 99000,
//     totalTerjual: 213,
//     sisaStok: 5,
//   },
//   {
//     idProduct: "BOOK002941",
//     namaProduk: "Laskar Pelangi",
//     penulis: "Andrea Hirata",
//     hargaBeli: 55000,
//     hargaJual: 68000,
//     totalTerjual: 20,
//     sisaStok: 56,
//   },
// ];

// // function untuk dataPenjualanNovel
// getInfoPenjualan = (dataPenjualan) => {
//   // variable untuk menampung nilai algoritmanya
//   let TotalKeuntunganBersih = 0;
//   let hargaModal = 0;
//   let hargaJual = 0;
//   let persentaseKeuntungan = 0;
//   let sorting = 0;
//   let sorting1 = 0;
//   // data map untuk menyaring nilai array
//   dataPenjualanNovel.map((value) => {
//     // rumus mencari hargamodal
//     hargaModal += value.hargaBeli * value.totalTerjual;
//     // rumus mencari totalkeuntungan kotor
//     hargaJual += value.hargaJual * value.totalTerjual;
//     // rumus mencari total keuntungan bersih
//     TotalKeuntunganBersih = hargaJual - hargaModal;
//     // rumus mencari persentasekeuntungan
//     persentaseKeuntungan = (TotalKeuntunganBersih / hargaModal) * 100;
//   });
//   // di taro di luar karena agar nilai di atasnya tidak ikut tersorting
//   // sorting untuk mengurutkan nilai total terjual dari besar ke kecil
//   sorting = dataPenjualanNovel.sort((a, b) => b.totalTerjual - a.totalTerjual);
//   sorting1 = dataPenjualanNovel.sort((a, b) => b.totalTerjual - a.totalTerjual);
//   return {
//     // tolocalestring untuk merubah number menjadi rupiah
//     // tofixed supaya ada 2 angka di belakang koma
//     totalKeuntungan: `Rp.${TotalKeuntunganBersih.toLocaleString("id-ID")}`,
//     hargaModal: `Rp.${hargaModal.toLocaleString("id-ID")}`,
//     persentaseKeuntungan: persentaseKeuntungan.toFixed(2) + "%",
//     // untuk menampilkan produk terlaris
//     produkBukuTerlaris: sorting[0].namaProduk,
//     penulisTerlaris: sorting1[0].penulis,
//   };
// };
// console.log(getInfoPenjualan(dataPenjualanNovel));
