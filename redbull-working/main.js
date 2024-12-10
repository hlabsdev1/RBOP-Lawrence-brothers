// import "./styles/main.less";
import SplitType from "split-type";
import getHtml from "./js-files/test";
import heroFuncs from "./js-files/hero";
import vidFunc from "./js-files/vid";
import $ from "jquery";

// window.SplitType = SplitType;

async function sillyStart({ el }) {
  // Helper function to load a script step by step

  const htmlContent = getHtml.html;
  function elementLoad() {
    el.innerHTML = htmlContent;
  }

  elementLoad();

  //SPLIT TEXT
  let splitText;
  let heroSplit;
  function runSplit() {
    splitText = new SplitType("[text-split]", {
      types: "lines",
      lineClass: "l-line",
    });
    heroSplit = new SplitType(".hero_txt", {
      types: "lines, chars",
      lineClass: "h-line",
      charClass: "h-char",
    });
  }
  // runSplit();

  function wrappingLine() {
    //wrapper line with another line
    const target = document.querySelectorAll("[text-split]");
    target.forEach((e) => {
      const targetLine = e.querySelectorAll(".l-line");
      targetLine.forEach((line) => {
        const lineWrap = document.createElement("div");
        lineWrap.classList.add("line-wrap");

        //moving the line into new lineWrap
        line.parentNode.insertBefore(lineWrap, line);
        lineWrap.appendChild(line);
      });
    });

    //css
    $(".line-wrap, .l-line, .h-line").css("overflow", "hidden");
    $(".line-wrap").css("width", "100%");
  }

  window.addEventListener("resize", function () {
    splitText.revert();
    heroSplit.revert();
    runSplit();
    wrappingLine();
  });

  // Function to check if the dynamic HTML content is loaded
  function checkIfContentIsLoaded(selector, callback) {
    // Check if the element is already in the DOM
    if (document.querySelector(selector)) {
      callback();
      return; // Exit if the element is already found
    }

    // Create a MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver((mutationsList, observer) => {
      if (document.querySelector(selector)) {
        callback(); // Call the callback function
        observer.disconnect(); // Stop observing once the element is found
      }
    });

    // Start observing the document body for changes
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // Check if the HTML content is loaded and log a message
  checkIfContentIsLoaded(".quote-content", () => {
    console.log("HTML content is loaded.");
    setTimeout(() => {
      runSplit();
      wrappingLine();
      heroFuncs();
      vidFunc();
      console.log("Delayed for 1.1 second.");
    }, "200");
  });

  console.log("anything");

  // window.addEventListener("scroll", () => {
  //   const pageHeight = document.documentElement.scrollHeight;
  //   console.log(`Page height: ${pageHeight}px`);
  // });
}

export const { start, attach } = {
  /*
   * The start function is called when the custom script panel is rendered
   * (e.g. when the user navigates to a page where the custom script is configured).
   * Do as much work as possible here, especially data loading. Contrary to attach(),
   * the start method is asynchronous and any work done here delays the processing of subsequent panels.
   * This minimizes layout shifts.
   */
  start: async (params) => {
    /*
     * el:         contains the element the custom script can use to attach itself to
     * config:     contains everything from the scriptConfig in the XC
     * options:    contains some utility functions for custom scripts (see examples for more information)
     */
    const { el, config, options } = params;

    var link = document.createElement("link");
    link.href =
      "https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/css/rb-lawrence-brothers.webflow.1c32bf42b.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    document.getElementsByTagName("head")[0].appendChild(link);
    link.onload = () => {
      console.log("loaded");
      sillyStart({ el });
    };
  },
  /*
   * The attach function is called as soon as the custom script is ready to access the DOM elements.
   * If you need to modify DOM elements, make sure to implement your desired behavior in this function
   * to ensure that it doesn't access elements that are not yet set up in the DOM.
   */
  attach: () => {},
};
