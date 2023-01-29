Peter_pan_song="";
Harry_potter_theme_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Peter_pan_song = loadSound("YY2Mate.is - James Arthur - Impossible (Lyric Video)-EUd4ae138RM-160k-1658131147267.mp3")
    Harry_potter_theme_song = loadSound("billie-eilish-you-should-see-me-in-a-crown-of.mp3");
}

function draw(){
    image(video,0,0,600,530);
}