// Get the modal
var modal = document.getElementById("images");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("jan1");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    //   span.classList.remove("hide");
    }

    var img = document.getElementById("tori");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    //   span.classList.remove("hide");
    }

    var img = document.getElementById("simone");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    //   span.classList.remove("hide");
    }

    var img = document.getElementById("tori2");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    //   span.classList.remove("hide");
    }

    var img = document.getElementById("arria");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    //   span.classList.remove("hide");
    }

    var img = document.getElementById("teia");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    //   span.classList.remove("hide");
    }

    var img = document.getElementById("tori3");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    //   span.classList.remove("hide");
    }

    var img = document.getElementById("fran2");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    //   span.classList.remove("hide");
    }

    var img = document.getElementById("arria2");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    //   span.classList.remove("hide");
    }

    var img = document.getElementById("simone2");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      span.classList.remove("hide");
    }

    var img = document.getElementById("jan2");
    var modalImg = document.getElementById("images1");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    //   span.classList.remove("hide");
    }
    // Get the <span> element that closes the modal
    var span = document.querySelector("#close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = () => {
      modal.style.display = "none";
    }