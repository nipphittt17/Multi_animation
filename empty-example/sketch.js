let canvas;
let isPause = false;
let eat = false;
let saveButton;

let zoom = 10;
let zoomSpeed;
let zoomOut = 5;
let zoomIn = -5;

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

let startButton;
let currentTime = 0;

function setup() {
    canvas = createCanvas(800, 800);
    console.log("canvas is created");
    saveButton = createButton("Save PNG");
    saveButton.mousePressed(savePng);
    frameRate(10);
}

function draw() {
    // imageMode(CENTER);
    background(213, 224, 242);
    // ellipse(120, 220, 80, 80);

    if (zoom > zoomOut) zoomSpeed = -2;
    else if (zoom < zoomIn) zoomSpeed = 2;
    zoom = zoom + zoomSpeed;

    image(playerImages[frameCount % 7], mouseX, mouseY, 120, 170);
    image(iceCream[0], 100, 200, 40 + zoom, 80 + zoom);
    image(apple[0], 200, 350, 45 + zoom, 50 + zoom);
    image(coconut[0], 300, 100, 45 + zoom, 45 + zoom);
    image(soda[0], 500, 400, 30 + zoom, 60 + zoom);
    image(lemon[0], 150, 600, 40 + zoom, 50 + zoom);
    image(pear[0], 350, 550, 40 + zoom, 60 + zoom);
    image(mushroom[0], 580, 80, 40 + zoom, 60 + zoom);
    image(fries[0], 650, 560, 35 + zoom, 60 + zoom);
    image(fish[0], 470, 220, 60 + zoom, 50 + zoom);
    if (isPause) {
        image(playerImages[0], mouseX, mouseY, 120, 170);
    }

    image(startButton, 80, 680);
    textSize(20);

    // text("TIME: " + currentTime, 200, 730);
    // if (startButton.mousePressed()) {
    // }
    // currentTime = int((millis() * 3) / 1000);
    // text("TIME: " + currentTime, 200, 730);
    // image(iceCream[0], 570, 600, 35, 70);

    // image(apple, 400, 250);
    // image(coconut, 550, 240);

    // if (eat && x >= 140) {
    //     iceCream.splice(0, 1);
    //     image(iceCream[0], 210, 250);
}

function savePng() {
    save(canvas, "canvas.png");
}

function mouseClicked() {
    if (mouseButton == RIGHT) {
        isPause = true;
    }
    return false;
}

function keyPressed() {
    if (keyCode === 32) {
        //32=spacebar
        eat = true;
        if (
            // eat &&
            mouseX >= 20 &&
            mouseX <= 80 &&
            mouseY >= 80 &&
            mouseY <= 220
        ) {
            iceCream.splice(0, 1);
            image(iceCream[0], 100, 200, 40, 80);
        }

        if (
            // eat &&
            mouseX >= 120 &&
            mouseX <= 180 &&
            mouseY >= 230 &&
            mouseY <= 370
        ) {
            apple.splice(0, 1);
            image(apple[0], 200, 350, 45, 50);
        }

        if (
            // eat &&
            mouseX >= 220 &&
            mouseX <= 280 &&
            mouseY >= -20 &&
            mouseY <= 120
        ) {
            coconut.splice(0, 1);
            image(coconut[0], 300, 100, 45, 45);
        }

        if (
            // eat &&
            mouseX >= 420 &&
            mouseX <= 480 &&
            mouseY >= 280 &&
            mouseY <= 420
        ) {
            soda.splice(0, 1);
            image(soda[0], 500, 400, 30, 60);
        }

        if (
            // eat &&
            mouseX >= 70 &&
            mouseX <= 130 &&
            mouseY >= 480 &&
            mouseY <= 620
        ) {
            lemon.splice(0, 1);
            image(lemon[0], 150, 600, 40, 50);
        }

        if (
            // eat &&
            mouseX >= 270 &&
            mouseX <= 330 &&
            mouseY >= 430 &&
            mouseY <= 570
        ) {
            pear.splice(0, 1);
            image(pear[0], 350, 550, 40, 60);
        }

        if (
            // eat &&
            mouseX >= 500 &&
            mouseX <= 560 &&
            mouseY >= -40 &&
            mouseY <= 100
        ) {
            mushroom.splice(0, 1);
            image(mushroom[0], 580, 80, 40, 60);
        }

        if (
            // eat &&
            mouseX >= 570 &&
            mouseX <= 630 &&
            mouseY >= 440 &&
            mouseY <= 580
        ) {
            fries.splice(0, 1);
            image(fries[0], 650, 560, 35, 60);
        }

        if (
            // eat &&
            mouseX >= 390 &&
            mouseX <= 450 &&
            mouseY >= 100 &&
            mouseY <= 240
        ) {
            fish.splice(0, 1);
            image(fish[0], 470, 220, 60, 50);
        }
    }

    if (keyCode === 39) {
        eat = false;
    }
}

function preload() {
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
}
