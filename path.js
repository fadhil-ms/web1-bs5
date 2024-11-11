// Fungsi untuk pencarian berdasarkan input
function searchFunction(event) {
    event.preventDefault(); // Mencegah form submit secara default

    // Mendapatkan elemen input dan nilainya
    const searchInput = document.getElementById("searchInput");

    // Memeriksa apakah input tersedia
    if (!searchInput) {
        console.error("Elemen input dengan id 'searchInput' tidak ditemukan.");
        return;
    }

    const query = searchInput.value.trim().toLowerCase(); // Mengambil nilai input dan menghapus spasi ekstra

    // Memeriksa jika input kosong
    if (query === "") {
        alert("Silakan masukkan kata pencarian.");
        return;
    }

    // Cek jika input sama dengan "dokumentasi"
    if (query === "dokumentasi") {
        window.location.href = "slide.html"; // Redirect ke halaman dokumentasi
    } else {
        alert("Pencarian tidak ditemukan."); // Tampilkan alert jika tidak sesuai
    }
}
