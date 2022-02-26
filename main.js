Webcam.attach('#camera');
camera = document.getElementById("webcam");

Webcam.set({
    width: 350,
    height:300,
    image_format : 'png',
    png_quality:100
})

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("cap_img").innerHTML = '<img id="selfie_image" src="' + data_uri +'">'
    })
} 

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/EJ_0_qDQU/model.json');