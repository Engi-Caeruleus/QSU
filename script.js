/* =========================================================
   QATAR STUDENT UNION
   EDITORIAL INTERACTION SYSTEM
   COMPLETE SCRIPT.JS
========================================================= */


/* =========================================================
   CONFIG
========================================================= */

const CONFIG = {
  googleForms: {
    journalism: "https://docs.google.com/forms/d/e/1FAIpQLSeHrVETIpUTLZaqHLSuOesa07tpMRApQJ5N0X2T-z_ukA0E1Q/viewform?usp=publish-editor",
    performing: "",
    sports: "https://forms.gle/ApeMGoR4PPRdi5FE8",
    counselling: "https://forms.gle/DVzwSnZdtY36hqqS7"
  }
};


/* =========================================================
   IMAGE PATHS
========================================================= */

const IMAGE_PATHS = {
  journalism: "Journa.png",
  performing: "masks.png",
  sports: "sports.png",
  counselling: "Counselling-removebg-preview.png",
  logo: "QSU_LOGO_NO_TEXT-removebg-preview.png"
};


/* =========================================================
   BRANCH DATA
========================================================= */

const BRANCHES = [
  {
    id: "journalism",
    name: "Journalism",
    type: "JOURNALISM",
    image: IMAGE_PATHS.journalism,
    description:
      "Write, investigate, interview, and tell the stories that matter to students.",
    quote:
      "Turn curiosity into stories people actually want to read.",
    activities: 0,
    events: 0,
    volunteer: 0,
    tags: [
      "Writing",
      "Research",
      "Media"
    ]
  },
//
 
//
  {
    id: "sports",
    name: "Sports",
    type: "SPORTS",
    image: IMAGE_PATHS.sports,
    description:
      "Train, compete, stay active, and build something stronger with your team.",
    quote:
      "Compete hard, grow together, and enjoy the game.",
    activities: 0,
    events: 0,
    volunteer: 0,
    tags: [
      "Competition",
      "Fitness",
      "Teamwork"
    ]
  },

  {
    id: "counselling",
    name: "Counselling",
    type: "COUNSELLING",
    image: IMAGE_PATHS.counselling,
    description:
      "Listen, support, understand, and help create a healthier student community.",
    quote:
      "Sometimes helping someone starts with simply listening.",
    activities: 0,
    events: 0,
    volunteer: 0,
    tags: [
      "Support",
      "Wellbeing",
      "Community"
    ]
  }
];


/* =========================================================
   JOURNEY DATA
========================================================= */

const JOURNEY_STEPS = [
  {
    number: "01",
    title: "Discover",
    text:
      "Find something that makes you curious and start exploring."
  },

  {
    number: "02",
    title: "Practice",
    text:
      "Turn curiosity into a skill through activities and projects."
  },

  {
    number: "03",
    title: "Connect",
    text:
      "Meet people who share your interests and build something together."
  },

  {
    number: "04",
    title: "Lead",
    text:
      "Take initiative, create opportunities, and help others grow."
  }
];


/* =========================================================
   VOLUNTEER DATA
========================================================= */

const VOLUNTEER_OPPORTUNITIES = [
  {
    number: "01",
    title: "Campus Events",
    text:
      "Help organize and run student events."
  },

  {
    number: "02",
    title: "Media",
    text:
      "Create photos, videos, stories, and promotional content."
  },

  {
    number: "03",
    title: "Branch Support",
    text:
      "Help your branch with projects and activities."
  },

  {
    number: "04",
    title: "Community",
    text:
      "Take part in activities that support other students."
  }
];


/* =========================================================
   QSU EVENT DATA
========================================================= */

const QSU_EVENTS = [
  {
    date: "SEPT 18",
    title: "QSU Welcome Assembly",
    description:
      "Meet the people behind QSU, discover each branch, and find your place in the community.",
    category: "COMMUNITY"
  },

  {
    date: "SEPT 24",
    title: "Branch Discovery Week",
    description:
      "Explore Journalism, Performative Arts, Sports, and Counselling through interactive activities.",
    category: "DISCOVER"
  },

  {
    date: "OCT 02",
    title: "QSU Creative Showcase",
    description:
      "An evening celebrating student creativity, performance, storytelling, and expression.",
    category: "CREATIVE"
  },

  {
    date: "OCT 10",
    title: "Campus Sports Day",
    description:
      "Compete, connect, and represent your branch through friendly campus competition.",
    category: "SPORTS"
  },

  {
    date: "OCT 18",
    title: "Community Support Drive",
    description:
      "Students come together to support fellow students and strengthen the QSU community.",
    category: "COMMUNITY"
  }
];


/* =========================================================
   STATE
========================================================= */

let currentBranchIndex = 0;

let selectedQuizAnswer = null;
let selectedQuizSecondAnswer = null;

let isLoaderFinished = false;

let characterMotionObserver = null;


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  initializeLoader();

  initializeNavigation();

  initializeMobileMenu();

  initializeHero();

  initializeFadeHeadings();

  renderBranches();

  renderJourney();

  initializeJourneyTimeline();

  renderVolunteer();

  initializeEventTimeline();

  initializeModals();

  initializeQuiz();

  initializeGuidance();

  initializeStartBranch();

  initializeRevealSystem();

  initializeImageEffects();

  initializeHeroParallax();

  initializeScrollMotion();

  initializeStatCounters();

  initializeCharacterMotion();

  initializeHoverInteractions();

  initializeImageErrors();

  initializeKeyboardNavigation();

  initializeAccessibility();

});


/* =========================================================
   CHARACTER MOTION SYSTEM
========================================================= */

/*
   Character animation is ONLY applied to headings.

   Body text, descriptions, event paragraphs,
   card paragraphs, tags, dates, etc. are NOT
   split into individual characters.
*/

function initializeCharacterMotion() {

  const elements = document.querySelectorAll(
    "[data-char-motion]"
  );

  elements.forEach(element => {

    if (
      element.dataset.charMotionReady === "true" &&
      !element.matches("#heroType")
    ) {
      return;
    }

    splitTextIntoCharacters(
      element,
      true
    );

  });

  processCharacterMotionElements();

  initializeCharacterObserver();

}


/* =========================================================
   PROCESS DYNAMIC CHARACTER ELEMENTS
========================================================= */

