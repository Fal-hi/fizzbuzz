// Temukan angka besar dan kecil
const angka = [4, 43, 9, 71, 20, 10, 78, 102, 84, 3];

const urutkan = angka.slice().sort((a, b) => {
  return a - b;
});
const terkecil = urutkan[0];
const terbesar = urutkan[urutkan.length - 1];

console.log(angka);
console.log("Yang terbesar adalah angka ", terbesar);
console.log("Yang terkecil adalah angka ", terkecil);
