/*
knapp för att ta bort bild #help
*/


console.log(localStorage)
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


    
}

getImages();