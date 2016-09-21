console.log('Loaded!');
// change the text of the maintext div
var element=document.getElementById("maintext");
element.innerHTML="New value";


//move the image
var img=document.getElementById("madi");
img.onclick = function()
{
  img.style.leftmargin = '100px';  
};