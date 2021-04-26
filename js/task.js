'use strict'

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
]

const modal = document.querySelector('div.lightbox')
const gallery = document.querySelector('.js-gallery')
const button = document.querySelector('button[data-action="close-lightbox"]')
const imgModal = modal.querySelector('.lightbox__image')
const overlay = modal.querySelector('.lightbox__overlay')
let target

images.forEach((el) =>
  gallery.insertAdjacentHTML(
    'afterbegin',
    `<li class="gallery__item"><a class="gallery__link" href=${el.original} >  <img    class="gallery__image"    src=${el.preview}   data-source=${el.original}    alt=${el.description}  /></a></li>`,
  ),
)

function assign() {
  imgModal.setAttribute('src', target.getAttribute('data-source'))
  imgModal.setAttribute('alt', target.getAttribute('alt'))
}

function modalWindow(event) {
  if (event.target.matches('.gallery__image')) {
    event.preventDefault()
    target = event.target
    modal.classList.add('is-open')
    assign()
  }
}

function closeWindow() {
  modal.classList.remove('is-open')
  imgModal.removeAttribute('src')
  imgModal.removeAttribute('alt')
}

gallery.addEventListener('click', modalWindow)
button.addEventListener('click', closeWindow)
overlay.addEventListener('click', closeWindow)

document.addEventListener('keyup', (ev) => {
  if (ev.code === 'Escape') {
    closeWindow()
  }
})

function nextImg(ev) {
  if (ev.code === 'ArrowRight' && imgModal.hasAttribute('src')) {
    target = target.parentNode.parentNode.nextSibling.querySelector(
      '.gallery__image',
    )
    assign()
  }
}

function prevImg(ev) {
  if (ev.code === 'ArrowLeft' && imgModal.hasAttribute('src')) {
    target = target.parentNode.parentNode.previousSibling.querySelector(
      '.gallery__image',
    )
    assign()
  }
}

document.addEventListener('keyup', nextImg)
document.addEventListener('keyup', prevImg)
