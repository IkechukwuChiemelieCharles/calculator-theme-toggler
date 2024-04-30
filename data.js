let switchSpan = document.querySelector(".palette span");
let pElements = document.querySelectorAll(".num p");
let switchContainer = document.querySelector(".palette");
let body = document.querySelector("body");

switchContainer.addEventListener("click", function (event) {
  // calculate width
  let segmentWidth = switchContainer.offsetWidth / 3;

  //   determine segment clicked
  let clickedSegment = Math.floor(
    (event.clientX - switchContainer.getBoundingClientRect().left) /
      segmentWidth
  );
  //   calculate new position
  let newPosition =
    pElements[clickedSegment].offsetLeft - switchSpan.parentElement.offsetLeft;
  // set position
  switchSpan.style.transform = `translateX(${newPosition}px)`;

  // set theme

  switch (clickedSegment) {
    case 0:
      body.className = "";
      break;
    case 1:
      body.className = "theme2";
      break;
    case 2:
      body.className = "theme3";
      break;
  }
});
