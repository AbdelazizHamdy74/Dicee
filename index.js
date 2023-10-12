var randomNumber1 = Math.random(1 , 6);
randomNumber1 =Math.floor(randomNumber1 * 6) +1;

randomDiceImage = "dice" + randomNumber1 +".png";

randomImageSource = "images/" +randomDiceImage;

var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.random(1 , 6);
randomNumber2 =Math.floor(randomNumber2 * 6) +1;

randomDiceImage2 = "dice" + randomNumber2 +".png";

randomImageSource2 = "images/" +randomDiceImage2;

var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 is Win &#11088;";
    // document.querySelector("p").innerHTML="Player 1 is Win";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 is Win &#11088;";
    // document.querySelector(".container").lastElementChild.firstElementChild.innerHTML ="Player 2 is Win";
}
else {
    document.querySelector("h1").innerHTML="Equal &#x1F91D; ";
}

// if(){
//     location.reload();
// }