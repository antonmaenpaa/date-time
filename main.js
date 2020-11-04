window.onload = startClock;

function startClock() {
    updateClock();
    setInterval(updateClock, 1000);

}

function updateClock() {
    let date = new Date();

    getTime(date);
    getWeekday(date);
    getMonth(date);
    getYear(date);

}

function getTime(date) {
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(hours < 10) {
        hours = '0'+ hours;
    }
    if(minutes < 10) {
        minutes = '0'+ minutes;
    }
    if(seconds < 10) {
        seconds = '0'+ seconds;
    }

    const timeHolder = document.getElementById('time');
    timeHolder.innerText = hours + ':' + minutes + ':' + seconds;

}

function getWeekday(date) {
    const dayHolder = document.getElementById('day');
    dayHolder.innerText = getWeekdayString(date);
}

function getWeekdayString(date) {
    const dayIndex = date.getDay();

    switch (dayIndex) {
        case 0: return 'Söndag';
        case 1: return 'Måndag';
        case 2: return 'Tisdag';
        case 3: return 'Onsdag';
        case 4: return 'Torsdag';
        case 5: return 'Fredag';
        case 6: return 'Lördag';
    }

}

function getMonth(date) {
 
    const monthHolder = document.getElementById('month');
    monthHolder.innerText = getMonthString(date);
    

}

function getMonthString(date){
    const getMonthDay = date.getDate();
    const monthIndex = date.getMonth();

    const prefix = monthIndex + ' ';

    switch (monthIndex) {
        case 0: return prefix + 'Januari';
        case 1: return prefix + 'Februari';
        case 2: return prefix + 'Mars';
        case 3: return prefix + 'April';
        case 4: return prefix + 'Maj';
        case 5: return prefix + 'Juni';
        case 6: return prefix + 'Juli';
        case 7: return prefix + 'Augusti';
        case 8: return prefix + 'September';
        case 9: return prefix + 'Oktober';
        case 10: return prefix + 'November';
        case 11: return prefix + 'December';
    }


}

function getYear(date) {
    const yearIndex = date.getFullYear();

    const yearHolder = document.getElementById('year');
    yearHolder.innerText = yearIndex;


}

