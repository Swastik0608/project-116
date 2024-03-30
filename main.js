noseX=0;
noseY=0;

function preload(){
 clownNose=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){

     canvas=createCanvas(400,400);
     canvas.center();
     video= createCapture(VIDEO);
     video.hide();
     video.size(400,400);
     poseNet= ml5.poseNet(video,modelLoaded);
     poseNet.on('pose',gotPoses);
}
function draw(){
 image(video,0,0,400,400);
 fill(50,6,225);
     stroke(76,43,210);

     image(clownNose,noseX,noseY,35,35);
}

function takeSnapshot(){
  
    save("img1.jpg");
}

function modelLoaded(){

    console.log("Pose net in initialized");
}

function gotPoses(results){
       
    if(results.length>0){
       
        console.log(results);
        noseX=results[0].pose.nose.x -9;
        noseY=results[0].pose.nose.y -10;
        console.log("nose x coordinate="+ noseX);
        console.log("nose y coordinate="+ noseY);
    }

}