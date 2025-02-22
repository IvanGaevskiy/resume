document.addEventListener('DOMContentLoaded', function () {
  const lamp = document.querySelector('.lamp--js');
  const copyEmail = document.querySelector('.copy-email--js');
  const callCopyEmail = throttle(getCopyEmail, 1000);

  function showToast(message) {
    const toastContainer = document.querySelector('.toast-container--js');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 100);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 500); // после исчезновения убираем из DOM
    }, 3000);
  }

  function throttle(func, wait) {
    let lastCall = 0;

    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= wait) {
            lastCall = now;
            func.apply(this, args);
        }
    };
  }

  function toggleLamp() {
    const body = document.querySelector('body');
    body.classList.toggle('lamp--on');
  }

  function getCopyEmail() {
    navigator.clipboard.writeText(copyEmail.innerText);
    showToast('Email скопирован');
  }

  lamp.addEventListener('click', () => {
    toggleLamp();
  });
  
  copyEmail.addEventListener('click', () => {
    callCopyEmail();
  });
});