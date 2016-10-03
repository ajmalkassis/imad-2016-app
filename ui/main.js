console.log('Loaded!');

var btn=document.getElementById("counter");
var counter=0;
btn.onclick=function()
{
  //counter endpoint
  
  //capture the response
  
  //render the variable in correct span
  counter+=1;
  var sp=document.getElementById("count");
  sp.innerHTML=counter.toString();
};

// //change the text of help div
// // var element=document.getElementById("help");
// // element.innerHTML="this is the changed text";


// //move the img
// var img=document.getElementById("img");
// var marginLeft=0;
// var moveRight=function()
// {
    
//     marginLeft=marginLeft+1;
//     img.style.marginLeft=marginLeft+'px';
    
// }

// img.onclick=function()
// {
//     var interval=setInterval(moveRight,50);
// }
