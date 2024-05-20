function tambah() {
    // Mendapatkan nilai input dari elemen dengan id 'num1' dan 'num2'
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    // Mengecek apakah input valid
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('hasil').innerText = 'Silakan masukkan kedua bilangan bulat!';
        return;
    }

    // Menjumlahkan kedua bilangan bulat
    const hasil = num1 + num2;

    // Menampilkan hasil penjumlahan
    document.getElementById('hasil').innerText = `Hasil penjumlahan: ${hasil}`;
}
