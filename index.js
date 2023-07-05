var random1= Math.floor( Math.random()*6)+1;
var diceimage1="dice"+ random1 + ".png";
var image1=document.querySelectorAll("img")[0].setAttribute("src",diceimage1);

var random2= Math.floor( Math.random()*6)+1;
var diceimage2="dice"+ random2 + ".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src",diceimage2);
 if(random1>random2){
    document.querySelector("h1").innerHTML="Player 1 wins !!! 🎉"
 }
  else if (random1<random2) {
    document.querySelector("h1").innerHTML="Player 2 wins !!! 🎉"
  }
  else {
    document.querySelector("h1").innerHTML="TIE !!!"
  }
  const refreshButton = document.getElementById('refreshButton');

        // Add a click event listener to the button
        refreshButton.addEventListener('click', function() {
            // Reload the page when the button is clicked
            location.reload();
        });