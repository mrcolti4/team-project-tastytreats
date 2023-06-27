// Отримуємо посилання на елементи модального вікна та кнопки відкриття/закриття
const modal = document.querySelector('.modal-order');
const openBtn = document.querySelector('.btn-hero');
const closeBtn = document.querySelector('.order-close-btn');
function openModal() {
  modal.classList.add('active');
}
function closeModal() {
  modal.classList.remove('active');
}
openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

