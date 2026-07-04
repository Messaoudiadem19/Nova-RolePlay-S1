const copyBtn = document.getElementById('copyBtn');
const body = document.body;
const audio = document.getElementById('bgAudio');
const audioToggle = document.getElementById('audioToggle');

if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const ip = '51.75.73.28:7007';
    try {
      await navigator.clipboard.writeText(ip);
      copyBtn.textContent = 'تم النسخ!';
      setTimeout(() => {
        copyBtn.textContent = 'نسخ IP';
      }, 1500);
    } catch (error) {
      copyBtn.textContent = 'فشل النسخ';
      setTimeout(() => {
        copyBtn.textContent = 'نسخ IP';
      }, 1500);
    }
  });
}

if (body) {
  window.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * 20;
    body.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
  });

  window.addEventListener('mouseleave', () => {
    body.style.backgroundPosition = 'center';
  });
}

if (audioToggle && audio) {
  audioToggle.addEventListener('click', async () => {
    if (audio.paused) {
      audio.volume = 0.2;
      try {
        await audio.play();
        audioToggle.setAttribute('aria-label', 'إيقاف الموسيقى');
      } catch (error) {
        audioToggle.setAttribute('aria-label', 'تشغيل الموسيقى');
      }
    } else {
      audio.pause();
      audioToggle.setAttribute('aria-label', 'تشغيل الموسيقى');
    }
  });
}
