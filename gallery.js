
const galleryElem = document.querySelector('#gallery');


function toVideo() {
    window.location.href="index.html";
}

function createImage(image) {
    const wrapp = document.createElement('article');
    wrapp.setAttribute('id', 'wrapp-button')
    const imageElem = document.createElement('img');
    imageElem.setAttribute('src', image.image);

    
    const removeElem = document.createElement('button');
    removeElem.setAttribute('id', 'remove-button')

    
    removeElem.addEventListener('click', () => {
        removePic(image);
        imageElem.remove();
        removeElem.remove();
    })

    wrapp.append(imageElem)
    wrapp.append(removeElem)
    galleryElem.append(wrapp);
}

function getImages() {
    const images = JSON.parse(localStorage.getItem('galleryApp'));

    for(const image of images) {
        createImage(image);
    }
}



function removePic(image) {
    console.log(image)
    console.log(localStorage)

    let galleryRemove = JSON.parse(localStorage.getItem('galleryApp'));

    const id = galleryRemove.findIndex((x) => x.id == image.id)
    console.log(id)

    galleryRemove.splice(id, 1);
    galleryRemove = JSON.stringify(galleryRemove);

    localStorage.setItem('galleryApp', galleryRemove);
    
}

getImages();