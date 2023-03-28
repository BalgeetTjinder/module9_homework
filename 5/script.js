const pageInput = document.getElementById('page-input');
const limitInput = document.getElementById('limit-input');
const submitBtn = document.getElementById('submit-btn');
const gallery = document.getElementById('gallery');

let currentPage = localStorage.getItem('currentPage') || 1;
let currentLimit = localStorage.getItem('currentLimit') || 10;

pageInput.value = currentPage;
limitInput.value = currentLimit;

function getImages(page, limit) {
  fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    .then(response => response.json())
    .then(data => {
      gallery.innerHTML = '';
      data.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery__item');
        galleryItem.style.backgroundImage = `url(${item.download_url})`;
        gallery.appendChild(galleryItem);
      });
      localStorage.setItem('currentPage', page);
      localStorage.setItem('currentLimit', limit);
    });
}

submitBtn.addEventListener('click', () => {
  const pageValue = parseInt(pageInput.value);
  const limitValue = parseInt(limitInput.value);

  if (isNaN(pageValue) || pageValue < 1 || pageValue > 10) {
    gallery.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
  } else if (isNaN(limitValue) || limitValue < 1 || limitValue > 10) {
    gallery.innerHTML = 'Лимит вне диапазона от 1 до 10';
  } else {
    getImages(pageValue, limitValue);
  }
});

getImages(currentPage, currentLimit);