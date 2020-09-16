function myFunction() {
    var header = document.getElementById("hero-night");
    var button = document.getElementById("btn-night");
    var element = document.getElementById("wrapper1");
    var element1 = document.getElementById("card1");
    var element2 = document.getElementById("card2");
    var element3 = document.getElementById("card3");
    var element4 = document.getElementById("card-dark");

    header.classList.toggle("hero-night");
    button.classList.toggle("button-night");
    element.classList.toggle("dark-mode");
    element1.classList.toggle("card-dark1");
    element2.classList.toggle("card-dark2");
    element3.classList.toggle("card-dark3");
    element4.classList.toggle("white-text");
  }