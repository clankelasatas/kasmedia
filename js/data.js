/* ========================================
   KASMEDIA — Data (Placeholder)
   Bahasa Indonesia
   ======================================== */

// ===== MEMBERS =====
const membersData = [
    {
        id: 1,
        name: "Ahmad Rizky",
        role: "Ketua",
        bio: "Mahasiswa Teknik Informatika yang bersemangat dalam dunia jurnalistik kampus.",
        avatar: "https://picsum.photos/seed/member1/200/200"
    },
    {
        id: 2,
        name: "Siti Nurhaliza",
        role: "Wakil Ketua",
        bio: "Pecinta seni dan sastra, selalu aktif dalam kegiatan komunitas.",
        avatar: "https://picsum.photos/seed/member2/200/200"
    },
    {
        id: 3,
        name: "Budi Santoso",
        role: "Sekretaris",
        bio: "Detail-oriented dan terorganisir, menjaga administrasi komunitas tetap rapi.",
        avatar: "https://picsum.photos/seed/member3/200/200"
    },
    {
        id: 4,
        name: "Dewi Anggraini",
        role: "Bendahara",
        bio: "Mahasiswi Akuntansi yang mengelola keuangan komunitas dengan cermat.",
        avatar: "https://picsum.photos/seed/member4/200/200"
    },
    {
        id: 5,
        name: "Fajar Nugroho",
        role: "Editor",
        bio: "Penulis handal dengan mata tajam untuk detail dan kualitas konten.",
        avatar: "https://picsum.photos/seed/member5/200/200"
    },
    {
        id: 6,
        name: "Rina Wulandari",
        role: "Fotografer",
        bio: "Mengabadikan setiap momen penting kampus melalui lensa kamera.",
        avatar: "https://picsum.photos/seed/member6/200/200"
    },
    {
        id: 7,
        name: "Dimas Pratama",
        role: "Desainer",
        bio: "Kreatif dalam membuat desain visual yang menarik untuk setiap konten.",
        avatar: "https://picsum.photos/seed/member7/200/200"
    },
    {
        id: 8,
        name: "Anisa Putri",
        role: "Penulis",
        bio: "Memiliki passion dalam menulis dan berbagi cerita inspiratif.",
        avatar: "https://picsum.photos/seed/member8/200/200"
    },
    {
        id: 9,
        name: "Rendi Setiawan",
        role: "Media Sosial",
        bio: "Mengelola akun media sosial dan memastikan konten selalu up-to-date.",
        avatar: "https://picsum.photos/seed/member9/200/200"
    },
    {
        id: 10,
        name: "Lestari Handayani",
        role: "Humas",
        bio: "Menjembatani komunikasi antara komunitas dengan pihak kampus dan publik.",
        avatar: "https://picsum.photos/seed/member10/200/200"
    }
];

// ===== CATEGORIES =====
const categoriesData = [
    { name: "Kegiatan", count: 3 },
    { name: "Cerita", count: 2 },
    { name: "Pengumuman", count: 2 },
    { name: "Acara", count: 1 },
    { name: "Galeri", count: 1 },
    { name: "Opini", count: 1 }
];

// ===== TAGS =====
const tagsData = ["kampus", "komunitas", "mahasiswa", "semarang", "unpand", "ekstrakulikuler", "belajar", "kreativitas", "inspirasi", "kebersamaan"];

