window.onload = function() {
  var images = [
    "3.png",
    "IMG_2583.jpg",
    "utyujin1_11.png",
    "suzuki.png",
    "TDF.png",
    "base.png",
    "fire9.png",
    "k2.png",
    "girl.png",
    "keningen.png",
    "monkey1.png",
    "hitsuji.png",
    "FMS_logo.png",
    "piramid.png",
    "kingyo.png",
    "piramid8_1.png",
    "saru.jpg",
    "suzuki_vj.png",
    "魚人.png",
    "t5.png",
    "zou.png",
    "sensei.png",
    "mk_1.png",
    "t3-01.png",
    "st_1.png",
    "sz_bure-01.png",
    "s-1.png"
  ];
  
  var dir = "./gallery_illust/thumbnail/";
  for (var i = 0; i < images.length; i++) {
    images[i] = dir + images[i];
  }

  var element = document.getElementById('thumbnail');

  var elemul = document.createElement('ul');
  var elemli = document.createElement('li');
  var elemimg = document.createElement('img');
  elemli.appendChild(elemimg);

  var elemlist = [];
  for (var i = 0; i < images.length; i++) {
    elemlist[i] = elemli.cloneNode(true);
    elemlist[i].childNodes[0].src = images[i];
    elemul.appendChild(elemlist[i]);
  }
  console.log(elemul);
  element.appendChild(elemul);
}
