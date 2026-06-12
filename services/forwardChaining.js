// File: services/forwardChaining.js

const { QUESTIONS, DOMAINS, TOTAL_THRESHOLD } = require('../data/raadsData');

function runForwardChaining(answers) {
  const domainScores = { S: 0, L: 0, SM: 0, CI: 0 };

  // 1. Hitung skor per pertanyaan
  // answers formatnya: { "0": 3, "1": 1, "2": 0, ... }
  QUESTIONS.forEach((q, i) => {
    // Jika tidak ada jawaban, default ke 0
    const raw = answers[i] ?? 0; 
    
    // Balikkan nilai jika properti reversed = true
    const score = q.reversed ? (3 - raw) : raw;
    domainScores[q.domain] += score;
  });

  const total = Object.values(domainScores).reduce((a, b) => a + b, 0);
  const firedRules = [];
  const workingMemory = {};

  // 2. Evaluasi Rule 1-4: Ambang batas per domain
  Object.entries(DOMAINS).forEach(([key, d]) => {
    const s = domainScores[key];
    workingMemory[`domain_${key}_score`] = s;
    
    if (s >= d.threshold) {
      workingMemory[`domain_${key}_high`] = true;
      firedRules.push({
        id: `R_${key}`,
        label: `Skor ${d.label} ≥ ${d.threshold}`,
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
      label: `Total Skor ≥ ${TOTAL_THRESHOLD}`,
      desc: `Total skor Anda (${total}) melampaui ambang batas RAADS-R (${TOTAL_THRESHOLD}).`,
      severity: "critical",
    });
  }

  // 5. Kesimpulan Akhir
  // Perhatikan: Kita mengirim properti warna (color, bg) langsung dari backend!
  let conclusion;
  if (workingMemory.total_high && workingMemory.multi_domain_high) {
    conclusion = { 
      level: 4, 
      label: "Indikasi Signifikan", 
      desc: "Hasil menunjukkan pola yang sangat konsisten dengan karakteristik autisme spektrum. Sangat disarankan konsultasi dengan profesional.", 
      color: "#B05E8A", 
      bg: "#FAF0F5", 
      badge: "Perlu Evaluasi Profesional" 
    };
  } else if (workingMemory.total_high || highDomains.length >= 2) {
    conclusion = { 
      level: 3, 
      label: "Indikasi Cukup Tinggi", 
      desc: "Beberapa area menunjukkan pola yang konsisten. Pertimbangkan konsultasi dengan psikolog untuk evaluasi lebih lanjut.", 
      color: "#C07D3A", 
      bg: "#FDF6EE", 
      badge: "Disarankan Konsultasi" 
    };
  } else if (highDomains.length === 1 || total >= 40) {
    conclusion = { 
      level: 2, 
      label: "Indikasi Ringan", 
      desc: "Ada beberapa karakteristik yang muncul, namun belum cukup untuk mengindikasikan pola spektrum autisme secara signifikan.", 
      color: "#5BA8A0", 
      bg: "#EBF7F6", 
      badge: "Pantau & Perhatikan" 
    };
  } else {
    conclusion = { 
      level: 1, 
      label: "Tidak Terindikasi", 
      desc: "Hasil Anda tidak menunjukkan pola yang signifikan. Pola respons Anda berada dalam rentang tipikal.", 
      color: "#7C5CBF", 
      bg: "#F0EBF8", 
      badge: "Dalam Rentang Normal" 
    };
  }

  // Mengembalikan objek final yang siap "dilahap" oleh frontend
  return { 
    domainScores, 
    total, 
    firedRules, 
    conclusion 
  };
}

module.exports = { runForwardChaining };