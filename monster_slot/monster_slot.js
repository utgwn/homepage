window.onload=function(){
  var bodyImg=document.getElementById("body");
  var armImg=document.getElementById("arm");
  var legImg=document.getElementById("leg");
  var faceImg=document.getElementById("face");

  var changeButton=document.getElementById("changeButton");
  var faceButton=document.getElementById("faceButton");
  var armButton=document.getElementById("armButton");
  var legButton=document.getElementById("legButton");

  changeButton.onclick=function(){
      var rand1 = Math.floor( Math.random() * 7 );
      var rand2 = Math.floor( Math.random() * 7 );
      var rand3 = Math.floor( Math.random() * 7 );
      armImg.src="monster/arm"+(rand1+1)+".png";
      legImg.src="monster/leg"+(rand2+1)+".png";
      faceImg.src="monster/face"+(rand3+1)+".png";
      bodyImg.src="monster/body.png";
  }
  faceButton.onclick=function(){
    var rand=Math.floor(Math.random()*5);
    faceImg.src="monster/face"+(rand+1)+".png";
  }
  armButton.onclick=function(){
    var rand=Math.floor(Math.random()*5);
    armImg.src="monster/arm"+(rand+1)+".png";
  }
  legButton.onclick=function(){
    var rand=Math.floor(Math.random()*5);
    legImg.src="monster/leg"+(rand+1)+".png";
  }
}
