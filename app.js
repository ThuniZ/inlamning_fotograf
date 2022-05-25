const cameraButton = document.querySelector('#start-camera');
const videoElem = document.querySelector('#camera');
const takePicButton = document.querySelector('#take-picture');
const canvas = document.querySelector('#pic-canvas');


const ctx = canvas.getContext('2d');
let videoStream;
let imagesGallery = [];

/*
starta kamera/ ta bild -klar
spara till local - klar?
knapp för att ta bort bild #help
fixa css:
    ska det vara 2 sidor // 2 sidor funkar
    2 bilder per rad
    size för kamera
pushnotifikation
service worker // funkar??
spara local innan allt


*/

//-----------ta bild-------------//
window.addEventListener('load', async () => {
    if ('mediaDevices' in navigator) {
        videoStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        console.log(videoStream);
        videoElem.style.display = 'flex';
        //canvas.style.display = 'none';
        videoElem.srcObject = videoStream;

    }
});

takePicButton.addEventListener('click', () => {
    ctx.drawImage(videoElem, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png'); 

    imagesGallery.push({
        id: imagesGallery.length,
        image: imageData        
    });

    localStorage.setItem('galleryApp', JSON.stringify(imagesGallery));

    /*
    videoStream.getTracks().forEach(track => {
        track.stop();
    });

    videoElem.style.display = 'none';
    */

});

const galleryPage = document.querySelector('to-gallery');

function toGallery() {
    window.location.href="gallery.html";
}
    

//--------pushnotis----------//


