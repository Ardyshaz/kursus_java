# 🤝 Jom tambah nota Day 2 dan Day 3!

Saya juga masih beginner dan sedang belajar Java. Repository ini dibuka supaya kita boleh **belajar sama-sama**, mengumpulkan apa yang dibuat semasa kelas dan menjadikannya rujukan bersama.

Kalau anda mengikuti kursus yang sama, mempunyai catatan tambahan, mahu membetulkan kesalahan atau mahu membantu menyiapkan Day 2 dan Day 3—contribution anda sangat dialu-alukan.

Anda boleh menyumbang:

- Nota dan langkah praktikal Day 2 atau Day 3
- Code snippet yang ditaip semasa lab
- Hasil output dalam browser atau Eclipse Console
- Penerangan istilah Java yang lebih mudah
- Rajah aliran dan contoh code → output
- Pembetulan fakta, ejaan atau susunan ayat
- Soalan quiz dan flash card tambahan
- Penambahbaikan responsive layout dan accessibility

Tidak mengapa jika anda juga baru belajar. Hantar apa yang anda catat; kita boleh semak dan baiki bersama melalui **Pull Request**.

---

## Cara contribute keseluruhan website

Workflow yang digunakan:

```text
Fork repository
      ↓
Download/Clone ke komputer
      ↓
Buat branch baharu
      ↓
Edit dan semak website
      ↓
Commit + Push
      ↓
Buka Pull Request
      ↓
Review + Merge ke main
      ↓
GitHub Pages publish automatik
```

### 1. Fork repository