function processCharacterMotionElements(root = document) {

  /*
     ONLY THESE ELEMENTS RECEIVE
     CHARACTER-BY-CHARACTER MOTION.
  */

  const selector = [
    "[data-char-motion]",
    ".hero__type",
    ".section-title",
    ".section-heading",
    ".journey__title",
    ".volunteer-title",
    ".qsu-event h3",
    ".about-title",
    ".guidance-title",
    ".start-branch-title"
  ].join(", ");


  const elements = [];


  if (
    root.nodeType === 1 &&
    root.matches(selector)
  ) {

    elements.push(root);

  }


  elements.push(
    ...root.querySelectorAll(selector)
  );


  const unique =
    [...new Set(elements)];


  unique.forEach(element => {

    if (
      element.dataset.charMotionReady === "true"
    ) {

      return;

    }


    splitTextIntoCharacters(
      element,
      false
    );

  });


  initializeCharacterObserver();

}


/* =========================================================
   SPLIT TEXT INTO LETTERS
========================================================= */

function splitTextIntoCharacters(
  element,
  force = false,
  suppliedText = null
) {

  if (!element) return;


  if (
    element.dataset.charMotionReady === "true" &&
    !force
  ) {

    return;

  }


  const text =
    suppliedText !== null
      ? suppliedText
      : element.textContent
          .replace(/\s+/g, " ")
          .trim();


  if (!text) return;


  element.dataset.charMotionReady =
    "true";


  element.classList.add(
    "char-heading"
  );


  element.textContent =
    "";


  /*
     Scattered starting positions.
  */

  const xPattern = [
    -42,
    28,
    -24,
    48,
    -35,
    20,
    -50,
    35
  ];


  const yPattern = [
    -35,
    28,
    -22,
    42,
    18,
    -40,
    30,
    -26
  ];


  const rotationPattern = [
    -8,
    6,
    -5,
    9,
    -7,
    5,
    -10,
    7
  ];


  const scalePattern = [
    0.88,
    1.08,
    0.94,
    1.04,
    0.90,
    1.07,
    0.92,
    1.05
  ];


  /*
     Split into WORDS first.

     This prevents words from breaking apart
     during line wrapping.
  */

  const words =
    text.split(" ");


  let globalIndex = 0;


  words.forEach(
    (word, wordIndex) => {

      /*
         WORD WRAPPER
      */

      const wordSpan =
        document.createElement(
          "span"
        );


      wordSpan.className =
        "char-word";


      wordSpan.style.display =
        "inline-block";


      wordSpan.style.whiteSpace =
        "nowrap";


      /*
         LETTERS
      */

      [...word].forEach(
        character => {

          const span =
            document.createElement(
              "span"
            );


          span.className =
            "char-motion";


          span.textContent =
            character;


          const patternIndex =
            globalIndex %
            xPattern.length;


          span.style.setProperty(
            "--char-x",
            `${xPattern[patternIndex]}px`
          );


          span.style.setProperty(
            "--char-y",
            `${yPattern[patternIndex]}px`
          );


          span.style.setProperty(
            "--char-r",
            `${rotationPattern[patternIndex]}deg`
          );


          span.style.setProperty(
            "--char-scale",
            scalePattern[patternIndex]
          );


          span.style.setProperty(
            "--char-delay",
            `${Math.min(
              globalIndex * 32,
              900
            )}ms`
          );


          wordSpan.appendChild(
            span
          );


          globalIndex++;

        }
      );


      element.appendChild(
        wordSpan
      );


      /*
         SPACE BETWEEN WORDS
      */

      if (
        wordIndex <
        words.length - 1
      ) {

        const space =
          document.createElement(
            "span"
          );


        space.className =
          "char-motion--space";


        space.innerHTML =
          "&nbsp;";


        element.appendChild(
          space
        );

      }

    }
  );

}


/* =========================================================
   CHARACTER OBSERVER
========================================================= */

function initializeCharacterObserver() {

  if (characterMotionObserver) {

    characterMotionObserver.disconnect();

  }


  const characterGroups =
    document.querySelectorAll(
      ".char-heading"
    );


  if (!characterGroups.length) {

    return;

  }


  /*
     Reduced motion:
     immediately show final state.
  */

  if (
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {

    characterGroups.forEach(
      group => {

        group
          .querySelectorAll(
            ".char-motion"
          )
          .forEach(
            letter => {

              letter.classList.add(
                "is-settled"
              );

            }
          );

      }
    );


    return;

  }


  characterMotionObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              !entry.isIntersecting
            ) {

              return;

            }


            const letters =
              entry.target.querySelectorAll(
                ".char-motion"
              );


            /*
               Two animation frames make sure
               the scattered state is rendered
               before the letters settle.
            */

            requestAnimationFrame(
              () => {

                requestAnimationFrame(
                  () => {

                    letters.forEach(
                      letter => {

                        letter.classList.add(
                          "is-settled"
                        );

                      }
                    );

                  }
                );

              }
            );


            characterMotionObserver.unobserve(
              entry.target
            );

          }
        );

      },
      {
        threshold: 0.15,

        rootMargin:
          "0px 0px -60px 0px"
      }
    );


  characterGroups.forEach(
    group => {

      characterMotionObserver.observe(
        group
      );

    }
  );

}


/* =========================================================
   HERO CHARACTER ANIMATION
========================================================= */

function animateCharacterMotion(
  element,
  newText = null
) {

  if (!element) return;


  const text =
    (
      newText !== null
        ? newText
        : element.textContent
    )
      .replace(/\s+/g, " ")
      .trim();


  if (!text) return;


  element.dataset.charMotionReady =
    "false";


  /*
     Remove old animated characters.
  */

  element
    .querySelectorAll(
      ".char-motion"
    )
    .forEach(
      letter => {

        letter.remove();

      }
    );


  /*
     Build the new characters.
  */

  splitTextIntoCharacters(
    element,
    true,
    text
  );


  const letters =
    element.querySelectorAll(
      ".char-motion"
    );


  /*
     Force browser to render the scattered
     state before settling.
  */

  requestAnimationFrame(
    () => {

      requestAnimationFrame(
        () => {

          letters.forEach(
            letter => {

              letter.classList.add(
                "is-settled"
              );

            }
          );

        }
      );

    }
  );

}


/* =========================================================
   FADE-ONLY TEXT
========================================================= */

/*
   These elements NEVER receive the character
   shake/scatter animation.

   They simply fade upward into view.
*/

