// function readMore(){
//     var para1 = document.getElementById("para1");
//     para1.innerHTML = "What is your name where are r u from please clear your outstanding amount as soon as possible"
//     // para1.style.font = "em"
//     para1.className = "fontChange color1"
// }

// function zoom(){
//     var img = document.getElementById("img1")
//     img.className = "width1"
// }

var parent = document.getElementById("parent")
var para = parent.getElementsByTagName("p");
for(var i = 0; para.length; i++){
    para[i].style.color = "red"
}
