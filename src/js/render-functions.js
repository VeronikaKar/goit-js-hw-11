// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
const lightbox = new SimpleLightbox('#id', 
{ 
    captions: true,
    captionDelay: 250,
    captionsData: 'alt',
    captionPosition: 'bottom', 
   
});
