console.log('Loaded!');

//change the text of help div
// var element=document.getElementById("help");
// element.innerHTML="this is the changed text";


//move the img
var img=document.getElementById("img");
// var marginLeft=0;
var moveRight=function()
{
    var marginLeft=20;
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
    
}

img.onclick=function()
{
    var interval=setInterval(moveRight,50);
}
