console.log("heelo");
// gsap.registerPlugin(Draggable);

function horz() {
  const scroller = document.querySelector(".horz_scroll");
  const scrollContainer = scroller.querySelector(".horz_track");
  const hLine = scroller.querySelector(".horz_item-ab-h-line");
  const jLine = scroller.querySelector(".horz_item-ab-j-line");
  hLine.style.width = `${
    scrollContainer.offsetWidth - scroller.offsetWidth * 0.25
  }px`;
  jLine.style.width = `${
    scrollContainer.offsetWidth - scroller.offsetWidth * 0.28
  }px`;

  const maxDragX = -(scrollContainer.offsetWidth - scroller.offsetWidth);
  // console.log(maxDragX);

  Draggable.create(scrollContainer, {
    type: "x",
    bounds: {
      minX: maxDragX,
      maxX: 0,
    },
  });
}

// Run the function after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  horz(); // Call the function on DOM load
});

// Run the function whenever the window is resized
window.addEventListener("resize", () => {
  horz(); // Call the function on window resize
});
