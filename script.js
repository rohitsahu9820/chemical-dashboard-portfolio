// COUNTER ANIMATION
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const update = () => {
    const target = +counter.dataset.target;
    const value = +counter.innerText;
    const inc = target / 100;

    if (value < target) {
      counter.innerText = Math.ceil(value + inc);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

// MODAL
function openModal(src) {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('modalImg').src = src;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
