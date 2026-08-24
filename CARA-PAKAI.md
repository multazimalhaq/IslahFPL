# Cara Pakai — FPL League Tracker

Halo! Ini adalah template website untuk memantau poin liga classic Fantasy Premier League (FPL) kamu — otomatis update sendiri, tampilan bagus, dan bisa dibuka siapa saja lewat link. Kamu tidak perlu bisa ngoding untuk memasangnya. Cukup ikuti langkah-langkah di bawah ini satu per satu.

Waktu yang dibutuhkan: sekitar 20–30 menit untuk pertama kali. Setelah itu, website akan update sendiri otomatis setiap beberapa jam, kamu tidak perlu ngapa-ngapain lagi.

## Yang kamu butuhkan

- Akun GitHub gratis. Kalau belum punya, daftar dulu di [github.com](https://github.com) (gratis, cuma butuh email).
- ID Liga classic FPL kamu (cara mencarinya ada di Langkah 2).
- File ZIP template ini, yang sudah kamu dapat.

Tidak perlu kartu kredit, tidak perlu install software berat. Semua gratis.

## Langkah 1 — Ekstrak file ZIP

Ekstrak (unzip) file ZIP yang kamu terima ke folder mana saja di komputer kamu. Setelah diekstrak, kamu akan melihat isinya seperti ini:

```
config.js
data.json
index.html
CARA-PAKAI.md
scripts/fetch-data.mjs
.github/workflows/update-data.yml
```

Kalau setelah ekstrak ternyata isinya adalah satu folder lagi di dalam folder (misalnya `fpl-template/fpl-template/...`), masuk saja ke folder paling dalam itu — itu yang isinya file-file di atas.

## Langkah 2 — Cari ID Liga FPL kamu

1. Buka [fantasy.premierleague.com](https://fantasy.premierleague.com) dan login ke akun FPL kamu.
2. Masuk ke halaman liga classic kamu (menu "Leagues" → pilih liga kamu).
3. Lihat alamat (URL) di address bar browser. Bentuknya kira-kira begini:

   ```
   https://fantasy.premierleague.com/leagues/754072/standings/c
   ```

4. Angka setelah `/leagues/` itulah ID Liga kamu. Di contoh di atas, ID-nya adalah `754072`. Catat angka ini.

## Langkah 3 — Edit file `config.js`

Ini satu-satunya file yang perlu kamu ubah. Buka file `config.js` pakai aplikasi Notepad (Windows), TextEdit (Mac, mode "plain text"), atau aplikasi edit teks apa saja — jangan pakai Microsoft Word.

Isinya kira-kira begini, dan sudah ada penjelasan di tiap barisnya (dalam bentuk komentar setelah tanda `//`):

```js
export default {
  leagueId: 754072,        // <-- ganti dengan ID liga kamu dari Langkah 2
  season: "2026/27",       // <-- ganti dengan label musim kamu, bebas
  logoUrl: "",              // <-- link gambar logo liga kamu (opsional)
  prizes: {
    monthlyPoints: true,    // true = tampilkan kategori ini, false = sembunyikan
    gwWins: true,
    seasonChampion: true
  },
  theme: "verdant"          // pilih salah satu tema di bawah
};
```

Yang perlu kamu ubah:

- **`leagueId`** — wajib diganti dengan ID liga kamu dari Langkah 2. Ini angka tanpa tanda kutip, contoh: `leagueId: 754072,`
- **`season`** — label musim yang tampil di teks halaman, bebas mau ditulis apa, contoh `"2026/27"`.
- **`logoUrl`** — kalau liga kamu punya logo, upload gambarnya ke internet dulu (bisa pakai [imgur.com](https://imgur.com), tinggal drag-drop gambar lalu salin link-nya), lalu tempel link itu di sini di antara tanda kutip. Kalau tidak punya logo, biarkan saja `""` (kosong) — nanti otomatis tidak ditampilkan.
- **`prizes`** — tiga kategori hadiah yang bisa kamu aktifkan atau matikan satu-satu. Ganti `true` jadi `false` untuk kategori yang tidak kamu pakai di liga kamu. Kalau dimatikan, kartu dan tabel yang berhubungan otomatis hilang dari halaman.
- **`theme`** — pilih salah satu tema tampilan, tulis persis salah satu dari daftar ini (pakai tanda kutip):
  - `"verdant"` — hijau gelap dengan aksen emas, kesan klasik dan elegan
  - `"midnight"` — navy gelap dengan aksen biru terang, kesan modern dan techy
  - `"ember"` — coklat gelap dengan aksen oranye, kesan hangat dan berani
  - `"daylight"` — putih bersih dengan aksen biru, kesan terang dan korporat

Setelah selesai edit, simpan file-nya (Save / Ctrl+S), pastikan tetap tersimpan sebagai `config.js` (jangan berubah jadi `.txt`).

## Langkah 4 — Buat repository GitHub baru

1. Login ke [github.com](https://github.com).
2. Klik tombol **+** di kanan atas → **New repository**.
3. Isi nama repository terserah kamu, contoh: `liga-fpl-ku`.
4. Pastikan pilihan **Public** dipilih (bukan Private) — ini penting supaya GitHub Pages bisa dipakai gratis.
5. Jangan centang opsi "Add a README file" atau apapun lainnya — biarkan kosong.
6. Klik **Create repository**.

## Langkah 5 — Upload file-file template ke repository

Cara paling gampang buat yang belum terbiasa pakai command line adalah lewat **GitHub Desktop** (aplikasi resmi GitHub, gratis):

1. Download dan install [GitHub Desktop](https://desktop.github.com), lalu login pakai akun GitHub kamu.
2. Di GitHub Desktop, pilih **File → Clone repository**, pilih repository yang baru kamu buat di Langkah 4, dan pilih folder tujuan di komputer kamu (pastikan folder ini kosong, belum ada isinya).
3. Setelah proses clone selesai, buka folder hasil clone tadi lewat File Explorer / Finder, lalu salin (copy-paste) SEMUA isi folder template hasil ekstrak Langkah 1 ke dalam folder itu (termasuk file yang namanya diawali titik seperti `.gitignore` dan folder `.github` — di Windows/Mac kadang file/folder ini "tersembunyi", aktifkan opsi "show hidden files" kalau perlu supaya kamu yakin semuanya ikut ter-copy).
4. Kembali ke GitHub Desktop — akan muncul daftar file yang berubah. Isi kotak "Summary" di kiri bawah dengan tulisan bebas, misalnya `Setup awal liga`, lalu klik **Commit to main**.
5. Klik tombol **Push origin** di bagian atas untuk mengirim file-file itu ke GitHub.

Kalau kamu lebih terbiasa pakai Terminal / Command Prompt, langkah 4–5 di atas juga bisa dilakukan lewat perintah `git add`, `git commit`, dan `git push` — tapi untuk kebanyakan orang, GitHub Desktop jauh lebih gampang.

## Langkah 6 — Nyalakan pembaruan data otomatis

1. Di halaman repository kamu di GitHub, klik tab **Settings** → di sidebar kiri klik **Actions** → **General**.
2. Scroll ke bagian **Workflow permissions**, pilih **Read and write permissions**, lalu klik **Save**.
3. Klik tab **Actions** di bagian atas repository.
4. Kamu akan melihat workflow bernama **"Update FPL data"**. Klik nama itu.
5. Klik tombol **Run workflow** di sebelah kanan, lalu klik tombol hijau **Run workflow** yang muncul.
6. Tunggu sekitar 30–60 detik sampai muncul tanda centang hijau ✅ — ini artinya data liga kamu berhasil diambil dan disimpan.

Setelah ini, workflow yang sama akan berjalan otomatis setiap 6 jam sekali untuk memperbarui data — kamu tidak perlu klik "Run workflow" lagi kecuali mau memaksa update secepatnya.

## Langkah 7 — Nyalakan GitHub Pages (biar websitenya bisa dibuka)

1. Masih di tab **Settings**, klik **Pages** di sidebar kiri.
2. Di bagian **Build and deployment** → **Source**, pilih **Deploy from a branch**.
3. Di bagian **Branch**, pilih `main` dan folder `/ (root)`, lalu klik **Save**.
4. Tunggu sekitar 1–2 menit, lalu refresh halaman itu. Akan muncul link website kamu, bentuknya kira-kira:

   ```
   https://nama-akun-kamu.github.io/nama-repository-kamu/
   ```

5. Klik link itu — website liga kamu sudah bisa dibuka siapa saja!

## Selesai

Website kamu sekarang sudah hidup dan akan update otomatis setiap 6 jam. Bagikan link-nya ke teman-teman satu liga kamu.

Kalau nanti mau ganti tema, nyalakan/matikan kategori hadiah, atau ganti logo, cukup edit lagi file `config.js` (Langkah 3), lalu commit & push ulang lewat GitHub Desktop (Langkah 5) — tidak perlu ulangi langkah lainnya.

---

## Kalau ada masalah (Troubleshooting)

**"This folder contains files. Git can only clone to empty folders"** waktu clone di GitHub Desktop
→ Folder tujuan yang kamu pilih ternyata tidak benar-benar kosong (kadang ada file tersembunyi seperti `.git` atau `.gitattributes` sisa percobaan sebelumnya). Hapus dulu semua isi folder itu, lalu ulangi proses clone.

**Halaman GitHub Pages bilang "Upgrade or make this repository public to enable Pages"**
→ Ini karena repository kamu masih **Private**. GitHub Pages gratis hanya untuk repository Public. Masuk ke **Settings → General → Danger Zone → Change repository visibility**, ubah jadi **Public** (gratis, tidak perlu upgrade apapun), lalu ulangi Langkah 7.

**Website menampilkan "Data belum tersedia..."**
→ Artinya workflow pengambilan data belum pernah dijalankan. Ulangi Langkah 6 (Run workflow), tunggu sampai selesai (centang hijau), lalu refresh halaman websitenya.

**Sudah edit `config.js` tapi perubahannya tidak muncul di website**
→ Perubahan file di komputer kamu tidak otomatis terkirim ke GitHub. Kamu harus **Commit** lalu **Push** lewat GitHub Desktop setiap kali selesai mengedit (lihat Langkah 5, poin 4–5). Setelah push, tunggu 1–2 menit lalu refresh website kamu (kalau perlu, refresh sambil menekan Ctrl+Shift+R / Cmd+Shift+R supaya tidak pakai cache lama).

**`git push` ditolak dengan pesan "rejected" / "fetch first"**
→ Biasanya terjadi kalau repository GitHub kamu ternyata tidak benar-benar kosong saat dibuat. Kalau kamu yakin repository itu baru dan tidak ada isi penting di dalamnya, di GitHub Desktop kamu bisa memakai menu **Repository → Push (force)**, atau lewat Terminal jalankan `git push -u origin main --force`. Hati-hati, opsi force ini akan menimpa apapun yang ada di remote — hanya lakukan ini kalau kamu yakin repository itu memang baru dan kosong.

**Salah memasukkan alamat remote repository (remote URL) waktu setup lewat Terminal**
→ Kalau muncul error "Repository not found" setelah `git push`, kemungkinan alamat remote yang kamu masukkan salah (misalnya copy-paste contoh, bukan alamat repository kamu sendiri). Perbaiki dengan `git remote remove origin` lalu `git remote add origin <alamat-repository-kamu-yang-benar>`.

**Data liga tidak berubah walau sudah lama nunggu**
→ Cek tab **Actions** di repository kamu — kalau ada tanda silang merah ❌ pada run terakhir, klik untuk lihat detail errornya (biasanya karena ID liga di `config.js` salah/tidak valid, atau liga-nya di-set private oleh admin liganya di aplikasi FPL — pastikan liga kamu bisa dilihat publik).

**Mau ganti ID liga, logo, tema, atau kategori hadiah nanti-nanti**
→ Tidak perlu mengulang semua langkah dari awal. Cukup edit `config.js` lagi di komputer kamu, lalu **Commit** dan **Push** lewat GitHub Desktop. Website akan otomatis menampilkan perubahannya setelah 1–2 menit.

---

Selamat menikmati dashboard liga FPL kamu! 🏆
