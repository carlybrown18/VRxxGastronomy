var radio1;
var radio2;
var restaurantSound;
var description1 = 'While advances in gastronomy and Virtual Reality have previously progressed in parallel fields, they are currently'
var description2 = 'closer than ever to fusing. Project Nourished is the embodiment if this new concept, in which a VR environment is'
var description3 = 'created in order to alter a diner"s sensory experience. Jinsoo An leads a group of talented chefs, conceptual'
var description4 = 'artists, technical designers, and molecular mixologists to work together to create unique culinary experiences. This'
var description5 = 'web app is a basic exercise that will get you thinking about how your environment affects your culinary experience,'
var description6 = 'just follow the directions below... bon appetit!'
var photoX = 590
var photoY = 500
var photoPositionX = 155
var photoPositionY = 305
var textX = 440
var PNinfo1 = 'hello this is a test'
var PNinfo2 = 'hello'
var PNinfo3 = 'hello'

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
	createCanvas(1000, 680);

  radio1 = createRadio();
	radio1.option('Myanmar, Burma', 1);
  radio1.option('Grand Central Bar, NYC', 3);
  radio1.option('Hoh Rain Forest, Olympic National Park', 2);
	radio1.option('Miaokou, Taiwan', 4);
  radio1.style('width', '1000px');
  radio1.style('font-size', '20px');
  radio1.style('cursor', 'pointer');
  radio1.style('radius', '0px');
  radio1.style('font-family', 'serif');

  textAlign(CENTER);

	radio2 = createRadio();
  radio2.option('Restaurant Ambiance', 1);
  radio2.option('Rainy Day', 2);
  radio2.option('Claire de Lune', 3);
  radio2.option('Office Typewriter', 4);
  radio2.style('width', '1000px');
  radio2.style('font-size', '31px');

}

function draw() {

  //description
  textSize(17);
  text(description1, textX, 80);
  text(description2, textX, 100);
  text(description3, textX, 120);
  text(description4, textX, 140);
  text(description5, textX, 160);
  text(description6, textX, 180);

  //directions
  textSize(17);
  text("1. Find a slightly bland item of food that you can take many homogenous bites of", textX, 230);
  text("2. Isolate yourself as much as possible so that the variables in your environment have minimal effect", textX, 250);
  text("3. Play around with combinations of sight and sound, each time taking a bite of your food", textX, 270);
  text("4. Observe and enjoy!", textX, 290);

  //title
  textSize(50);
  fill(107, 33, 168);
  text("VR x Gastronomy", textX, 60);

  //directions title
  fill(33, 107, 168);
  textSize(25);
  text('Here"s where you come in!', textX, 210)

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
