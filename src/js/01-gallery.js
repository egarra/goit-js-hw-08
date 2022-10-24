import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const onCreateGallery = () => {

    const galleryWrap = document.querySelector('.gallery');

    galleryItems.forEach(image => {
        galleryWrap.insertAdjacentHTML(
            'afterbegin', 
            `<a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"></a>`);
    })

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
      })
}

console.log(galleryItems);
onCreateGallery();
