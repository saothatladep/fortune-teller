const about = document.querySelector(".app__list-item:last-child");
const modalAbout = document.querySelector(".modal");
const closeIcon = document.querySelector(".close-icon");
const start = document.querySelector(".app__list-item:first-child");
const appName = document.querySelector(".app-name");
const optionApp = document.querySelector(".app__list-option");
const appNotice = document.querySelector(".app-input-notice");
const process = document.querySelector(".app-process");
const backIcon = document.querySelector(".app-back");
const menu = document.querySelector(".app__content-menu");
const main = document.querySelector(".app__content-main");
const mainBack = document.querySelector(".app__content-back");
const clickInteract = document.querySelector(".app__content-interact");
const noticeEnd = document.querySelector(".app__content-click p");
const appAudio = document.querySelector(".app__audio");
const audioON = document.querySelector(".app__audio-on");
const audioOff = document.querySelector(".app__audio-off");
const audioUp = document.querySelector(".fa-chevron-up");
const audioDown = document.querySelector(".fa-chevron-down");
const levelVolume5 =  document.querySelector(".level-volume:nth-child(1)");
const levelVolume4 =  document.querySelector(".level-volume:nth-child(2)");
const levelVolume3 =  document.querySelector(".level-volume:nth-child(3)");
const levelVolume2 =  document.querySelector(".level-volume:nth-child(4)");
const levelVolume1 =  document.querySelector(".level-volume:nth-child(5)");

// audio
const audio = new Audio('./assets/sound/clickUp.mp3');
const bgAudio = new Audio('./assets/sound/bgAudio.mp3');
audio.volume = 0.1;

audioUp.onclick = (e) => {
  bgAudio.volume +=0.2;

  if (bgAudio.volume > 0) {
    audioDown.classList.remove("app__audio-icon--disabled");
  }
  
  if(bgAudio.volume === 1) {
    levelVolume5.classList.add("level-volume--active");
    audioUp.classList.add("app__audio-icon--disabled");
  }
  else if(bgAudio.volume=== 0.8) {
    levelVolume4.classList.add("level-volume--active");
  }
  else if(bgAudio.volume=== 0.6000000000000001) {
    levelVolume3.classList.add("level-volume--active");
  }
  else if(bgAudio.volume=== 0.4000000000000001) {
    levelVolume2.classList.add("level-volume--active");
  }
  else if(bgAudio.volume=== 0.20000000000000007) {
    levelVolume1.classList.add("level-volume--active");
  }
}

audioDown.onclick = (e) => {
  bgAudio.volume -=0.2;

  if (bgAudio.volume < 1) {
    audioUp.classList.remove("app__audio-icon--disabled");
  }

  if(bgAudio.volume === 0.8) {
    levelVolume5.classList.remove("level-volume--active");
  }
  else if(bgAudio.volume=== 0.6000000000000001) {
    levelVolume4.classList.remove("level-volume--active");
  }
  else if(bgAudio.volume=== 0.4000000000000001) {
    levelVolume3.classList.remove("level-volume--active");
  }
  else if(bgAudio.volume=== 0.20000000000000007) {
    levelVolume2.classList.remove("level-volume--active");
  }
  else if(bgAudio.volume=== 5.551115123125783e-17) {
    levelVolume1.classList.remove("level-volume--active");
    audioDown.classList.add("app__audio-icon--disabled");
  }
}

document.addEventListener('click', musicPlay);
function musicPlay() {
    bgAudio.play();
    document.removeEventListener('click', musicPlay);
}

audioON.onclick = (e) => {
  audioON.classList.add("visible-hidden");
  audioOff.classList.remove("visible-hidden");
  bgAudio.pause();
  appAudio.classList.add("dis-none")
}

audioOff.onclick = (e) => {
  audioOff.classList.add("visible-hidden");
  audioON.classList.remove("visible-hidden");
  bgAudio.play();
  appAudio.classList.remove("dis-none")
}

// about option

about.onclick = (e) => {
  audio.play();
  modalAbout.classList.remove("dis-none");
};

closeIcon.onclick = (e) => {
  audio.play();
  modalAbout.classList.add("dis-none");
};

// start option
start.onclick = (e) => {
  audio.play();
  appName.classList.add("dis-none");
  optionApp.classList.add("dis-none");
  inputCalendar.classList.remove("dis-none");
  appNotice.classList.remove("dis-none");
  process.classList.remove("dis-none");
  backIcon.classList.remove("dis-none");
};

// back
backIcon.onclick = (e) => {
  audio.play();
  appName.classList.remove("dis-none");
  optionApp.classList.remove("dis-none");
  inputCalendar.classList.add("dis-none");
  appNotice.classList.add("dis-none");
  process.classList.add("dis-none");
  backIcon.classList.add("dis-none");
};

// process
process.onclick = (e) => {
  audio.play();
  if (inputCalendar.value === "") {
    alert("Please enter your birthday");
  }
  else {
    menu.classList.add("dis-none");
    main.classList.remove("dis-none");
  }
}

let count = 0;
mainBack.onclick = (e) => {
  audio.play();
  menu.classList.remove("dis-none");
  main.classList.add("dis-none");
  contentLeft.classList.add("visible-hidden");
  contentCenter.classList.add("visible-hidden");
  contentRight.classList.add("visible-hidden");
  noticeEnd.innerHTML = "Click me to continue";
  count = 0;
}



