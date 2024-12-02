function btsVidFunction() {
  const allItems = document.querySelectorAll(".vid_item-embed");
  allItems.forEach((item) => {
    const vid = item.querySelector("video");
    vid.pause();
    if (vid) {
      item.addEventListener("mouseover", () => {
        if (vid.paused) {
          vid.play();
          console.log("is this working");
        }
      });

      item.addEventListener("mouseout", () => {
        vid.pause();
      });
    }
  });
}

function sectionVid() {
  const videoTrigger = document.querySelector("#section-video-holder");
  const video = videoTrigger.querySelector("#section-vid");
  const vidButn = videoTrigger.querySelector(".play_button-wrap");

  videoTrigger.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      vidButn.style.opacity = "0";
    } else {
      video.pause();
      vidButn.style.opacity = "1";
    }
  });
}

const body = document.querySelector("body");
body.click;
btsVidFunction();
sectionVid();
