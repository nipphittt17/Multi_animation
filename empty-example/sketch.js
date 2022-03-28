let canvas;
let saveButton;
let playerImages = [];
let iceCream = [];
let apple = [];
let coconut = [];
let soda = [];
let lemon = [];
let pear = [];
let mushroom = [];
let fries = [];
let fish = [];

let zoom = 10;
let zoomOut = 3;
let zoomIn = -5;
let zoomSpeed;

let startButton;
let returnButton;

let currentTime;
let soundGame;
let soundEat;
// let x = 10;
// let y = 170;

const alreadyAte = {
    iceCream: false,
    apple: false,
    coconut: false,
    soda: false,
    lemon: false,
    pear: false,
    mushroom: false,
    fries: false,
    fish: false,
};

function setup() {
    // put setup code here
    backgroundMusic();
    canvas = createCanvas(800, 800);
    console.log("canvas is created");
    saveButton = createButton("Save PNG");
    saveButton.mousePressed(savePng);
    frameRate(20);
}

/**
 * @param {Array} imgArr
 * @param {boolean} alreadyAte
 * @param {number} posX
 * @param {number} posY
 * @param {number} scale
 */
const setIMG = (imgArr, alreadyAte, posX, posY, scale) => {
    if (zoom > zoomOut) zoomSpeed = -2;
    else if (zoom < zoomIn) zoomSpeed = 2;
    zoom = zoom + zoomSpeed;

    if (!alreadyAte) {
        image(
            imgArr[0],
            posX,
            posY,
            imgArr[0].width * scale + zoom,
            imgArr[0].height * scale + zoom
        );
    } else {
        image(
            imgArr[1],
            posX,
            posY + (imgArr[0].height * scale - imgArr[1].height * scale),
            imgArr[1].width * scale + zoom,
            imgArr[1].height * scale + zoom
        );
    }
};

function draw() {
    // put drawing code here

    // if (!isPause) {
    // imageMode(CENTER);
    background(213, 224, 242);
    let scaleDown = 0.6;

    image(playerImages[frameCount % 7], mouseX, mouseY, 120, 170);
    setIMG(iceCream, alreadyAte.iceCream, 100, 200, scaleDown);
    setIMG(apple, alreadyAte.apple, 200, 350, 0.9);
    setIMG(coconut, alreadyAte.coconut, 300, 100, scaleDown);
    setIMG(soda, alreadyAte.soda, 500, 400, scaleDown);
    setIMG(lemon, alreadyAte.lemon, 150, 600, 0.8);
    setIMG(pear, alreadyAte.pear, 350, 550, 0.9);
    setIMG(mushroom, alreadyAte.mushroom, 580, 80, 1.2);
    setIMG(fries, alreadyAte.fries, 650, 560, scaleDown);
    setIMG(fish, alreadyAte.fish, 470, 220, 0.6);

    image(startButton, 80, 680);
    image(
        returnButton,
        190,
        690,
        returnButton.width * 0.8,
        returnButton.height * 0.8
    );

    textSize(24);

    fill(0, 75, 153);
    // currentTime = 0;
    currentTime = int((millis() * 3) / 1000);
    text("TIME: " + currentTime, 300, 740);

    // startButton.mousePressed(start);

    if (
        alreadyAte.iceCream == true &&
        alreadyAte.apple == true &&
        alreadyAte.coconut == true &&
        alreadyAte.soda == true &&
        alreadyAte.lemon == true &&
        alreadyAte.pear == true &&
        alreadyAte.mushroom == true &&
        alreadyAte.fries == true &&
        alreadyAte.fish == true
    ) {
        fill(255);
        rect(225, 250, 350, 200, 20);
        fill(0, 75, 153);
        textSize(30);
        text("Your score is " + (100 - currentTime) + "/100", 260, 330);
        if (currentTime <= 20) {
            text("Congratulations!!\nYou are a pro eater ", 260, 370);
        } else if (currentTime > 20 && currentTime < 50) {
            text("Good job!\nKeep going ", 260, 370);
        } else if (currentTime > 50 && currentTime < 100) {
            text("Too slow!\nKeep going ", 260, 370);
        } else {
            text("Very bad\nKeep going ", 260, 370);
        }
        currentTime.pause();
    }
}