// ===== ARTICLES =====
const articlesData = [
    {
        id: 1,
        title: "Kebersamaan yang Mempererat: Kumpul Rutin KASMEDIA di Akhir Pekan",
        excerpt: "Setiap akhir pekan, anggota KASMEDIA berkumpul untuk membahas konten, berbagi ide, dan mempererat hubungan antar anggota.",
        category: "Kegiatan",
        author: "Ahmad Rizky",
        date: "15 Des 2024",
        readTime: "5 menit",
        image: "https://picsum.photos/seed/art1/800/400",
        tags: ["komunitas", "kebersamaan", "kampus"],
        featured: true,
        body: `
            <p>Setiap Sabtu sore, ruang kecil di lantai dua gedung B Universitas Pandanaran selalu ramai. Suara tawa, diskusi, dan sesekali perdebatan seru memenuhi ruangan. Itulah suasana khas kumpul rutin KASMEDIA.</p>
            <h2>Lebih dari Sekadar Rapat</h2>
            <p>Bagi kami, kumpul rutin bukan hanya tentang membahas konten atau membagi tugas. Ini adalah momen di mana kami bisa saling berbagi cerita, berkeluh kesah, dan mendukung satu sama lain.</p>
            <blockquote>"KASMEDIA bukan hanya komunitas, tapi keluarga kedua di kampus." — Siti Nurhaliza, Wakil Ketua</blockquote>
            <p>Dengan jumlah anggota yang hanya sekitar 10 orang, kami memiliki ikatan yang sangat erat. Setiap orang mengenal satu sama lain dengan baik, dan itu membuat kolaborasi menjadi lebih mudah dan menyenangkan.</p>
            <h2>Agenda Kumpul Rutin</h2>
            <ul>
                <li>Evaluasi konten minggu sebelumnya</li>
                <li>Brainstorming ide konten baru</li>
                <li>Pembagian tugas penulisan dan fotografi</li>
                <li>Diskusi bebas dan sharing session</li>
                <li>Makan bersama (yang paling ditunggu!)</li>
            </ul>
            <p>Kegiatan ini menjadi fondasi kuat bagi KASMEDIA untuk terus berkembang dan menghasilkan konten berkualitas untuk kampus.</p>
        `
    },
    {
        id: 2,
        title: "Belajar Fotografi Bersama: Workshop Internal KASMEDIA",
        excerpt: "Anggota KASMEDIA mengadakan workshop fotografi internal untuk meningkatkan kualitas visual konten yang dihasilkan.",
        category: "Kegiatan",
        author: "Rina Wulandari",
        date: "10 Des 2024",
        readTime: "4 menit",
        image: "https://picsum.photos/seed/art2/800/400",
        tags: ["kreativitas", "belajar", "kampus"],
        featured: false,
        body: `
            <p>Kualitas visual adalah salah satu aspek penting dalam media. Menyadari hal ini, KASMEDIA mengadakan workshop fotografi internal yang dipandu oleh Rina Wulandari, fotografer utama komunitas.</p>
            <h2>Materi yang Dipelajari</h2>
            <p>Workshop ini berlangsung selama 3 jam dan mencakup berbagai topik dasar fotografi yang sangat bermanfaat untuk dokumentasi kampus.</p>
            <ul>
                <li>Komposisi dasar: Rule of Thirds</li>
                <li>Pencahayaan natural untuk foto outdoor</li>
                <li>Tips foto menggunakan smartphone</li>
                <li>Editing dasar menggunakan aplikasi gratis</li>
            </ul>
            <p>Semua anggota sangat antusias mengikuti workshop ini dan langsung mempraktikkan ilmu yang didapat.</p>
        `
    },
    {
        id: 3,
        title: "Pengumuman: Rekrutmen Anggota Baru KASMEDIA 2025",
        excerpt: "KASMEDIA membuka kesempatan bagi mahasiswa Universitas Pandanaran yang ingin bergabung menjadi bagian dari komunitas.",
        category: "Pengumuman",
        author: "Lestari Handayani",
        date: "8 Des 2024",
        readTime: "3 menit",
        image: "https://picsum.photos/seed/art3/800/400",
        tags: ["mahasiswa", "komunitas", "unpand"],
        featured: false,
        body: `
            <p>Kabar gembira untuk seluruh mahasiswa Universitas Pandanaran! KASMEDIA membuka rekrutmen anggota baru untuk periode 2025.</p>
            <h2>Syarat dan Ketentuan</h2>
            <ul>
                <li>Mahasiswa aktif Universitas Pandanaran</li>
                <li>Memiliki minat dalam bidang jurnalistik, fotografi, atau desain</li>
                <li>Bersedia mengikuti kegiatan rutin komunitas</li>
                <li>Memiliki semangat belajar dan bekerja dalam tim</li>
            </ul>
            <blockquote>"Kami mencari orang-orang yang bersemangat, bukan yang sempurna. Semua bisa dipelajari bersama." — Ahmad Rizky, Ketua</blockquote>
            <p>Pendaftaran dibuka mulai 1 Januari hingga 31 Januari 2025. Hubungi kami melalui Instagram @kasmedia_unpand untuk informasi lebih lanjut.</p>
        `
    },
    {
        id: 4,
        title: "Cerita Inspiratif: Bagaimana KASMEDIA Mengubah Cara Saya Melihat Kampus",
        excerpt: "Salah satu anggota berbagi pengalaman pribadi tentang bagaimana bergabung dengan KASMEDIA memberikan perspektif baru.",
        category: "Cerita",
        author: "Anisa Putri",
        date: "5 Des 2024",
        readTime: "6 menit",
        image: "https://picsum.photos/seed/art4/800/400",
        tags: ["inspirasi", "mahasiswa", "komunitas"],
        featured: false,
        body: `
            <p>Dua tahun lalu, kampus bagi saya hanyalah tempat untuk kuliah dan pulang. Tidak ada yang istimewa, tidak ada yang membuat saya merasa menjadi bagian dari sesuatu yang lebih besar. Sampai akhirnya saya mengenal KASMEDIA.</p>
            <h2>Awal Mula</h2>
            <p>Saya pertama kali mendengar tentang KASMEDIA dari poster kecil yang tertempel di mading kampus. "Komunitas media kampus — berbagi cerita, berbagi inspirasi." Kalimat itu entah mengapa menarik perhatian saya.</p>
            <p>Dengan ragu-ragu, saya datang ke pertemuan pertama. Yang saya temukan adalah sekelompok kecil mahasiswa yang sangat passionate tentang apa yang mereka lakukan. Tidak ada formalitas berlebihan, hanya ketulusan dan semangat.</p>
            <h2>Pelajaran Berharga</h2>
            <p>Dari KASMEDIA, saya belajar bahwa setiap orang punya cerita yang layak untuk didengar. Saya belajar menulis, memotret, dan yang paling penting — saya belajar untuk peduli pada lingkungan sekitar.</p>
            <blockquote>"Menulis bukan tentang kata-kata yang sempurna. Menulis adalah tentang keberanian untuk berbagi." — Fajar Nugroho, Editor</blockquote>
            <p>Sekarang, kampus bukan lagi sekadar tempat kuliah. Kampus adalah rumah kedua saya, dan KASMEDIA adalah keluarga yang saya pilih.</p>
        `
    },
    {
        id: 5,
        title: "Dokumentasi: Acara Dies Natalis Universitas Pandanaran ke-45",
        excerpt: "KASMEDIA mendokumentasikan seluruh rangkaian acara peringatan Dies Natalis Universitas Pandanaran yang meriah.",
        category: "Galeri",
        author: "Rina Wulandari",
        date: "1 Des 2024",
        readTime: "3 menit",
        image: "https://picsum.photos/seed/art5/800/400",
        tags: ["kampus", "unpand", "semarang"],
        featured: false,
        body: `
            <p>Universitas Pandanaran merayakan Dies Natalis ke-45 dengan serangkaian acara yang meriah. KASMEDIA hadir untuk mendokumentasikan setiap momen penting dari perayaan ini.</p>
            <h2>Rangkaian Acara</h2>
            <p>Perayaan berlangsung selama tiga hari dengan berbagai kegiatan yang melibatkan seluruh civitas akademika.</p>
            <ul>
                <li>Upacara peringatan dan pidato rektor</li>
                <li>Pameran karya mahasiswa</li>
                <li>Lomba antar fakultas</li>
                <li>Pentas seni dan musik</li>
                <li>Bazaar kuliner</li>
            </ul>
            <p>Momen-momen terbaik telah kami abadikan melalui foto dan video yang akan segera kami bagikan di media sosial KASMEDIA.</p>
        `
    },
    {
        id: 6,
        title: "Opini: Pentingnya Media Kampus di Era Digital",
        excerpt: "Mengapa keberadaan media kampus seperti KASMEDIA tetap relevan dan penting di tengah derasnya arus informasi digital.",
        category: "Opini",
        author: "Fajar Nugroho",
        date: "28 Nov 2024",
        readTime: "7 menit",
        image: "https://picsum.photos/seed/art6/800/400",
        tags: ["opini", "kampus", "kreativitas"],
        featured: false,
        body: `
            <p>Di era di mana setiap orang bisa menjadi content creator, apakah media kampus masih relevan? Sebagai editor KASMEDIA, saya yakin jawabannya adalah: sangat relevan.</p>
            <h2>Media Kampus sebagai Jembatan</h2>
            <p>Media sosial memang sudah menjadi bagian dari kehidupan sehari-hari. Namun, media kampus memiliki peran unik yang tidak bisa digantikan oleh platform manapun.</p>
            <p>Media kampus adalah jembatan antara institusi dan mahasiswa. Kami menyampaikan informasi dengan bahasa yang dekat dengan mahasiswa, tanpa kehilangan akurasi dan profesionalisme.</p>
            <blockquote>"Di tengah banjir informasi, media kampus adalah filter yang membantu mahasiswa fokus pada apa yang benar-benar penting."</blockquote>
            <h2>Wadah Pengembangan Diri</h2>
            <p>Selain fungsi informatif, media kampus juga menjadi wadah bagi mahasiswa untuk mengembangkan kemampuan menulis, fotografi, desain, dan manajemen. Keterampilan ini sangat berharga untuk karir di masa depan.</p>
        `
    },
    {
        id: 7,
        title: "Kunjungan Dosen Pembimbing: Diskusi Hangat tentang Masa Depan KASMEDIA",
        excerpt: "Dosen pembimbing kami berkunjung untuk berdiskusi tentang arah dan pengembangan komunitas ke depannya.",
        category: "Kegiatan",
        author: "Siti Nurhaliza",
        date: "25 Nov 2024",
        readTime: "4 menit",
        image: "https://picsum.photos/seed/art7/800/400",
        tags: ["komunitas", "belajar", "inspirasi"],
        featured: false,
        body: `
            <p>Salah satu hal yang membuat KASMEDIA istimewa adalah kedekatan kami dengan dosen pembimbing. Beliau bukan hanya pembimbing, tapi juga mentor dan teman diskusi yang selalu mendukung.</p>
            <h2>Diskusi yang Bermakna</h2>
            <p>Pada kunjungan kali ini, kami membahas beberapa topik penting tentang masa depan komunitas:</p>
            <ul>
                <li>Rencana kolaborasi dengan komunitas kampus lain</li>
                <li>Pengembangan platform digital KASMEDIA</li>
                <li>Program mentoring untuk anggota baru</li>
                <li>Target konten untuk semester depan</li>
            </ul>
            <p>Diskusi berlangsung hangat selama hampir dua jam, dipenuhi ide-ide segar dan semangat untuk membuat KASMEDIA lebih baik lagi.</p>
        `
    },
    {
        id: 8,
        title: "Pengumuman: Jadwal Kegiatan KASMEDIA Semester Genap 2025",
        excerpt: "Berikut jadwal lengkap kegiatan dan program kerja KASMEDIA untuk semester genap tahun ajaran 2024/2025.",
        category: "Pengumuman",
        author: "Budi Santoso",
        date: "20 Nov 2024",
        readTime: "3 menit",
        image: "https://picsum.photos/seed/art8/800/400",
        tags: ["pengumuman", "komunitas", "kampus"],
        featured: false,
        body: `
            <p>Semester genap akan segera dimulai dan KASMEDIA telah menyusun jadwal kegiatan yang menarik. Berikut program kerja kami:</p>
            <h2>Jadwal Kegiatan</h2>
            <ul>
                <li><strong>Januari:</strong> Rekrutmen anggota baru & orientasi</li>
                <li><strong>Februari:</strong> Workshop penulisan jurnalistik</li>
                <li><strong>Maret:</strong> Kolaborasi konten dengan UKM lain</li>
                <li><strong>April:</strong> Liputan acara kampus & Dies Natalis</li>
                <li><strong>Mei:</strong> Evaluasi tengah semester & gathering</li>
                <li><strong>Juni:</strong> Publikasi majalah digital edisi khusus</li>
            </ul>
            <p>Kami sangat antusias menyambut semester baru ini dan berharap dapat memberikan konten yang lebih berkualitas untuk seluruh civitas akademika.</p>
        `
    },
    {
        id: 9,
        title: "Cerita Dimas: Dari Pemalu Menjadi Desainer Andalan KASMEDIA",
        excerpt: "Perjalanan Dimas Pratama dalam menemukan passion desain grafis dan berkembang bersama KASMEDIA.",
        category: "Cerita",
        author: "Dimas Pratama",
        date: "15 Nov 2024",
        readTime: "5 menit",
        image: "https://picsum.photos/seed/art9/800/400",
        tags: ["inspirasi", "kreativitas", "mahasiswa"],
        featured: false,
        body: `
            <p>Nama saya Dimas, dan saya adalah orang yang paling tidak mungkin bergabung dengan komunitas apapun. Saya pemalu, lebih suka menyendiri, dan merasa tidak punya kemampuan yang bisa dibanggakan.</p>
            <h2>Titik Balik</h2>
            <p>Suatu hari, teman sekelas saya mengajak saya untuk datang ke pertemuan KASMEDIA. "Coba aja dulu," katanya. Dan saya coba.</p>
            <p>Yang membuat saya bertahan adalah bagaimana setiap anggota diterima apa adanya. Tidak ada yang menghakimi, semuanya saling mendukung.</p>
            <h2>Menemukan Passion</h2>
            <p>Saya mulai belajar desain grafis untuk membantu kebutuhan visual komunitas. Dari yang awalnya hanya iseng, sekarang desain sudah menjadi passion saya.</p>
            <blockquote>"KASMEDIA mengajarkan saya bahwa keberanian itu bukan tentang tidak takut, tapi tentang tetap melangkah meskipun takut."</blockquote>
        `
    },
    {
        id: 10,
        title: "Liputan: Seminar Kewirausahaan Bersama Alumni Sukses Universitas Pandanaran",
        excerpt: "KASMEDIA meliput seminar inspiratif yang menghadirkan alumni sukses untuk berbagi pengalaman dengan mahasiswa.",
        category: "Acara",
        author: "Rendi Setiawan",
        date: "10 Nov 2024",
        readTime: "4 menit",
        image: "https://picsum.photos/seed/art10/800/400",
        tags: ["kampus", "semarang", "inspirasi"],
        featured: false,
        body: `
            <p>Universitas Pandanaran mengadakan seminar kewirausahaan yang menghadirkan tiga alumni sukses sebagai pembicara. KASMEDIA turut hadir untuk meliput acara inspiratif ini.</p>
            <h2>Pembicara Inspiratif</h2>
            <p>Ketiga alumni berbagi perjalanan mereka dalam membangun bisnis dari nol hingga sukses. Mereka menekankan pentingnya:</p>
            <ul>
                <li>Konsistensi dan kegigihan</li>
                <li>Membangun jaringan sejak kuliah</li>
                <li>Tidak takut gagal dan bangkit kembali</li>
                <li>Memanfaatkan teknologi digital</li>
            </ul>
            <p>Seminar ini dihadiri lebih dari 200 mahasiswa dan menjadi salah satu acara kampus paling berkesan tahun ini.</p>
        `
    }
];

