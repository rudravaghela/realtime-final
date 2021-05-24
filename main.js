function preload(){

}
function draw(){
image(video,0,0,350,350);
classifier.classify(video,gotResult);
}
function setup(){
canvas = createCanvas(350,350);
canvas.center();
video = createCapture(VIDEO);
video.hide();
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3ZRNdKTML/model.json',modelLoded);
}

function modelLoded()
{
console.log("model loaded!");
}

function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("object_name").innerHTML = results[0].label;
    document.getElementById("accuracy_info").innerHTML = results[0].confidence.toFixed(2);
}
}


