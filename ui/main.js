console.log('Loaded!');
// change the text of the maintext div
var element=document.getElementById("maintext");
element.innerHTML="New value";


//move the image
var img=document.getElementById("madi.png");
img.onclick = function()
{
  madi.style.leftmargin = '100px';  
};