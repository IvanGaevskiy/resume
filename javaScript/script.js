document.addEventListener('DOMContentLoaded', function() {
  const lamp = document.querySelector('body');
  lamp.addEventListener('click', () => {
    lamp.classList.toggle('lamp--on');
    console.log('click');
  });
});