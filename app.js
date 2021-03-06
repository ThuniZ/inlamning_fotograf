/*
Hämtar kameran i datorn
kör serviceworker
och pushar in bilderna i localstorage
*/

const cameraButton = document.querySelector('#start-camera');
const videoElem = document.querySelector('#camera');
const takePicButton = document.querySelector('#take-picture');
const canvas = document.querySelector('#pic-canvas');
const notis = document.querySelector('#notis');

const ctx = canvas.getContext('2d');
let videoStream;
let imagesGallery = [];

/*

*/

//----Service-Worker---///

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js')
        .then(() => { console.log('Service worker registrerad') })
        .catch(() => { console.log('Service worker inte registrerad') });
    }
}

registerServiceWorker();

//-----------ta bild-------------//
window.addEventListener('load', async () => {
    if ('mediaDevices' in navigator) {
        videoStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        console.log(videoStream);
        videoElem.style.display = 'flex';
        videoElem.srcObject = videoStream;

    }

    const oldImg = JSON.parse(localStorage.getItem('galleryApp'));
    oldImg.push(imagesGallery)
    console.log(imagesGallery)

});

takePicButton.addEventListener('click', () => {
    ctx.drawImage(videoElem, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png'); 

    imagesGallery.push({
        id: imagesGallery.length,
        image: imageData        
    });

    localStorage.setItem('galleryApp', JSON.stringify(imagesGallery));
    canvas.style.display = 'flex'

    //-----notis---//
    //Även visar bilden över kameran i 3 sek//
    notis.style.display = 'flex'


    setTimeout(function(){
        document.getElementById("notis").style.display = "none"; 
       }, 3000);

    setTimeout(function(){
        document.getElementById("pic-canvas").style.display = "none"; 
       }, 3000);

});

//---byt sida--//
const galleryPage = document.querySelector('to-gallery');

function toGallery() {
    window.location.href="gallery.html";
}
    




