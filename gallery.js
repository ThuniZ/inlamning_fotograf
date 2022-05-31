/*
knapp för att ta bort bild - klar
*/

const galleryElem = document.querySelector('#gallery');


function toVideo() {
    window.location.href="index.html";
}

function createImage(image) {
    const imageElem = document.createElement('img');
    imageElem.setAttribute('src', image.image);
    galleryElem.append(imageElem);
    
    const removeElem = document.createElement('button');
    removeElem.setAttribute('id', 'remove-button')
    galleryElem.append(removeElem)
    
    removeElem.addEventListener('click', () => {
        removePic(image);
        imageElem.remove();
        removeElem.remove();
    })

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