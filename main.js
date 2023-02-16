let charchoDiv = document.querySelector(".charchoDiv");
let smallDivs;

for (let i = 0; i < 598; i++) {
  smallDivs = document.createElement("div");
  smallDivs.classList.add("smallDivs");
  charchoDiv.appendChild(smallDivs);
}

const boxes = document.querySelectorAll(".smallDivs");

boxes.forEach((box) => {
  box.addEventListener("mousemove", function () {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    let y = randomColor;
    box.style.backgroundColor = randomColor;
    box.style.opacity = "100%";
    box.style.boxShadow = "0px 0px 30px 4px" + y;
    box.style.transitionDuration = "0s";
  });
});

boxes.forEach((box) => {
  box.addEventListener("mouseleave", function () {
    box.style.backgroundColor = "#505050";
    box.style.transitionDuration = "2s";
    box.style.boxShadow = "none";
    box.style.opacity = "25%";
  });
});
