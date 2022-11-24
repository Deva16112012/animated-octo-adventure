function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide()
    c=ml5.poseNet(video,modelloded);
    c.on('pose',f);
}
nosex=0;
nosey=0;
function modelloded(){
    console.log("posente is loded");
}
function f(result){
    if(result.length>0){
    console.log(result);
    nosex=result[0].pose.nose.x;
    console.log(nosex);
    nosey=result[0].pose.nose.y;
    console.log(nosey);
    }
}
function draw(){
    image(video,0,0,300,300);
    fill("red");
    stroke("red");
    circle(nosex,nosey,30)    
}