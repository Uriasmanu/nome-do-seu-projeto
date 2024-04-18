const textBox = document.getElementById('text-box');
const text = document.getElementById('text');
const readMoreBtn = document.getElementById('read-more-btn');

readMoreBtn.addEventListener('click', function() {
  if (text.style.height === '100px') {
    text.style.height = 'auto';
    readMoreBtn.innerText = 'Ver menos';
  } else {
    text.style.height = '100px';
    readMoreBtn.innerText = 'Ver mais';
    textBox.scrollIntoView({ behavior: 'smooth' });
  }
});
