var sidebarBox = document.querySelector('#box');
var sidebarBtn= document.querySelector('#btn');
var pageWrapper = document.querySelector('.main');
sidebarBtn.addEventListener('click',function(event){
    if(this.classList.contains('active')){
        this.classList.remove('active');
        sidebarBox.classList.remove('active');

    }else{
        this.classList.add('active');
        sidebarBox.classList.add('active');
    }
});
// pageWrapper.addEventListener('click',function(event){
//     if(sidebarBox.classList.contains('active')){
//         sidebarBtn.classList.remove('active');
//         sidebarBox.classList.remove('active');
//     }});
    window.addEventListener('click',function(event){
        if(sidebarBox.classList.contains('active') && event.keycode === 27){
            sidebarBtn.classList.remove('active');
            sidebarBox.classList.remove('active');
        }});

        // var newpost = document.querySelector('.new-post');
        // var publishedpost= document.querySelector('.published-post');
        // var unpublishedpost= document.querySelector('.unpublished-post');
        // var chart = document.querySelector('.chart');
        // var newsletter= document.querySelector('.newsletter');
        // var profile= document.querySelector('.profile');
        // var settings= document.querySelector('.settings');
        // var help= document.querySelector('.help');

function openNav(evt,navName){
    var i,main,navlinks;
    main= document.getElementsByClassName("main");
    for(i=0;i<main.length; i++){
        main[i].style.display="none";

    }
    navlinks =
    document.getElementsByClassName("navlinks");
    for(i=0; i<navlinks.length;i++){

        navlinks[i].className = navlinks[i].className.replace("active","");

    }
    document.getElementById(navName).style.display="block";
    evt.currentTarget.className += "active";

}




