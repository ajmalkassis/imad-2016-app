console.log('Loaded!');

//change the text of help div
var element=document.getElementById("help");
element.innerHTML="this is the changed text";


//move the img
var img=document.getElementById("img");
img.onclick(img.style.marginLeft='100px');
