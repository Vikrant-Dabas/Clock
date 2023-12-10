let changeTheme = document.querySelector('.change-theme');
let second = document.querySelector('.second');
let minute = document.querySelector('.minute');
let hour = document.querySelector('.hour');
let day = document.querySelector('.day');
let month = document.querySelector('.month');
let date = document.querySelector('.date');
let currTime = document.querySelector('.currtime');
let body = document.querySelector('body');
let darkTheme = false;
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

changeTheme.addEventListener('click', (e) => {
    if (!darkTheme) {
        changeTheme.classList.add('opp-dark-mode');
        hour.classList.add('opp-dark-mode');
        minute.classList.add('opp-dark-mode');
        date.classList.add('opp-dark-mode')
        body.classList.add('dark-mode');
        e.target.innerHTML = 'Light Mode';
    }
    else {
        changeTheme.classList.remove('opp-dark-mode');
        hour.classList.remove('opp-dark-mode');
        minute.classList.remove('opp-dark-mode');
        date.classList.remove('opp-dark-mode')
        body.classList.remove('dark-mode');
        e.target.innerHTML = 'Dark Mode';
    }
    darkTheme = !darkTheme
})



function getCurrTime() {
    
    const d = new Date();
    let currentHour = d.getHours();
    let currentMinute = d.getMinutes();
    let ampm = currentHour >= 12 ? 'PM' : 'AM  ';
    let formattedHour = currentHour % 12 || 12;
    let formattedMinute = currentMinute < 10 ? '0' + currentMinute : currentMinute;
    return `${formattedHour}:${formattedMinute} ${ampm}`;
}

function change() {

    const d = new Date();
    let currentSecond = d.getSeconds();
    let currentHour = d.getHours();
    let currentMinute = d.getMinutes();
    let angleHour = (currentHour % 12) * 360 / 12;
    let angleMinute = currentMinute * 6;
    let angleSecond = currentSecond * 6;
    hour.style.transform = `rotate(${angleHour}deg)`;
    minute.style.transform = `rotate(${angleMinute}deg)`;
    second.style.transform = `rotate(${angleSecond}deg)`;
    let currentTime = getCurrTime();
    currTime.innerHTML = currentTime;
    day.innerHTML = daysOfWeek[d.getDay()]+',';
    month.innerHTML = months[d.getMonth()];
    date.innerHTML = d.getDate();
}
let intervalId = setInterval(change, 1000);