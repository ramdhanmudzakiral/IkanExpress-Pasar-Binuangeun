// Fitur pencarian produk sederhana
document.querySelector("button").addEventListener("click", function() {
  let input = document.getElementById("search").value.toLowerCase();
  let produk = document.querySelectorAll("#produk h3");

  produk.forEach(p => {
    let card = p.closest("div");
    if (p.innerText.toLowerCase().includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

// buka sidebar
menuBtn.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
  sidebar.classList.add("translate-x-0");
});

// tutup sidebar
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("translate-x-0");
  sidebar.classList.add("-translate-x-full");
});


// Nomor WhatsApp kamu
const waNumber = "6281234567890"; 

// Semua tombol wa-btn
document.querySelectorAll(".wa-btn").forEach(button => {
  button.addEventListener("click", function () {
    const productName = this.closest("div").querySelector("h3").innerText;
    const message = `Halo, saya mau pesan ${productName}`;
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

    // Tampilkan alert modern sebelum redirect ke WhatsApp
    Swal.fire({
      title: "Order Via WhatsApp 😃",
      text: "Bisa Nego Harga!",
      icon: "success",
      confirmButtonText: "Lanjutkan ke WhatsApp",
      confirmButtonColor: "#25D366", // hijau khas WA
      showCancelButton: true,
      cancelButtonText: "Batal"
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(url, "_blank"); // buka WA kalau user klik "Lanjutkan"
      }
    });
  });
});


// Search filter katalog produk dengan animasi
function setupSearch(inputId) {
  const input = document.getElementById(inputId);

  if (!input) return; // kalau input tidak ada, skip

  input.addEventListener("keyup", function () {
    let filter = input.value.toLowerCase();
    let cards = document.querySelectorAll("#produk .bg-white");
    let found = false;

    cards.forEach(card => {
      let productName = card.querySelector("h3").innerText.toLowerCase();
      if (productName.includes(filter)) {
        card.style.display = "block";
        card.classList.remove("animate__animated", "animate__fadeInUp", "animate__faster");
        void card.offsetWidth;
        card.classList.add("animate__animated", "animate__fadeInUp", "animate__faster");
        found = true;
      } else {
        card.style.display = "none";
      }
    });

    
  });
}

// Aktifkan untuk desktop & mobile
setupSearch("search");
setupSearch("search-mobile");

document.getElementById('year').textContent = new Date().getFullYear();

    // Counter animasi sederhana
    const counters = document.querySelectorAll('[data-counter]');
    counters.forEach(el => {
      const target = +el.getAttribute('data-counter');
      const isPercent = el.textContent.includes('%');
      let cur = 0;
      const step = Math.max(1, Math.floor(target / 60));
      const tick = () => {
        cur += step;
        if (cur >= target) cur = target;
        el.textContent = isPercent ? cur + '%' : cur.toLocaleString() + (target >= 7500 ? '+' : '');
        if (cur < target) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });

    // Accordion
    document.querySelectorAll('.accordion-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !expanded);
        const content = btn.nextElementSibling;
        content.classList.toggle('hidden');
      });
    });

    // Alert modern untuk WA button (sesuai permintaan sebelumnya)
    const waBtn = document.getElementById('wa-btn');
    if (waBtn) {
      waBtn.addEventListener('click', (e)=>{
        // Munculkan alert tanpa menghalangi navigasi (cukup info cepat)
        // Komponen toast ringan
        const toast = document.createElement('div');
        toast.className = "fixed z-[999] bottom-4 left-1/2 -translate-x-1/2 px-4 py-3 rounded-2xl shadow-lg glass border border-white/60";
        toast.innerHTML = "<span class='font-semibold'>Order via WhatsApp —</span> Bisa Nego 😊";
        document.body.appendChild(toast);
        setTimeout(()=> toast.remove(), 2200);
      });
    }

    // carousl.js
      const slides = document.getElementById('carousel-slides');
  const indicators = document.querySelectorAll('[data-slide]');
  let currentIndex = 0;
  const totalSlides = indicators.length;

  function updateCarousel() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach((dot, i) => {
      dot.classList.toggle("opacity-100", i === currentIndex);
      dot.classList.toggle("opacity-50", i !== currentIndex);
    });
  }

  document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  });

  indicators.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateCarousel();
    });
  });

  // Auto Slide tiap 5 detik
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }, 8000);

  // Init
  updateCarousel();
