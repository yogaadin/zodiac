// Database Kamus Karakteristik Astrologi Lengkap
const zodiacData = [
    { 
        name: "Capricorn", sign: "♑", start: [12, 22], end: [1, 19], 
        forecast: "Minggu ini adalah waktu yang tepat untuk fokus pada visi jangka panjang. Disiplinmu akan membuahkan hasil manis, namun jangan lupa meluangkan waktu untuk beristirahat.", 
        careers: "Manajer Eksekutif, Akuntan Publik, Arsitek, Analis Risiko",
        careerDesc: "Karaktermu yang metodis, ambisius, dan penuh rasa tanggung jawab membuatmu sangat andal memimpin institusi terstruktur maupun mengelola manajemen finansial skala besar.",
        bestMatch: ["Taurus", "Virgo"], descMatch: "Hubungan yang sangat kokoh berbasis stabilitas visi dan kecocokan elemen bumi." 
    },
    { 
        name: "Aquarius", sign: "♒", start: [1, 20], end: [2, 18], 
        forecast: "Ide-ide kreatif dan revolusioner mengalir deras. Jangan takut untuk tampil beda dan menyuarakan gagasan orisinalmu di lingkungan kelompok.", 
        careers: "IT Developer, Pekerja Sosial, Ilmuwan Data, Desainer UI/UX",
        careerDesc: "Jiwa inovatif, humanis, dan mandiri membuatmu bersinar di bidang yang membutuhkan pemecahan masalah mutakhir serta kebebasan berpikir tanpa batasan konvensional.",
        bestMatch: ["Gemini", "Libra"], descMatch: "Koneksi yang dinamis dan dipenuhi obrolan intelektual berbobot." 
    },
    { 
        name: "Pisces", sign: "♓", start: [2, 19], end: [3, 20], 
        forecast: "Intuisi batinmu sedang sangat tajam minggu ini. Dengarkan kata hatimu dalam mengambil keputusan penting dan hindari lingkaran energi negatif.", 
        careers: "Sutradara/Seniman, Psikolog Klinis, Tenaga Medis, Konselor Bisnis",
        careerDesc: "Empati yang mendalam serta daya imajinasi tanpa batas membuatmu sangat cocok di industri kreatif atau pekerjaan kemanusiaan yang membutuhkan sentuhan rasa.",
        bestMatch: ["Cancer", "Scorpio"], descMatch: "Ikatan emosional yang sangat peka, mendalam, dan penuh kasih sayang mutual." 
    },
    { 
        name: "Aries", sign: "♈", start: [3, 21], end: [4, 19], 
        forecast: "Energi kepemimpinanmu sedang meluap-luap! Ini waktu yang tepat untuk memulai proyek baru, tapi kontrol sifat impulsifmu.", 
        careers: "Founder Perusahaan, Atlet Profesional, Direktur Operasional, Militer",
        careerDesc: "Keberanian, tekad bulat, dan jiwa kompetitif alamimu adalah modal besar untuk menjadi pelopor sekaligus penggerak utama di garis depan usaha.",
        bestMatch: ["Leo", "Sagittarius"], descMatch: "Hubungan yang membara, penuh gairah hidup, petualangan, dan optimisme tinggi." 
    },
    { 
        name: "Taurus", sign: "♉", start: [4, 20], end: [5, 20], 
        forecast: "Kenyamanan dan fokus pada kestabilan finansial menjadi kunci utama. Manjakan dirimu sejenak dengan apresiasi kecil atas kerja kerasmu.", 
        careers: "Investment Banker, Arsitek Lanskap, Desainer Interior, Pengusaha Kuliner",
        careerDesc: "Ketabahan, kesabaran, serta apresiasi tinggimu terhadap estetika dan nilai fungsional barang membuatmu ahli dalam manajemen aset maupun seni praktis.",
        bestMatch: ["Virgo", "Capricorn"], descMatch: "Pasangan ideal yang menawarkan kehangatan, loyalitas, serta rasa aman jangka panjang." 
    },
    { 
        name: "Gemini", sign: "♊", start: [5, 21], end: [6, 20], 
        forecast: "Komunikasi dan kecerdasan sosial adalah kekuatan utamamu saat ini. Manfaatkan momen ini untuk negosiasi atau memperluas relasi bisnis.", 
        careers: "Jurnalis Investigasi, Public Relations, Growth Marketer, Penyiar Radio",
        careerDesc: "Kemampuan adaptasi yang kilat, artikulasi lisan yang memikat, serta rasa ingin tahu yang besar membuatmu unggul di bidang industri informasi.",
        bestMatch: ["Libra", "Aquarius"], descMatch: "Hubungan menyenangkan bebas hambatan yang disatukan oleh fleksibilitas cara pandang." 
    },
    { 
        name: "Cancer", sign: "♋", start: [6, 21], end: [7, 22], 
        forecast: "Fokuslah pada keharmonisan domestik dan keluarga. Kurangi kebiasaan merenungkan masa lalu agar energimu tetap optimal menyambut peluang baru.", 
        careers: "Manajer HRD, Pengajar/Dosen, Real Estate Developer, Psikolog Anak",
        careerDesc: "Sifat pengasuh alami, protektif, dan intuisi tajam mengenai kebutuhan orang lain menjadikanmu jangkar emosional yang hebat dalam tim kerja.",
        bestMatch: ["Scorpio", "Pisces"], descMatch: "Saling menjaga privasi, protektif, serta membangun romansa yang sangat intim." 
    },
    { 
        name: "Leo", sign: "♌", start: [7, 23], end: [8, 22], 
        forecast: "Sorotan energi kosmis mengarah kepadamu. Karismamu memikat banyak pihak, gunakan pengaruh ini secara bijak untuk membantu rekan sekitarmu.", 
        careers: "Creative Director, Chief Executive Officer (CEO), Politikus, Influencer",
        careerDesc: "Daya pikat panggung, rasa percaya diri tinggi, dan bakat dramatis membuatmu ditakdirkan untuk memimpin di bawah gemerlap lampu sorot perhatian publik.",
        bestMatch: ["Aries", "Sagittarius"], descMatch: "Kombinasi yang megah, dipenuhi rasa saling mengagumi dan dorongan ambisi besar." 
    },
    { 
        name: "Virgo", sign: "♍", start: [8, 23], end: [9, 22], 
        forecast: "Atur kembali manajemen waktu dan rutinitas kesehatanmu. Ketelitianmu terhadap hal-hal detail akan menyelamatkan sebuah proyek penting minggu ini.", 
        careers: "Editor Konten, Peneliti Lab, Analis Data Statistik, Auditor Keuangan",
        careerDesc: "Ketajaman analisa, standar tinggi terhadap kesempurnaan, serta dedikasi tanpa pamrih membuatmu menjadi pilar operasional yang tak tergantikan.",
        bestMatch: ["Taurus", "Capricorn"], descMatch: "Sinergi yang sangat teratur, logis, praktis, dan berorientasi pada hasil nyata." 
    },
    { 
        name: "Libra", sign: "♎", start: [9, 23], end: [10, 22], 
        forecast: "Aspek kemitraan dan diplomasi berjalan mulus. Hindari keraguan saat mengambil keputusan penting, percayalah pada rasa keadilanmu.", 
        careers: "Hakim/Pengacara, Diplomat Internasional, Mediator Konflik, Kurator Seni",
        careerDesc: "Kemampuan menimbang dua sisi secara objektif, menjunjung harmoni, serta insting estetis yang kuat membuatmu andal dalam menyelesaikan konflik.",
        bestMatch: ["Gemini", "Aquarius"], descMatch: "Relasi yang setara, mengutamakan estetika kehidupan, harmoni, dan ruang gerak sosial." 
    },
    { 
        name: "Scorpio", sign: "♏", start: [10, 23], end: [11, 21], 
        forecast: "Kamu sedang mengalami transformasi emosi yang kuat. Lepaskan kebiasaan menahan dendam dan fokuslah pada regenerasi kekuatan internalmu.", 
        careers: "Penyidik/Intelijen, Psikolog Forensik, Venture Capitalist, Dokter Spesialis Bedah",
        careerDesc: "Fokus tanpa batas, ketahanan mental di bawah tekanan, serta bakat menyingkap rahasia tersembunyi menempatkanmu di puncak karier yang penuh tantangan ekstrim.",
        bestMatch: ["Cancer", "Pisces"], descMatch: "Loyalitas tanpa batas dan daya tarik magnetis yang sangat sulit dipisahkan." 
    },
    { 
        name: "Sagittarius", sign: "♐", start: [11, 22], end: [12, 21], 
        forecast: "Keberuntungan berpihak pada keberanianmu mengeksplorasi hal baru. Rencanakan perjalanan atau studi untuk memperluas cakrawala berpikir.", 
        careers: "Profesor Ahli, Antropolog, Konsultan Perjalanan, Publisher/Penerbit",
        careerDesc: "Jiwa bebas, kecintaan pada kebenaran filsafat, serta optimisme tinggi membuatmu ahli dalam menginspirasi pikiran orang banyak lintas budaya.",
        bestMatch: ["Aries", "Leo"], descMatch: "Hubungan penuh tawa, kebebasan individu yang dihargai, dan petualangan tanpa akhir." 
    }
];

