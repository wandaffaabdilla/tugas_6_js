function tugas6() {
  for (var x = 1; x <= 20; x++) {
    console.log(x);
  }
}
console.log("angka yang ditampilkan :");
tugas6();
console.log("");
function tugas6_2() {
  for (var y = 1; y <= 20; y++) {
    if (y % 2 == 0) {
      console.log("bilangan genap", y);
    } else if (y % 1 == 0) {
      console.log(y);
    }
  }
}
console.log("===================================");
console.log("hasil ganjil genap");
console.log("===================================");
console.log("");
tugas6_2();
