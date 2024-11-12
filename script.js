var imgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");

var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line");

originalImg.style.width = imgBox.offsetWidth + "px";
var leftspace = imgBox.offsetLeft;
imgBox.onmousemove = function(e){
    var boxWidth =( e.pageX - leftspace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}