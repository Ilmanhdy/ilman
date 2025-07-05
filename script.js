function tampilkanPesan() {
  document.getElementById("pesan").textContent = "ANGGOTA KELUARGA SEMANGGI";

  const gambar1 = document.getElementById("gambar1");
  const gambar2 = document.getElementById("gambar2");

  gambar1.src = "https://ft.um.ac.id/wp-content/uploads/2024/08/LOGOBARU.jpeg";
  gambar2.src = "https://ft.um.ac.id/wp-content/uploads/2024/08/LOGOBARU.jpeg";

  gambar1.style.display = "inline-block";
  gambar2.style.display = "inline-block";
}
