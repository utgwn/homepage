var thumUrl = "./gallery_illust/thumbnail/";
var imgUrl = "./gallery_illust/image/";
var detUrl = "./illust_detail.html";
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

function display_thumbnail() {
  var element = document.getElementById('thumbnail');

  var ul = document.createElement('ul');
  var li = document.createElement('li');
  var a = document.createElement('a');
  var img = document.createElement('img');
  li.appendChild(a);
  a.appendChild(img);

  var elemlist = [];
  for (var i = 0; i < images.length; i++) {
    elemlist[i] = li.cloneNode(true);
    var a2 = elemlist[i].childNodes[0];
    a2.href = detUrl + "?" + i;
    a2.childNodes[0].src = thumUrl + images[i];
    ul.appendChild(elemlist[i]);
  }
  element.appendChild(ul);
}

function display_image() {
  if (window.location.search) {
    var param = window.location.search.substring(1, window.location.search.length);

    var img = document.createElement('img');
    img.src = imgUrl + images[param];
    var element = document.getElementById('image');
    element.insertBefore(img, element.firstChild);

    var aL = document.getElementById('leftBtn');
    var aR = document.getElementById('rightBtn');
    if (param <= 0) {
      aL.href = detUrl + "?" + (images.length - 1);
    } else {
      aL.href = detUrl + "?" + (param - 1);
    }
    if (param >= images.length - 1) {
      aR.href = detUrl + "?" + 0;
    } else {
      aR.href = detUrl + "?" + (Number(param) + 1);
    }
  }
}
