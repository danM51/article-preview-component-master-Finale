let shareIcon = document.getElementById("shareIcon");
let activeState = document.getElementById("active");
console.log("Dom is Working!");

//when active
let mouseenter = shareIcon.addEventListener("click", () => {
  let display = activeState.toggleAttribute("style");
  display;
  console.log("in");
});

// when inactive
let inactive = shareIcon.addEventListener("mouseout", () => {
  displayNone = activeState.style.display = "none";
  displayNone;
  console.log("out");
});
// conditional
if (mouseenter) {
} else {
  inactive;
}
console.log("condition successfully completed");
