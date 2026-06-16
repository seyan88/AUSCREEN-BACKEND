// File: data/raadsData.js

const QUESTIONS = [
  // 1-10
  { id: 1, domain: "S", text: "Saya adalah orang yang penuh simpati.", reversed: true },
  { id: 2, domain: "L", text: "Saya sering menggunakan kata-kata dan frasa dari film atau televisi dalam percakapan." },
  { id: 3, domain: "S", text: "Saya sering terkejut ketika orang lain memberi tahu bahwa saya bersikap kasar." },
  { id: 4, domain: "SM", text: "Terkadang saya berbicara terlalu keras atau terlalu pelan, dan saya tidak menyadarinya." },
  { id: 5, domain: "S", text: "Saya sering tidak tahu bagaimana harus bersikap dalam situasi sosial." },
  { id: 6, domain: "S", text: "Saya bisa menempatkan diri saya pada posisi orang lain (berempati).", reversed: true },
  { id: 7, domain: "L", text: "Saya kesulitan memahami arti beberapa kiasan, seperti 'kau adalah jantung hatiku'." },
  { id: 8, domain: "S", text: "Saya hanya suka berbicara dengan orang yang memiliki minat khusus yang sama dengan saya." },
  { id: 9, domain: "CI", text: "Saya lebih berfokus pada detail-detail kecil daripada gagasan utamanya." },
  { id: 10, domain: "SM", text: "Saya selalu memperhatikan bagaimana tekstur makanan terasa di mulut saya. Hal ini lebih penting bagi saya daripada rasanya." },

  // 11-20
  { id: 11, domain: "S", text: "Saya merindukan sahabat atau keluarga saya saat kami terpisah dalam waktu yang lama.", reversed: true },
  { id: 12, domain: "S", text: "Terkadang saya menyinggung orang lain dengan mengatakan apa yang saya pikirkan, meski saya tidak bermaksud begitu." },
  { id: 13, domain: "CI", text: "Saya hanya suka memikirkan dan membicarakan beberapa hal yang memang menarik minat saya." },
  { id: 14, domain: "S", text: "Saya lebih suka pergi makan ke restoran sendirian daripada bersama seseorang yang saya kenal." },
  { id: 15, domain: "S", text: "Saya tidak bisa membayangkan bagaimana rasanya menjadi orang lain." },
  { id: 16, domain: "SM", text: "Saya sering diberitahu bahwa saya canggung atau kurang memiliki koordinasi tubuh." },
  { id: 17, domain: "S", text: "Orang lain menganggap saya aneh atau berbeda." },
  { id: 18, domain: "S", text: "Saya mengerti ketika teman-teman saya sedang butuh dihibur.", reversed: true },
  { id: 19, domain: "SM", text: "Saya sangat sensitif terhadap sentuhan dan tekstur pakaian saya. Bagaimana rasanya saat dipakai jauh lebih penting daripada penampilannya." },
  { id: 20, domain: "S", text: "Saya suka meniru cara orang tertentu berbicara dan bertindak. Ini membantu saya terlihat lebih normal." },

  // 21-30
  { id: 21, domain: "S", text: "Berbicara dengan lebih dari satu orang pada saat bersamaan bisa sangat mengintimidasi (menakutkan) bagi saya." },
  { id: 22, domain: "S", text: "Saya harus 'bertindak normal' untuk menyenangkan orang lain dan membuat mereka menyukai saya." },
  { id: 23, domain: "S", text: "Bertemu orang baru biasanya merupakan hal yang mudah bagi saya.", reversed: true },
  { id: 24, domain: "S", text: "Saya menjadi sangat bingung ketika seseorang menyela saat saya sedang membicarakan hal yang sangat saya minati." },
  { id: 25, domain: "S", text: "Sulit bagi saya untuk memahami bagaimana perasaan orang lain saat kami sedang berbicara." },
  { id: 26, domain: "S", text: "Saya suka bercakap-cakap dengan beberapa orang sekaligus, misalnya di meja makan, di sekolah, atau di tempat kerja.", reversed: true },
  { id: 27, domain: "L", text: "Saya mengartikan sesuatu terlalu harfiah (apa adanya), sehingga saya sering gagal menangkap maksud dari perkataan orang lain." },
  { id: 28, domain: "S", text: "Sangat sulit bagi saya untuk memahami ketika seseorang sedang merasa malu atau cemburu." },
  { id: 29, domain: "SM", text: "Beberapa tekstur benda biasa yang tidak mengganggu orang lain terasa sangat tidak nyaman saat menyentuh kulit saya." },
  { id: 30, domain: "CI", text: "Saya menjadi sangat kesal ketika cara saya melakukan sesuatu tiba-tiba diubah." },

  // 31-40
  { id: 31, domain: "S", text: "Saya tidak pernah menginginkan atau merasa butuh untuk memiliki apa yang orang lain sebut sebagai 'hubungan intim/asmara'." },
  { id: 32, domain: "S", text: "Sulit bagi saya untuk memulai dan mengakhiri percakapan. Saya merasa harus terus berbicara sampai selesai." },
  { id: 33, domain: "SM", text: "Saya berbicara dengan ritme (nada/kecepatan) yang normal.", reversed: true },
  { id: 34, domain: "SM", text: "Suara, warna, atau tekstur yang sama bisa tiba-tiba berubah dari yang tadinya sangat sensitif menjadi sangat tidak terasa bagi saya." },
  { id: 35, domain: "L", text: "Frasa kiasan yang berlebihan (seperti 'kau merasuk ke dalam jiwaku') membuat saya sangat tidak nyaman." },
  { id: 36, domain: "SM", text: "Terkadang bunyi suatu kata atau suara bernada tinggi bisa terasa menyakitkan bagi telinga saya." },
  { id: 37, domain: "S", text: "Saya adalah tipe orang yang penuh pengertian.", reversed: true },
  { id: 38, domain: "S", text: "Saya tidak merasa terhubung dengan karakter di film dan tidak bisa merasakan apa yang mereka rasakan." },
  { id: 39, domain: "S", text: "Saya tidak tahu ketika seseorang sedang mencoba menggoda (flirting) dengan saya." },
  { id: 40, domain: "CI", text: "Saya dapat membayangkan secara detail hal-hal yang saya minati di dalam pikiran saya." },

  // 41-50
  { id: 41, domain: "CI", text: "Saya membuat daftar hal-hal yang menarik minat saya, meskipun tidak ada kegunaan praktisnya (misal: statistik olahraga, jadwal, tanggal kalender, fakta sejarah)." },
  { id: 42, domain: "SM", text: "Ketika pancaindera saya merasa kewalahan, saya harus mengasingkan diri untuk menenangkannya." },
  { id: 43, domain: "S", text: "Saya suka mendiskusikan berbagai hal dengan teman-teman saya.", reversed: true },
  { id: 44, domain: "S", text: "Saya tidak bisa membedakan apakah seseorang tertarik atau bosan dengan apa yang saya bicarakan." },
  { id: 45, domain: "S", text: "Sangat sulit membaca ekspresi wajah, gerakan tangan, dan gerakan tubuh seseorang ketika mereka berbicara." },
  { id: 46, domain: "SM", text: "Hal yang sama (seperti pakaian atau suhu tubuh) dapat terasa sangat berbeda bagi saya pada waktu yang berbeda." },
  { id: 47, domain: "S", text: "Saya merasa sangat nyaman dengan berkencan atau berada dalam situasi sosial bersama orang lain.", reversed: true },
  { id: 48, domain: "S", text: "Saya berusaha sebisanya untuk membantu ketika orang lain menceritakan masalah pribadi mereka kepada saya.", reversed: true },
  { id: 49, domain: "L", text: "Saya pernah diberi tahu bahwa saya memiliki suara yang tidak biasa (misalnya datar, monoton, seperti anak kecil, atau bernada tinggi)." },
  { id: 50, domain: "CI", text: "Terkadang sebuah pikiran atau topik tersangkut di benak saya dan saya harus membicarakannya meskipun tidak ada orang yang tertarik." },

  // 51-60
  { id: 51, domain: "SM", text: "Saya melakukan gerakan tertentu dengan tangan saya berulang kali (seperti mengepakkan tangan, memutar-mutar benda, atau melambaikan benda di depan mata)." },
  { id: 52, domain: "CI", text: "Saya tidak pernah tertarik pada hal-hal yang dianggap menarik oleh kebanyakan orang yang saya kenal." },
  { id: 53, domain: "S", text: "Saya dianggap sebagai tipe orang yang penyayang dan penuh belas kasih.", reversed: true },
  { id: 54, domain: "S", text: "Saya bergaul dengan orang lain dengan mengikuti serangkaian aturan spesifik yang membantu saya terlihat normal." },
  { id: 55, domain: "S", text: "Sangat sulit bagi saya untuk bekerja dan berfungsi dalam sebuah kelompok." },
  { id: 56, domain: "S", text: "Saat berbicara dengan seseorang, sulit bagi saya untuk mengganti topik pembicaraan. Jika orang lain melakukannya, saya bisa menjadi sangat kesal dan bingung." },
  { id: 57, domain: "SM", text: "Terkadang saya harus menutup telinga untuk menahan suara yang menyakitkan (seperti penyedot debu atau orang yang berbicara terlalu keras)." },
  { id: 58, domain: "L", text: "Saya bisa mengobrol santai dan berbasa-basi dengan orang lain.", reversed: true },
  { id: 59, domain: "SM", text: "Terkadang hal-hal yang seharusnya terasa sakit malah tidak menyakitkan (misalnya saat saya melukai diri sendiri atau tangan terbakar kompor)." },
  { id: 60, domain: "S", text: "Saat berbicara dengan seseorang, saya kesulitan menentukan kapan giliran saya untuk berbicara atau kapan harus mendengarkan." },

  // 61-70
  { id: 61, domain: "S", text: "Saya dianggap penyendiri oleh orang-orang yang paling mengenal saya." },
  { id: 62, domain: "SM", text: "Saya biasanya berbicara dengan nada suara yang normal.", reversed: true },
  { id: 63, domain: "CI", text: "Saya suka segala hal berjalan sama persis dari hari ke hari, dan bahkan perubahan kecil dalam rutinitas akan membuat saya kesal." },
  { id: 64, domain: "S", text: "Bagaimana cara berteman dan bersosialisasi adalah sebuah misteri bagi saya." },
  { id: 65, domain: "SM", text: "Berputar-putar atau berayun di kursi dapat menenangkan saya ketika merasa stres." },
  { id: 66, domain: "L", text: "Kalimat kiasan seperti 'Dia memakai hatinya di lengan bajunya' (Dia tidak bisa menyembunyikan perasaannya) tidak masuk akal bagi saya." },
  { id: 67, domain: "SM", text: "Jika saya berada di tempat yang memiliki banyak bau, berbagai macam tekstur, kebisingan, atau cahaya terang, saya merasa cemas atau takut." },
  { id: 68, domain: "L", text: "Saya bisa tahu ketika seseorang mengatakan suatu hal namun sebenarnya memaksudkan hal yang lain (menyindir/kiasan).", reversed: true },
  { id: 69, domain: "S", text: "Saya lebih suka dibiarkan menyendiri sebisa mungkin." },
  { id: 70, domain: "CI", text: "Saya menyimpan pikiran saya di ingatan seperti tertumpuk di kartu arsip, dan saya memilih yang saya butuhkan dengan mencari tumpukan tersebut (atau cara unik lainnya)." },

  // 71-80
  { id: 71, domain: "SM", text: "Suara yang sama terkadang terdengar sangat keras atau sangat pelan, padahal saya tahu suaranya tidak berubah." },
  { id: 72, domain: "S", text: "Saya menikmati menghabiskan waktu makan dan mengobrol dengan keluarga dan teman-teman saya.", reversed: true },
  { id: 73, domain: "SM", text: "Saya tidak bisa menoleransi hal-hal yang tidak saya sukai (seperti bau, tekstur, suara, atau warna tertentu)." },
  { id: 74, domain: "SM", text: "Saya tidak suka dipeluk atau didekap." },
  { id: 75, domain: "CI", text: "Ketika pergi ke suatu tempat, saya harus mengikuti rute yang familier (dikenal), jika tidak saya bisa menjadi sangat bingung dan kesal." },
  { id: 76, domain: "S", text: "Sulit bagi saya untuk mengetahui apa yang diharapkan orang lain dari saya." },
  { id: 77, domain: "S", text: "Saya suka memiliki teman-teman dekat.", reversed: true },
  { id: 78, domain: "CI", text: "Orang-orang mengatakan bahwa saya memberikan terlalu banyak detail saat bercerita." },
  { id: 79, domain: "S", text: "Saya sering diberitahu bahwa saya menanyakan pertanyaan-pertanyaan yang memalukan." },
  { id: 80, domain: "S", text: "Saya cenderung suka menunjukkan kesalahan-kesalahan orang lain." },
];

// Jumlah total soal sesuai standar RAADS-R (Total: 80)
const DOMAINS = {
  S: { label: "Relasi Sosial", threshold: 31, total: 39 },
  L: { label: "Bahasa", threshold: 4, total: 7 },
  SM: { label: "Sensoris & Motorik", threshold: 16, total: 20 },
  CI: { label: "Minat Khusus", threshold: 15, total: 14 },
};

// Pilihan Ganda disesuaikan persis dengan kolom pada foto kuesioner asli
const RESPONSE_OPTIONS = [
  { label: "Benar untuk saat ini & saat masih muda", value: 3 },
  { label: "Hanya benar saat ini", value: 2 },
  { label: "Hanya benar saat masih muda (di bawah 16 tahun)", value: 1 },
  { label: "Tidak pernah benar", value: 0 },
];

const TOTAL_THRESHOLD = 65;

module.exports = {
  QUESTIONS,
  DOMAINS,
  RESPONSE_OPTIONS,
  TOTAL_THRESHOLD
};