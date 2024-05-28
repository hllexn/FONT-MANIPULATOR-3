leftWrist=0;
rightWristX=0;
difference=0;

function preload(){

}
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
   

    canvas=createCanvas(550,550);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function draw(){
    background("#FF0000");
    textSize(difference);
    fill("#00ff0a");
    text('Jay',50,400);
    document.getElementById("square_side").innerHTML="Width and Height = "+difference;

}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
  }

function gotPoses(results){
  if(results.length > 0){
    console.log(results);

    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    
  }
    
}