var randomNumber1 = Math.random();   //range (0-1)
randomNumber1 = Math.floor(randomNumber1*6);  //range (0-5)
randomNumber1++;  //range (1-6)

var img1 = "images/" + "dice" + randomNumber1 +".png";
var imgArray = document.querySelectorAll("img");
imgArray[0].setAttribute("src",img1);

var randomNumber2 = Math.random();   //range (0-1)
randomNumber2 = Math.floor(randomNumber2*6);  //range (0-5)
randomNumber2++;  //range (1-6)

var img2 = "images/" + "dice" + randomNumber2 +".png";
var imgArray2 = document.querySelectorAll("img");
imgArray2[1].setAttribute("src",img2);

if(randomNumber1 > randomNumber2){
      document.querySelector("h1").innerHTML = "Player 1 wins!!"
}
else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 2 wins!!"
}
else {
      document.querySelector("h1").innerHTML = "Draw!!"

}