# 🧠 Auscreen Backend - Sistem Pakar Autisme

Halo! 👋 Selamat datang di repositori backend **Auscreen**. 

Auscreen adalah sebuah Sistem Pakar (*Expert System*) yang dirancang untuk melakukan tes *screening* awal autisme menggunakan instrumen **RAADS-R** (Ritvo Autism Asperger Diagnostic Scale-Revised). *Project* ini menggunakan metode **Forward Chaining** untuk memproses jawaban *user* dan memberikan hasil *scoring* yang akurat berdasarkan *rule* yang sudah ditentukan.

---

## 🛠️ Tech Stack yang Digunakan

* **Runtime:** Node.js
* **Framework:** Express.js
* **Dokumentasi API:** Swagger (Swagger UI & JSDoc)
* **Package Manager:** PNPM
* **CORS:** Diaktifkan untuk koneksi yang aman dengan *frontend*.

---

## 📂 Struktur Folder

Berdasarkan *commit* yang ada di repositori, berikut adalah gambaran arsitektur file *project* ini:

* **`data/`** ➡️ Berisi data statis seperti 80 pertanyaan RAADS-R, konfigurasi *domain*, dan opsi jawaban (file: `raadsData.js`).
* **`services/`** ➡️ Tempat *logic* utama bersarang. Di sinilah otak dari sistem pakar berada, yaitu algoritma perhitungan *Forward Chaining* (file: `forwardChaining.js`).
* **`app.js`** ➡️ *Entry point* dari aplikasi. Mengatur *server*, *middleware*, Swagger, dan *routing API*.
* **`package.json` & `pnpm-lock.yaml`** ➡️ Catatan *dependencies* dan *script* untuk menjalankan *project*.

---

## 🚀 Cara Menjalankan di Lokal (Local Setup)

Buat kamu yang mau *clone* atau mencoba menjalankan *backend* ini di komputer sendiri, ikuti langkah super gampang ini:

1. Pastikan kamu sudah menginstal **Node.js** dan **PNPM**.
2. *Clone* repositori ini ke komputer kamu:
   ```bash
   git clone <link-repositori-kamu>