function initializeFadeHeadings() {

  const fadeElements =
    document.querySelectorAll(
      ".hero__desc, " +
      ".hero__sub, " +
      ".section-subtitle, " +
      ".section-description"
    );


  if (!fadeElements.length) {

    return;

  }


  /*
     Reduced motion.
  */

  if (
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {

    fadeElements.forEach(
      element => {

        element.classList.add(
          "is-visible"
        );

      }
    );


    return;

  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              !entry.isIntersecting
            ) {

              return;

            }


            entry.target.classList.add(
              "is-visible"
            );


            observer.unobserve(
              entry.target
            );

          }
        );

      },
      {
        threshold: 0.15,

        rootMargin:
          "0px 0px -50px 0px"
      }
    );


  fadeElements.forEach(
    element => {

      observer.observe(
        element
      );

    }
  );

}


/* =========================================================
   LOADER
========================================================= */

function initializeLoader() {

  const loader =
    document.getElementById(
      "qsuLoader"
    );


  if (!loader) {

    isLoaderFinished = true;


    const hero =
      document.querySelector(
        ".hero"
      );


    if (hero) {

      hero.classList.add(
        "hero-ready"
      );

    }


    return;

  }


  document.body.classList.add(
    "qsu-loading"
  );


  let progress = 0;


  const progressBar =
    loader.querySelector(
      ".qsu-loader__progress-track span"
    );


  const progressText =
    loader.querySelector(
      ".qsu-loader__percent"
    );


  /*
     Slow smooth percentage counter.

     1%
     2%
     3%
     ...
     100%
  */

  const progressTimer =
    setInterval(
      () => {

        progress++;


        if (progressBar) {

          progressBar.style.width =
            `${progress}%`;

        }


        if (progressText) {

          progressText.textContent =
            `${progress}%`;

        }


        if (
          progress >= 100
        ) {

          clearInterval(
            progressTimer
          );

        }

      },
      50
    );


  setTimeout(
    () => {

      loader.classList.add(
        "loader-logo-complete"
      );

    },
    50
  );


  setTimeout(
    () => {

      loader.classList.add(
        "loader-name-complete"
      );

    },
    1200
  );


  setTimeout(
    () => {

      loader.classList.add(
        "show-welcome"
      );

    },
    1750
  );


  /*
     Loader leaves after the full
     introductory animation.
  */

  setTimeout(
    () => {

      loader.classList.add(
        "is-leaving"
      );


      document.body.classList.remove(
        "qsu-loading"
      );


      isLoaderFinished =
        true;


      const hero =
        document.querySelector(
          ".hero"
        );


      if (hero) {

        requestAnimationFrame(
          () => {

            hero.classList.add(
              "hero-ready"
            );


            const heroType =
              document.getElementById(
                "heroType"
              );


            if (heroType) {

              animateCharacterMotion(
                heroType,
                BRANCHES[
                  currentBranchIndex
                ].type
              );

            }

          }
        );

      }

    },
    6500
  );


  /*
     Remove loader from DOM.
  */

  setTimeout(
    () => {

      if (
        loader.parentNode
      ) {

        loader.remove();

      }

    },
    6800
  );

}


/* =========================================================
   NAVIGATION
========================================================= */

function initializeNavigation() {

  const nav =
    document.getElementById(
      "nav"
    );


  if (!nav) return;


  function updateNav() {

    nav.classList.toggle(
      "nav--scrolled",
      window.scrollY > 45
    );

  }


  window.addEventListener(
    "scroll",
    updateNav,
    {
      passive: true
    }
  );


  updateNav();


  document
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(
      link => {

        link.addEventListener(
          "click",
          event => {

            const href =
              link.getAttribute(
                "href"
              );


            if (
              !href ||
              href === "#"
            ) {

              return;

            }


            const target =
              document.querySelector(
                href
              );


            if (!target) {

              return;

            }


            event.preventDefault();


            const navHeight =
              nav.offsetHeight || 0;


            const targetTop =
              target.getBoundingClientRect().top +
              window.scrollY -
              navHeight -
              15;


            window.scrollTo({

              top: targetTop,

              behavior: "smooth"

            });

          }
        );

      }
    );

}


/* =========================================================
   MOBILE MENU
========================================================= */

function initializeMobileMenu() {

  const burger =
    document.getElementById(
      "burgerBtn"
    );


  const close =
    document.getElementById(
      "mobileClose"
    );


  const menu =
    document.getElementById(
      "mobileMenu"
    );


  if (!menu) return;


  function openMenu() {

    menu.classList.add(
      "mobile-menu--open"
    );


    document.body.classList.add(
      "menu-open"
    );


    if (burger) {

      burger.setAttribute(
        "aria-expanded",
        "true"
      );

    }

  }


  function closeMenu() {

    menu.classList.remove(
      "mobile-menu--open"
    );


    document.body.classList.remove(
      "menu-open"
    );


    if (burger) {

      burger.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  }


  if (burger) {

    burger.setAttribute(
      "aria-expanded",
      "false"
    );


    burger.addEventListener(
      "click",
      openMenu
    );

  }


  if (close) {

    close.addEventListener(
      "click",
      closeMenu
    );

  }


  menu
    .querySelectorAll(
      ".mob-link"
    )
    .forEach(
      link => {

        link.addEventListener(
          "click",
          closeMenu
        );

      }
    );


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        closeMenu();

      }

    }
  );

}


/* =========================================================
   HERO
========================================================= */

function initializeHero() {

  const prev =
    document.getElementById(
      "prevBranch"
    );


  const next =
    document.getElementById(
      "nextBranch"
    );


  if (prev) {

    prev.addEventListener(
      "click",
      () => {

        changeBranch(-1);

      }
    );

  }


  if (next) {

    next.addEventListener(
      "click",
      () => {

        changeBranch(1);

      }
    );

  }
   const heroImage = document.getElementById("heroBranchImage");

   if (heroImage) {
  heroImage.style.cursor = "pointer";

  heroImage.addEventListener("click", () => {
    const branch = BRANCHES[currentBranchIndex];
    const formUrl = CONFIG.googleForms[branch.id];

    if (formUrl) {
      window.open(formUrl, "_blank", "noopener,noreferrer");
    }
  });
}

  renderHeroDots();

  updateHero(false);

}


/* =========================================================
   CHANGE HERO BRANCH
========================================================= */

function changeBranch(
  direction
) {

  currentBranchIndex +=
    direction;


  if (
    currentBranchIndex < 0
  ) {

    currentBranchIndex =
      BRANCHES.length - 1;

  }


  if (
    currentBranchIndex >=
    BRANCHES.length
  ) {

    currentBranchIndex = 0;

  }


  updateHero(true);

}


