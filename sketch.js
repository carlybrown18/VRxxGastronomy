var radio1;
var radio2;
var soundon=false;
function preload() {
  rainforest = loadImage("rainforest.jpg");
	restaurant = loadImage("buddakan.png");
	dinerbooth = loadImage("diner.jpg");
	beachfront = loadImage("beach.png");

	//sound
	soundFormats('mp3', 'ogg');
	restaurantSound = loadSound('Restaurant.mp3');
	doorbellSound = loadSound('doorbell.mp3');

}

function setup() {
	createCanvas(318, 206);

	radio1 = createRadio();
	radio1.option('rainforest', 1);
	radio1.option('beachfront', 2);
	radio1.option('restaurant', 3);
	radio1.option('dinerbooth', 4);
  radio1.style('width', '500px');
  textAlign(CENTER);

	radio2 = createRadio();
  radio2.option('apple', 1);
  radio2.option('bread', 2);
  radio2.option('juice', 3);
  radio2.style('width', '500px');
  textAlign(CENTER);

	//sound


}

function draw() {
	background(255);

	var val1 = radio1.value();
	//if value is real...
	if (val1==1) {
	    image(rainforest, 0, 0, 318, 206);
	} else if (val1==2) {
	   	image(beachfront, 0, 0, 318, 206);
	} else if (val1==3) {
			image(restaurant, 0, 0, 318, 206);
	} else if (val1==4) {
			image(dinerbooth, 0, 0, 318, 206);
	}

	var val2 = radio2.value();

	if (val2==1) {
		restaurantSound.setVolume(0.01);
	 	restaurantSound.play();
	 	restaurantSound.repeat();



	}

}


// var song;
//
// function setup() {
//   song = loadSound('Restaurant.mp3');
//   createCanvas(720, 200);
//   background(255,0,0);
// }
//
// function mousePressed() {
//   if ( song.isPlaying() ) { // .isPlaying() returns a boolean
//     song.stop();
//     background(255,0,0);
//   } else {
//     song.play();
//     background(0,255,0);
//   }
// }
