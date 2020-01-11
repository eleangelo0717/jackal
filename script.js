"use strict"

/*let image = document.getElementById("image");

function imgsrc(){   
        document.getElementById("image").src = "images/classic-airplane 1шт.png"; // onClick v html
       
    }*/
  /*image.onclick = function () {
    document.getElementById("image").src = "images/classic-airplane 1шт.png";
  }*/
  
function newTile() {
    let elem = document.createElement("img")
    elem.setAttribute("src", "images/classic-airplane 1шт.png")
    elem.addEventListener('click', function(event){
        test(event)
    }, false)
    return elem
}

function init() {
    let pole = document.getElementById("pole")
    
    for (let i = 0; i<13; i++) {
        pole.appendChild(newTile())
    }
}

  function test(e) {
      console.log(e)
      e.target.src = "images/classic-empty-1.png"
  }
    /*function imgsrc(){
    let images = document.querySelectorAll(".image");
   for (let image of images){
    image.onclick=someFunc
    }*/

   
  
   /* let images = document.querySelectorAll(".image");
    images.onclick = function(){
        document.querySelectorAll(".image").src = "images/classic-airplane 1шт.png"; 
    }*/

  
init()
    