/* =========================================================
   UPDATE HERO
========================================================= */

function updateHero(
  animate = true
) {

  const branch =
    BRANCHES[
      currentBranchIndex
    ];


  if (!branch) return;


  const type =
    document.getElementById(
      "heroType"
    );


  const image =
    document.getElementById(
      "heroBranchImage"
    );


  const description =
    document.getElementById(
      "heroDesc"
    );


  /*
     HERO TYPE
     Character animation.
  */

  if (type) {

    if (animate) {

      const currentLetters =
        type.querySelectorAll(
          ".char-motion"
        );


      currentLetters.forEach(
        letter => {

          letter.classList.remove(
            "is-settled"
          );

        }
      );


      setTimeout(
        () => {

          animateCharacterMotion(
            type,
            branch.type
          );

        },
        230
      );

    } else {

      animateCharacterMotion(
        type,
        branch.type
      );

    }

  }


  /*
     HERO IMAGE
  */

  if (image) {

    if (animate) {

      image.style.opacity =
        "0";


      image.style.filter =
        "blur(7px)";


      image.style.transform =
        "translate3d(var(--mouse-x, 0px), var(--mouse-y, 0px), 0) scale(.96)";

    }


    setTimeout(
      () => {

        image.src =
          branch.image;


        image.alt =
          branch.name;


        image.style.opacity =
          "1";


        image.style.filter =
          "";


        image.style.transform =
          "translate3d(var(--mouse-x, 0px), var(--mouse-y, 0px), 0) scale(1)";

      },
      animate ? 180 : 0
    );

  }


  /*
     HERO DESCRIPTION

     This remains normal text with a
     simple fade/slide instead of
     character animation.
  */

  if (description) {

    if (animate) {

      description.style.opacity =
        "0";


      description.style.transform =
        "translateY(10px)";

    }


    setTimeout(
      () => {

        description.textContent =
          branch.description;


        description.style.opacity =
          "1";


        description.style.transform =
          "translateY(0)";

      },
      animate ? 230 : 0
    );

  }


  updateHeroDots();

}


/* =========================================================
   HERO DOTS
========================================================= */

function renderHeroDots() {

  const container =
    document.getElementById(
      "heroDots"
    );


  if (!container) return;


  container.innerHTML =
    "";


  BRANCHES.forEach(
    (branch, index) => {

      const dot =
        document.createElement(
          "button"
        );


      dot.type =
        "button";


      dot.className =
        "hero-dot";


      dot.setAttribute(
        "aria-label",
        `Show ${branch.name}`
      );


      dot.addEventListener(
        "click",
        () => {

          if (
            index ===
            currentBranchIndex
          ) {

            return;

          }


          currentBranchIndex =
            index;


          updateHero(true);

        }
      );


      container.appendChild(
        dot
      );

    }
  );


  updateHeroDots();

}


function updateHeroDots() {

  document
    .querySelectorAll(
      ".hero-dot"
    )
    .forEach(
      (dot, index) => {

        dot.classList.toggle(
          "is-active",
          index ===
          currentBranchIndex
        );

      }
    );

}


/* =========================================================
   BRANCH LIST
========================================================= */

function renderBranches() {

  const container =
    document.getElementById(
      "branchesList"
    );


  if (!container) return;


  container.innerHTML =
    "";


  BRANCHES.forEach(
    (branch, index) => {

      const article =
        document.createElement(
          "article"
        );


      article.className =
        `branch-row ${
          index % 2 === 0
            ? "reveal-left"
            : "reveal-right"
        }`;


      article.style.setProperty(
        "--reveal-delay",
        `${index * 100}ms`
      );


      article.dataset.branch =
        branch.id;


      article.innerHTML = `

        <div class="branch-row__number">
          ${String(index + 1).padStart(2, "0")}
        </div>

        <div class="branch-row__image-wrap">
          <img
            src="${branch.image}"
            alt="${branch.name}"
            loading="lazy"
            width="1200"
            height="800"
          >
        </div>

        <div class="branch-row__content">

          <span class="branch-row__eyebrow">
            ${branch.type}
          </span>

          <h3 class="section-heading">
            ${branch.name}
          </h3>

          <p class="branch-row__description">
            ${branch.description}
          </p>

          <div class="branch-row__tags">

            ${branch.tags
              .map(
                tag => `
                  <span>${tag}</span>
                `
              )
              .join("")}

          </div>

        </div>

        <button
          class="branch-row__arrow"
          type="button"
          aria-label="Explore ${branch.name}"
        >
          →
        </button>

      `;


      const arrow =
        article.querySelector(
          ".branch-row__arrow"
        );


      if (arrow) {

        arrow.addEventListener(
          "click",
          () => {

            currentBranchIndex =
              index;


            updateHero(true);


            const hero =
              document.getElementById(
                "top"
              );


            if (hero) {

              hero.scrollIntoView({

                behavior: "smooth",

                block: "start"

              });

            }

          }
        );

      }


      const image =
        article.querySelector(
          ".branch-row__image-wrap"
        );


      const content =
        article.querySelector(
          ".branch-row__content"
        );


      [image, content]
        .forEach(
          element => {

            if (!element) return;


            element.addEventListener(
              "click",
              () => {

                currentBranchIndex =
                  index;


                updateHero(true);

              }
            );

          }
        );


      container.appendChild(
        article
      );

    }
  );


  /*
     Only the heading is passed through
     the character animation system.
  */

  processCharacterMotionElements(
    container
  );

}


/* =========================================================
   JOURNEY
========================================================= */

function renderJourney() {

  const track =
    document.getElementById(
      "journeyTrack"
    );


  if (!track) return;


  track.innerHTML =
    "";


  JOURNEY_STEPS.forEach(
    (step, index) => {

      const article =
        document.createElement(
          "article"
        );


      article.className =
        "journey__step reveal-up";


      article.style.setProperty(
        "--reveal-delay",
        `${index * 140}ms`
      );


      article.innerHTML = `

        <span class="journey__number">
          ${step.number}
        </span>

        <h3 class="journey__title">
          ${step.title}
        </h3>

        <p>
          ${step.text}
        </p>

      `;


      track.appendChild(
        article
      );

    }
  );


  processCharacterMotionElements(
    track
  );

}


/* =========================================================
   VOLUNTEER
========================================================= */

