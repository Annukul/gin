function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
}
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

const emailInput = document.querySelector('.search-input').addEventListener('keypress', () => {
    document.querySelector('.search-input').style.border = "2px solid #11A0FF";
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

let video = document.querySelector('.myvid');
video.autoplay = true;
video.load();

