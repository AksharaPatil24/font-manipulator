difference = 0;
rightWristX = 0;
leftWristX = 0;

function preload() {
}
function setup() {
    video = createCapture(VIDEO);
    video.size(500, 450);

    canvas = createCanvas(500, 500);
    canvas.position(550, 140);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#7abbe3');
    fill('#e1db35');
    textSize(difference);
    text('Peter', 10, 360);
}
function modelLoaded() {
     console.log('PoseNet Is Initialized!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+ leftWristX +"rightWristX = "+ rightWristX +"difference = "+ difference);
    }
}