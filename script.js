var divlenght = document.querySelectorAll('.song').length;
console.log(divlenght);

for(var i=0; i<divlenght; i++) {
 var demo = document.querySelectorAll('.song')[i].addEventListener('click',playsong);

 var demo = document.querySelectorAll('.song')[i].addEventListener('dblclick',pausesong);
}

var song1 = new Audio();
song1.src = "music/alan.mp3";

var song2 = new Audio();
song2.src = "music/alan2.mp3";

var song3 = new Audio();
song3.src = "music/alan3.mp3";

function playsong(){
 var songId = this.innerHTML;
 console.log(songId);

 switch (songId) {
  case "a":
   song1.play();
   break;

  case "b":
   song2.play();
   break;

  case "c":
   song3.play();
   break;

  case "d":
   song1.play();
   break;

  case "e":
   song2.play();
   break;

  case "f":
   song3.play();
   break;

  case "g":
   song1.play();
   break;

  case "h":
   song2.play();
   break;

  case "i":
   song3.play();
   break;

  default:
   console.log("wrong input");
   break;
 }
}

function pausesong(){
 var songId = this.innerHTML;
 console.log(songId);

 switch (songId) {
  case "a":
   song1.pause();
   break;

  case "b":
   song2.pause();
   break;

  case "c":
   song3.pause();
   break;

  case "d":
   song1.pause();
   break;

  case "e":
   song2.pause();
   break;

  case "f":
   song3.pause();
   break;

  case "g":
   song1.pause();
   break;

  case "h":
   song2.pause();
   break;

  case "i":
   song3.pause();
   break;

  default:
   console.log("wrong input");
   break;
 }
}
