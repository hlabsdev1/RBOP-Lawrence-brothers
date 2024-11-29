function start({ el }) {
  // Helper function to load a script step by step
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        console.log(`${src} loaded`);
        resolve();
      };
      script.onerror = () => {
        console.error(`Failed to load script: ${src}`);
        reject(new Error(`Failed to load script: ${src}`));
      };
      document.body.appendChild(script);
    });
  }

  // Array of script URLs to load.
  const scripts = [
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
    'https://unpkg.com/split-type',
    'https://cdn.jsdelivr.net/gh/studio-freight/lenis@latest/bundled/lenis.js',
    'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js', // GSAP core
    'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js', // ScrollTrigger
  ];

  // Function to load all scripts sequentially
  async function loadAllScripts() {
    try {
      for (const src of scripts) {
        await loadScript(src); // Wait for each script to load
      }
      console.log('All scripts loaded successfully.');

      // Safely use gsap or other loaded libraries
      console.log('GSAP object:', gsap);
      //dependent scripts
      const dScripts = [
        'https://4c36mw.csb.app/js/app.js',
        'https://4c36mw.csb.app/js/vid.js',
      ];

      dScripts.forEach((src) => {
        const script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
      });
    } catch (error) {
      console.error('Error loading scripts:', error);
    }
  }

  // Start loading scripts
  loadAllScripts();

  const style = document.createElement("link")
  style.rel = "stylesheet"
  style.href =
    "https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/css/rb-lawrence-brothers.webflow.dc6724b19.css"
  style.type = "text/css"
  document.head.appendChild(style)

  const htmlContent = `<div class="page_wrap"><div class="page_code_wrap"><div class="page_code_base w-embed"><style>
:root {
  --font-weight--inherit: inherit;
  --font-weight--100: 100;
  --font-weight--200: 200;
  --font-weight--300: 300;
  --font-weight--400: 400;
  --font-weight--500: 500;
  --font-weight--600: 600;
  --font-weight--700: 700;
  --font-weight--800: 800;
  --font-weight--900: 900;
  --text-transform--none: none;
  --text-transform--uppercase: uppercase;
  --text-transform--capitalize: capitalize;
  --text-transform--lowercase: lowercase;
  --text-transform--inherit: inherit;
}
* {
	vertical-align: bottom;
}
.hero_bottom-content {
    opacity: 0;
}
body {
	font-weight: var(--text-main--font-weight);
	text-transform: var(--text-main--text-transform);
	font-smoothing: antialiased;
	-webkit-font-smoothing: antialiased;
}
label, blockquote {
	font-size: inherit;
	line-height: inherit;
	font-weight: inherit;
	margin-top: 0;
	margin-bottom: 0;
}
button {
	background-color: unset;
	padding: unset;
	text-align: inherit;
}
button:not(:disabled) {
	cursor: pointer;
}
video {
	width: 100%;
	object-fit: cover;
}
video.wf-empty {
	padding: 0;
}
svg {
	max-width: 100%;
}
section, header, footer {
	position: relative;
}
@media (prefers-color-scheme: light) {
	option {
		color: black;
	}
}
img::selection {
	background: transparent;
}
a:not([class]) {
	text-decoration: underline;
}
.w-richtext a {
	position: relative;
	z-index: 4;
}

.u-hide-if-empty:empty,
.u-hide-if-empty:not(:has(> :not(.w-condition-invisible))),
.u-hide-if-empty-cms:not(:has(.w-dyn-item)),
.w-richtext[class*="u-text-style-"] > :not(h1,h2,h3,h4,h5,h6,p,blockquote,ul,ol,span),
.u-embed-js,
.u-embed-css {
	display: none !important;
}

.u-line-clamp-1, .u-line-clamp-2, .u-line-clamp-3, .u-line-clamp-4 {
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
}
.u-line-clamp-2 { -webkit-line-clamp: 2; }
.u-line-clamp-3 { -webkit-line-clamp: 3; }
.u-line-clamp-4 { -webkit-line-clamp: 4; }

a, button, [tabindex],
.w-checkbox-input--inputType-custom,
.w-form-formradioinput--inputType-custom {
	outline-offset: var(--focus--offset-outer);
}
a:focus-visible,
button:focus-visible,
[tabindex]:focus-visible,
.w-checkbox:has(:focus-visible) .w-checkbox-input--inputType-custom,
.w-radio:has(:focus-visible) .w-form-formradioinput--inputType-custom {
	outline-color: var(--theme--text);
	outline-width: var(--focus--width);
	outline-style: solid;
}
.w-checkbox-input--inputType-custom.w--redirected-focus,
.w-form-formradioinput--inputType-custom.w--redirected-focus {
	box-shadow: none;
}


.wf-design-mode .g_clickable_wrap {
	z-index: 0;
}
.g_clickable_wrap a[href="#"] {
	display: none;
}
.g_clickable_wrap a[href="#"] ~ button {
	display: block;
}
</style></div><div class="page_code_responsive w-embed"><style>
/* https://fluidbuilder.webflow.io/?design=90&max=90&min=20&f&g=--site--margin,3,1_--size--2rem,2,1.75_--size--2-5rem,2.5,2_--size--3rem,3,2.25_--size--3-5rem,3.5,2.375_--size--4rem,4,2.5_--size--4-5rem,4.5,2.75_--size--5rem,5,3_--size--5-5rem,5.5,3.25_--size--6rem,6,3.5_--size--6-5rem,6.5,3.75_--size--7rem,7,4_--size--7-5rem,7.5,4.25_--size--8rem,8,4.5_--size--8-5rem,8.5,4.75_--size--9rem,9,5_--size--9-5rem,9.5,5.25_--size--10rem,10,5.5_--size--11rem,11,5.75_--size--12rem,12,6_--size--13rem,13,6.5_--size--14rem,14,7_--size--15rem,15,7.5_--size--16rem,16,8 */

:root {
	--site--margin: clamp(1rem, 0.428rem + 2.86vw, 3rem);
	--size--2rem: clamp(1.75rem, 1.678rem + 0.36vw, 2rem);
	--size--2-5rem: clamp(2rem, 1.858rem + 0.71vw, 2.5rem);
	--size--3rem: clamp(2.25rem, 2.036rem + 1.07vw, 3rem);
	--size--3-5rem: clamp(2.375rem, 2.053rem + 1.61vw, 3.5rem);
	--size--4rem: clamp(2.5rem, 2.072rem + 2.14vw, 4rem);
	--size--4-5rem: clamp(2.75rem, 2.25rem + 2.5vw, 4.5rem);
	--size--5rem: clamp(3rem, 2.428rem + 2.86vw, 5rem);
	--size--5-5rem: clamp(3.25rem, 2.608rem + 3.21vw, 5.5rem);
	--size--6rem: clamp(3.5rem, 2.786rem + 3.57vw, 6rem);
	--size--6-5rem: clamp(3.75rem, 2.964rem + 3.93vw, 6.5rem);
	--size--7rem: clamp(4rem, 3.142rem + 4.29vw, 7rem);
	--size--7-5rem: clamp(4.25rem, 3.322rem + 4.64vw, 7.5rem);
	--size--8rem: clamp(4.5rem, 3.5rem + 5vw, 8rem);
	--size--8-5rem: clamp(4.75rem, 3.678rem + 5.36vw, 8.5rem);
	--size--9rem: clamp(5rem, 3.858rem + 5.71vw, 9rem);
	--size--9-5rem: clamp(5.25rem, 4.036rem + 6.07vw, 9.5rem);
	--size--10rem: clamp(5.5rem, 4.214rem + 6.43vw, 10rem);
	--size--11rem: clamp(5.75rem, 4.25rem + 7.5vw, 11rem);
	--size--12rem: clamp(6rem, 4.286rem + 8.57vw, 12rem);
  --size--12-5rem: clamp(6rem, 4.286rem + 8.57vw, 12.5rem);
	--size--13rem: clamp(6.5rem, 4.642rem + 9.29vw, 13rem);
	--size--14rem: clamp(7rem, 5rem + 10vw, 14rem);
	--size--15rem: clamp(7.5rem, 5.358rem + 10.71vw, 15rem);
	--size--16rem: clamp(8rem, 5.714rem + 11.43vw, 16rem);
}
</style>

<style>
  html { font-size: calc(0.5312500000000001rem + 0.5208333333333333vw)!important; }
  @media screen and (max-width:1920px) { html { font-size: calc(0.5312499999999998rem + 0.5208333333333335vw)!important; } }
  @media screen and (max-width:1440px) { html { font-size: calc(0.39866369710467703rem + 0.6681514476614699vw)!important; } }
  @media screen and (max-width:991px) { html { font-size: 1rem!important; } }
</style></div><div class="page_code_custom w-embed"><style>
.card_img-wrap {
--num: 1rem;
}

.quote-card, .sm-card, .horz_wrapper, .hero_bg-wrap, .editorial-card {
--num: 1.8rem;
}
.vid_item, .timeline_item-bg {
--num: 1.4rem;
}

.card_img-wrap, .editorial-card, .quote-card, .sm-card, .vid_item, .horz_wrapper, .hero_bg-wrap, .timeline_item-bg {
clip-path: polygon(
var(--num) 0%, 
calc(100% - var(--num)) 0%, 
100% var(--num), 
100% calc(100% - var(--num)), 
calc(100% - var(--num)) 100%, 
var(--num) 100%, 
0% calc(100% - var(--num)), 
0% var(--num));
}

.horz_item-wrap.is--not-visible .h2 {
opacity: 0;
}

.horz_item-wrap.is--not-visible .horz_item-ab-v-line {
background-color: transparent;
}
.horz_item-wrap.is--not-visible .horz_item-icon.is--1 {
opacity: 0;
}

.horz_item-wrap.is--not-visible .horz_item-img-wrap {
opacity: 0;
}

[page-hide] {
display: none;
}

/* Define the custom variable */
.imgMask {
  --height: 120%;
}

/*Timeline */
.timeline_tab-link .cone-icon-wrap {
opacity: 0;
}
.timeline_tab-link.w--current .cone-icon-wrap {
opacity: 1;
}

.timeline_pane2 {
display: none;
}

.timeline_pane2.is--active {
	display: block;
}

.timeline_tab-link2 .cone-icon-wrap {
opacity: 0;
}

.timeline_tab-link2.is--active .cone-icon-wrap {
opacity: 1;
}

/* Quote by*/
.quote-by .captions {
	font-size: 1.2rem;
}

/*min 1800 */
@media only screen and (min-width: 1800px) {
.hero_txt {
	font-size: clamp(9rem, 3rem + 11vw, 15cqw);
}
}

/*min 480 */
@media only screen and (min-width: 480px) {
}

/*max 900 */
@media only screen and (max-width: 900px) {
.card_img-wrap {
--num: 1rem;
}

.quote-card, .sm-card, .horz_wrapper, .hero_bg-wrap, .editorial-card {
--num: 1.3rem;
}
.vid_item {
--num: 1rem;
}

.timeline_bg-txt br {
	display: none;
}
}

/*max 480 */
@media only screen and (max-width: 480px) {
.quote-card, .sm-card, .horz_wrapper, .hero_bg-wrap, .editorial-card, .card_img-wrap, .vid_item, .timeline_item-bg {
--num: 1rem;
}

.timeline_bg-txt br {
	display: block;
}

.bleed-img-size .img-full {
mask: url(https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6745fcf748066e327fab16e0_vector-img.png) no-repeat center;
mask-size: 150%;
}

}
  
</style></div></div><div class="styleguide_guide_wrap"><div class="w-embed"><style>
html:not(.wf-design-mode) .styleguide_guide_wrap {
	display: none;
}
.styleguide_guide_layout {
	counter-reset: gridguides;
}
.styleguide_guide_layout > div::before {
  counter-increment: gridguides;
  content: counter(gridguides);
}
</style></div><div data-padding-bottom="none" data-padding-top="none" class="container"><div class="styleguide_guide_layout"><div class="styleguide_guide_column"></div><div class="styleguide_guide_column"></div><div class="styleguide_guide_column"></div><div class="styleguide_guide_column"></div><div class="styleguide_guide_column"></div><div class="styleguide_guide_column"></div><div class="styleguide_guide_column"></div><div class="styleguide_guide_column"></div><div class="styleguide_guide_column"></div><div class="styleguide_guide_column"></div><div class="styleguide_guide_column"></div><div class="styleguide_guide_column"></div></div></div></div><div class="bg-img-wrap"><img sizes="100vw" srcset="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b56c9b4f72748260291fb_AdobeStock_263381557-p-500.webp 500w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b56c9b4f72748260291fb_AdobeStock_263381557-p-800.webp 800w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b56c9b4f72748260291fb_AdobeStock_263381557-p-1080.webp 1080w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b56c9b4f72748260291fb_AdobeStock_263381557-p-1600.webp 1600w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b56c9b4f72748260291fb_AdobeStock_263381557.webp 2000w" alt="" src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b56c9b4f72748260291fb_AdobeStock_263381557.webp" loading="lazy" class="bg-img"></div><div class="main_wrap"><div class="hero_section"><div class="container-lg is--hero"><div class="desktop_hero"><div class="hero_wrapper"><div class="hero_top"><h1 class="hero_txt">double</h1></div><div class="hero_bottom"><div class="hero_bottom-inner"><div class="hero_bottom-content"><div class="cone-icon-wrap"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673cb3f8639c2eefc478ed3e_icon%20(2).svg" loading="lazy" alt="" class="hover-play-icon"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673cb3f8639c2eefc478ed3e_icon%20(2).svg" loading="lazy" alt="" class="hover-play-icon"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673cb3f8639c2eefc478ed3e_icon%20(2).svg" loading="lazy" alt="" class="hover-play-icon"></div><div text-split="" class="h4">Motocross superstars Jett and Hunter Lawrence aren’t chasing each other —they’re chasing history.</div></div><div class="hero_bottom-col"><div class="hero_txt">trouble</div></div></div><div class="hero_bottom-caption-wrap"><div class="captions">Words by Clay Skipper<br>Photos by Joe Pugliese</div></div></div><div class="hero_bg-wrap"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673e068e36955ed664afc375_redbull-only-bg.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673e068e36955ed664afc375_redbull-only-bg-p-500.webp 500w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673e068e36955ed664afc375_redbull-only-bg-p-800.webp 800w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673e068e36955ed664afc375_redbull-only-bg-p-1080.webp 1080w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673e068e36955ed664afc375_redbull-only-bg-p-1600.webp 1600w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673e068e36955ed664afc375_redbull-only-bg-p-2000.webp 2000w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673e068e36955ed664afc375_redbull-only-bg-p-2600.webp 2600w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673e068e36955ed664afc375_redbull-only-bg.webp 2826w" alt="" class="img-full"></div><div class="hero_bike-img-wrap is--1"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dfba7827b34f61aed087f_hero-bg-img.webp" loading="lazy" sizes="(max-width: 991px) 100vw, 49vw" srcset="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dfba7827b34f61aed087f_hero-bg-img-p-500.webp 500w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dfba7827b34f61aed087f_hero-bg-img-p-800.webp 800w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dfba7827b34f61aed087f_hero-bg-img-p-1080.webp 1080w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dfba7827b34f61aed087f_hero-bg-img.webp 1370w" alt="" class="hero_bike-img is--1"></div><div class="hero_bike-img-wrap is--2"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dfba7ce06e4129220b1c7_hero-bg-img%20(1).webp" loading="lazy" sizes="(max-width: 991px) 100vw, 53vw" srcset="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dfba7ce06e4129220b1c7_hero-bg-img%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dfba7ce06e4129220b1c7_hero-bg-img%20(1)-p-800.webp 800w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dfba7ce06e4129220b1c7_hero-bg-img%20(1).webp 1000w" alt="" class="hero_bike-img is--2"></div></div></div><div class="tab-down_hero"><div class="hero_wrapper"><div class="hero_top"><h1 class="hero_txt is--mob">dou<br>ble</h1><h1 class="hero_txt is--tab">double</h1></div><div class="hero-tab_img-wrap"><div class="hero_bg-wrap"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673e068e36955ed664afc375_redbull-only-bg.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673e068e36955ed664afc375_redbull-only-bg-p-500.webp 500w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673e068e36955ed664afc375_redbull-only-bg-p-800.webp 800w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673e068e36955ed664afc375_redbull-only-bg-p-1080.webp 1080w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673e068e36955ed664afc375_redbull-only-bg-p-1600.webp 1600w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673e068e36955ed664afc375_redbull-only-bg-p-2000.webp 2000w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673e068e36955ed664afc375_redbull-only-bg-p-2600.webp 2600w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673e068e36955ed664afc375_redbull-only-bg.webp 2826w" alt="" class="img-full"></div><div class="hero_bike-img-wrap is--1"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dfba7827b34f61aed087f_hero-bg-img.webp" loading="lazy" sizes="(max-width: 991px) 57vw, 100vw" srcset="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dfba7827b34f61aed087f_hero-bg-img-p-500.webp 500w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dfba7827b34f61aed087f_hero-bg-img-p-800.webp 800w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dfba7827b34f61aed087f_hero-bg-img-p-1080.webp 1080w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dfba7827b34f61aed087f_hero-bg-img.webp 1370w" alt="" class="hero_bike-img is--1"></div><div class="hero_bike-img-wrap is--2"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dfba7ce06e4129220b1c7_hero-bg-img%20(1).webp" loading="lazy" sizes="(max-width: 991px) 62vw, 100vw" srcset="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dfba7ce06e4129220b1c7_hero-bg-img%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dfba7ce06e4129220b1c7_hero-bg-img%20(1)-p-800.webp 800w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dfba7ce06e4129220b1c7_hero-bg-img%20(1).webp 1000w" alt="" class="hero_bike-img is--2"></div></div><div class="hero_bottom"><div class="hero_bottom-inner"><div class="hero_bottom-col"><div class="hero_txt is--tab">trouble</div><div class="hero_txt is--mob">trou<br>ble</div></div><div class="hero_tab-quotes"><div class="hero_bottom-content"><div class="cone-icon-wrap"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673cb3f8639c2eefc478ed3e_icon%20(2).svg" loading="lazy" alt="" class="hover-play-icon"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673cb3f8639c2eefc478ed3e_icon%20(2).svg" loading="lazy" alt="" class="hover-play-icon"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673cb3f8639c2eefc478ed3e_icon%20(2).svg" loading="lazy" alt="" class="hover-play-icon"></div><div text-split="" class="h4">Motocross superstars Jett and Hunter Lawrence aren’t chasing each other —they’re chasing history.</div></div><div class="hero_bottom-caption-wrap"><div class="captions">Words by Clay Skipper<br>Photos by Joe Pugliese</div></div></div></div></div></div></div></div></div><div class="section is--tab-change"><div class="padding-vertical is--100px"><div class="torn-paper-wrap is--top"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/674470cebdc4cacabb7fe9f0_Vector%20(35).svg" loading="lazy" alt="" class="torn-paper-img is--tab-down"></div><div class="container"><div class="section-wrapper is--2nd"><div class="section-top"><div class="section-top-col"><h2 anime-group="headings" text-split="" class="h3">It’s a late October morning, and the Florida sun is already bearing down as Hunter and Jett Lawrence prepare to take their bikes out to practice.</h2></div></div><div class="section-bottom"><div class="_2col-wrap"><div class="_2col"><div class="editorial-content-wrap is--sm"><p anime-group="body-copy" class="text-body-copy">They’re at the 63-acre compound near Dade City where they hone the technique that has made them two of the best (if not the two best) motocross riders in the world. Later tonight, they’ll fly to England, where they’ll represent Australia in the annual Motocross of Nations competition. The forecast says rain is likely in England, so the boys—alongside their mechanic, Rene Ebert, and dad and coach, Darren, or “Dazzy” as they call him—are preparing to wet rubber mats to simulate accelerating out of a slippery start gate. Two other riders and friends, Ayden and Blake, plan to join them. Hunter playfully offers Blake a wager: If he can beat him off the line, Hunter will gift Blake a pair of taxidermied kangaroo testicles on a keychain.<br><br>This is how it goes at the compound (the boys call it “the farm”): a lot of work, but also a lot of play. This is by design. The boys have been racing for most of their lives—Hunter is 25 and Jett is 21—and though Dazzy has instilled in them a strict work ethic, he tries to keep the training atmosphere light. (To wit: The ratio of humans to animals is about 1:1, with five dogs and two recently acquired donkeys, Clyde and Cowboy, milling around.) After riding their bikes onto the dirt, Blake and Hunter ready themselves, pushing their weight forward onto their toes, hands primed on the throttle. Dazzy prepares to drop a rock as a starting signal. As it falls, engines race and back tires spin violently, flinging wet mud backwards and shooting both riders forward, Hunter clearly in the lead. The precious jewels will remain with the Lawrences.</p></div><div class="_2col-img-col"><div class="card_img-wrap is--1"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/674461d2a712156b3cd22f5d_LTO_10719_02_0247b.webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 420px, 31vw" srcset="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/674461d2a712156b3cd22f5d_LTO_10719_02_0247b-p-500.webp 500w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/674461d2a712156b3cd22f5d_LTO_10719_02_0247b-p-800.webp 800w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/674461d2a712156b3cd22f5d_LTO_10719_02_0247b-p-1080.webp 1080w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/674461d2a712156b3cd22f5d_LTO_10719_02_0247b.webp 1200w" alt="" class="img-full is--card"><div class="editorial_svg-embed w-embed"><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="position: absolute;">
  <defs>
    <filter id="displacementFilter6">
      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise"></feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
    </filter>
    <mask id="editorialMask1">
      <!-- Use CSS variables in the style attribute -->
      <rect class="imgMask" x="-5%" width="120%" fill="white" style="
          filter: url(#displacementFilter6); 
          y: calc(110% - var(--height)); 
          height: var(--height);
        "></rect>
    </mask>
  </defs>
</svg></div></div><div text-split="" class="captions">Jett (right) and Hunter, just three days after finishing 1-2 at the SuperMotocross World Championship Final in Las Vegas.</div></div></div></div></div></div></div></div><div class="bleed-img-wrap"><div class="torn-paper-wrap is--top"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/674470cebdc4cacabb7fe9f0_Vector%20(35).svg" loading="lazy" alt="" class="torn-paper-img is--desktop-only"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6745c757d3b9893f1d64f84b_Vector%20(39).svg" loading="lazy" alt="" class="torn-paper-img is--tab-down"></div><div class="bleed-sticky-wrap"><div class="bleed-img-size is--1"><div class="bleed-code-ab"><div class="bleed-embed w-embed"><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="position: absolute;">
  <defs>
    <filter id="displacementFilterBig">
      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise"></feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
    </filter>
    <mask id="circleMaskBig1">
               <circle cx="50%" cy="50%" r="200%" data-value-final="770" fill="white" class="mask circle-mask" style="filter: url(#displacementFilterBig);"></circle>
    </mask>
  </defs>
</svg></div></div><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b33354b3a20a1271a0270_img.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b33354b3a20a1271a0270_img-p-500.webp 500w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b33354b3a20a1271a0270_img-p-800.webp 800w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b33354b3a20a1271a0270_img-p-1080.webp 1080w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b33354b3a20a1271a0270_img-p-1600.webp 1600w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b33354b3a20a1271a0270_img-p-2000.webp 2000w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b33354b3a20a1271a0270_img-p-2600.webp 2600w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b33354b3a20a1271a0270_img.webp 2880w" alt="" class="img-full"></div></div><div class="torn-paper-wrap is--bottom"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/674470ce34e23a67591bc388_Vector%20(36).svg" loading="lazy" alt="" class="torn-paper-img"></div></div></div><div class="section is--light"><div class="padding-vertical is--100px"><div class="container"><div class="section-wrapper"><div class="editorial-middle-content-wrap"><div class="editorial-content-md"><p anime-group="body-copy" class="text-body-copy">That’s usually how it goes these days. When a race is for any vor all the marbles—even those of the marsupial variety—the Lawrence brothers usually come home with the hardware. Just 11 days before this training session, Jett and Hunter finished first and second, respectively, in the SuperMotocross (SMX) World Championship Final in Las Vegas—basically the Super Bowl of motocross. To add to the drama, they finished tied in points, with Jett winning on a tiebreaker. Jett was also the 2024 Supercross (SX) champion, and Hunter finished second in 2024’s Motocross (MX) series. (For the uninitiated: Supercross happens indoors January to May, followed by Motocross outdoors May to August, and then three SuperMotocross races to close out the year.)<br><br>This sibling dominance is bested in contemporary American sports perhaps only by Venus and Serena Williams—and an ascension burnished by what came before: a long journey that began in Australia and took the Lawrences across Europe and through financial hardship. Even when they made it to America, nothing was certain. Hunter battled health issues, then COVID hit, and though both brothers showed promise in the 250cc class, it didn’t guarantee they’d make it on the premier 450cc level. (Think of it as motocross’s minor and major leagues.) These obstacles have defined their stunning rise—and their character.</p></div></div><div class="editorial-card-wrap"><div class="editorial-card"><div class="editorial-card-content"><p class="text-body-copy">If they keep it up, and most insiders think they will, they could form a historically dominant dynasty. Now, with their one-two SMX finish—pocketing $1.5 million from that series alone—a few choice sponsorships and years of success looming, it might seem like the brothers’ saga has reached critical mass. (Fittingly, a few days later, they will win the Motocross of Nations as teammates, earning Australia its first win in the event since it began in 1947.)<br><br>But the reality is that despite this string of championships, things are just starting to get interesting for the brothers. First of all, there’s more on the line, and less room for error, in the 450 racing class. Off the track, the boys’ charisma and good looks have granted them a popularity—over 1 million combined followers on Instagram, with Jett adding another 300K+ on TikTok—that puts them in the best position to grow motocross since Travis Pastrana jumped out of an airplane without a parachute. And then there’s a touchy question that hovers around the boys: What happens if a sibling rivalry is doused with the high-octane fuel of celebrity and fame amid 30-plus head-to-head races a year?</p></div><div class="editorial-card-img-wrap is--1"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b2d17b88162b80b9aa6d2_img%20(1).webp" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 89vw, 43vw" srcset="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b2d17b88162b80b9aa6d2_img%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b2d17b88162b80b9aa6d2_img%20(1)-p-800.webp 800w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b2d17b88162b80b9aa6d2_img%20(1).webp 840w" alt="" class="img-full is--ab"></div></div><div class="editorial_caption-wrap"><div text-split="" class="captions">The boys with their parents, Darren (better known as “Dazzy”) and Emma. Photo: Align Media</div></div></div><div class="editorial-middle-content-wrap"><div class="editorial-content-md"><p anime-group="body-copy" class="text-body-copy">To complicate matters, the younger brother’s career has proved more dominant so far. In his 2023 rookie season in the 450 premier class, Jett didn’t just win the MX title; he went 22-0, something no rookie had ever done before, and won the SMX title for good measure. (Hunter was still riding in the 250 class, winning the MX and SX titles.) Jett has said that he hopes to break Jeremy McGrath’s record of 72 all-time supercross wins. On top of that, he’s become the face of the sport, and for good reason: He’s an Australian named Jett who quite literally jets around everyone else and has a jaw structure that Simon Cowell would build a pop group around. Hunter, meanwhile, came into the 450 class one year after Jett and is in the odd position of playing underdog—but doesn’t look far behind. As a rookie, he finished second in MX and was seconds away from taking his brother’s SMX title.<br><br>It sounds like something out of a movie: one guy trying to become the greatest motocross racer of all-time. And the rider most likely to beat him is family, the older brother he grew up learning from. But this is no fiction: It’s the reality Jett and Hunter Lawrence have always been working toward.</p></div></div></div></div></div><div class="bleed-img-wrap"><div class="bleed-sticky-wrap"><div class="bleed-img-size is--2"><div class="bleed-code-ab"><div class="bleed-embed w-embed"><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="position: absolute;">
  <defs>
    <filter id="displacementFilterBig">
      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise"></feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="100" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
    </filter>
    <mask id="circleMaskBig2">
               <circle cx="50%" cy="50%" r="200%" data-value-final="770" fill="white" class="mask circle-mask" style="filter: url(#displacementFilterBig);"></circle>
    </mask>
  </defs>
</svg></div></div><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b3a3c1805a89981bffe8e_LTO_10719_04_2516.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b3a3c1805a89981bffe8e_LTO_10719_04_2516-p-500.webp 500w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b3a3c1805a89981bffe8e_LTO_10719_04_2516-p-800.webp 800w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b3a3c1805a89981bffe8e_LTO_10719_04_2516-p-1080.webp 1080w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b3a3c1805a89981bffe8e_LTO_10719_04_2516-p-1600.webp 1600w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b3a3c1805a89981bffe8e_LTO_10719_04_2516-p-2000.webp 2000w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b3a3c1805a89981bffe8e_LTO_10719_04_2516-p-2600.webp 2600w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b3a3c1805a89981bffe8e_LTO_10719_04_2516.webp 2876w" alt="" class="img-full"></div></div><div class="torn-paper-wrap is--top"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6744708918e614a48437dc0e_Vector-9.svg" loading="lazy" alt="" class="torn-paper-img"></div><div class="torn-paper-wrap is--bottom"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6744708b5e07d23e2fbeeb87_Vector-1.svg" loading="lazy" alt="" class="torn-paper-img"></div></div></div><div class="section"><div class="padding-vertical is--200px"><div class="container"><div class="section-wrapper"><div class="section-top"><div anime-group="headings" text-split="" class="h3">Both boys have their first memories of riding when they were 2 or 3 years old, tooling around on a Yamaha peewee 50 near their home in Queensland, Australia (literally around the corner from the iconic Aussie, Steve “The Crocodile Hunter” Irwin).</div></div><div class="section-bottom"><div class="section-row"><div class="_2col-wrap"><div class="_2col"><div class="_2col-fake-div"></div><div class="editorial-content-wrap"><p anime-group="body-copy" class="text-body-copy">I ask if they got along as kids. “No, no, god no,” Hunter scoffs. “He wanted to kill me,” Jett says.<br><br>Jett, it turns out, liked to mess with Hunter’s stuff, particularly his beloved collection of toy motorbikes, hauler trucks and die-cast Hot Wheels. After playing with them, Hunter would meticulously clean them before proudly displaying them on his shelf. Jett, on the other hand, would steal them, play with them in the dirt and put them back without a rinse. “We always had the front door open at our house in Australia, and our feet got so tough because we had a gravel driveway and [Hunter would] be chasing me,” Jett says, laughing. “I’d be sprinting for my life.”<br><br>This was an omen. As the boys got older, there was a period when Dazzy worked in mines, spending weeks away from his wife, Emma, and sons Jett, Hunter and their middle brother, Tate. Hunter, as the oldest, often took the lead. He recalls getting home after they’d go out riding and asking Jett to wash his gear. Instead, Jett would say he needed to use the bathroom and disappear. “He just didn’t have a care in the world,” Hunter says.</p></div></div></div><div class="quote-card is--lg"><div class="quote-icon-wrap"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b4f13997192c19d96e603_%E2%80%9C%20(3).svg" loading="lazy" alt="" class="img-full"></div><div class="quote-content"><div quote-anime="" text-split="" class="h2">I was pretty easygoing as a kid, I never really thought too much into anything, kind of just go with the wind, neutral and happy-go-lucky.</div><div class="quote-by"><div class="quote-line"></div><div class="captions">Jett</div></div></div></div><div class="_2col-wrap"><div class="_2col"><div class="_2col-fake-div"></div><div class="editorial-content-wrap"><p anime-group="body-copy" class="text-body-copy">If Jett was easygoing, it was in part because things were easy for him. “He was so talented at everything,” says Hunter, who saw Jett excel at soccer, surfing, even breakdancing. Hunter, by his own admission, was clumsier. “Jett’s got the style, the technique, and I look like a fucking elephant trying to tap dance.”<br><br>When it came to riding, both boys were trained by their dad—though Jett’s intuitive athleticism carried over there, too. “I’m good at watching something and picking it up,” Jett says. “Hunter can understand it more. So Dazzy would tell him to do something. He’d tell me to watch what Hunter’s doing. I’d just try to copy it.”<br><br>Jett had a good rider to watch. At age 12, Hunter won the Australian national title in the 65 class. At 16, Kawasaki offered him a contract to come race full-time in Europe. Dazzy, not wanting to split up the family, told Kawasaki they’d have to sign Jett, too. They agreed. It was an example—one of the many, you’ll come to see—of Dazzy’s resolute belief in his boys.<br><br>The family sold everything to free up money. In order to make that last, Dazzy would drive the boys to their competitions around Europe. “We ate fucking old bread and horse meat because it was the cheapest meat in the grocery store in France,” says Hunter. They ate so much canned tuna that, to this day, they can’t stand the stuff. The boys kept racing, but the money kept dwindling, and they had to ask for help—a big loan from the brothers’ grandparents, as well as a camper van purchased by Heiko Klepka, the father of motocross legend Ken Roczen—favors they’ve paid back with the boys’ winnings in recent years.</p></div></div></div><div class="_2col-card-wrap"><div class="quote-card is--sm"><div class="quote-icon-wrap"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b4f13997192c19d96e603_%E2%80%9C%20(3).svg" loading="lazy" alt="" class="img-full"></div><div class="quote-content is--sm"><div quote-anime="" text-split="" class="h2">I knew the stress and risk, I did feel that it was a life-or-death situation because there was nothing to go back to.</div><div class="quote-by"><div class="quote-line"></div><div class="captions">Hunter</div></div></div></div><div id="w-node-d46f4937-9ae8-6077-28b9-63dcaec579c5-98f99b78" class="sm-card is--2col"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dcde57b90511a06c90cd9_bike-img.webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 49vw, (max-width: 991px) 45vw, 41vw" srcset="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dcde57b90511a06c90cd9_bike-img-p-500.webp 500w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dcde57b90511a06c90cd9_bike-img-p-800.webp 800w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dcde57b90511a06c90cd9_bike-img.webp 1010w" alt="" class="img-full"></div></div><div class="editorial-middle-content-wrap"><div class="editorial-content-md"><p anime-group="body-copy" class="text-body-copy">“I knew the stress and risk,” says Hunter. “I did feel that it was a life-or-death situation because there was nothing to go back to.” But he says there was a weird sense of belief that they’d be OK, in large part because that’s how Dazzy carried himself. “He was always such a strong leader for us to follow that I never felt like we would fail,” says Hunter. “Anytime we would fail, he would be like, ‘We don’t fail, we just learn. We’ll beat them in the long run.’”<br><br>When asked how their dad had faith that they’d make it, they shrug. “I don’t know—he was batshit crazy,” says Hunter.<br><br>When I pose this question to Dazzy, how he kept the faith, he makes it sound rather simple. “I knew this wasn’t the end of the road,” he says. “I knew there was more to this story.”</p></div></div></div></div></div></div></div></div><div class="section is--light"><div class="torn-paper-wrap is--top"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/674470cebdc4cacabb7fe9f0_Vector%20(35).svg" loading="lazy" alt="" class="torn-paper-img"></div><div class="padding-vertical is--100px"><div class="container-lg is--bts"><div class="vid_grid"><div id="w-node-_27578c39-5768-c575-2da4-5b0fe701716e-98f99b78" class="vid_header"><div class="h1">bts</div><div id="bts-caption" class="vid_play-wrap"><div class="captions">Hover to play the videos and click to active sound</div><div class="cone-icon-wrap"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b5999a8b85674a051c742_Polygon%205.svg" loading="lazy" alt="" class="hover-play-icon"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b5999a8b85674a051c742_Polygon%205.svg" loading="lazy" alt="" class="hover-play-icon"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b5999a8b85674a051c742_Polygon%205.svg" loading="lazy" alt="" class="hover-play-icon"></div></div></div><div id="w-node-_27578c39-5768-c575-2da4-5b0fe7017170-98f99b78" class="vid_item"><div class="vid_item-embed w-embed"><video class="location-vid" playsinline="" loop="" style=" width:100%; height: 100%;
        display:block; margin: 0 auto; object-fit: cover;" poster="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/67471611e5cc60064c6c558e_bts_thumbnail_topleft.jpg">
  <source src="https://rbop-lawrence-brothers.netlify.app/assets/vid_1.mp4" type="video/mp4">

</video></div></div><div id="w-node-_27578c39-5768-c575-2da4-5b0fe7017172-98f99b78" class="vid_item"><div class="vid_item-embed w-embed"><video class="location-vid" playsinline="" loop="" style=" width:100%; height: 100%;
        display:block; margin: 0 auto; object-fit: cover;" poster="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/674716859815b4d3df0ff79f_bts_thumbnail_topright.webp">
  <source src="https://rbop-lawrence-brothers.netlify.app/assets/vid_2.mp4" type="video/mp4">

</video></div></div><div id="w-node-_27578c39-5768-c575-2da4-5b0fe7017174-98f99b78" class="vid_item"><div class="vid_item-embed w-embed"><video class="location-vid" playsinline="" loop="" style=" width:100%; height: 100%;
        display:block; margin: 0 auto; object-fit: cover;" poster="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/674716f33db54f7a2113dac2_bts_thumbnail_bottomright.webp">
  <source src="https://rbop-lawrence-brothers.netlify.app/assets/vid_3.mp4" type="video/mp4">

</video></div></div><div id="w-node-_27578c39-5768-c575-2da4-5b0fe7017176-98f99b78" class="vid_item is--transparent"></div><div id="w-node-_27578c39-5768-c575-2da4-5b0fe7017177-98f99b78" class="vid_item"><div class="vid_item-embed w-embed"><video class="location-vid" playsinline="" loop="" style=" width:100%; height: 100%;
        display:block; margin: 0 auto; object-fit: cover;" poster="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6747174b4128471fe8620d18_bts_thumbnail_middleleft.webp">
  <source src="https://rbop-lawrence-brothers.netlify.app/assets/vid_4.mp4" type="video/mp4">

</video></div></div><div id="w-node-_27578c39-5768-c575-2da4-5b0fe7017179-98f99b78" class="vid_item is--transparent"></div><div id="w-node-_27578c39-5768-c575-2da4-5b0fe701717a-98f99b78" class="vid_item is--transparent"></div><div id="w-node-_27578c39-5768-c575-2da4-5b0fe701717b-98f99b78" class="vid_item"><div class="vid_item-embed w-embed"><video class="location-vid" playsinline="" loop="" style=" width:100%; height: 100%;
        display:block; margin: 0 auto; object-fit: cover;" poster="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6747178bf18d04ce3dd20c47_bts_thumbnail_middleright.webp">
  <source src="https://rbop-lawrence-brothers.netlify.app/assets/vid_5.mp4" type="video/mp4">

</video></div></div><div id="w-node-_27578c39-5768-c575-2da4-5b0fe701717d-98f99b78" class="vid_item is--quote"><div class="quote-card is--vid-quote"><div class="quote-icon-wrap"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b5aeb70e421ae2bdcfc59_%E2%80%9C%20(4).svg" loading="lazy" alt="" class="img-full"></div><div class="quote-content is--sm"><div quote-anime="" text-split="" class="h3">If I can’t win, there’s only one  guy out there I want to win.</div><div class="quote-by"><div class="quote-line is--brown1"></div><div class="captions">Hunter</div></div></div></div></div><div id="w-node-_27578c39-5768-c575-2da4-5b0fe7017180-98f99b78" class="vid_item"><div class="vid_item-embed w-embed"><video class="location-vid" playsinline="" loop="" style=" width:100%; height: 100%;
        display:block; margin: 0 auto; object-fit: cover;" poster="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/674717e93646f4307f76eaa2_bts_thumbnail_bottomleft.webp">
  <source src="https://rbop-lawrence-brothers.netlify.app/assets/vid_6.mp4" type="video/mp4">

</video></div></div></div></div></div><div class="bleed-img-wrap is--vid"><div class="torn-paper-wrap is--top"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673e14fb2c5c76600a2cc99d_Vector%20(26).svg" loading="lazy" alt="" class="torn-paper-img"></div><div id="section-video-holder" class="section_vid-player"><div class="bleed-embed is--vid w-embed"><video id="section-vid" playsinline="" loop="" style=" width:100%; height: 100%;
        display:block; margin: 0 auto; object-fit: cover;" poster="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673f1d72eb0baac644d329a4_Lawrence%20Bros%20video.webp">
  <source src="https://rbop-lawrence-brothers.netlify.app/assets/section-video.mp4" type="video/mp4">

</video></div><div class="play_button-wrap"><div class="play_button"><div aria-hidden="true" class="btn_play_icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1393 1394" fill="none" class="btn_play_play"><path d="M1271 696.5L280 1393L280 -4.3318e-05L1271 696.5Z" fill="currentColor"></path></svg></div></div></div></div><div class="torn-paper-wrap is--bottom"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6744707f5f06c227a8543144_Vector-8.svg" loading="lazy" alt="" class="torn-paper-img"></div></div></div><div class="section is--brown3"><div class="padding-vertical is--200px"><div class="container"><div class="section-wrapper is--bottom-pad"><div class="section-top"><div anime-group="headings" text-split="" class="h3">On the day before the brothers fly to England for the Motocross of Nations race, I meet Jett at his house around 10 a.m.</div></div><div class="section-bottom"><div class="section-row"><div class="_2col-wrap"><div class="_2col is--reverse"><div class="editorial-content-wrap"><p anime-group="body-copy" class="text-body-copy">He answers the door shirtless, blond curls tousled like confetti strips. Proudly displayed in the foyer of his house—which he shares with mom, dad and Tate—are two bikes from his championship seasons, along with two reptiles: his chameleon, Pablo, and his bearded dragon, Pedro (which Hunter bought him as a birthday surprise). After throwing on a shirt, Jett leads me to the kitchen, where an SMX trophy sits on the counter, deposited there like a bag of groceries. His English bulldog, Moose, hovers, eventually collapsing at Jett’s feet and soundly snoring. Just above the elbow on Jett’s right arm, which is almost entirely inked, is a tattoo of the words “We Shouldn’t Be Here” on a scroll.<br><br>“Technically, for how the path was and how everything was going, we shouldn’t be here at all,” says Jett. A two-story window at the back of his house frames views of a pool and, beyond that, a lake and golf course. (Hunter lives two minutes away by golf cart.)<br><br>Of course, they did eventually make it out of Europe, after showing continual growth and progress, attracting the attention of people in America, including Lucas Mirtl, the boys’ manager. According to Dazzy, Mirtl was particularly impressed by Hunter’s ability to race his way toward the front of the pack, despite racing competitors on faster factory bikes. “He just loved that grit that he’d seen in Hunter,” says Dazzy.<br><br>No doubt “grit” is a hackneyed word in sports journalism, but it has much more heft when it comes from the mouth of Darren Lawrence, who grew up on a farm and understands the nature of hard work. Dazzy maintains that “job’s never finished” attitude with racing, and his influence has shaped the family’s success.</p></div><div class="_2col-img-col"><div class="card_img-wrap is--2"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dd22b637c2a4865081e74_bike-img%20(1).webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 420px, 33vw" srcset="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dd22b637c2a4865081e74_bike-img%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dd22b637c2a4865081e74_bike-img%20(1)-p-800.webp 800w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dd22b637c2a4865081e74_bike-img%20(1).webp 840w" alt="" class="img-full is--card"><div class="editorial_svg-embed w-embed"><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="position: absolute;">
  <defs>
    <filter id="displacementFilter6">
      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise"></feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="100" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
    </filter>
    <mask id="editorialMask2">
      <!-- Use CSS variables in the style attribute -->
      <rect class="imgMask" x="-10%" width="120%" fill="white" style="
          filter: url(#displacementFilter6); 
          y: calc(110% - var(--height)); 
          height: var(--height);
        "></rect>
    </mask>
  </defs>
</svg></div></div><div text-split="" class="captions">A day spent with Hunter and Jett is likely to include a fair amount of unprintable but very funny shit-talking.</div></div></div></div><div class="quote-card is--lg is--light"><div class="quote-icon-wrap"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b5aeb70e421ae2bdcfc59_%E2%80%9C%20(4).svg" loading="lazy" alt="" class="img-full"></div><div class="quote-content"><div quote-anime="" text-split="" class="h2">When you talk to their dad, it really explains almost everything. He’s able to see development—where their weaknesses are, how to get better.</div><div class="quote-by"><div class="quote-line is--brown1"></div><div class="captions">Jason Weigandt, Motorcross journalist</div></div></div></div><div class="_2col-wrap"><div class="_2col is--reverse"><div class="editorial-content-wrap"><p anime-group="body-copy" class="text-body-copy">“When you talk to their dad, it really explains almost everything,” says Jason Weigandt, a journalist who has spent 20 years covering motocross and supercross. “He is just brilliant. He’s able to see development—where their weaknesses are, how to get better. To that end, he was smart enough to say, ‘We need to go to Europe first. It’s harder. It is more difficult.’ There is nothing worse than having to ride in the sand of Belgium in February because it’s the only nonfrozen ground you can even find.”<br><br>When the brothers came to America, that grit would serve them both. Not long after arriving, Hunter ran into a rash of injuries and setbacks: a broken collarbone; a torn ACL, MCL and meniscus; a dislocated shoulder; a canceled supercross season because of the coronavirus. After that, in his second post-COVID race, his bike caught a rut and his shoulder popped out again. “At that point, I was done,” Hunter says. “I was just like, ‘I’ll learn how to mechanic and support Jett. He can be the star. I’m out.’ ”<br><br>Jett, meanwhile, was becoming just that: a star. His success, like his riding style, was explosive. In his first season in 250 MX, he finished fourth. In his next season, 2021, he won, in what would be the first of six straight championships. He’d go on to win the 250 MX and SX in 2022, and the 250 SX in 2023. He graduated to the 450 class for MX in 2023 and won that, too, as well as the 2024 450 SX. Even Dazzy didn’t know how good Jett would be, making his youngest son the regrettable promise—in hindsight—that he could buy a new car for every championship he won. “I screwed myself big time,” he says, laughing. Once Jett got hot, it was obvious that he had a unique raw talent. But he had something else, too: the hardiness that he carried from his years in Europe.<br><br>“If Jett were an American, at 8 years old, he would have been so advanced that he would have had so many things handed to him,” says Weigandt. “His talent might have made him great anyway. But to take that talent and a hardscrabble development process? It’s very rare to get both of those in the same athlete.”</p></div><div class="_2col-img-col"><div class="card_img-wrap is--3"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/67448b5a225e99c4d85566ee_LTO_10719_01_0026.webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 420px, 33vw" srcset="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/67448b5a225e99c4d85566ee_LTO_10719_01_0026-p-500.webp 500w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/67448b5a225e99c4d85566ee_LTO_10719_01_0026-p-800.webp 800w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/67448b5a225e99c4d85566ee_LTO_10719_01_0026-p-1080.webp 1080w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/67448b5a225e99c4d85566ee_LTO_10719_01_0026.webp 1200w" alt="" class="img-full is--card"><div class="editorial_svg-embed w-embed"><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="position: absolute;">
  <defs>
    <filter id="displacementFilter6">
      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise"></feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
    </filter>
    <mask id="editorialMask3">
      <!-- Use CSS variables in the style attribute -->
      <rect class="imgMask" x="-10%" width="120%" fill="white" style="
          filter: url(#displacementFilter6); 
          y: calc(110% - var(--height)); 
          height: var(--height);
        "></rect>
    </mask>
  </defs>
</svg></div></div><div text-split="" class="captions">“Hunter is a 25-year-old going on 30,” says their father, Dazzy. “Whereas Jett is a 21-year-old probably going on 18.”</div></div></div></div></div></div></div></div></div><div class="torn-paper-wrap is--bottom"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6745a9a49eef18079fc941bb_Vector%20(38).svg" loading="lazy" alt="" class="torn-paper-img"></div></div><div class="section is--blue"><div class="padding-vertical is--100px"><div class="container-lg"><div class="horz_wrapper hide"><div class="horz_header-wrap"><div class="horz_header-left"><div text-split="" class="h2">Timeline of Jett and Hunter</div></div><div class="horz_header-right"><div text-split="" class="h1">2024</div><div class="vid_play-wrap"><div text-split="" class="captions">Drag to navigate</div><div class="cone-icon-wrap"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b5999a8b85674a051c742_Polygon%205.svg" loading="lazy" alt="" class="hover-play-icon"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b5999a8b85674a051c742_Polygon%205.svg" loading="lazy" alt="" class="hover-play-icon"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b5999a8b85674a051c742_Polygon%205.svg" loading="lazy" alt="" class="hover-play-icon"></div></div></div></div><div class="horz_scroll"><div class="horz_track"><div class="horz_item-wrap is--not-visible"><div class="horz_item is--1"><div class="horz_item-img-wrap is--1"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673c7416757d3f3b9e895d44_img1%20(3).webp" loading="lazy" alt="" class="img-full"></div><div class="horz_item-content"><div class="h2">Hunter</div><div class="horz_item-ab"><div class="horz_item-ab-v-line"><div class="horz_item-ab-h-line"><div class="horz_item-bar h-1"><div class="horz_item-icon is--top w-embed"><svg width="11" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 9L0.736861 0.749999L10.2631 0.75L5.5 9Z" fill="currentColor"></path>
</svg></div><div class="horz_item-icon is--bottom w-embed"><svg width="11" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 9L0.736861 0.749999L10.2631 0.75L5.5 9Z" fill="currentColor"></path>
</svg></div><div class="horz_item-bar-content h-1"><div class="horz_item-bar-content-top"><div class="horz_item-bar-date"><div class="captions">21.09</div></div><div text-split="" class="h3">2nd place</div></div><div text-split="" class="captions">SMX World Championship in Las Vegas.</div></div></div><div class="horz_item-bar h-2"><div class="horz_item-icon is--top w-embed"><svg width="11" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 9L0.736861 0.749999L10.2631 0.75L5.5 9Z" fill="currentColor"></path>
</svg></div><div class="horz_item-icon is--bottom w-embed"><svg width="11" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 9L0.736861 0.749999L10.2631 0.75L5.5 9Z" fill="currentColor"></path>
</svg></div><div class="horz_item-bar-content h-1"><div class="horz_item-bar-content-top"><div class="horz_item-bar-date"><div class="captions">21.09</div></div><div text-split="" class="h3">2nd place</div></div><div text-split="" class="captions">SMX World Championship in Las Vegas.</div></div></div></div><div class="horz_item-icon is--1 w-embed"><svg width="11" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 9L0.736861 0.749999L10.2631 0.75L5.5 9Z" fill="currentColor"></path>
</svg></div></div></div></div></div><div class="horz_item is--2"><div class="horz_item-img-wrap is--2"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673c74165689d594b1253c02_img2%20(2).webp" loading="lazy" alt="" class="img-full"></div><div class="horz_item-content"><div class="h2">Jett</div><div class="horz_item-ab"><div class="horz_item-ab-v-line is--j"><div class="horz_item-ab-j-line"><div class="horz_item-bar j-1"><div class="horz_item-icon is--top w-embed"><svg width="11" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 9L0.736861 0.749999L10.2631 0.75L5.5 9Z" fill="currentColor"></path>
</svg></div><div class="horz_item-icon is--bottom w-embed"><svg width="11" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 9L0.736861 0.749999L10.2631 0.75L5.5 9Z" fill="currentColor"></path>
</svg></div><div class="horz_item-bar-content h-1"><div class="horz_item-bar-content-top"><div class="horz_item-bar-date"><div class="captions">21.09</div></div><div text-split="" class="h3">2nd place</div></div><div text-split="" class="captions">SMX World Championship in Las Vegas.</div></div></div><div class="horz_item-bar j-2"><div class="horz_item-icon is--top w-embed"><svg width="11" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 9L0.736861 0.749999L10.2631 0.75L5.5 9Z" fill="currentColor"></path>
</svg></div><div class="horz_item-icon is--bottom w-embed"><svg width="11" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 9L0.736861 0.749999L10.2631 0.75L5.5 9Z" fill="currentColor"></path>
</svg></div><div class="horz_item-bar-content h-1"><div class="horz_item-bar-content-top"><div class="horz_item-bar-date"><div class="captions">21.09</div></div><div text-split="" class="h3">1st place</div></div><div text-split="" class="captions">SMX World Championship in Las Vegas.</div></div></div></div><div class="horz_item-icon is--1 w-embed"><svg width="11" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 9L0.736861 0.749999L10.2631 0.75L5.5 9Z" fill="currentColor"></path>
</svg></div></div></div></div></div></div></div><div class="horz_item-wrap is--visible"><div class="horz_item is--1"><div class="horz_item-img-wrap is--1"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673c7416757d3f3b9e895d44_img1%20(3).webp" loading="lazy" alt="" class="img-full"></div><div class="horz_item-content"><div text-split="" class="h2">Hunter</div><div class="horz_item-ab"><div class="horz_item-ab-v-line"><div class="horz_item-icon is--1 w-embed"><svg width="11" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 9L0.736861 0.749999L10.2631 0.75L5.5 9Z" fill="currentColor"></path>
</svg></div></div></div></div></div><div class="horz_item is--2"><div class="horz_item-img-wrap is--2"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673c74165689d594b1253c02_img2%20(2).webp" loading="lazy" alt="" class="img-full"></div><div class="horz_item-content"><div text-split="" class="h2">Jett</div><div class="horz_item-ab"><div class="horz_item-ab-v-line is--j"><div class="horz_item-icon is--1 w-embed"><svg width="11" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 9L0.736861 0.749999L10.2631 0.75L5.5 9Z" fill="currentColor"></path>
</svg></div></div></div></div></div></div></div></div><div class="timeline_wrapper"><div class="text-color-light"><div class="h4">Season Results</div></div><div class="timeline_tabs2"><div class="timeline_menu2"><div timeline-item="supercross" class="timeline_tab-link2 is--active"><div class="cone-icon-wrap"><img loading="lazy" src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6745a7549eef18079fc6ef16_icon%20(3).svg" alt="" class="hover-play-icon"><img loading="lazy" src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6745a7549eef18079fc6ef16_icon%20(3).svg" alt="" class="hover-play-icon"><img loading="lazy" src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6745a7549eef18079fc6ef16_icon%20(3).svg" alt="" class="hover-play-icon"></div><div>Supercross</div></div><div timeline-item="motorcross" class="timeline_tab-link2"><div class="cone-icon-wrap"><img loading="lazy" src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6745a7549eef18079fc6ef16_icon%20(3).svg" alt="" class="hover-play-icon"><img loading="lazy" src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6745a7549eef18079fc6ef16_icon%20(3).svg" alt="" class="hover-play-icon"><img loading="lazy" src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6745a7549eef18079fc6ef16_icon%20(3).svg" alt="" class="hover-play-icon"></div><div>Motocross</div></div><div timeline-item="supermotorcross" class="timeline_tab-link2"><div class="cone-icon-wrap"><img loading="lazy" src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6745a7549eef18079fc6ef16_icon%20(3).svg" alt="" class="hover-play-icon"><img loading="lazy" src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6745a7549eef18079fc6ef16_icon%20(3).svg" alt="" class="hover-play-icon"><img loading="lazy" src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6745a7549eef18079fc6ef16_icon%20(3).svg" alt="" class="hover-play-icon"></div><div>Supermotocross</div></div></div><div class="timeline_content2"><div timeline-item="supercross" class="timeline_pane2 is--active"><div class="timeline_pane-inner"><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a2bf-98f99b78" class="timeline_item"><div class="timeline_item-img-wrap is--1"><img loading="lazy" src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/67459ff83c01e0e1130450dc_img2%20(3).webp" alt="" class="img-full"></div><div class="timeline_item-content"><div class="h2">Jett</div><div class="timeline_item-content-grid"><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a2c6-98f99b78" class="timeline_item-bar-content"><div class="captions">Overall standing</div><div class="h2">01</div></div><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a2cb-98f99b78" class="timeline_item-bar-content"><div class="captions">Points</div><div class="h2">351</div></div></div></div><div class="timeline_item-bg"></div></div><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a2d1-98f99b78" class="timeline_item"><div class="timeline_item-img-wrap is--2"><img loading="lazy" src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6745a3a3e2780501d2a911de_img1%20(4).webp" alt="" class="img-full"></div><div class="timeline_item-content"><div class="h2">Hunter</div><div class="timeline_item-content-grid"><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a2d8-98f99b78" class="timeline_item-bar-content"><div class="captions">Overall standing</div><div class="h2">09</div></div><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a2dd-98f99b78" class="timeline_item-bar-content"><div class="captions">Points</div><div class="h2">207</div></div></div></div><div class="timeline_item-bg"></div></div></div><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a2e3-98f99b78" class="timeline-big-num"><div class="timeline_bg-txt">450<br>sx</div></div></div><div timeline-item="motorcross" class="timeline_pane2"><div class="timeline_pane-inner"><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a2ea-98f99b78" class="timeline_item"><div class="timeline_item-img-wrap is--1"><img loading="lazy" src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/67459ff83c01e0e1130450dc_img2%20(3).webp" alt="" class="img-full"></div><div class="timeline_item-content"><div class="h2">Jett</div><div class="timeline_item-content-grid"><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a2f1-98f99b78" class="timeline_item-bar-content"><div class="captions">Overall standing</div><div class="h2">09<sup class="superscript">*</sup></div></div><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a2f8-98f99b78" class="timeline_item-bar-content"><div class="captions">Points</div><div class="h2">210</div></div></div></div><div class="timeline_item-bg"></div><div class="ab_timeline_footnote"><div class="captions-2">*Missed most of season due to injury</div></div></div><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a301-98f99b78" class="timeline_item"><div class="timeline_item-img-wrap is--2"><img loading="lazy" src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6745a3a3e2780501d2a911de_img1%20(4).webp" alt="" class="img-full"></div><div class="timeline_item-content"><div class="h2">Hunter</div><div class="timeline_item-content-grid"><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a308-98f99b78" class="timeline_item-bar-content"><div class="captions">Overall standing</div><div class="h2">02</div></div><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a30d-98f99b78" class="timeline_item-bar-content"><div class="captions">Points</div><div class="h2">462</div></div></div></div><div class="timeline_item-bg"></div></div></div><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a313-98f99b78" class="timeline-big-num"><div class="timeline_bg-txt">450<br></div></div></div><div timeline-item="supermotorcross" class="timeline_pane2"><div class="timeline_pane-inner"><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a319-98f99b78" class="timeline_item"><div class="timeline_item-img-wrap is--1"><img loading="lazy" src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/67459ff83c01e0e1130450dc_img2%20(3).webp" alt="" class="img-full"></div><div class="timeline_item-content"><div class="h2">Jett</div><div class="timeline_item-content-grid"><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a320-98f99b78" class="timeline_item-bar-content"><div class="captions">Overall standing</div><div class="h2">01</div></div><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a325-98f99b78" class="timeline_item-bar-content"><div class="captions">Points</div><div class="h2">156</div></div></div></div><div class="timeline_item-bg"></div></div><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a32b-98f99b78" class="timeline_item"><div class="timeline_item-img-wrap is--2"><img loading="lazy" src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6745a3a3e2780501d2a911de_img1%20(4).webp" alt="" class="img-full"></div><div class="timeline_item-content"><div class="h2">Hunter</div><div class="timeline_item-content-grid"><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a332-98f99b78" class="timeline_item-bar-content"><div class="captions">Overall standing</div><div class="h2">02</div></div><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a337-98f99b78" class="timeline_item-bar-content"><div class="captions">Points</div><div class="h2">156</div></div></div></div><div class="timeline_item-bg"></div></div></div><div id="w-node-_69f761d9-3ac1-6893-f1ed-1926b108a33d-98f99b78" class="timeline-big-num"><div class="timeline_bg-txt">450<br>smx</div></div></div></div></div></div></div></div><div class="bleed-img-wrap"><div class="torn-paper-wrap is--top"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6745a97a219775ad3246fd37_Vector%20(37).svg" loading="lazy" alt="" class="torn-paper-img"></div><div class="torn-paper-wrap is--bottom"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6744707f34e23a67591b83fb_Vector-5.svg" loading="lazy" alt="" class="torn-paper-img"></div><div class="bleed-sticky-wrap"><div class="bleed-img-size is--3"><div class="bleed-code-ab"><div class="bleed-embed w-embed"><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="position: absolute;">
  <defs>
    <filter id="displacementFilterBig">
      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise"></feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
    </filter>
    <mask id="circleMaskBig3">
               <circle cx="50%" cy="50%" r="200%" data-value-final="770" fill="white" class="mask circle-mask" style="filter: url(#displacementFilterBig);"></circle>
    </mask>
  </defs>
</svg></div></div><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/67444dacd8549e00587f85c9_section-img%20(1).webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/67444dacd8549e00587f85c9_section-img%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/67444dacd8549e00587f85c9_section-img%20(1)-p-800.webp 800w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/67444dacd8549e00587f85c9_section-img%20(1)-p-1080.webp 1080w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/67444dacd8549e00587f85c9_section-img%20(1)-p-1600.webp 1600w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/67444dacd8549e00587f85c9_section-img%20(1)-p-2000.webp 2000w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/67444dacd8549e00587f85c9_section-img%20(1).webp 2183w" alt="" class="img-full"></div></div></div></div><div class="section is--brown2"><div class="padding-vertical is--100px"><div class="container"><div class="section-wrapper"><div class="section-bottom"><div class="section-row"><div class="_2col-wrap"><div class="_2col is--reverse"><div class="editorial-content-wrap"><p anime-group="body-copy" class="text-body-copy">Meanwhile, Hunter, an honors student at the Dazzy Lawrence School of Work Ethic, didn’t quit. Instead, he found a dietician and nutritionist who helped him discover why his body kept falling apart. “I remember the first test, she was blown away, there was just so much inflammation,” he says. “I was intolerant to everything. My body was storing fat around the kidneys. Like fight-or-flight instinct, survival stuff. The body was eating away at the muscle for energy, not using the fat storage or the sugar storage. I was a type 2 diabetic. It was really bad.”<br><br>Within a week of that consultation, Hunter had his best result of the year, finishing fourth. He worked his way back—a grind that Weigandt believes has earned him the respect of his peers. “The level that Hunter is at, even if he’s not quite beating Jett yet, people are like, This guy was not destined to be this good—he made himself this good.” Weigandt adds that no one thought Hunter could be the second-best 450 supercross racer in his first year.<br><br>Hunter, for his part, found that with his newfound health and success came a newfound levity. “Since then, I’ve had so much more success than I previously had,” he says. “I think it’s the fact that I’d accepted defeat and was ready to walk away from the sport and support Jett. Everything’s almost a bonus at that point.”</p></div><div class="_2col-fake-div"></div></div></div><div class="quote-card is--lg"><div class="quote-icon-wrap"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b4f13997192c19d96e603_%E2%80%9C%20(3).svg" loading="lazy" alt="" class="img-full"></div><div class="quote-content"><div quote-anime="" text-split="" class="h2">I want me and my brother to be the biggest thing the sport’s ever seen.</div><div class="quote-by"><div class="quote-line"></div><div class="captions">Hunter</div></div></div></div><div class="_2col-wrap"><div class="_2col is--reverse"><div class="editorial-content-wrap"><p anime-group="body-copy" class="text-body-copy">The ultimate showdown, however, had always loomed on the horizon. Though the boys grew up riding around each other, they never really raced head to head because of their age difference. As it became clear that would happen, Dazzy stepped in with some sage advice. “The media in the real world are fucking shit” is how he put it, as Hunter recalls. “They sell fear, they sell lies, and they sell bullshit. In our sport, unfortunately, they do the same. One thing that I want youse to never forget, and there will be no misconception: Youse are brothers and blood first, racers second. You are on this planet for 65 to 85 years. You are racers for 10 to 15. So don’t throw away and destroy what you have just for racing.”<br><br>This is perhaps what people who wondered—whether back then or now—if there might be serious conflict or resentment between the two Lawrences failed to realize: that family comes first.<br><br>“It’s funny because people don’t seem to get it,” says Hunter, getting uncharacteristically perturbed for a moment. “Like, you’re telling me that if your brother worked his ass off and became successful in his line of work, that you wouldn’t be happy for him if you weren’t [as successful]? It frustrates me. Because the world’s not in a good place right now and you see what the media and everyone’s broadcasting—it’s not positive stuff. So it’s like two brothers are happy for each other, and it’s like, oh my god, let’s turn them against each other. That’s fucking wild. If I can’t win, there’s only one guy out there I want to win, and he has the same name on his jersey as I do.”</p></div><div class="_2col-fake-div"></div></div></div></div></div></div></div></div><div class="bleed-img-wrap"><div class="torn-paper-wrap is--top"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6744708a4bda7746b3a9e477_Vector-4.svg" loading="lazy" alt="" class="torn-paper-img"></div><div class="bleed-sticky-wrap is--4"><div class="bleed-img-size is--4"><div class="bleed-code-ab"><div class="bleed-embed w-embed"><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="position: absolute;">
  <defs>
    <filter id="displacementFilterBig">
      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise"></feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
    </filter>
    <mask id="circleMaskBig4">
               <circle cx="50%" cy="50%" r="200%" data-value-final="770" fill="white" class="mask circle-mask" style="filter: url(#displacementFilterBig);"></circle>
    </mask>
  </defs>
</svg></div></div><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b63df9dc9eabec2f6bdd8_img-bikes.webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b63df9dc9eabec2f6bdd8_img-bikes-p-500.webp 500w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b63df9dc9eabec2f6bdd8_img-bikes-p-800.webp 800w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b63df9dc9eabec2f6bdd8_img-bikes-p-1080.webp 1080w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b63df9dc9eabec2f6bdd8_img-bikes-p-1600.webp 1600w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b63df9dc9eabec2f6bdd8_img-bikes-p-2000.webp 2000w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b63df9dc9eabec2f6bdd8_img-bikes.webp 2160w" alt="" class="img-full is--4"><div class="torn-paper-wrap is--bottom"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6744707f0f390cb2d2832625_Vector-3.svg" loading="lazy" alt="" class="torn-paper-img"></div></div></div></div></div><div class="section is--light"><div class="padding-vertical is--200px"><div class="container"><div class="section-wrapper"><div class="section-top"><div anime-group="headings" text-split="" class="h3">Though the Lawrences share a last name, there are some key differences between the two, starting with their demeanor.</div></div><div class="section-bottom"><div class="section-row"><div class="_2col-wrap"><div class="_2col is--reverse"><div class="editorial-content-wrap"><p anime-group="body-copy" class="text-body-copy">“Hunter is a 25-year-old going on 30, whereas Jett is a 21-year-old probably going on 18,” says Dazzy. Both clearly like to have fun, but Jett’s playful lightheartedness is balanced by Hunter’s thoughtful gravitas. From having to take on more of a fatherly role in Australia to being more aware of the family’s troubles in Europe to having his own struggles in America, you get the sense that Hunter’s life has rubbed up against a bit more resistance from being out in front, and that friction has shaped his perspective, while also providing a bit of a smoother wake for his brother. Dazzy says their personalities are a product of how they were raised, deploying an appropriately auto-themed metaphor.<br><br>“When you get your first car, you’re all attentive,” he says. “You’re washing it all the time. You’re taking note of everything about it. So when you get your first son, you’re like, ‘Don’t walk off that step. Don’t eat that dirt.’ You always make them aware of the consequences of what they’re doing. Because it’s your shiny toy. That’s why Hunter is so analytical. By the time you have your third son, it’s like, ‘Ah fall down the step, he’ll work it out, he won’t do it again. Eat the dirt, he’ll survive.’ So that’s why Jett’s just so casual with everything he does. Nothing really stresses him out. He’s very calm. Hunter’s still calm, but he’s more aware that decisions have consequences.”</p></div><div class="_2col-fake-div"></div></div></div><div class="editorial-card-wrap"><div class="editorial-card"><div class="editorial-card-content"><p class="text-body-copy">Dazzy says that Jett’s fast processing speed and power give him a huge edge. “Things just seem slower to him,” he says. “So he can process stuff and go quicker. And his body is explosive, so he can react quickly to stuff on his first attempt. Whereas Hunter has to build rhythm. His first couple laps are normally not quite as fast, and then he generates speed throughout the moto.” Hunter also picked up his dad’s pragmatism. So for him, riding is more jigsaw puzzle than poem. “I think Hunter thinks it’s a math equation,” says Weigandt. “I do this and I do that. I got better at this, I need to get better at that. If I put all these pieces together, I will ride well.”<br><br>Though when Jett describes how he and Hunter have navigated the tension that could arise between two elite competitors, it’s clear he has imbibed some of this workmanlike mentality, too. “For us, work’s work,” he says. “We go and race and off the bike we’re fine. It doesn’t change. [People] always ask us, is this going to affect your guys’ relationship? No, this is our job. We get paid to do it. We go race. If one of us wins, then that was the better guy that day. If the other one wins the next day, then they’re the better guy that day. Dad always kept it pretty simple for us.”<br><br>Plus, Hunter sees his own success in Jett’s success. As the older brother, he went through a lot of trial and error so that Jett didn’t have to. “I was always the guinea pig, and then Jett would have the blueprints: This is what you need to do,” he says, adding later, “My dad always said if Jett’s not better than you, we’ve failed.”</p></div><div class="editorial-card-img-wrap is--2"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dd4c5dbb8be3243fd8180_img-card.webp" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 89vw, 35vw" srcset="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dd4c5dbb8be3243fd8180_img-card-p-500.webp 500w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dd4c5dbb8be3243fd8180_img-card-p-800.webp 800w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dd4c5dbb8be3243fd8180_img-card.webp 1050w" alt="" class="img-full is--ab"></div></div></div></div></div></div></div></div><div class="bleed-img-wrap"><div class="torn-paper-wrap is--top"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6744708918e614a48437dc0e_Vector-9.svg" loading="lazy" alt="" class="torn-paper-img"></div><div class="bleed-sticky-wrap"><div class="bleed-img-size is--5"><div class="bleed-code-ab"><div class="bleed-embed w-embed"><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="position: absolute;">
  <defs>
    <filter id="displacementFilterBig">
      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise"></feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
    </filter>
    <mask id="circleMaskBig5">
               <circle cx="50%" cy="50%" r="200%" data-value-final="770" fill="white" class="mask circle-mask" style="filter: url(#displacementFilterBig);"></circle>
    </mask>
  </defs>
</svg></div></div><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b6cd295891fea8d7bc60b_img3%20(2).webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b6cd295891fea8d7bc60b_img3%20(2)-p-500.webp 500w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b6cd295891fea8d7bc60b_img3%20(2)-p-800.webp 800w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b6cd295891fea8d7bc60b_img3%20(2)-p-1080.webp 1080w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b6cd295891fea8d7bc60b_img3%20(2)-p-1600.webp 1600w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b6cd295891fea8d7bc60b_img3%20(2).webp 2000w" alt="" class="img-full is--5"></div></div><div class="torn-paper-wrap is--bottom"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/6744708b5e07d23e2fbeeb87_Vector-1.svg" loading="lazy" alt="" class="torn-paper-img"></div></div></div><div class="section"><div class="padding-vertical is--100px"><div class="container"><div class="section-wrapper"><div class="section-row"><div class="_2col-wrap"><div class="_2col is--reverse"><div class="editorial-content-wrap is--last"><p anime-group="body-copy" class="text-body-copy">In both brothers, Dazzy instilled the importance of mindset (so much so that Jett has the word tattooed inside his left forearm). “He always said, whatever you’re going to get yourself into, you got to go in with the right mindset,” says Jett. “If you want to jump a fence, you aim to clear the fence. You don’t aim to jump it and clip your ankles.” The right mindset also means never getting too high or low on the pendulum of emotional swings that can take place over a long season.<br><br>“Emotion will never do you any good,” says Dazzy. “I’m calm during races. There’s no use stressing because I know we’ve done everything we could do to make sure we’re as good as we can be on Saturday and it’ll be what it’ll be.”<br><br>It also means that even when the work has spoken for itself—as it has for the brothers—the work keeps going. “You’re always working towards being better,” says Dazzy. “That’s the first crack, thinking you’ve made it. For me, that’s dangerous.”<br><br>So while others speculate about a potential fissure, the brothers’ focus remains on fortifying the foundation as they always have: by going back to work. “I want me and my brother to be the biggest thing the sport’s ever seen, and change the sport for the better, put it on a platform that no other athlete in our sport has ever put it on,” says Hunter.<br><br>Dazzy, meanwhile, says success looks like replicating this year’s SMX finish as often as possible. “One and two in every championship—that’s all I want to aim for,” he says. “I want to dominate the sport so that people eventually just hate us.”</p></div><div class="quote-card is--sm is--tab-hide"><div class="quote-icon-wrap"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b4f13997192c19d96e603_%E2%80%9C%20(3).svg" loading="lazy" alt="" class="img-full"></div><div class="quote-content is--sm"><div quote-anime="" text-split="" class="h2">If I can’t win, there’s only one guy out there I want to win.</div><div class="quote-by"><div class="quote-line"></div><div class="captions">Hunter</div></div></div></div></div></div><div class="editorial-middle-content-wrap is--with-card"><div class="quote-card is--sm is--tab-down"><div class="quote-icon-wrap"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673b4f13997192c19d96e603_%E2%80%9C%20(3).svg" loading="lazy" alt="" class="img-full"></div><div class="quote-content is--sm"><div quote-anime="" text-split="" class="h2">If I can’t win, there’s only one guy out there I want to win.</div><div class="quote-by"><div class="quote-line"></div><div class="captions">Hunter</div></div></div></div><div class="editorial-content-md is--cr"><p anime-group="body-copy" class="text-body-copy">But right now, it’s really just love that envelops Jett and Hunter Lawrence—love from fans and from within the family. The idea that they will battle, with each other and against each other, for world championships for years to come makes them both smile.<br><br>“I mean, for the value of Jett and Hunter businesses, that’s incredible,” Hunter says. “If we’re the only two guys that can beat each other? That would be perfect.”<br><br>“He’s gonna be a pain in my ass next year, for sure,” Jett says with a laugh. “I’m looking forward to it.”</p></div></div></div></div></div></div><div class="bleed-img-wrap"><div class="bleed-img-size is--6"><div class="bleed-code-ab"><div class="bleed-embed w-embed"><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="position: absolute;">
  <defs>
    <filter id="displacementFilterBig">
      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise"></feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
    </filter>
    <mask id="circleMaskBig6">
               <circle cx="50%" cy="50%" r="200%" data-value-final="770" fill="white" class="mask circle-mask" style="filter: url(#displacementFilterBig);"></circle>
    </mask>
  </defs>
</svg></div></div><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dd5a3d6667f1e8becdac2_section-img%20(2).webp" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dd5a3d6667f1e8becdac2_section-img%20(2)-p-500.webp 500w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dd5a3d6667f1e8becdac2_section-img%20(2)-p-800.webp 800w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dd5a3d6667f1e8becdac2_section-img%20(2)-p-1080.webp 1080w, https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/673dd5a3d6667f1e8becdac2_section-img%20(2).webp 1500w" alt="" class="img-full"></div><div class="torn-paper-wrap is--top"><img src="https://cdn.prod.website-files.com/673b0fd280fa8f2f98f99b83/674470cebdc4cacabb7fe9f0_Vector%20(35).svg" loading="lazy" alt="" class="torn-paper-img"></div></div></div><div class="hide"></div></div></div>`;

  function elementLoad() {
    el.innerHTML = htmlContent;
  }

  elementLoad();
}

// Start function call with params
const params = {
  el: document.querySelector('.content'),
};

start(params);
