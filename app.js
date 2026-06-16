// File: app.js

const express = require("express");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const { QUESTIONS, DOMAINS, RESPONSE_OPTIONS } = require("./data/raadsData");
const { runForwardChaining } = require("./services/forwardChaining");

const app = express();
const port = 3000;

// ==========================================
// SWAGGER CONFIGURATION
// ==========================================
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Sistem Pakar RAADS-R",
      version: "1.0.0",
      description:
        "Dokumentasi interaktif API untuk UAS Sistem Pakar menggunakan algoritma Forward Chaining.",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
        description: "Development Server Lokal",
      },
    ],
  },
  apis: ["./app.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Mengambil aset UI Swagger dari CDN agar tidak crash di Vercel
const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui.min.css";

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    customCssUrl: CSS_URL,
    customJs: [
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui-bundle.js",
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui-standalone-preset.js",
    ],
  }),
);

// ==========================================
// MIDDLEWARE
// ==========================================
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "Server Backend Sistem Pakar (RAADS-R) Berjalan Lancar! Cek /api-docs untuk dokumentasi.",
  );
});

// ==========================================
// ENDPOINT 1: MENGIRIM SOAL KE FRONTEND
// ==========================================
/**
 * @swagger
 *  /api/questions:
 *    get:
 *      summary: Mengambil daftar 80 soal RAADS-R beserta config domain dan opsi jawaban.
 *      tags: [Sistem Pakar]
 *      responses:
 *        200:
 *          description: Berhasil mengambil data soal
 */
app.get("/api/questions", (req, res) => {
  const formattedQuestions = QUESTIONS.map((q) => ({
    id: q.id,
    domain: q.domain,
    text: q.text,
    reversed: q.reversed || false,
  }));

  const formattedDomains = {};
  for (const key in DOMAINS) {
    formattedDomains[key] = {
      label: DOMAINS[key].label,
      total: DOMAINS[key].total,
    };
  }

  res.json({
    questions: formattedQuestions,
    domains: formattedDomains,
    options: RESPONSE_OPTIONS,
  });
});

// ==========================================
// ENDPOINT 2: MENERIMA JAWABAN & MENGIRIM HASIL
// ==========================================
/**
 * @swagger
 *   /api/calculate:
 *   post:
 *       summary: Menghitung skor RAADS-R menggunakan algoritma Forward Chaining.
 *       tags: [Sistem Pakar]
 *       requestBody:
 *       required: true
 *       content:
 *           application/json:
 *           schema:
 *               type: object
 *               properties:
 *               answers:
 *                   type: object
 *                   example: {"0": 3, "1": 2, "2": 1, "3": 0}
 *                   description: Object berisi index soal sebagai key dan value jawaban (0-3).
 *       responses:
 *         200:
 *           description: Hasil perhitungan sistem pakar berhasil dikembalikan.
 *         400:
 *           description: Data jawaban tidak valid atau kosong.
 *         500:
 *           description: Terjadi kesalahan di server.
 */
app.post("/api/calculate", (req, res) => {
  try {
    const userAnswers = req.body.answers;

    if (!userAnswers || Object.keys(userAnswers).length === 0) {
      return res
        .status(400)
        .json({ error: "Data jawaban tidak ditemukan atau kosong." });
    }

    const result = runForwardChaining(userAnswers);
    res.json(result);
  } catch (error) {
    console.error("Terjadi error pada proses kalkulasi:", error);
    res
      .status(500)
      .json({ error: "Terjadi kesalahan pada server saat menghitung skor." });
  }
});

// ==========================================
// JALANKAN SERVER
// ==========================================
app.listen(port, () => {
  console.log(`✅ Backend Sistem Pakar berjalan di http://localhost:${port}`);
  console.log(`🚀 Dokumentasi Swagger : http://localhost:${port}/api-docs`);
});

module.exports = app;
