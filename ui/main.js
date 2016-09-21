console.log('Loaded!');
// change the text of the maintext div
var element=document.getelementbyId("maintext");
element.innerHTML="New value";


//move the image
var img=document.getelementbyId("img");
img.onclick = function()
{
  img.style.leftmargin = '100px';  
};