function renderVolunteer() {

  const container =
    document.getElementById(
      "volStrip"
    );


  if (!container) return;


  container.innerHTML =
    VOLUNTEER_OPPORTUNITIES
      .map(
        (item, index) => `

          <article
            class="volunteer-card reveal-up"
            style="--reveal-delay:${index * 120}ms"
          >

            <span class="volunteer-card__number">
              ${item.number}
            </span>

            <h3 class="volunteer-title">
              ${item.title}
            </h3>

            <p>
              ${item.text}
            </p>

          </article>

        `
      )
      .join("");


  renderQSUEvents();


  processCharacterMotionElements(
    container
  );

}


/* =========================================================
   EVENT TIMELINE RENDER
========================================================= */

function renderQSUEvents() {

  const volunteerSection =
    document.getElementById(
      "volunteer"
    );


  if (!volunteerSection) return;


  const existing =
    volunteerSection.querySelector(
      ".qsu-events"
    );


  if (existing) {

    existing.remove();

  }


  const wrap =
    volunteerSection.querySelector(
      ".wrap"
    );


  if (!wrap) return;


  const events =
    document.createElement(
      "div"
    );


  events.className =
    "qsu-events";


  events.innerHTML = `

    <div
      class="qsu-events__progress"
      aria-hidden="true"
    ></div>

    ${QSU_EVENTS
      .map(
        (event, index) => `

          <article
            class="qsu-event"
            data-event-index="${index}"
          >

            <span
              class="qsu-event__pin"
              aria-hidden="true"
            ></span>

            <div class="qsu-event__card">

              <div class="qsu-event__meta">

                <span class="qsu-event__number">
                  ${String(index + 1).padStart(2, "0")}
                </span>

                <span class="qsu-event__date">
                  ${event.date}
                </span>

              </div>

              <h3>
                ${event.title}
              </h3>

              <p>
                ${event.description}
              </p>

              <span class="qsu-event__tag">
                ${event.category}
              </span>

            </div>

          </article>

        `
      )
      .join("")}

  `;


  const cta =
    wrap.querySelector(
      ".section-cta-row"
    );


  if (cta) {

    wrap.insertBefore(
      events,
      cta
    );

  } else {

    wrap.appendChild(
      events
    );

  }


  /*
     Only QSU event <h3> headings are
     passed into character animation.

     Event <p> descriptions remain normal.
  */

  processCharacterMotionElements(
    events
  );

}


/* =========================================================
   MODALS
========================================================= */

function initializeModals() {

  document
    .querySelectorAll(
      "[data-close]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            const modal =
              button.closest(
                ".modal-overlay"
              );


            if (modal) {

              closeModal(
                modal.id
              );

            }

          }
        );

      }
    );


  document
    .querySelectorAll(
      ".modal-overlay"
    )
    .forEach(
      overlay => {

        overlay.addEventListener(
          "click",
          event => {

            if (
              event.target ===
              overlay
            ) {

              closeModal(
                overlay.id
              );

            }

          }
        );

      }
    );


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key !== "Escape"
      ) {

        return;

      }


      document
        .querySelectorAll(
          ".modal-overlay.is-open"
        )
        .forEach(
          modal => {

            closeModal(
              modal.id
            );

          }
        );

    }
  );

}


function openModal(id) {

  const modal =
    document.getElementById(
      id
    );


  if (!modal) return;


  modal.classList.add(
    "is-open"
  );


  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.classList.add(
    "modal-open"
  );


  setTimeout(
    () => {

      const focusable =
        modal.querySelector(
          "button, input, textarea, a"
        );


      if (focusable) {

        focusable.focus();

      }

    },
    300
  );

}


function closeModal(id) {

  const modal =
    document.getElementById(
      id
    );


  if (!modal) return;


  modal.classList.remove(
    "is-open"
  );


  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  const anyOpen =
    document.querySelector(
      ".modal-overlay.is-open"
    );


  if (!anyOpen) {

    document.body.classList.remove(
      "modal-open"
    );

  }

}


/* =========================================================
   FIND YOUR BRANCH QUIZ
========================================================= */

function initializeQuiz() {

  const findButtons = [

    document.getElementById(
      "findBtn"
    ),

    document.getElementById(
      "findMyBranchBtn"
    )

  ];


  findButtons.forEach(
    button => {

      if (!button) return;


      button.addEventListener(
        "click",
        () => {

          resetQuiz();

          openModal(
            "findModal"
          );

        }
      );

    }
  );


  document
    .querySelectorAll(
      "#qStep1 .quiz-opt"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            selectedQuizAnswer =
              button.dataset.answer;


            showQuizStep(2);

          }
        );

      }
    );


  document
    .querySelectorAll(
      "#qStep2 .quiz-opt"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            selectedQuizSecondAnswer =
              button.dataset.answer;


            showQuizResult();

          }
        );

      }
    );


  const explore =
    document.getElementById(
      "exploreResultBtn"
    );


  if (explore) {

    explore.addEventListener(
      "click",
      () => {

        const branch =
          findBestBranch();


        closeModal(
          "findModal"
        );


        if (!branch) return;


        currentBranchIndex =
          BRANCHES.findIndex(
            item =>
              item.id === branch.id
          );


        updateHero(true);


        const row =
          document.querySelector(
            `.branch-row[data-branch="${branch.id}"]`
          );


        if (!row) return;


        setTimeout(
          () => {

            row.scrollIntoView({

              behavior: "smooth",

              block: "center"

            });


            row.classList.add(
              "quiz-highlight"
            );


            setTimeout(
              () => {

                row.classList.remove(
                  "quiz-highlight"
                );

              },
              1800
            );

          },
          50
        );

      }
    );

  }

}


/* =========================================================
   QUIZ RESET
========================================================= */

function resetQuiz() {

  selectedQuizAnswer =
    null;


  selectedQuizSecondAnswer =
    null;


  showQuizStep(1);

}


/* =========================================================
   QUIZ STEP
========================================================= */

function showQuizStep(step) {

  const steps = [

    document.getElementById(
      "qStep1"
    ),

    document.getElementById(
      "qStep2"
    ),

    document.getElementById(
      "qStep3"
    )

  ];


  steps.forEach(
    (element, index) => {

      if (!element) return;


      element.hidden =
        index !== step - 1;

    }
  );


  const progress = [

    document.getElementById(
      "qp1"
    ),

    document.getElementById(
      "qp2"
    ),

    document.getElementById(
      "qp3"
    )

  ];


  progress.forEach(
    (element, index) => {

      if (!element) return;


      element.classList.toggle(
        "is-active",
        index === step - 1
      );


      element.classList.toggle(
        "is-complete",
        index < step - 1
      );

    }
  );

}


