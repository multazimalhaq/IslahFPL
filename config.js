// ============================================================
//  KONFIGURASI LIGA — cuma file ini yang perlu diedit
//  (baca README.md kalau bingung, semua dijelasin di situ)
// ============================================================

export default {

  // ID Liga FPL kamu (angka di URL liga classic kamu di situs FPL,
  // contoh: fantasy.premierleague.com/leagues/754072/standings/c
  // maka ID-nya adalah 754072)
  // ANGKA DI BAWAH INI CUMA CONTOH — WAJIB DIGANTI dengan ID liga kamu sendiri!
  leagueId: 754071,

  // Label musim yang lagi berjalan (cuma buat teks tampilan, isi bebas)
  season: "2026/27",

  // Link gambar logo liga kamu (harus link langsung ke file gambar,
  // contoh: https://contoh.com/logo.png). Kosongkan jadi "" kalau
  // gak mau pakai logo — nanti otomatis disembunyikan.
  logoUrl: "",

  // Kategori hadiah yang mau diaktifkan di liga kamu.
  // true = ditampilkan, false = disembunyikan (beserta tabel/card-nya)
  prizes: {
    monthlyPoints: true,   // Poin Tertinggi Tiap Bulan (Manager of the Month)
    gwWins: true,          // Terbanyak Rank #1 di tiap Gameweek
    seasonChampion: true   // Rank #1 Akhir Musim (Juara)
  },

  // Pilihan tema tampilan. Pilih salah satu (tulis persis salah satu dari ini):
  //   "verdant"   -> hijau gelap + aksen emas (klasik, elegan)
  //   "midnight"  -> navy gelap + aksen biru terang (modern, tech)
  //   "ember"     -> coklat gelap + aksen oranye (hangat, berani)
  //   "daylight"  -> putih bersih + aksen biru (terang, korporat)
  theme: "midnight"

};