// Algoritma Pencari Tanda Zodiak Berdasarkan String Tanggal Input Kalender
function getZodiacFromDate(dateString) {
    if (!dateString) return null;
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return zodiacData.find(z => {
        const [sMonth, sDay] = z.start;
        const [eMonth, eDay] = z.end;
        
        if (sMonth > eMonth) { 
            return (month === sMonth && day >= sDay) || (month === eMonth && day <= eDay);
        }
        return (month === sMonth && day >= sDay) || (month === eMonth && day <= eDay);
    });
}

// Fungsi Utama Mengalkulasi Seluruh Fitur Kosmis
function revealDestiny() {
    const yourDate = document.getElementById('your-birthdate').value;
    const partnerDate = document.getElementById('partner-birthdate').value;

    if (!yourDate) {
        alert("Silakan masukkan tanggal lahir kamu terlebih dahulu!");
        return;
    }

    const myZodiac = getZodiacFromDate(yourDate);
    const resultBox = document.getElementById('resultBox');
    resultBox.style.display = 'block';

    // Memperbarui UI Informasi Zodiak Utama Anda
    document.getElementById('zodiacName').innerText = myZodiac.name;
    document.getElementById('zodiacIcon').innerText = myZodiac.sign;
    document.getElementById('forecastText').innerText = myZodiac.forecast;
    document.getElementById('zodiacDateRange').innerText = `Zodiak Pemimpin Elemen: Cocok dengan ${myZodiac.bestMatch.join(', ')}`;

    // Memperbarui UI Informasi Karir yang Cocok
    document.getElementById('careerList').innerText = myZodiac.careers;
    document.getElementById('careerDesc').innerText = myZodiac.careerDesc;

    // Logika Analisis Kecocokan Otomatis Lewat Tanggal Lahir Pasangan
    const partnerBox = document.getElementById('partnerAnalysisBox');
    if (partnerDate) {
        const partnerZodiac = getZodiacFromDate(partnerDate);
        partnerBox.style.display = 'block';
        document.getElementById('partnerName').innerText = `Dia: ${partnerZodiac.name} ${partnerZodiac.sign}`;
        document.getElementById('partnerIcon').innerText = partnerZodiac.sign;

        const partnerTextObj = document.getElementById('partnerMatchText');
        if (myZodiac.bestMatch.includes(partnerZodiac.name)) {
            partnerTextObj.innerHTML = `💘 Tingkat Kecocokan: <strong>Tinggi (95%)</strong>!<br>${myZodiac.descMatch}`;
        } else if (myZodiac.name === partnerZodiac.name) {
            partnerTextObj.innerHTML = `🤝 Tingkat Kecocokan: <strong>Cukup Stabil (78%)</strong>!<br>Sesama ${myZodiac.name} sangat memahami satu sama lain, namun butuh kontrol emosional ekstra agar ego tidak bentrok.`;
        } else {
            partnerTextObj.innerHTML = `✨ Tingkat Kecocokan: <strong>Sedang (62%)</strong>!<br>Hubungan dinamis yang penuh tantangan seru namun bisa saling melengkapi jika komunikasi dijaga terbuka.`;
        }
    } else {
        partnerBox.style.display = 'none'; // Sembunyikan panel jika input pasangan kosong
    }

    // Render List Rekomendasi Kompatibilitas Umum Secara Dinamis
    const compListContainer = document.getElementById('generalCompList');
    compListContainer.innerHTML = '';
    
    myZodiac.bestMatch.forEach(matchName => {
        const matchData = zodiacData.find(z => z.name === matchName);
        if(matchData) {
            const item = document.createElement('div');
            item.className = 'comp-item';
            item.innerHTML = `
                <span>${matchData.sign}</span>
                <strong>${matchData.name}</strong>
                <p>Sangat Harmonis</p>
            `;
            compListContainer.appendChild(item);
        }
    });
}

// Kontrol Sistem Navigasi Tab Hasil
function switchTab(evt, tabId) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }

    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Kontrol Penukaran Tema (Dark <=> Light Mode) Sekaligus Kontras Font
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeIcon.innerText = '🌙'; // Simbol bulan menandakan sedang di mode terang (klik untuk malam)
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeIcon.innerText = '☀️'; // Simbol matahari menandakan sedang di mode gelap (klik untuk siang)
    }
}
