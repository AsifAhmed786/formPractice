// function readMore(){
//     var p = document.getElementById("para1")
//     var s = "Allah is great Allah Hu Akbar"
//     p.innerHTML = s;
// }

// function changeColor(){
//     alert("hello")
//     var a = document.getElementById("para1");
//     a.className = "colorful"
// }

// function changeImage(){
//     var a = document.getElementById("img1");
//     a.src = "images/wp3.jpg"
// }

// function changeFont(){
//     // alert("hello")
//     var b = document.getElementById("para1");
//     b.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"
// }

// function changeColor(){
//     var b = document.getElementById("para1");
//     b.style.color = "red"
// }


var i = document.getElementById("div1")
var a = i.getElementsByTagName("p")
for(var b = 0; b <a.length;b++){
    a[b].style.color = "red"
}


