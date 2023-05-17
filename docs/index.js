randomNumber1 = Math.floor(Math.random() * (7 - 1) + 1);
randomNumber2 = Math.floor(Math.random() * (7 - 1) + 1); 

//Left images
if (randomNumber1 === 1){
    document.getElementsByTagName("img")[0].setAttribute("src", "docs/images/black dice one.png");
  }
  else if (randomNumber1 === 2){
    document.getElementsByTagName("img")[0].setAttribute("src", "docs/images/black dice 2.png");
  }
  else if(randomNumber1 === 3){
    document.getElementsByTagName("img")[0].setAttribute("src", "docs/images/black dice 3.png");
  }
  else if (randomNumber1 === 4) {
    document.getElementsByTagName("img")[0].setAttribute("src", "docs/images/black dice 4.png");
  }
  else if (randomNumber1 === 5){
    document.getElementsByTagName("img")[0].setAttribute("src", "docs/images/black dice 5.png");
  }
  else {
    document.getElementsByTagName("img")[0].setAttribute("src", "docs/images/black dice 6.png");
}

//Right images
if (randomNumber2 === 1){
  document.getElementsByTagName("img")[1].setAttribute("src", "docs/images/black dice one.png");
}
else if (randomNumber2 === 2){
  document.getElementsByTagName("img")[1].setAttribute("src", "docs/images/black dice 2.png");
}
else if(randomNumber2 === 3){
  document.getElementsByTagName("img")[1].setAttribute("src", "docs/images/black dice 3.png");
}
else if (randomNumber2 === 4) {
  document.getElementsByTagName("img")[1].setAttribute("src", "docs/images/black dice 4.png");
}
else if (randomNumber2 === 5){
  document.getElementsByTagName("img")[1].setAttribute("src", "docs/images/black dice 5.png");
}
else {
  document.getElementsByTagName("img")[1].setAttribute("src", "docs/images/black dice 6.png");
}

//Heading change
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins❗️";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins❗️";
}
else {
  document.querySelector("h1").innerHTML = "Tie";
}
