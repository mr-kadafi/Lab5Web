// Latihan 1 — Menampilkan output
// document.getElementById("pesan").textContent = "Hello World";
// console.log("Hello World");

// Latihan 2 — Alert dan prompt
// const namaPengguna = prompt("Masukkan nama Anda:", "");
// if (namaPengguna && namaPengguna.trim() !== "") {
//     alert("Halo, " + namaPengguna + "!");
//     document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
// } else {
//     alert("Nama belum diisi.");
// }

// Latihan 3 — Function dan operasi aritmetika
// function operasiDasar(a, b) {
//     console.log("Penjumlahan:", a + b);
//     console.log("Pengurangan:", a - b);
//     console.log("Perkalian:", a * b);
//     console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
//     console.log("Modulus:", a % b);
// }
// operasiDasar(9, 4);

// Latihan 3 — Function dan operasi aritmetika (modifikasi)

// function operasiDasar(a, b) {
//     console.log("Penjumlahan:", a + b);
//     console.log("Pengurangan:", a - b);
//     console.log("Perkalian:", a * b);
//     console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
//     console.log("Modulus:", a % b);
// }

// const nilai1 = Number(prompt("Masukkan nilai pertama:"));
// const nilai2 = Number(prompt("Masukkan nilai kedua:"));

// if (
//     Number.isFinite(nilai1) &&
//     Number.isFinite(nilai2) &&
//     !Number.isNaN(nilai1) &&
//     !Number.isNaN(nilai2)
// ) {
//     operasiDasar(nilai1, nilai2);
// } else {
//     console.log("Input tidak valid. Masukkan angka yang benar.");
// }

// Latihan 4 — Seleksi kondisi if–else
// const inputNilai = prompt("Masukkan nilai (0–100):");
// const nilaiMahasiswa = Number(inputNilai);

// if (inputNilai === null || inputNilai.trim() === "" ||
//     Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
//     alert("Input nilai tidak valid.");
// } else if (nilaiMahasiswa >= 60) {
//     alert("Lulus");
// } else {
//     alert("Belum lulus");
// }

// Latihan 5 — Seleksi kondisi switch
// const inputPilihan = prompt("Masukkan angka 1–5:");
// switch (inputPilihan) {
//     case "1": alert("Bilangan satu"); break;
//     case "2": alert("Bilangan dua"); break;
//     case "3": alert("Bilangan tiga"); break;
//     case "4": alert("Bilangan empat"); break;
//     case "5": alert("Bilangan lima"); break;
//     default: alert("Pilihan tidak tersedia");
// }

// Latihan 6 — Form bilangan genap atau ganjil = DI INDEX.HTML
// Latihan 7 — Mengubah warna halaman = DI INDEX.HTML
// Latihan 8 — DOM dan checkbox menu makanan = DI INDEX.HTML


// perulangan untuk menampilkan tabel perkalian angka 7 dari 1 sampai 10

// for (let i = 1; i <= 10; i++) {
//     console.log("7 x " + i + " = " + (7 * i));
// }

// cekGenap (angka) yang mengembalikan true jika angka genap
// function cekGenap(angka) {
//     return angka % 2 === 0;
// }

// const input = prompt("Masukkan sebuah angka:");

// if (input !== null && input.trim() !== "" && Number.isInteger(Number(input))) {
//     const angka = Number(input);
//     console.log(cekGenap(angka));
// } else {
//     console.log("Input tidak valid. Masukkan bilangan bulat.");
// }

// cekGenap (angka) yang mengembalikan true jika angka genap (validasi)
// function cekGenap(angka) {
//     return angka % 2 === 0;
// }

// const input = prompt("Masukkan sebuah angka:");

// if (input === null || input.trim() === "") {
//     console.log("Kolom tidak boleh kosong!");
// } else if (!Number.isInteger(Number(input))) {
//     console.log("Input harus berupa bilangan bulat!");
// } else {
//     const angka = Number(input);
//     console.log(cekGenap(angka));
// }