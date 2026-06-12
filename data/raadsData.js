// File: data/raadsData.js

const QUESTIONS = [
  // SOCIAL RELATEDNESS (29 items)
  { id: 1, domain: "S", text: "Menggunakan bahasa tubuh atau gestur tangan terasa canggung bagi saya." },
  { id: 2, domain: "S", text: "Saya tahu cara berteman dan menjalin hubungan dengan orang lain.", reversed: true },
  { id: 3, domain: "S", text: "Berbicara santai dalam percakapan sehari-hari terasa sangat sulit bagi saya." },
  { id: 4, domain: "S", text: "Saya merasa tidak tahu harus berkata apa saat bergaul." },
  { id: 5, domain: "S", text: "Saya sering tidak tahu apa yang harus dilakukan dalam situasi sosial." },
  { id: 6, domain: "S", text: "Secara alami saya pandai berinteraksi dan berkomunikasi dengan orang lain.", reversed: true },
  { id: 7, domain: "S", text: "Saya sering merasa ditolak tanpa mengerti mengapa." },
  { id: 8, domain: "S", text: "Saya sering tidak memahami apa yang orang lain maksudkan dari ucapannya." },
  { id: 9, domain: "S", text: "Beberapa orang menganggap saya aneh atau eksentrik." },
  { id: 10, domain: "S", text: "Saya menyukai percakapan yang mendalam tentang topik tertentu ketimbang obrolan santai." },
  { id: 11, domain: "S", text: "Saya kesulitan memahami ekspresi wajah atau bahasa tubuh orang lain." },
  { id: 12, domain: "S", text: "Saya merasa nyaman memulai percakapan dengan siapa saja.", reversed: true },
  { id: 13, domain: "S", text: "Saya bingung ketika orang berbicara tanpa langsung menyampaikan maksudnya." },
  { id: 14, domain: "S", text: "Saya kesulitan memahami sinyal non-verbal dalam interaksi sosial." },
  { id: 15, domain: "S", text: "Saya lebih mudah terhubung dengan orang yang jauh lebih muda atau lebih tua dari saya." },
  { id: 16, domain: "S", text: "Saya sering tidak tahu kapan giliran saya untuk berbicara." },
  { id: 17, domain: "S", text: "Membuat dan mempertahankan persahabatan terasa sangat sulit bagi saya." },
  { id: 18, domain: "S", text: "Saya sering salah memahami situasi sosial dan baru menyadarinya belakangan." },
  { id: 19, domain: "S", text: "Saya lebih suka menyendiri daripada bersama orang banyak." },
  { id: 20, domain: "S", text: "Saya merasa tidak cocok di manapun saya berada." },
  { id: 21, domain: "S", text: "Saya mengalami kesulitan menjaga kontak mata saat berbicara." },
  { id: 22, domain: "S", text: "Saya bisa membaca 'sinyal' sosial dengan baik.", reversed: true },
  { id: 23, domain: "S", text: "Saya sering tidak sengaja menyinggung perasaan orang lain." },
  { id: 24, domain: "S", text: "Humor atau sarkasme sering membingungkan saya." },
  { id: 25, domain: "S", text: "Saya lebih nyaman berinteraksi lewat teks daripada tatap muka." },
  { id: 26, domain: "S", text: "Saya kesulitan berempati dengan cara yang orang lain harapkan." },
  { id: 27, domain: "S", text: "Saya memahami norma sosial dengan mudah.", reversed: true },
  { id: 28, domain: "S", text: "Saya sering merasa seperti orang luar dalam situasi sosial." },
  { id: 29, domain: "S", text: "Saya berbicara dengan cara yang terasa 'berbeda' dibandingkan orang lain." },
  
  // LANGUAGE (7 items)
  { id: 30, domain: "L", text: "Saat anak-anak, saya sangat terlambat belajar berbicara." },
  { id: 31, domain: "L", text: "Saya pernah kehilangan kemampuan berbicara yang sudah saya miliki sebelumnya." },
  { id: 32, domain: "L", text: "Saya sering mengulang kata atau frasa berulang kali (menggemakan)." },
  { id: 33, domain: "L", text: "Saya sering berbicara dengan nada atau ritme yang tidak biasa." },
  { id: 34, domain: "L", text: "Saya pernah menggunakan kata-kata atau frasa yang saya buat sendiri." },
  { id: 35, domain: "L", text: "Kadang saya tidak bisa menemukan kata yang tepat, meskipun saya tahu maksudnya." },
  { id: 36, domain: "L", text: "Orang sering salah mengerti apa yang saya coba sampaikan." },
  
  // SENSORY-MOTOR (20 items)
  { id: 37, domain: "SM", text: "Suara keras atau tiba-tiba sangat mengganggu saya." },
  { id: 38, domain: "SM", text: "Cahaya terang atau kilatan sangat mengganggu saya." },
  { id: 39, domain: "SM", text: "Tekstur tertentu pada pakaian atau makanan terasa sangat tidak nyaman." },
  { id: 40, domain: "SM", text: "Saya sangat sensitif terhadap rasa sakit atau tidak sama sekali." },
  { id: 41, domain: "SM", text: "Bau tertentu sangat menggangu saya lebih dari orang lain." },
  { id: 42, domain: "SM", text: "Saya sering melakukan gerakan berulang seperti mengayun, mengepakkan tangan, atau berputar." },
  { id: 43, domain: "SM", text: "Saya sering berdiri atau duduk dalam posisi yang tidak biasa." },
  { id: 44, domain: "SM", text: "Koordinasi motorik saya kurang baik (sering jatuh, menulis dengan susah payah)." },
  { id: 45, domain: "SM", text: "Saya merasa perlu menyentuh objek berulang kali." },
  { id: 46, domain: "SM", text: "Sentuhan dari orang lain sering terasa tidak nyaman." },
  { id: 47, domain: "SM", text: "Saya sangat peka terhadap perubahan suhu." },
  { id: 48, domain: "SM", text: "Saya sering membenturkan kepala atau tubuh saat anak-anak." },
  { id: 49, domain: "SM", text: "Saya sangat sensitif terhadap banyak stimulasi sensoris secara bersamaan." },
  { id: 50, domain: "SM", text: "Saya menikmati sensasi fisik tertentu yang intens." },
  { id: 51, domain: "SM", text: "Saya sering merasa 'overload' secara sensoris di tempat ramai." },
  { id: 52, domain: "SM", text: "Saya sering melakukan gerakan tangan atau tubuh untuk menenangkan diri." },
  { id: 53, domain: "SM", text: "Saya lebih menyukai rutinitas fisik yang sama setiap harinya." },
  { id: 54, domain: "SM", text: "Saya sangat tidak nyaman dengan kebisingan di tempat umum." },
  { id: 55, domain: "SM", text: "Saya sering memerlukan waktu lebih lama untuk pulih dari stimulasi sensoris." },
  { id: 56, domain: "SM", text: "Saya kesulitan dengan aktivitas yang memerlukan koordinasi tangan-mata." },
  
  // CIRCUMSCRIBED INTERESTS (24 items)
  { id: 57, domain: "CI", text: "Saya sangat fokus pada satu atau beberapa topik yang sangat spesifik." },
  { id: 58, domain: "CI", text: "Saya hafal banyak fakta detail tentang topik minat saya." },
  { id: 59, domain: "CI", text: "Orang lain menganggap minat saya tidak biasa atau terlalu intens." },
  { id: 60, domain: "CI", text: "Saya menghabiskan banyak waktu memikirkan atau mempelajari topik favorit saya." },
  { id: 61, domain: "CI", text: "Saya sangat terganggu ketika rutinitas atau jadwal saya berubah." },
  { id: 62, domain: "CI", text: "Saya sangat suka mengumpulkan benda-benda atau informasi tertentu." },
  { id: 63, domain: "CI", text: "Saya perlu melakukan sesuatu dengan cara tertentu dan merasa cemas jika tidak bisa." },
  { id: 64, domain: "CI", text: "Saya memiliki ketertarikan yang sangat mendalam dan terfokus pada satu bidang." },
  { id: 65, domain: "CI", text: "Saya sangat memperhatikan detail kecil yang orang lain tidak sadari." },
  { id: 66, domain: "CI", text: "Saya lebih menyukai predictability dan tidak menyukai kejutan." },
  { id: 67, domain: "CI", text: "Saya sering memikirkan hal yang sama berulang-ulang." },
  { id: 68, domain: "CI", text: "Saya sangat terganggu jika ada hal yang tidak simetris atau tidak pada tempatnya." },
  { id: 69, domain: "CI", text: "Saya mudah bosan jika harus melakukan hal yang bervariasi.", reversed: true },
  { id: 70, domain: "CI", text: "Saya suka menyusun atau mengorganisir benda-benda secara spesifik." },
  { id: 71, domain: "CI", text: "Saya kesulitan beralih dari satu tugas ke tugas lain." },
  { id: 72, domain: "CI", text: "Saya punya ritme atau urutan tertentu yang harus diikuti saat melakukan sesuatu." },
  { id: 73, domain: "CI", text: "Saya sangat ingat detail percakapan atau peristiwa dari jauh di masa lalu." },
  { id: 74, domain: "CI", text: "Perubahan kecil dalam lingkungan atau rutinitas saya sangat mengganggu." },
  { id: 75, domain: "CI", text: "Saya bisa fokus sangat lama pada hal yang saya sukai." },
  { id: 76, domain: "CI", text: "Saya sering terobsesi dengan hal-hal tertentu yang tidak dianggap penting oleh orang lain." },
  { id: 77, domain: "CI", text: "Saya sering melihat pola atau koneksi yang orang lain tidak lihat." },
  { id: 78, domain: "CI", text: "Saya merasa sangat tidak nyaman ketika harus fleksibel terhadap rencana yang berubah." },
  { id: 79, domain: "CI", text: "Saya suka menghafal jadwal, peta, atau data lainnya." },
  { id: 80, domain: "CI", text: "Saya sangat menikmati membahas topik minat saya secara mendalam." },
];

const DOMAINS = {
  S: { label: "Relasi Sosial", threshold: 31, total: 29 },
  L: { label: "Bahasa", threshold: 4, total: 7 },
  SM: { label: "Sensoris & Motorik", threshold: 16, total: 20 },
  CI: { label: "Minat Khusus", threshold: 15, total: 24 },
};

const RESPONSE_OPTIONS = [
  { label: "Selalu Benar", value: 3 },
  { label: "Sering Benar", value: 2 },
  { label: "Kadang-kadang benar", value: 1 },
  { label: "Tidak pernah benar", value: 0 },
];

const TOTAL_THRESHOLD = 65;

// Export data agar bisa digunakan di file lain (terutama di app.js dan forwardChaining.js)
module.exports = {
  QUESTIONS,
  DOMAINS,
  RESPONSE_OPTIONS,
  TOTAL_THRESHOLD
};