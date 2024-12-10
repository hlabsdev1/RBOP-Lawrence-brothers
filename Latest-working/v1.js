import "./styles/main.less";
// import { gsap } from "gsap";

function start(params) {
  const { el, config, options } = params;
  console.log("is it working")

    // Attach is called after the custom script was mounted to the DOM
    function runWhenElementIsAvailable(selector, callback) {
      const targetNode = document.body; // You can narrow this down to a specific part of the DOM if necessary
      // Check if the element is already available
      if (document.querySelector(selector)) {
        callback();
        return; // Exit if the element is already found
      }
      // Create an observer instance
      const observer = new MutationObserver(function (mutationsList, observer) {
        if (document.querySelector(selector)) {
          callback(); // Run the script
          observer.disconnect(); // Stop observing once the element is found
        }
      });
      // Start observing the document body for changes
      observer.observe(targetNode, { childList: true, subtree: true });
    }
    runWhenElementIsAvailable(".page__panel", function () {
      console.log(".page__panel element is available.");
      const gsapScript = document.createElement("script");
      gsapScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/gsap.min.js";
      gsapScript.type = "text/javascript";
      document.body.appendChild(gsapScript);
      gsapScript.onload = function () {
        console.log(gsap);
        // Load Splitting.js after GSAP is loaded
        const splitjS = document.createElement("script");
        splitjS.src = "https://unpkg.com/splitting/dist/splitting.min.js";
        splitjS.type = "text/javascript";
        document.body.appendChild(splitjS);
        splitjS.onload = function () {
          console.log("Splitting.js loaded");
          // Load ScrollTrigger after Splitting.js is loaded
          const trigger = document.createElement("script");
          trigger.src =
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.3/ScrollTrigger.min.js";
          trigger.type = "text/javascript";
          document.body.appendChild(trigger);
          trigger.onload = function () {
            console.log("ScrollTrigger loaded");
            // You can add your ScrollTrigger and GSAP animation logic here
            console.log("All scripts loaded successfully.");
          };
        };
      };
    });

  return Promise.resolve({
    stop: () => {
      console.log("stop");
    },
  });
}

function attach() {
 
}

export { start, attach };