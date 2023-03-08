let shidadiv = document.querySelector(".shidadiv");

for (let i = 0; i < 483; i++) {
  cubediv = document.createElement("div");
  cubediv.classList.add("cubediv");
  shidadiv.appendChild(cubediv);
}

let cubes = document.querySelectorAll(".cubediv");

cubes.forEach((cube) => {
  cube.addEventListener("mousemove", function () {
    let randomColor = "#" + Math.floor(Math.random() * 1846).toString(10);
    let color = randomColor;
    cube.style.opacity = "100%";
    cube.style.backgroundColor = randomColor;
    cube.style.transitionDuration = "0s";
    cube.style.boxShadow = "0px 0px 27px 3.5px" + color;
  });
});

cubes.forEach((cube) => {
  cube.addEventListener("mouseleave", function () {
    cube.style.boxShadow = "none";
    cube.style.opacity = "40%";
    cube.style.backgroundColor = "#3c06c4";
    cube.style.transitionDuration = "1.5s";
  });
});