1. Buka [Ardyshaz/kursus_java](https://github.com/Ardyshaz/kursus_java).
2. Klik butang **Fork** di bahagian atas.
3. Pilih akaun GitHub anda.
4. Klik **Create fork**.

Fork ialah salinan repository ini di dalam akaun anda. Anda bebas membuat perubahan pada salinan tersebut tanpa mengganggu website live.

### 2. Buka menggunakan GitHub Desktop

1. Pada halaman fork anda, klik **Code**.
2. Pilih **Open with GitHub Desktop**.
3. Pilih lokasi untuk menyimpan projek.
4. Klik **Clone**.

Anda juga boleh menggunakan Git:

```bash
git clone https://github.com/USERNAME/kursus_java.git
cd kursus_java
```

Gantikan `USERNAME` dengan username GitHub anda.

### 3. Cipta branch untuk perubahan

Jangan terus bekerja pada branch `main`. Dalam GitHub Desktop:

1. Klik **Current branch**.
2. Klik **New branch**.
3. Gunakan nama yang menerangkan contribution anda.

Contoh:

```text
day-2-notes
day-3-servlet-exercise
fix-java-terminology
add-quiz-questions
```

Satu branch sebaiknya fokus pada satu topik supaya perubahan lebih mudah disemak.

### 4. Fahami fail website

```text
kursus_java/
├── index.html       # Kandungan nota dan struktur halaman
├── styles.css       # Warna, layout, responsive dan animation
├── script.js        # Quiz, search, flash card dan interaksi
├── version.json     # Nombor release untuk auto-refresh
└── README.md        # Penerangan dan panduan contribution
```

Panduan memilih fail:

| Perubahan | Fail yang perlu diedit |
|---|---|
| Tambah nota Day 2/Day 3 | `index.html` |
| Tukar reka bentuk atau responsive layout | `styles.css` |
| Tambah quiz, flash card atau interaksi | `script.js` |
| Terbitkan release baharu | `version.json`, `script.js`, `index.html` |
| Baiki panduan projek | `README.md` |

### 5. Tambah kandungan Day 2 atau Day 3

Cari placeholder berikut dalam `index.html`:

```html
<section id="day-2">
```

atau:

```html
<section id="day-3">
```

Gantikan placeholder dengan kandungan daripada kelas. Gunakan corak section Day 1 sebagai rujukan supaya reka bentuk kekal konsisten.

Untuk setiap topik, cuba sertakan:

1. Apa yang dipelajari
2. Maksud istilah baru
3. Langkah yang dilakukan dalam Eclipse
4. Code snippet sebenar
5. Hasil code dalam browser atau Console
6. Perkara penting untuk diingat

Gunakan Bahasa Melayu yang mudah. Kekalkan istilah teknikal seperti `Servlet`, `Class`, `Method`, `Request` dan `Response` dalam English.

### 6. Uji secara lokal

Website ini tidak memerlukan pemasangan dependency. Buka `index.html` terus atau gunakan Laragon:

```text
http://localhost/kursus_java/
```

Sebelum menghantar contribution, semak:

- Website boleh dibuka tanpa error
- Kandungan boleh dibaca pada desktop dan mobile
- Dark Mode masih berfungsi
- Search, accordion dan navigation masih berfungsi
- Butang Copy Code masih berfungsi
- Quiz memaparkan score dan jawapan dengan betul
- Tiada maklumat peribadi, password atau API key dimasukkan

### 7. Naikkan nombor versi

Langkah ini hanya diperlukan jika Pull Request anda mengubah website, bukan jika hanya mengubah `README.md`.

Gunakan nombor versi baharu yang sama pada tiga tempat:

**`script.js`**

```javascript
const APP_VERSION = "2026.07.28.2";
```

**`version.json`**

```json
{
  "version": "2026.07.28.2"
}
```

**`index.html`**

```html
<link rel="stylesheet" href="styles.css?v=2026.07.28.2">
<script src="script.js?v=2026.07.28.2"></script>
```

Nombor pada ketiga-tiga tempat mesti sama. Sistem ini memastikan pengguna menerima CSS, JavaScript dan kandungan terkini.

### 8. Commit dan Push

Dalam GitHub Desktop:

1. Semak senarai fail yang berubah.
2. Isi ruangan **Summary**, contohnya:

```text
Add Day 2 Servlet notes
```

3. Klik **Commit to day-2-notes**.
4. Klik **Push origin** atau **Publish branch**.

Commit ialah rekod perubahan pada komputer anda. Push menghantar commit tersebut ke fork di GitHub.

### 9. Buka Pull Request

1. Buka fork anda di GitHub.
2. Klik **Compare & pull request**.
3. Pastikan:

```text
base repository: Ardyshaz/kursus_java
base branch: main
head repository: USERNAME/kursus_java
compare branch: branch-anda
```

4. Berikan tajuk yang jelas.
5. Terangkan apa yang ditambah atau dibetulkan.
6. Jika ada perubahan visual, sertakan screenshot.
7. Klik **Create pull request**.

Contoh penerangan:

```markdown
## Apa yang ditambah

- Nota Day 2 tentang JSP
- Code snippet latihan kelas
- Penerangan hubungan JSP dan Servlet
- Lima soalan quiz baharu

## Semakan

- [x] Diuji pada desktop
- [x] Diuji pada mobile
- [x] Dark Mode berfungsi
- [x] Nombor versi dikemas kini
```

### 10. Review dan penerbitan

Pull Request akan disemak sebelum digabungkan. Mungkin ada soalan atau cadangan pembetulan—itu perkara biasa dan sebahagian daripada proses belajar bersama.

Selepas Pull Request diterima dan di-merge ke branch `main`:

1. GitHub Pages memulakan deployment.
2. Website live dikemas kini secara automatik.
3. Sistem versioning memberitahu tab yang masih terbuka bahawa versi baharu tersedia.

Website live:

**[https://ardyshaz.github.io/kursus_java/](https://ardyshaz.github.io/kursus_java/)**

---

# Kursus Java — Nota Interaktif

Website dokumentasi statik untuk kursus **Asas Pembangunan Aplikasi Web Menggunakan Java**. Kandungan semasa merangkumi Day 1 berdasarkan projek latihan `MyApp`, Java 8 dan Apache Tomcat 9.

## Buka secara lokal

Tiada pemasangan diperlukan. Buka `index.html` terus dalam browser, atau akses melalui Laragon:

```text
http://localhost/kursus_java/
```

## Fail utama

```text
kursus_java/
├── index.html     # Kandungan dan struktur
├── styles.css     # Reka bentuk, dark mode dan print layout
├── script.js      # Search, quiz, flash card dan interaksi
└── README.md
```

Day 2 dan Day 3 boleh ditambah sebagai `<section>` baharu dalam `index.html`. Gunakan corak section sedia ada supaya reka bentuk kekal konsisten.

## Cache dan release baharu

Website menyemak `version.json` setiap 60 saat. Apabila menerbitkan perubahan baharu:

1. Tukar nombor `APP_VERSION` dalam `script.js`.
2. Tukar nombor `version` dalam `version.json` kepada nilai yang sama.
3. Tukar query `?v=` pada `styles.css` dan `script.js` dalam `index.html`.

Contoh release seterusnya:

```text
2026.07.28.2
```

Tab yang masih terbuka akan mengesan versi baharu, memaparkan notis dan reload secara automatik.

## Upload ke GitHub

1. Daftar atau log masuk di [GitHub](https://github.com/).
2. Klik **New repository**.
3. Berikan nama, contohnya `kursus-java`.
4. Pilih **Public** supaya nota boleh dibaca oleh peserta lain.
5. Jangan tambah README baharu jika menggunakan folder ini kerana fail README sudah tersedia.
6. Di terminal dalam folder `kursus_java`, jalankan:

```bash
git init
git add .
git commit -m "Terbitkan nota interaktif Kursus Java Day 1"
git branch -M main
git remote add origin https://github.com/USERNAME/kursus-java.git
git push -u origin main
```

Gantikan `USERNAME` dengan username GitHub anda.

## Aktifkan GitHub Pages

1. Buka repository di GitHub.
2. Pergi ke **Settings** → **Pages**.
3. Di bahagian **Build and deployment**, pilih **Deploy from a branch**.
4. Pilih branch **main** dan folder **/ (root)**.
5. Klik **Save**.
6. Tunggu beberapa minit sehingga GitHub selesai menerbitkan website.

## Akses secara public

Alamat biasanya berbentuk:

```text
https://USERNAME.github.io/kursus-java/
```

Setiap kali nota Day 2 atau Day 3 dikemaskini:

```bash
git add .
git commit -m "Kemas kini nota Day 2"
git push
```

GitHub Pages akan menerbitkan versi baharu secara automatik.

## Ketepatan nota

- Projek sebenar bernama `MyApp`; `myapp.com` bukan nama projek yang ditemui.
- Projek menggunakan `src/main/java` dan `src/main/webapp`, bukan struktur Eclipse lama `WebContent`.
- Tomcat 9 menggunakan `javax.servlet.*`; Tomcat 10+ menggunakan `jakarta.servlet.*`.
- `servlet-api.jar` disediakan oleh Tomcat ketika runtime.
- POST bukan automatik secure; HTTPS masih diperlukan.