/* =========================================================
   QUIZ MATCHING
========================================================= */

function findBestBranch() {

  const first =
    selectedQuizAnswer;


  const second =
    selectedQuizSecondAnswer;


  if (
    first === "perform"
  ) {

    return BRANCHES.find(
      branch =>
        branch.id ===
        "performing"
    );

  }


  if (
    first === "compete"
  ) {

    return BRANCHES.find(
      branch =>
        branch.id ===
        "sports"
    );

  }


  if (
    first === "help"
  ) {

    return BRANCHES.find(
      branch =>
        branch.id ===
        "counselling"
    );

  }


  if (
    first === "create"
  ) {

    if (
      second === "practice"
    ) {

      return BRANCHES.find(
        branch =>
          branch.id ===
          "performing"
      );

    }


    if (
      second === "volunteer" ||
      second === "lead"
    ) {

      return BRANCHES.find(
        branch =>
          branch.id ===
          "counselling"
      );

    }


    return BRANCHES.find(
      branch =>
        branch.id ===
        "journalism"
    );

  }


  if (
    first === "build"
  ) {

    if (
      second === "practice"
    ) {

      return BRANCHES.find(
        branch =>
          branch.id ===
          "sports"
      );

    }


    return BRANCHES.find(
      branch =>
        branch.id ===
        "journalism"
    );

  }


  if (
    first === "discover"
  ) {

    if (
      second === "volunteer"
    ) {

      return BRANCHES.find(
        branch =>
          branch.id ===
          "counselling"
      );

    }


    return BRANCHES.find(
      branch =>
        branch.id ===
        "journalism"
    );

  }


  return BRANCHES[0];

}


/* =========================================================
   QUIZ RESULT
========================================================= */

function showQuizResult() {

  const branch =
    findBestBranch();


  if (!branch) return;


  showQuizStep(3);


  const title =
    document.getElementById(
      "resultTitle"
    );


  const quote =
    document.getElementById(
      "resultQuote"
    );


  const activities =
    document.getElementById(
      "resultActivities"
    );


  const events =
    document.getElementById(
      "resultEvents"
    );


  const volunteer =
    document.getElementById(
      "resultVol"
    );


  const icon =
    document.getElementById(
      "resultIcon"
    );


  const formLink =
    document.getElementById(
      "resultFormLink"
    );


  if (title) {

    title.textContent =
      branch.name;

  }


  if (quote) {

    quote.textContent =
      branch.quote;

  }


  if (activities) {

    activities.textContent =
      branch.activities;

  }


  if (events) {

    events.textContent =
      branch.events;

  }


  if (volunteer) {

    volunteer.textContent =
      branch.volunteer;

  }


  if (icon) {

    icon.src =
      branch.image;


    icon.alt =
      branch.name;

  }


  if (formLink) {

    formLink.href =
      CONFIG.googleFormUrl;

  }

}


/* =========================================================
   GUIDANCE
========================================================= */

function initializeGuidance() {

  const guidanceButton =
    document.getElementById(
      "getGuidanceBtn"
    );


  if (guidanceButton) {

    guidanceButton.addEventListener(
      "click",
      () => {

        openModal(
          "guidanceModal"
        );

      }
    );

  }


  document
    .querySelectorAll(
      ".guidance-opt"
    )
    .forEach(
      option => {

        option.addEventListener(
          "click",
          () => {

            const choice =
              option.textContent.trim();


            closeModal(
              "guidanceModal"
            );


            switch (choice) {

              case "Join a branch":

                resetQuiz();

                openModal(
                  "findModal"
                );

                break;


              case "Start a branch":

                openModal(
                  "startModal"
                );

                break;


              case "Find volunteering":

                scrollToSection(
                  "volunteer"
                );

                break;


              case "Find extracurricular activities":

                scrollToSection(
                  "branches"
                );

                break;


              case "General question":

                scrollToSection(
                  "contact"
                );

                break;

            }

          }
        );

      }
    );


  const startBranch2 =
    document.getElementById(
      "startBranchBtn2"
    );


  if (startBranch2) {

    startBranch2.addEventListener(
      "click",
      () => {

        openModal(
          "startModal"
        );

      }
    );

  }

}


/* =========================================================
   START BRANCH
========================================================= */

function initializeStartBranch() {

  const openButton =
    document.getElementById(
      "startBranchBtn"
    );


  if (openButton) {

    openButton.addEventListener(
      "click",
      () => {

        openModal(
          "startModal"
        );

      }
    );

  }


  const form =
    document.getElementById(
      "startForm"
    );


  if (!form) return;


  form.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const data =
        new FormData(
          form
        );


      const proposal = {

        branchName:
          data.get("bName"),

        about:
          data.get("bAbout"),

        why:
          data.get("bWhy"),

        activities:
          data.get("bActivities"),

        submittedAt:
          new Date().toISOString()

      };


      const existing =
        JSON.parse(
          localStorage.getItem(
            "qsuBranchProposals"
          ) || "[]"
        );


      existing.push(
        proposal
      );


      localStorage.setItem(
        "qsuBranchProposals",
        JSON.stringify(
          existing
        )
      );


      const formContainer =
        document.getElementById(
          "startFormContainer"
        );


      const success =
        document.getElementById(
          "startSuccess"
        );


      if (formContainer) {

        formContainer.hidden =
          true;

      }


      if (success) {

        success.hidden =
          false;

      }

    }
  );

}


/* =========================================================
   REVEAL SYSTEM
========================================================= */

function initializeRevealSystem() {

  const revealElements = [

    ...document.querySelectorAll(
      [
        ".reveal",
        ".reveal-left",
        ".reveal-right",
        ".reveal-up",
        ".reveal-scale",
        ".reveal-pop"
      ].join(", ")
    )

  ];


  if (
    !revealElements.length
  ) {

    return;

  }


  if (
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {

    revealElements.forEach(
      element => {

        element.classList.add(
          "is-visible"
        );

      }
    );


    return;

  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "is-visible"
              );


              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.12,

        rootMargin:
          "0px 0px -70px 0px"
      }
    );


  revealElements.forEach(
    element => {

      observer.observe(
        element
      );

    }
  );

}


/* =========================================================
   IMAGE EFFECTS
========================================================= */

