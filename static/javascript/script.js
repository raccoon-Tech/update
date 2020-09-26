function menuAnimation(x){
    x.classList.toggle("change");
    var element = document.getElementById("slideNav");
    element.classList.toggle("navSlide");
    var textFade = document.getElementsById("sideBarText");
    textFade.classList.toggle("textFadeIn");
    
}
 window.onscroll = function(){myFunction()};
 var navbar = document.getElementById("navbar");
 var sticky= navbar.offsetTop;
 function myFunction(){
     if(window.pageYOffset >= sticky){
         navbar.classList.add("sticky");
     }else{
         navbar.classList.remove("sticky");
     }
 }
 var modalx =document.getElementById('register');
window.onclick=function(event){
    if(event.target == modalx){
        modalx.style.display="none";
        }
}


var modal =document.getElementById('login');
window.onclick=function(event){
    if(event.target == modal){
        modal.style.display="none";
        }
}
var close = document.getElementsByClassName("closebtn");
var i;
for(i = 0; i<close.length;i++){
    close[i].onclick = function(){

var div = this.parentElement;
div.style.opacity = "0";
setTimeout(function(){
    div.style.display="none"; 
}, 600);

    }
}
// var alert = document.getElementById("alert");
// function load() {
//     alert.style.display="block";
//         }
// window.onload = alert("alert");
