window.onload = function() {
    var overlayNav = document.getElementById("myNav");
    var closeButton = document.querySelector(".closebtn");
    var openButton = document.querySelector(".button");
  
    openButton.onclick = function() {
      overlayNav.style.height = "100%";
    }
  
    closeButton.onclick = function() {
      overlayNav.style.height = "0%";
    }
  }
  