const openburg = document.getElementById('burger-open');
const burger = document.getElementById('burger');
const closeburg = document.getElementById('close-burger');

openburg.addEventListener('click', () => {
  burger.classList.toggle('active');
});

closeburg.addEventListener('click', () => {
  burger.classList.toggle('active');
});
