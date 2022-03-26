let canvas;
// let isPause = true;
let saveButton;
let playerImages = [];
let iceCream = [];
let apple = [];
let coconut = [];
let soda = [];
let lemon = [];
let eat = false;
// let x = 10;
// let y = 170;

function setup() {
    // put setup code here
    createCanvas(800, 800);
    console.log("canvas is created");
    saveButton = createButton("Save PNG");
    saveButton.mousePressed(savePng);
    frameRate(10);
}

function draw() {
    // put drawing code here

    // if (!isPause) {
    // imageMode(CENTER);
    background(213, 224, 242);
    // ellipse(120, 220, 80, 80);
    image(playerImages[frameCount % 7], mouseX, mouseY, 120, 170);
    image(iceCream[0], 100, 200, 40, 80);
    image(apple[0], 200, 350, 45, 50);
    image(coconut[0], 300, 100, 45, 45);
    image(soda[0], 500, 400, 30, 60);
    image(lemon[0], 150, 600, 40, 50);

    // image(iceCream[0], 350, 550, 35, 70);
    // image(iceCream[0], 580, 80, 35, 70);
    // image(iceCream[0], 650, 160, 35, 70);
    // image(iceCream[0], 670, 550, 35, 70);
    // image(iceCream[0], 570, 600, 35, 70);

    // image(apple, 400, 250);
    // image(coconut, 550, 240);

    // if (eat && x >= 140) {
    //     iceCream.splice(0, 1);
    //     image(iceCream[0], 210, 250);
    // }
}

function savePng() {
    saveButton(canvas, "canvas.png");
}

function mouseClicked() {
    if (mouseButton == RIGHT) {
        isPause = !isPause;
    }
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
}
