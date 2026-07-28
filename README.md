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

