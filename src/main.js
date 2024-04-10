// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const input = document.querySelector('.text-input');
import errorIcon from "../img/bi_x-octagon.svg"
// const loader = document.querySelector('.loader');
function showMessage(icon, message, bgr) {
  iziToast.show({
    iconUrl:icon,
    titleColor: 'White',
    titleSize: '24px',
    message,
    messageColor: 'White',
    messageSize: '16px',
    backgroundColor: bgr,
    position: 'topRight',
    timeout: 3000,
});
}
form.addEventListener("submit", onSubmit);
function onSubmit(event) {
    event.preventDefault();
    const searchQuery = event.currentTarget.elements.search.value.trim();
    ;
    getPhotos(searchQuery)
        .then(array => {
            if (array.length === 0) {
                iziToast.show({
                    position: 'topRight',
                    title: 'Info',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
                //showMessage(errorIcon,'Sorry, there are no images matching your search query. Please try again!','#ef4040')
            } else {
                createGalleryMarkup(array);
                lightbox.refresh();
            }
    })

        .catch((err) => {
            console.log('Error:', err); iziToast.error({
                position: 'topRight',
                title: 'Error',
                message:
                    '',
            });
        })
}
export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

function createGalleryMarkup(array) {
  return array
    .map(
    //   (image) =>
    // //     `<li class="gallary-item">
    // //     <img src="${image.urls.small}" alt="${image.description}">
    // //   </li>`
    )
    .join("");
}