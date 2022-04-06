Arabic_Kuthu_song="";
Samajavara_gamana_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Arabic_Kuthu_song = loadSound("music2.mp3");
    Samajavara_gamana_song = loadSound("music.mp3");
}

function draw(){
    image(video,0,0,600,530);
}