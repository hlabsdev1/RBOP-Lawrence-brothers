
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jquery";


function heroFuncs() {

    gsap.registerPlugin(ScrollTrigger)

//HERO ANIMATION
function heroGroup() {
  const target = document.querySelectorAll(".hero_txt");
  target.forEach((item) => {
    const chars = item.querySelectorAll(".h-char");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        toggleActions: "restart none none reset",
        // markers: true,
      },
    });
    tl.set(item, { autoAlpha: 1 });
    tl.from(chars, {
      yPercent: 100,
      ease: Power3.easeOut,
      stagger: 0.1,
      delay: 0,
    });
  });

  //IMAGES & TEXT
  const images = document.querySelectorAll(".hero_bike-img");
  const img_tl = gsap.timeline({
    scrollTrigger: {
      trigger: images[0],
      toggleActions: "restart none none reset",
      // markers: true,
    },
  });
  img_tl.set(".hero_bottom-content", { autoAlpha: 1 });
  img_tl.set(".hero_bike-img-wrap", { autoAlpha: 1 });
  img_tl.from(images, {
    xPercent: 50,
    opacity: 0,
    scale: 0.6,
    stagger: 0.2,
  });

  img_tl.from(".hero_section .cone-icon-wrap", {
    opacity: 0,
  });
  img_tl.from(".hero_section .h4 .l-line", {
    yPercent: 100,
    ease: Power3.easeOut,
    stagger: 0.1,
    delay: 0,
  });

  //BIKE IMG SCRUB
  const imagesWrapper1 = document.querySelectorAll(".hero_bike-img-wrap.is--1");
  const imagesWrapper2 = document.querySelectorAll(".hero_bike-img-wrap.is--2");
  const scrub_tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero_section",
      start: "top top",
      end: "bottom top",
      scrub: 1.2,
      // markers: true,
    },
  });

  scrub_tl.to(imagesWrapper2, {
    yPercent: -30,
  });
  scrub_tl.to(
    imagesWrapper1,
    {
      yPercent: -10,
    },
    "<"
  );
}

//HEADER GROUP ANIMATION
function headerGroup() {
  const target = document.querySelectorAll("[anime-group = 'headings']");
  target.forEach((item) => {
    const lines = item.querySelectorAll(".l-line");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        toggleActions: "restart none none reset",
        // markers: true,
      },
    });
    tl.set(item, { autoAlpha: 1 });
    tl.from(lines, {
      yPercent: 100,
      ease: Power3.easeOut,
      stagger: 0.1,
      delay: 0,
    });
  });
}

//BODY COPY GROUP ANIMATION
function bodyGroup() {
  const target = document.querySelectorAll("[anime-group = 'body-copy']");
  target.forEach((item) => {
    const parentElement = item.parentElement;
    // console.log(parentElement);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentElement,
        toggleActions: "restart none none reset",
        // markers: true,
      },
    });
    tl.set(parentElement, { autoAlpha: 1 });
    tl.from(item, {
      y: "3rem",
      opacity: 0,
      duration: 0.8,
      ease: Power3.easeOut,
      delay: 0.2,
    });
  });
}

//COLUMN IMAGE GROUP ANIMATION
function colImgGroup() {
  const column = document.querySelectorAll("._2col-img-col");
  column.forEach((item) => {
    const trigger = item.querySelector(".card_img-wrap");
    const svgMask = item.querySelector(".imgMask");
    const img = item.querySelector(".img-full");
    const caption = item.querySelector(".captions");
    const lines = caption.querySelectorAll(".l-line");
    //SCRUB ANIMATION
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top 70%",
        end: "top 30%",
        scrub: 1.2,
        // markers: true,
      },
    });
    tl.set(item, { autoAlpha: 1 });
    tl.from(img, {
      scale: "1.2", //1.2
    });

    //CAPTION TEXT ANIMATION
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: caption,
        toggleActions: "restart none none reset",
        // markers: true,
      },
    });
    tl2.from(lines, {
      yPercent: 100,
      ease: Power3.easeOut,
      stagger: 0.1,
      delay: 0,
    });

    //PARALLAX IMAGE
    const img_tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
        // markers: true,
      },
    });

    //parallax img_tl
    img_tl.to(img, {
      yPercent: -10,
    });

    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
      // desktop setup code here...
      //check timeline above
      tl.from(
        svgMask,
        {
          "--height": "0%",
        },
        0
      );
    });
    mm.add("(max-width: 799px && min-width: 481px)", () => {
      // mobile setup code here...
      $("#bts-caption .captions").text("Tap to play the videos");
    });
    mm.add("(max-width: 480px)", () => {
      // mobile setup code here...
      const editorialCode = document.querySelectorAll(".editorial_svg-embed");
      editorialCode.forEach((item) => {
        item.remove();
      });
      $("#bts-caption .captions").text("Tap to play the videos");
    });
  });
}