function initializeImageEffects() {

  document
    .querySelectorAll(
      "img"
    )
    .forEach(
      image => {

        image.classList.add(
          "image-loading"
        );


        if (
          image.complete &&
          image.naturalWidth > 0
        ) {

          image.classList.add(
            "image-loaded"
          );


          return;

        }


        image.addEventListener(
          "load",
          () => {

            image.classList.add(
              "image-loaded"
            );

          },
          {
            once: true
          }
        );

      }
    );

}


/* =========================================================
   HERO PARALLAX
========================================================= */

function initializeHeroParallax() {

  const hero =
    document.querySelector(
      ".hero"
    );


  const image =
    document.getElementById(
      "heroBranchImage"
    );


  if (
    !hero ||
    !image
  ) {

    return;

  }


  if (
    window.matchMedia(
      "(pointer: coarse)"
    ).matches
  ) {

    return;

  }


  let targetX = 0;
  let targetY = 0;

  let currentX = 0;
  let currentY = 0;


  hero.addEventListener(
    "pointermove",
    event => {

      const rect =
        hero.getBoundingClientRect();


      if (
        rect.width === 0 ||
        rect.height === 0
      ) {

        return;

      }


      const x =
        (
          event.clientX -
          rect.left
        ) /
        rect.width -
        0.5;


      const y =
        (
          event.clientY -
          rect.top
        ) /
        rect.height -
        0.5;


      targetX =
        x * 9;


      targetY =
        y * 6;

    }
  );


  hero.addEventListener(
    "pointerleave",
    () => {

      targetX = 0;

      targetY = 0;

    }
  );


  function animate() {

    currentX +=
      (
        targetX -
        currentX
      ) * 0.055;


    currentY +=
      (
        targetY -
        currentY
      ) * 0.055;


    image.style.setProperty(
      "--mouse-x",
      `${currentX}px`
    );


    image.style.setProperty(
      "--mouse-y",
      `${currentY}px`
    );


    requestAnimationFrame(
      animate
    );

  }


  animate();

}


/* =========================================================
   EVENT TIMELINE
========================================================= */

function initializeEventTimeline() {

  const timeline =
    document.querySelector(
      ".qsu-events"
    );


  if (!timeline) return;


  const events =
    [
      ...timeline.querySelectorAll(
        ".qsu-event"
      )
    ];


  const progress =
    timeline.querySelector(
      ".qsu-events__progress"
    );


  if (
    !events.length ||
    !progress
  ) {

    return;

  }


  function updateTimeline() {

    const rect =
      timeline.getBoundingClientRect();


    const viewportHeight =
      window.innerHeight;


    const start =
      viewportHeight * 0.78;


    const end =
      viewportHeight * 0.22;


    const totalDistance =
      Math.max(
        1,
        rect.height +
        start -
        end
      );


    const passed =
      start -
      rect.top;


    const amount =
      Math.max(
        0,
        Math.min(
          1,
          passed /
          totalDistance
        )
      );


    progress.style.height =
      `${amount * 100}%`;


    events.forEach(
      event => {

        const eventRect =
          event.getBoundingClientRect();


        const trigger =
          viewportHeight * 0.68;


        if (
          eventRect.top <
          trigger
        ) {

          event.classList.add(
            "is-active"
          );

        }

      }
    );

  }


  let ticking = false;


  function requestUpdate() {

    if (ticking) return;


    ticking = true;


    requestAnimationFrame(
      () => {

        updateTimeline();

        ticking = false;

      }
    );

  }


  window.addEventListener(
    "scroll",
    requestUpdate,
    {
      passive: true
    }
  );


  window.addEventListener(
    "resize",
    requestUpdate
  );


  requestUpdate();

}


/* =========================================================
   JOURNEY TIMELINE
========================================================= */

function initializeJourneyTimeline() {

  const journey =
    document.getElementById(
      "journey"
    );


  const track =
    document.getElementById(
      "journeyTrack"
    );


  if (
    !journey ||
    !track
  ) {

    return;

  }


  const steps =
    [
      ...track.querySelectorAll(
        ".journey__step"
      )
    ];


  if (!steps.length) return;


  let ticking = false;


  function updateJourney() {

    const rect =
      track.getBoundingClientRect();


    const viewportHeight =
      window.innerHeight;


    const startPoint =
      viewportHeight * 0.78;


    const endPoint =
      viewportHeight * 0.25;


    const distance =
      Math.max(
        1,
        rect.height +
        startPoint -
        endPoint
      );


    const passed =
      startPoint -
      rect.top;


    const progress =
      Math.max(
        0,
        Math.min(
          1,
          passed /
          distance
        )
      );


    track.style.setProperty(
      "--timeline-height",
      `${progress * 100}%`
    );


    steps.forEach(
      step => {

        const stepRect =
          step.getBoundingClientRect();


        const trigger =
          viewportHeight * 0.68;


        if (
          stepRect.top <
          trigger
        ) {

          step.classList.add(
            "is-active"
          );

        }

      }
    );

  }


  function update() {

    if (ticking) return;


    ticking = true;


    requestAnimationFrame(
      () => {

        updateJourney();

        ticking = false;

      }
    );

  }


  window.addEventListener(
    "scroll",
    update,
    {
      passive: true
    }
  );


  window.addEventListener(
    "resize",
    update
  );


  update();

}


/* =========================================================
   STAT COUNTERS
========================================================= */

function initializeStatCounters() {

  const stats =
    document.querySelectorAll(
      ".about__stat-number, .stat-number, [data-count]"
    );


  if (!stats.length) {

    return;

  }


  if (
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {

    stats.forEach(
      element => {

        const target =
          parseInt(
            element.dataset.count ||
            element.textContent.replace(
              /[^0-9]/g,
              ""
            ),
            10
          );


        if (
          !isNaN(target)
        ) {

          element.textContent =
            target;

        }

      }
    );


    return;

  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              !entry.isIntersecting
            ) {

              return;

            }


            const element =
              entry.target;


            const target =
              parseInt(
                element.dataset.count ||
                element.textContent.replace(
                  /[^0-9]/g,
                  ""
                ),
                10
              );


            if (
              isNaN(target)
            ) {

              observer.unobserve(
                element
              );


              return;

            }


            animateCounter(
              element,
              target
            );


            observer.unobserve(
              element
            );

          }
        );

      },
      {
        threshold: 0.6
      }
    );


  stats.forEach(
    element => {

      observer.observe(
        element
      );

    }
  );

}


