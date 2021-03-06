var canvas;
var music;
var pinkSurface;
var redSurface;
var blueSurface;
var greenSurface;
var mainBox;
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(840,600);

    //create 4 different surfaces
    pinkSurface = createSprite(0,590,200,10);
    pinkSurface.shapeColor = "pink";

    redSurface = createSprite(210,590,200,10);
    redSurface.shapeColor = "red";

    blueSurface = createSprite(420,590,200,10);
    blueSurface.shapeColor = "blue";

    greenSurface = createSprite(630,590,200,10);
    greenSurface.shapeColor = "green";
    
    edges = createEdgeSprites();
    //create box sprite and give velocity
     mainBox = createSprite (Math.round(random(20,750)),Math.round(random(20,550)),20,20);
     mainBox.velocityY = 5;
     mainBox.velocityX = 5;
     mainBox.shapeColor  = "white";
}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    
    
    mainBox.bounceOff(edges[0]);
    mainBox.bounceOff(edges[1]);
    mainBox.bounceOff(edges[2]);
    mainBox.bounceOff(edges[3]);

    //add condition to check if box touching surface and make it box
    if(pinkSurface.isTouching(mainBox) && mainBox.bounceOff(pinkSurface)){
        mainBox.shapeColor = "pink";
    }
    if(redSurface.isTouching(mainBox) && mainBox.bounceOff(redSurface)){
        mainBox.shapeColor = "red";
}
    if(blueSurface.isTouching(mainBox) && mainBox.bounceOff(blueSurface)){
    mainBox.shapeColor = "blue";
    }
    if(greenSurface.isTouching(mainBox) && mainBox.bounceOff(greenSurface)){
        mainBox.shapeColor = "green";
        mainBox.velocityX = 0;
        mainBox.velocityY = 0;
    }


    drawSprites();
}