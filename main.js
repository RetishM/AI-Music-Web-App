song="";
song1="";
function preload() {
    song =loadSound("Arabic Kuthu.mp3");
    song1 =loadSound("Samajavara gamana.mp3");

}
function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide;
}
function draw() {
    image(video,0,0,600,500);
}
