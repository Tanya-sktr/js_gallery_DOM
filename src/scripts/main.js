'use strict';

const gallery = document.querySelector('.gallery');
const preview = document.querySelector('.gallery__large-img');

if (gallery && preview) {
  gallery.addEventListener('click', (e) => {
    const link = e.target.closest('a');

    if (!link) {
      return;
    }

    e.preventDefault();

    const bigSrc = link.getAttribute('href');

    preview.setAttribute('src', bigSrc);
  });
}
