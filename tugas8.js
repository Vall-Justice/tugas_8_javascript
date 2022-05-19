// Tugas 8 Niomic

let barang = {
   nama: "Motor Beat",
   harga: 21_999_999 , // 21 juta 999999
   tahun: 2020,
   kelengkapan: ["BPKP", "STNK", "License Plat", "Garansi"],
   
}

console.log(barang);
console.log(barang.nama);
console.log(barang.tahun);

// Menambahkan property
barang.bonus = ["Oli", "Asuransi", "Helem"];
console.log(barang);

// mengubah tahun barang
barang.tahun = 2021;
console.log(barang.tahun);
console.log(barang);

