console.log('Loaded!');

var btn=document.getElementById("counter");

btn.onclick=function()
{
  //create a request object
  var request=new XMLHttpRequest();
  //capture the response
  request.open("GET","http://ajmalkassis.imad.hasura-app.io/counter",true);
  request.send(null);
  
  request.onreadystatechange=function()
  {
      if(request.readyState===XMLHttpRequest.DONE){
          if(request.status===200){
               var counter=request.responseText;
               var sp=document.getElementById("count");
               sp.innerHTML=counter.toString();
          }
      }
      
  }
 

};

var nameInput=document.getElementById("sample");
var name=nameInput.value;
var submit=document.

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
