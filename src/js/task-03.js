const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');

let elemeGallery = images
  .map(el => {
    return `<li><img alt='${el.alt}' src='${el.url}'></li>`;
  })
  .join(' ');

galleryRef.insertAdjacentHTML('afterbegin', elemeGallery);

// function addListImeges(imeges) {
//   const galleryRef = document.querySelector(".gallery");

//   let arr = [];
//   imeges.forEach((el) => {
//     const itemGallery = document.createElement("li");
//     const imgGallery = document.createElement("img");
//     imgGallery.alt = el.alt;
//     imgGallery.src = el.url;
//     itemGallery.append(imgGallery);
//     return arr.push(itemGallery);
//   });
//   return galleryRef.append(...arr);
// }

// addListImeges(images);
