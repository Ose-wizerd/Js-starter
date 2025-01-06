'use strict';
const btn = document.querySelectorAll('.btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closebtn = document.querySelector('.close-modal');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', openModal);
}
closebtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (k) {
  if (k.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
