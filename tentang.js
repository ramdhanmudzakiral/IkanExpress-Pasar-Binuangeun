
 
    // Tahun otomatis
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
  