function savePng() {
    save(canvas, "canvas.png");
}

function backgroundMusic() {
    soundGame.play();
    soundGame.setVolume(0.3);
}

function keyPressed() {
    if (keyCode === 32) {
        //32=spacebar
        // eat = true;
        if (
            !alreadyAte.iceCream &&
            mouseX >= 20 &&
            mouseX <= 80 &&
            mouseY >= 80 &&
            mouseY <= 220
        ) {
            alreadyAte.iceCream = true;
            soundEat.play();
        }

        if (
            !alreadyAte.apple &&
            mouseX >= 120 &&
            mouseX <= 180 &&
            mouseY >= 230 &&
            mouseY <= 370
        ) {
            alreadyAte.apple = true;
            soundEat.play();
        }

        if (
            !alreadyAte.coconut &&
            mouseX >= 220 &&
            mouseX <= 280 &&
            mouseY >= -20 &&
            mouseY <= 120
        ) {
            alreadyAte.coconut = true;
            soundEat.play();
        }

        if (
            !alreadyAte.soda &&
            mouseX >= 420 &&
            mouseX <= 480 &&
            mouseY >= 280 &&
            mouseY <= 420
        ) {
            alreadyAte.soda = true;
            soundEat.play();
        }

        if (
            !alreadyAte.lemon &&
            mouseX >= 70 &&
            mouseX <= 130 &&
            mouseY >= 480 &&
            mouseY <= 620
        ) {
            alreadyAte.lemon = true;
            soundEat.play();
        }

        if (
            !alreadyAte.pear &&
            mouseX >= 270 &&
            mouseX <= 330 &&
            mouseY >= 430 &&
            mouseY <= 570
        ) {
            alreadyAte.pear = true;
            soundEat.play();
        }

        if (
            !alreadyAte.mushroom &&
            mouseX >= 500 &&
            mouseX <= 560 &&
            mouseY >= -40 &&
            mouseY <= 100
        ) {
            alreadyAte.mushroom = true;
            soundEat.play();
        }

        if (
            !alreadyAte.fries &&
            mouseX >= 570 &&
            mouseX <= 630 &&
            mouseY >= 440 &&
            mouseY <= 580
        ) {
            alreadyAte.fries = true;
            soundEat.play();
        }

        if (
            !alreadyAte.fish &&
            mouseX >= 390 &&
            mouseX <= 450 &&
            mouseY >= 100 &&
            mouseY <= 240
        ) {
            alreadyAte.fish = true;
            soundEat.play();
        }
    }

    if (keyCode === 39) {
        playerImages.pause();
    }
}

function preload() {
    soundGame = loadSound(
        "data/sound/Sound_game_super_mario_bros_soundtrack.mp3"
    );
    soundEat = loadSound("data/sound/Sound_eat.mp3");

    for (let i = 1; i < 8; i++) {
        playerImages.push(loadImage("data/png/Run (" + i + ").png"));
    }

    iceCream.push(loadImage("data/iceCream/iceCream.png"));
    iceCream.push(loadImage("data/iceCream/iceCreamCone.png"));

    apple.push(loadImage("data/apple/apple.png"));
    apple.push(loadImage("data/apple/appleHalf.png"));

    coconut.push(loadImage("data/coconut/coconut.png"));
    coconut.push(loadImage("data/coconut/coconutHalf.png"));

    soda.push(loadImage("data/soda/sodaCan.png"));
    soda.push(loadImage("data/soda/sodaCanCrushed.png"));

    lemon.push(loadImage("data/lemon/lemon.png"));
    lemon.push(loadImage("data/lemon/lemonHalf.png"));

    pear.push(loadImage("data/pear/pear.png"));
    pear.push(loadImage("data/pear/pearHalf.png"));

    mushroom.push(loadImage("data/mushroom/mushroom.png"));
    mushroom.push(loadImage("data/mushroom/mushroomHalf.png"));

    fries.push(loadImage("data/fries/fries.png"));
    fries.push(loadImage("data/fries/friesEmpty.png"));

    fish.push(loadImage("data/fish/fish.png"));
    fish.push(loadImage("data/fish/fishBones.png"));

    startButton = loadImage("data/button/buttonStart.png");
    returnButton = loadImage("data/button/return.png");
}
