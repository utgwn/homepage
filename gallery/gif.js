var thumUrl = "./gallery_gif/thumbnail/";
var imgUrl = "./gallery_gif/image/";
var gifUrl = "./gif.html";
var detUrl = "./gif_detail.html";

var iconUrl = "icon/";
var numbersUrl = "numbers/";
var othersUrl = "others/";

var groups = [
  "icon",
  "numbers",
  "others"
];
var icon = [
  "output_18_35_11.gif",
  "output_10943846.gif",
  "output_19_17_50.gif",
  "output_20_15_10.gif",
  "output_20_1_43.gif",
  "output_101014951.gif",
  "output_10944024.gif",
  "output_3_16_50.gif",
  "output_10953451.gif",
  "output_1_51_58.gif",
  "EOM1.gif",
  "output_19_2_32.gif",
  "output_b0_2_49_13.gif"
];
var numbers = [
  "num0.gif",
  "num1.gif",
  "num2.gif",
  "num3.gif",
  "num4.gif",
  "num5.gif",
  "num6.gif"
];
var others = [
  "1_2.gif",
  "1431800134y51cKCBjiYIOP_E1431800047.gif",
  "1431880401tGuLXK4mIgw8iZk1431880392.gif",
  "box.gif",
  "female_role1_edge08.gif",
  "kingashinnen.gif",
  "nenga_bird_300.gif",
  "nyan.gif",
  "rose.gif"
];

function create_thumbnail_page() {
  if (window.location.search) {
    var key = get_param(window.location.search);
    if (key['group']) {
      display_thumbnail(key['group']);
    }
  }
}

function display_thumbnail(group) {
  if (group == "icon") {
    var list = icon;
    var url = iconUrl;
  }
  if (group == "numbers") {
    var list = numbers;
    var url = numbersUrl;
  }
  if (group == "others") {
    var list = others;
    var url = othersUrl;
  }

  var element = document.getElementById('thumbnail');

  var ul = document.createElement('ul');
  var li = document.createElement('li');
  var a = document.createElement('a');
  var img = document.createElement('img');
  li.appendChild(a);
  a.appendChild(img);

  var elemlist = [];
  for (var i = 0; i < list.length; i++) {
    elemlist[i] = li.cloneNode(true);
    var a2 = elemlist[i].childNodes[0];
    a2.href = detUrl + "?" + "group=" + group + "&imgNum=" + i;
    a2.childNodes[0].src = thumUrl + url +  list[i];
    ul.appendChild(elemlist[i]);
  }
  element.appendChild(ul);
}

function create_image_page() {
  if (window.location.search) {
    var key = get_param(window.location.search);
    if (key['group'] && key['imgNum']) {
      display_image(key['group'], key['imgNum']);
    }
  }
}

function display_image(group, imgNum) {
  if (group == "icon") {
    var list = icon;
    var url = iconUrl;
  }
  if (group == "numbers") {
    var list = numbers;
    var url = numbersUrl;
  }
  if (group == "others") {
    var list = others;
    var url = othersUrl;
  }

  var img = document.createElement('img');
  img.src = imgUrl + url + list[imgNum];
  var element = document.getElementById('image');
  element.insertBefore(img, element.firstChild);

  var aL = document.getElementById('leftBtn');
  var aR = document.getElementById('rightBtn');
  if (imgNum <= 0) {
    aL.href = detUrl + "?group=" + group + "&imgNum=" + (list.length - 1);
  } else {
    aL.href = detUrl + "?group=" + group + "&imgNum=" + (imgNum - 1);
  }
  if (imgNum >= list.length - 1) {
    aR.href = detUrl + "?group=" + group + "&imgNum=" + 0;
  } else {
    aR.href = detUrl + "?group=" + group + "&imgNum=" + (Number(imgNum) + 1);
  }

  var modoruBtn = document.getElementsByClassName('modoruBtn');
  modoruBtn[0].onclick = move_gif_page(group);

  function move_gif_page(group2) {
    return function() {
      window.location.href = gifUrl + "?group=" + group2;
    }
  }
}

function create_menu_page() {
  var element = document.getElementById('btns');

  var input = document.createElement('input');
  var br = document.createElement('br');
  input.type = "button";
  input.classList.add('maruBtn');

  var inputList = [];
  var brList = [];
  for (var i = 0; i < groups.length; i++) {
    inputList[i] = input.cloneNode(true);
    brList[i] = br.cloneNode(true);
    inputList[i].value = groups[i];
    inputList[i].onclick = move_image_page(groups[i]);
    element.appendChild(inputList[i]);
    element.appendChild(brList[i]);
    console.log(inputList[i]);
  }

  function move_image_page(group) {
    return function() {
      window.location.href = gifUrl + "?group=" + group;
    }
  }
}



function get_param(param) {
  param = param.substring(1);
  var pair = param.split("&");
  var temp = "";
  var key = new Array();
  for (i = 0; i < pair.length; i++) {
    temp = pair[i].split("=");
    keyName = temp[0];
    keyValue = temp[1];
    key[keyName]=keyValue;
  }
  return key;
}