// ===== EVENTS =====
const eventsData = [
    {
        id: 1,
        title: "Kumpul Rutin Mingguan",
        day: "21",
        month: "Des",
        year: "2024",
        location: "Gedung B Lt. 2, Universitas Pandanaran",
        description: "Pertemuan rutin mingguan untuk evaluasi dan perencanaan konten minggu depan.",
        upcoming: true
    },
    {
        id: 2,
        title: "Workshop Penulisan Jurnalistik",
        day: "05",
        month: "Jan",
        year: "2025",
        location: "Aula Universitas Pandanaran",
        description: "Workshop intensif tentang teknik penulisan jurnalistik untuk anggota baru dan lama.",
        upcoming: true
    },
    {
        id: 3,
        title: "Open Recruitment Anggota Baru 2025",
        day: "15",
        month: "Jan",
        year: "2025",
        location: "Lobby Universitas Pandanaran",
        description: "Pembukaan pendaftaran anggota baru KASMEDIA periode 2025. Terbuka untuk seluruh mahasiswa.",
        upcoming: true
    },
    {
        id: 4,
        title: "Dokumentasi Dies Natalis ke-45",
        day: "01",
        month: "Des",
        year: "2024",
        location: "Universitas Pandanaran",
        description: "Dokumentasi lengkap rangkaian acara Dies Natalis Universitas Pandanaran ke-45.",
        upcoming: false
    },
    {
        id: 5,
        title: "Workshop Fotografi Internal",
        day: "10",
        month: "Nov",
        year: "2024",
        location: "Taman Kampus Universitas Pandanaran",
        description: "Workshop fotografi dasar untuk meningkatkan kualitas dokumentasi komunitas.",
        upcoming: false
    }
];
