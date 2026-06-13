// File: services/forwardChaining.js

const { QUESTIONS, DOMAINS, TOTAL_THRESHOLD } = require('../data/raadsData');

function runForwardChaining(answers) {
  const domainScores = { S: 0, L: 0, SM: 0, CI: 0 };

  // 1. Hitung skor per pertanyaan
  // Frontend mengirimkan object: { "0": 3, "1": 1, "2": 0, ... }
  QUESTIONS.forEach((q, i) => {
    // Ambil jawaban berdasarkan index. Gunakan parseInt untuk berjaga-jaga jika frontend mengirim string
    // Jika user belum menjawab soal tersebut (undefined), jadikan default 0
    let raw = 0;
    if (answers[i] !== undefined && answers[i] !== null) {
      raw = parseInt(answers[i]); 
    }
    
    // Balikkan nilai jika properti reversed = true
    const score = q.reversed ? (3 - raw) : raw;
    domainScores[q.domain] += score;
  });

  // Hitung total keseluruhan skor
  const total = Object.values(domainScores).reduce((a, b) => a + b, 0);
  const firedRules = [];
  const workingMemory = {};

  // 2. Evaluasi Rule 1-4: Ambang batas per domain
  Object.entries(DOMAINS).forEach(([key, d]) => {
    const s = domainScores[key];
    workingMemory[`domain_${key}_score`] = s;
    
    // Jika skor domain melewati batas threshold
    if (s >= d.threshold) {
      workingMemory[`domain_${key}_high`] = true;
      firedRules.push({
        id: `R_${key}`,
        label: `Skor ${d.label} >= ${d.threshold}`,
        desc: `Skor ${d.label} Anda (${s}) melebihi ambang batas klinis (${d.threshold}).`,
        domain: key,
        severity: "high",
      });
    }
  });

  // 3. Evaluasi Rule 5: Multi-domain
  const highDomains = Object.keys(DOMAINS).filter(k => workingMemory[`domain_${k}_high`]);
  if (highDomains.length >= 3) {
    workingMemory.multi_domain_high = true;
    firedRules.push({
      id: "R_MULTI",
      label: "3+ Domain Melewati Ambang Batas",
      desc: `${highDomains.length} dari 4 domain Anda melampaui ambang batas klinis.`,
      severity: "critical",
    });
  }

  // 4. Evaluasi Rule 6: Total Keseluruhan
  if (total >= TOTAL_THRESHOLD) {
    workingMemory.total_high = true;
    firedRules.push({
      id: "R_TOTAL",
      label: `Total Skor >= ${TOTAL_THRESHOLD}`,
      desc: `Total skor Anda (${total}) melampaui ambang batas RAADS-R (${TOTAL_THRESHOLD}).`,
      severity: "critical",
    });
  }

  // 5. Kesimpulan Akhir (Disesuaikan dengan Rentang Skor Permintaan Anda)
  // Data ini dikirim utuh ke frontend agar frontend tinggal menampilkannya saja
  let conclusion;
  
  if (total < 65) {
    conclusion = { 
      level: 1, 
      label: "Di bawah ambang batas (< 65)", 
      interpretation: "Jawaban Anda berada di bawah ambang batas penelitian asli untuk sifat-sifat terkait autisme. Beberapa sifat individu mungkin masih ada, atau skor berada di bawah ambang batas karena faktor seperti masking (menutupi sifat asli), perbedaan interpretasi, atau variasi individu.",
      whatToDoNext: "Jika Anda masih merasa memiliki pengalaman autistik, Anda dapat mengeksplorasi faktor lain (misal: kecemasan, ADHD, atau burnout) atau mengambil tes skrining tambahan (misal: AQ, CAT-Q).", 
      color: "#7C5CBF", 
      bg: "#F0EBF8", 
      badge: "Dalam Rentang Tipikal" 
    };
  } else if (total >= 65 && total <= 105) {
    conclusion = { 
      level: 2, 
      label: "Menunjukkan Beberapa Sifat (65 - 105)", 
      interpretation: "Jawaban Anda menunjukkan beberapa sifat terkait autisme, meskipun skor dalam rentang ini kurang spesifik dan dapat tumpang tindih dengan ADHD, kecemasan, depresi, trauma, burnout, atau pengalaman lainnya.",
      whatToDoNext: "Rentang ini sering tumpang tindih dengan hal-hal seperti ADHD atau kecemasan, jadi ini bisa menjadi titik awal untuk mengeksplorasi apa yang paling menjelaskan pengalaman Anda. Anda juga bisa mengambil tes skrining tambahan.",
      color: "#5BA8A0", 
      bg: "#EBF7F6", 
      badge: "Indikasi Ringan" 
    };
  } else if (total >= 106 && total <= 149) {
    conclusion = { 
      level: 3, 
      label: "Keselarasan Lebih Kuat (106 - 149)", 
      interpretation: "Jawaban Anda menunjukkan keselarasan yang lebih kuat dengan sifat-sifat terkait autisme dan mungkin memerlukan interpretasi klinis yang lebih lengkap dalam konteks pengalaman hidup Anda yang lebih luas.",
      whatToDoNext: "Banyak orang dalam rentang ini mengeksplorasi lebih jauh melalui tes skrining tambahan (misal: AQ, CAT-Q) atau skrining autisme terstruktur untuk lebih memahami pengalaman mereka.",
      color: "#C07D3A", 
      bg: "#FDF6EE", 
      badge: "Disarankan Konsultasi" 
    };
  } else if (total >= 150) {
    conclusion = { 
      level: 4, 
      label: "Keselarasan Sangat Kuat (150+)", 
      interpretation: "Keselarasan yang sangat kuat dengan sifat-sifat autisme.",
      whatToDoNext: "Banyak orang dalam rentang ini mengeksplorasi lebih jauh melalui tes skrining tambahan (misal: AQ, CAT-Q) atau skrining autisme terstruktur profesional untuk lebih memahami pengalaman mereka.",
      color: "#B05E8A", 
      bg: "#FAF0F5", 
      badge: "Perlu Evaluasi Profesional" 
    };
  }

  // Mengembalikan hasil (Sesuai dengan API Contract yang diminta teman Anda)
  return { 
    domainScores, 
    total, 
    firedRules, 
    conclusion 
  };
}

module.exports = { runForwardChaining };