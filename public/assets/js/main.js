const about = document.querySelector(".app__list-item:last-child");
const modalAbout = document.querySelector(".modal");
const closeIcon = document.querySelector(".close-icon");
const start = document.querySelector(".app__list-item:first-child");
const appName = document.querySelector(".app-name");
const optionApp = document.querySelector(".app__list-option");
const inputCalendar = document.querySelector(".app-input");
const appNotice = document.querySelector(".app-input-notice");
const process = document.querySelector(".app-process");
const backIcon = document.querySelector(".app-back");
const menu = document.querySelector(".app__content-menu");
const main = document.querySelector(".app__content-main");
const mainBack = document.querySelector(".app__content-back");
const clickInteract = document.querySelector(".app__content-interact");
const picMain = document.querySelector(".app__content-pic");
const contentLeft = document.querySelector(".app__content-left");
const contentCenter = document.querySelector(".app__content-center");
const contentRight = document.querySelector(".app__content-right");
const noticeEnd = document.querySelector(".app__content-click p");

// about option
about.onclick = (e) => {
  modalAbout.classList.remove("dis-none");
};

closeIcon.onclick = (e) => {
  modalAbout.classList.add("dis-none");
};

// start option
start.onclick = (e) => {
  appName.classList.add("dis-none");
  optionApp.classList.add("dis-none");
  inputCalendar.classList.remove("dis-none");
  appNotice.classList.remove("dis-none");
  process.classList.remove("dis-none");
  backIcon.classList.remove("dis-none");
};

// back
backIcon.onclick = (e) => {
  appName.classList.remove("dis-none");
  optionApp.classList.remove("dis-none");
  inputCalendar.classList.add("dis-none");
  appNotice.classList.add("dis-none");
  process.classList.add("dis-none");
  backIcon.classList.add("dis-none");
};

// process
process.onclick = (e) => {
  menu.classList.add("dis-none");
  main.classList.remove("dis-none");
}
let count = 0;
mainBack.onclick = (e) => {
  menu.classList.remove("dis-none");
  main.classList.add("dis-none");
  contentLeft.classList.add("visible-hidden");
  contentCenter.classList.add("visible-hidden");
  contentRight.classList.add("visible-hidden");
  noticeEnd.innerHTML = "Click me to continue";
  count = 0;
}

console.log(contentCenter)
// show

picMain.onclick = (e) => {
  count += 1;
  if(count == 1) {
    contentLeft.classList.remove("visible-hidden");
  }
  else if(count == 2) {
    contentCenter.classList.remove("visible-hidden");
  }
  else if(count == 3) {
    contentRight.classList.remove("visible-hidden");
    noticeEnd.innerHTML = "END";
  }
  // console.log(count);
}

// inputCalendar.valueAsDate = new Date();
inputCalendar.onchange = (e) => {
  let d = new Date( inputCalendar.value);
  year = d.getFullYear();
  month = d.getMonth()+1;
  day = d.getDate();
  console.log(year);
}

// console.log(solarlunar.solar2lunar(2021, 01, 14));
