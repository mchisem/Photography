// Variables
var modal = document.getElementById("back");
var span = document.querySelector("#close");
var images = document.querySelector(".image");
var modalImg = document.getElementById("images1");

// onclick function for image  
// const children = Array.from(document.getElementsByClassName("image"));

// children.forEach(child => {
//   child.addEventListener("click", () => {
//     console.log("yes");
//     modal.style.display = "block";
//     span.classList.remove("hide");
//   })
// })

// Event delegation for images
const parent = document.querySelector(".container");

parent.addEventListener("click", event => {
  if(event.target.className === "image") {
    console.log("yes");
    modal.style.display = "block";
    // modalImg.src = this.src;
    span.classList.remove("hide");
  }
})









// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("jan1");
// var modalImg = document.getElementById("images1");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   span.classList.remove("hide");
// }

// var img = document.getElementById("tori");
// var modalImg = document.getElementById("images1");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   span.classList.remove("hide");
// }

// var img = document.getElementById("simone");
// var modalImg = document.getElementById("images1");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   span.classList.remove("hide");
// }

// var img = document.getElementById("tori2");
// var modalImg = document.getElementById("images1");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   span.classList.remove("hide");
// }

// var img = document.getElementById("arria");
// var modalImg = document.getElementById("images1");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   span.classList.remove("hide");
// }

// var img = document.getElementById("teia");
// var modalImg = document.getElementById("images1");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   span.classList.remove("hide");
// }

// var img = document.getElementById("tori3");
// var modalImg = document.getElementById("images1");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   span.classList.remove("hide");
// }

// var img = document.getElementById("fran2");
// var modalImg = document.getElementById("images1");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   span.classList.remove("hide");
// }

// var img = document.getElementById("arria2");
// var modalImg = document.getElementById("images1");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   span.classList.remove("hide");
// }

// var img = document.getElementById("simone2");
// var modalImg = document.getElementById("images1");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   span.classList.remove("hide");
// }

// var img = document.getElementById("jan2");
// var modalImg = document.getElementById("images1");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   span.classList.remove("hide");
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}