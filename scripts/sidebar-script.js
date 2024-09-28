const menu = document.getElementById("menu");
const memuMobile = document.getElementById("memu-mobile");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

menu.addEventListener("click", function () {
  modal.classList.toggle("active");
  overlay.classList.toggle("active");
});

memuMobile.addEventListener("click", function () {
  modal.classList.toggle("active");
  overlay.classList.toggle("active");
});

const firstLevel = [
  "jewelry",
  "wedding",
  "diamond",
  "gift",
  "article",
  "benefits",
];

const firstLevelNestMenu = {
  jewelry: "jewelryMenu",
  wedding: "weddingMenu",
  gift: "giftMenu",
};

const firstLevelLabel = {
  jewelry: "จิวเวลรี่",
  wedding: "แต่งงาน",
  diamond: "เพชร",
  gift: "ของขวัญ",
  article: "บทความ",
  benefits: "สิทธิประโยชน์สมาชิก",
};

const secondLevel = [
  "ring",
  "earring",
  "necklace",
  "bracelet",
  "weddingRing",
  "singleDiamondRing",
  "rowDiamondRing",
  "goldRing",
  "momDay",
  "valentine",
  "woman",
  "man",
  "anniversary",
  "budget",
];

const secondLevelNestMenu = {
  ring: "ringMenu",
  earring: "earringMenu",
  weddingRing: "weddingRingMenu",
};

const thirdLevel = [
  "minimal",
  "modern",
  "prettyRing",
  "stud",
  "long",
  "hoop",
  "couple",
  "weddingWoman",
  "weddingMan",
];

const closeIcon = document.getElementById("closeIcon");
closeIcon.addEventListener("click", function (event) {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});

// set first level click listener
firstLevel.forEach((choice) => {
  const firstLevelChoice = document.getElementById(choice);
  firstLevelChoice.addEventListener("click", function () {
    selectFirstChoice(choice);
  });
});

function selectFirstChoice(choice) {
  const selectChoice = document.getElementById(choice);
  // const menuHeader = document.getElementById("menuHeader");
  resetFirstLevelActive();
  resetSecondLevelActive();

  resetSecondSection();
  resetThirdSection();

  // showSecondDivider();
  selectChoice.querySelector("a").classList.add("active");
  // menuHeader.innerHTML = firstLevelLabel[choice];

  if (firstLevelNestMenu[choice] !== undefined) {
    const nestMenu = document.getElementById(firstLevelNestMenu[choice]);
    nestMenu.classList.add("active");
    hideThirdDivider();
  } else {
    // hideSecondDivider();
    hideThirdDivider();
  }
}

function resetFirstLevelActive() {
  firstLevel.forEach((choice) => {
    const firstLevelChoice = document.getElementById(choice);
    firstLevelChoice.querySelector("a").classList.remove("active");
  });
}

function resetSecondSection() {
  Object.keys(firstLevelNestMenu).forEach((key) => {
    const menu = firstLevelNestMenu[key];
    const nestMenu = document.getElementById(menu);
    nestMenu.classList.remove("active");
  });
}

// set second level click listener
secondLevel.forEach((choice) => {
  const secondLevelChoice = document.getElementById(choice);
  if (secondLevelChoice !== undefined) {
    secondLevelChoice.addEventListener("click", function () {
      selectSecondChoice(choice);
    });
  }
});

function selectSecondChoice(choice) {
  const selectChoice = document.getElementById(choice);
  resetSecondLevelActive();
  resetThirdLevelActive();

  resetThirdSection();

  showThirdDivider();
  selectChoice.querySelector("a").classList.add("active");

  if (secondLevelNestMenu[choice] !== undefined) {
    const nestMenu = document.getElementById(secondLevelNestMenu[choice]);
    nestMenu.classList.add("active");
  } else {
    hideThirdDivider();
  }
}

function resetSecondLevelActive() {
  secondLevel.forEach((choice) => {
    const secondLevelChoice = document.getElementById(choice);
    secondLevelChoice.querySelector("a").classList.remove("active");
  });
}

function resetThirdSection() {
  Object.keys(secondLevelNestMenu).forEach((key) => {
    const menu = secondLevelNestMenu[key];
    const nestMenu = document.getElementById(menu);
    nestMenu.classList.remove("active");
  });
}

// set third level click listener
thirdLevel.forEach((choice) => {
  const thirdLevelChoice = document.getElementById(choice);
  if (thirdLevelChoice !== undefined) {
    thirdLevelChoice.addEventListener("click", function () {
      selectThirdChoice(choice);
    });
  }
});

function selectThirdChoice(choice) {
  const selectChoice = document.getElementById(choice);
  resetThirdLevelActive();
  selectChoice.querySelector("a").classList.add("active");
}

function resetThirdLevelActive() {
  thirdLevel.forEach((choice) => {
    const thirdLevelChoice = document.getElementById(choice);
    thirdLevelChoice.querySelector("a").classList.remove("active");
  });
}

// function showSecondDivider() {
//   const secondDivider = document.getElementById("secondDivider");
//   secondDivider.classList.add("active");
// }

// function hideSecondDivider() {
//   const secondDivider = document.getElementById("secondDivider");
//   secondDivider.classList.remove("active");
// }

function showThirdDivider() {
  const thirdDivider = document.getElementById("thirdDivider");
  thirdDivider.classList.add("active");
}

function hideThirdDivider() {
  const thirdDivider = document.getElementById("thirdDivider");
  thirdDivider.classList.remove("active");
}
