//dom elements
const ul = document.querySelector('#menu');
const icon = document.querySelector('#burger-icon');
//toggling list
icon.addEventListener('click', () => {
  ul.classList.toggle('hidden');
});
