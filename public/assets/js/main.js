const about = document.querySelector('.app__list-item:last-child');
const modalAbout = document.querySelector('.modal');
const closeIcon = document.querySelector('.close-icon');
const start = document.querySelector('.app__list-item:first-child');
const appName = document.querySelector('.app-name');
const optionApp = document.querySelector('.app__list-option');
const inputCalendar = document.querySelector('.app-input');
const appNotice = document.querySelector('.app-input-notice');
const process = document.querySelector('.app-process');
const backIcon = document.querySelector('.app-back');
console.log(backIcon);
// about option
about.onclick = e => {
    modalAbout.classList.remove('dis-none');
}

closeIcon.onclick = e => {
    modalAbout.classList.add('dis-none');
}

// start option
start.onclick = e => {
    appName.classList.add('dis-none');
    optionApp.classList.add('dis-none');
    inputCalendar.classList.remove('dis-none');
    appNotice.classList.remove('dis-none');
    process.classList.remove('dis-none');
    backIcon.classList.remove('dis-none');
}
console.log(inputCalendar);


backIcon.onclick = e => {
    appName.classList.remove('dis-none');
    optionApp.classList.remove('dis-none');
    inputCalendar.classList.add('dis-none');
    appNotice.classList.add('dis-none');
    process.classList.add('dis-none');
    backIcon.classList.add('dis-none');
}