//QUOTE CARD SMALL
function smquoteAnime() {
  const card = document.querySelector("._2col-card-wrap");
  const quoteCard = card.querySelector(".quote-card");
  const smCard = card.querySelector(".sm-card");
  const array = [quoteCard, smCard];

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: card,
      toggleActions: "restart none none reset",
      // markers: true,
    },
  });
  tl.set(card, { autoAlpha: 1 });
  tl.from(array, {
    y: "4rem",
    opacity: 0,
    stagger: 0.2,
  });
}

//QUOTE CARD
function quoteAnime() {
  const card = document.querySelectorAll(".quote-card");
  card.forEach((elem) => {
    const text = elem.querySelector("[quote-anime]");
    const lines = text.querySelectorAll(".l-line");
    const icon = elem.querySelector(".quote-icon-wrap");
    const quoteBy = elem.querySelector(".quote-by");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elem,
        toggleActions: "restart none none reset",
        // markers: true,
      },
    });

    tl.from(icon, {
      opacity: 0,
      duration: 0.4,
    });
    tl.from(
      lines,
      {
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
      },
      "<"
    );
    tl.from(quoteBy, {
      opacity: 0,
      stagger: 0.2,
    });
  });
}

//BLEED IMAGES
function bleedImgAnimation() {
  const img = document.querySelectorAll(".bleed-img-size");

  let mm = gsap.matchMedia();

  mm.add("(min-width: 900px)", () => {
    // desktop setup code here...
    img.forEach((elem) => {
      const mask = elem.querySelector(".circle-mask");
      const parent = elem.parentElement;
      // console.log(parent);
      //PARALLAX IMAGE
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          // markers: true,
        },
      });

      tl.from(mask, {
        attr: {
          r: "0%",
        },
      });
    });
  });

  mm.add("(max-width: 899px && min-width: 481px)", () => {
    // mobile setup code here...
    img.forEach((elem) => {
      const mask = elem.querySelector(".circle-mask");
      // const parent = elem.parentElement;
      // console.log(parent);
      gsap.set(mask, {
        attr: {
          r: "0%",
        },
      });
      //PARALLAX IMAGE
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: elem,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
          // markers: true,
        },
      });

      tl.to(mask, {
        attr: {
          r: "130%",
        },
      });
    });
  });

  mm.add("(max-width: 480px)", () => {
    // mobile setup code here...
    img.forEach((elem) => {
      const mask = elem.querySelector(".img-full");
      const bleedCode = elem.querySelector(".bleed-code-ab");
      bleedCode.remove();

      gsap.set(mask, { maskSize: "0%" });
      //PARALLAX IMAGE
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: elem,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1.2,
          // markers: true,
        },
      });

      tl.to(mask, {
        maskSize: "200%",
      });
    });
  });
}

//EDITORIAL CARD
function editorialAnime() {
  const card = document.querySelectorAll(".editorial-card-wrap");
  card.forEach((item) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        end: "+=30%",
        toggleActions: "restart none none reset",
        // markers: true,
      },
    });

    tl.from(item, {
      y: "3rem",
      opacity: 0,
      duration: 0.4,
    });
  });
}

//timeline tabs
function tabs() {
  $(".timeline_tab-link2").click(function () {
    //remove all active class
    $(".timeline_tab-link2").removeClass("is--active");
    $(".timeline_pane2").removeClass("is--active");
    //add active to triggered one
    $(this).addClass("is--active");
    var attrItem = $(this).attr("timeline-item");
    $(".timeline_pane2").each(function () {
      if ($(this).attr("timeline-item") === attrItem) {
        $(this).addClass("is--active");
      }
    });
  });
}

//4th bleed image size
function bleedImg4Size() {
  const target = document.querySelector(".bleed-sticky-wrap.is--4");
  const bleedImg = document.querySelector(".bleed-img-size.is--4");
  target.style.height = bleedImg.offsetHeight * 1.5;
  console.log(target.offsetHeight);
}

heroGroup();
headerGroup();
bodyGroup();
colImgGroup();
smquoteAnime();
quoteAnime();
bleedImgAnimation();
editorialAnime();
tabs();
bleedImg4Size();
}

export default heroFuncs