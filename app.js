function changeColor() {
  document.getElementById("headingElement").textContent ="Good Morning Every one";

  document.getElementById("headingElement").style.color = "green";
}

function switchOff() {
  document.getElementById("bulbImage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  document.getElementById("catImage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  document.getElementById("switchStatus").textContent = "Switched Off";

  document.getElementById("OffSwitch").style.backgroundColor = "red";
  document.getElementById("OnSwitch").style.backgroundColor = "";
}
function switchOn() {
  document.getElementById("bulbImage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  document.getElementById("catImage").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  document.getElementById("switchStatus").textContent = "Switched On";

  document.getElementById("OnSwitch").style.backgroundColor = "green";
  document.getElementById("OffSwitch").style.backgroundColor = "";
}
