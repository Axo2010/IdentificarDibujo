function setup(){
canvas=createCanvas(280,280);
canvas.center();
backgruound("white");
canvas.mouseRelased(clasifiedCanvas);
synth=window.speechSynthesis;

}
function preload(){
    clasifier=ml5.imageClasifier('DoodleNeck');
}
function clearCanvas(){
    background("white");
}
function draw(){
    stroke(0);
    if (mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}