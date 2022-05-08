Beli="";
music="";

function setup() 
{
	canvas =  createCanvas(580, 450);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
}

function preload(){
    Beli = loadSound("Beli.mp3");
    music = loadSound("music.mp3");
}

function draw() 
{
	image(video, 0, 0, 600, 500);
}