function animateCounter(
  element,
  target
) {

  const duration =
    1300;


  const start =
    performance.now();


  function update(
    currentTime
  ) {

    const elapsed =
      currentTime -
      start;


    const progress =
      Math.min(
        elapsed /
        duration,
        1
      );


    const eased =
      1 -
      Math.pow(
        1 - progress,
        3
      );


    const value =
      Math.round(
        target *
        eased
      );


    element.textContent =
      value;


    if (
      progress <
      1
    ) {

      requestAnimationFrame(
        update
      );

    } else {

      element.textContent =
        target;

    }

  }


  element.textContent =
    "0";


  requestAnimationFrame(
    update
  );

}


/* =========================================================
   SCROLL MOTION
========================================================= */

function initializeScrollMotion() {

  const hero =
    document.querySelector(
      ".hero"
    );


  const heroShapes =
    document.querySelectorAll(
      ".hero-shape"
    );


  const editorialHeadings =
    document.querySelectorAll(
      ".section-head h2, " +
      ".about h2, " +
      ".guidance h2"
    );


  let ticking = false;


  function update() {

    const viewportCenter =
      window.innerHeight *
      0.5;


    if (hero) {

      const heroRect =
        hero.getBoundingClientRect();


      const heroMovement =
        Math.max(
          -60,
          Math.min(
            60,
            -heroRect.top *
            0.08
          )
        );


      hero.style.setProperty(
        "--hero-scroll-y",
        `${heroMovement}px`
      );

    }


    heroShapes.forEach(
      (shape, index) => {

        const rect =
          shape.getBoundingClientRect();


        const distance =
          rect.top -
          viewportCenter;


        const direction =
          index % 2 === 0
            ? -0.025
            : 0.018;


        const movement =
          distance *
          direction;


        const rotation =
          distance *
          0.002;


        shape.style.setProperty(
          "--shape-y",
          `${movement}px`
        );


        shape.style.setProperty(
          "--shape-rotate",
          `${rotation}deg`
        );

      }
    );


    editorialHeadings.forEach(
      heading => {

        const rect =
          heading.getBoundingClientRect();


        const distance =
          rect.top -
          viewportCenter;


        const movement =
          Math.max(
            -12,
            Math.min(
              12,
              distance *
              -0.018
            )
          );


        heading.style.setProperty(
          "--scroll-y",
          `${movement}px`
        );

      }
    );


    ticking = false;

  }


  function requestUpdate() {

    if (ticking) {

      return;

    }


    ticking = true;


    requestAnimationFrame(
      update
    );

  }


  window.addEventListener(
    "scroll",
    requestUpdate,
    {
      passive: true
    }
  );


  window.addEventListener(
    "resize",
    requestUpdate
  );


  update();

}


/* =========================================================
   HOVER INTERACTIONS
========================================================= */

function initializeHoverInteractions() {

  if (
    window.matchMedia(
      "(pointer: coarse)"
    ).matches
  ) {

    return;

  }


  /*
     Magnetic buttons.
  */

  document
    .querySelectorAll(
      ".pill-btn, .arrow-btn"
    )
    .forEach(
      button => {

        button.addEventListener(
          "pointermove",
          event => {

            const rect =
              button.getBoundingClientRect();


            const x =
              event.clientX -
              rect.left -
              rect.width / 2;


            const y =
              event.clientY -
              rect.top -
              rect.height / 2;


            const strength =
              button.classList.contains(
                "pill-btn"
              )
                ? 0.08
                : 0.12;


            button.style.transform =
              `translate(${x * strength}px, ${y * strength}px)`;

          }
        );


        button.addEventListener(
          "pointerleave",
          () => {

            button.style.transform =
              "";

          }
        );

      }
    );


  /*
     Navigation links.
  */

  document
    .querySelectorAll(
      ".nav__links a"
    )
    .forEach(
      link => {

        link.addEventListener(
          "pointermove",
          event => {

            const rect =
              link.getBoundingClientRect();


            const x =
              event.clientX -
              rect.left -
              rect.width / 2;


            link.style.transform =
              `translateX(${x * 0.035}px)`;

          }
        );


        link.addEventListener(
          "pointerleave",
          () => {

            link.style.transform =
              "";

          }
        );

      }
    );

}


/* =========================================================
   KEYBOARD NAVIGATION
========================================================= */

function initializeKeyboardNavigation() {

  document.addEventListener(
    "keydown",
    event => {

      const modal =
        document.querySelector(
          ".modal-overlay.is-open"
        );


      if (modal) {

        return;

      }


      if (
        event.key === "ArrowLeft"
      ) {

        changeBranch(-1);

      }


      if (
        event.key === "ArrowRight"
      ) {

        changeBranch(1);

      }

    }
  );

}


/* =========================================================
   ACCESSIBILITY
========================================================= */

function initializeAccessibility() {

  document
    .querySelectorAll(
      ".modal-overlay"
    )
    .forEach(
      modal => {

        if (
          !modal.hasAttribute(
            "aria-hidden"
          )
        ) {

          modal.setAttribute(
            "aria-hidden",
            "true"
          );

        }

      }
    );

}


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

function initializeImageErrors() {

  document
    .querySelectorAll(
      "img"
    )
    .forEach(
      image => {

        image.addEventListener(
          "error",
          () => {

            image.classList.add(
              "image-error"
            );


            console.warn(
              "QSU image could not be loaded:",
              image.src
            );

          }
        );

      }
    );

}


/* =========================================================
   SCROLL HELPER
========================================================= */

function scrollToSection(id) {

  const element =
    document.getElementById(
      id
    );


  if (!element) {

    return;

  }


  const nav =
    document.getElementById(
      "nav"
    );


  const offset =
    nav
      ? nav.offsetHeight + 15
      : 15;


  const top =
    element.getBoundingClientRect().top +
    window.scrollY -
    offset;


  window.scrollTo({

    top,

    behavior: "smooth"

  });

}


/* =========================================================
   WINDOW RESIZE
========================================================= */

let resizeTimeout = null;


window.addEventListener(
  "resize",
  () => {

    clearTimeout(
      resizeTimeout
    );


    resizeTimeout =
      setTimeout(
        () => {

          updateHero(false);


          window.dispatchEvent(
            new Event(
              "scroll"
            )
          );


        },
        200
      );

  }
);


/* =========================================================
   PAGE VISIBILITY
========================================================= */

document.addEventListener(
  "visibilitychange",
  () => {

    if (
      document.hidden
    ) {

      return;

    }


    window.dispatchEvent(
      new Event(
        "scroll"
      )
    );

  }
);
