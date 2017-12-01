var radio1;
var radio2;
var restaurantSound;
var description1 = 'While  advances in gastronomy and Virtual Reality have previously progressed in parallel fields, they are'
var description2 = 'currently closer than ever to fusing. Project Nourished is the embodiment if this new concept, in'
var description3 = 'which a VR environment is created in order to alter a diner"s sensory experience. This web app is a basic'
var description4 = 'exercise that will get you thinking about how your environment affects your culinary experience. Bon appétit!'
var photoX = 590
var photoY = 480
var photoPositionX = 115
var photoPositionY = 240
var textX = 420

function preload() {
  //photo preloads
  rainforest = loadImage("rainforest.jpg");
	restaurant = loadImage("restaurant.png");
	miaokou = loadImage("miaokou.png");
	beachfront = loadImage("ocean.png");

	//sound preloads
	soundFormats('mp3', 'ogg');
	restaurantSound = loadSound('Restaurant.mp3');
	rainSound = loadSound('rain.mp3');
  classicalMusic = loadSound('classical.mp3');
  typewriter = loadSound('typewritter.mp3');

}

function setup() {
	createCanvas(1000, 650);


  radio1 = createRadio();
	radio1.option('Myanmar, Burma', 1);
  radio1.option('Grand Central Bar, NYC', 3);
  radio1.option('Hoh Rain Forest, Olympic National Park', 2);
	radio1.option('Miaokou, Taiwan', 4);
  radio1.style('width', '1000px');
  radio1.style('font-size', '20px');
  radio1.style('cursor', 'pointer');
  radio1.style('radius', '0px');

  textAlign(CENTER);

	radio2 = createRadio();
  radio2.option('Restaurant Ambiance', 1);
  radio2.option('Rainy Day', 2);
  radio2.option('Claire de Lune', 3);
  radio2.option('Office Typewriter', 4);
  radio2.style('width', '1000px');
  radio2.style('font-size', '31px');

  textAlign(CENTER);

}

function draw() {

  //title
  textSize(50);
  text("VR x Gastronomy", textX, 60);

  //description
  textSize(17);
  text(description1, textX, 80);
  text(description2, textX, 100);
  text(description3, textX, 120);
  text(description4, textX, 140);
  //directions
  text("1. Find a slightly bland item of food that you can take many homogenous bites of", textX, 160);
  text("2. Isolate yourself as much as possible so that the variables in your environment have minimal effect", textX, 180);
  text("3. Play around with combinations of sight and sound, each time taking a bite of your food", textX, 200);
  text("4. Observe and enjoy!", textX, 220);


  //picture radio set
  var val1 = radio1.value();
	//if value is real...
	if (val1==1) {
	    image(beachfront, photoPositionX, photoPositionY, photoX, photoY);
	} else if (val1==2) {
	   	image(rainforest, photoPositionX, photoPositionY, photoX, photoY);
	} else if (val1==3) {
			image(restaurant, photoPositionX, photoPositionY, photoX, photoY);
	} else if (val1==4) {
			image(miaokou, photoPositionX, photoPositionY, photoX, photoY);
	}

  //sound radio set
  var val2 = radio2.value();
  //if value is real...
  if (val2==1) {
    //stop other sounds
    rainSound.stop();
    classicalMusic.stop();
    typewriter.stop();

    //play this sound
    if ( restaurantSound.isPlaying() ) {

      } else {
        restaurantSound.setVolume(0.1);
        restaurantSound.play();
        restaurantSound.loop();
      }

    }

  if(val2==2) {
    //stop other sounds
    restaurantSound.stop();
    classicalMusic.stop();
    typewriter.stop();

    //play this sound
    if (rainSound.isPlaying() ) {

      } else {
        rainSound.setVolume(0.1);
        rainSound.play();
        rainSound.loop();
      }

    }

  if(val2==3) {
    //stop other sounds
    restaurantSound.stop();
    rainSound.stop();
    typewriter.stop();

    //play this sound
    if (classicalMusic.isPlaying() ) {

      } else {
        classicalMusic.setVolume(0.1);
        classicalMusic.play();
        classicalMusic.loop();
      }

    }

  if (val2==4) {
    //stop other sounds
    rainSound.stop();
    classicalMusic.stop();
    restaurantSound.stop();

    //play this sound
    if ( typewriter.isPlaying() ) {

      } else {
        typewriter.setVolume(0.1);
        typewriter.play();
        typewriter.loop();
      }

    }

noFill();

}
