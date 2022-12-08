function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hr >= 12) ? "PM" : "AM"; /* assigning AM/PM */
    hr = (hr == 0) ? 12 : ((hr > 12) ? (hr - 12) : hr); /* assigning hour in 12-hour format */
    hr = changeTime(hr);
    min = changeTime(min);
    sec = changeTime(sec);
    document.getElementById("digit_clock_time").innerText = hr + " : " + min + " : " + sec + " " + midday; /* adding time to the div */

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    var WeekDay = days[date.getDay()]; // get day
    var Day = date.getDate();  // get date
    var Month = months[date.getMonth()]; // get month
    var Year = date.getFullYear(); // get year
    var date = WeekDay + ", " + Day + " " + Month + " " + Year; // get full date
    document.getElementById("digit_clock_date").innerHTML = date;

    var t = setTimeout(currentTime, 1000); /* setting timer */
}

function changeTime(k) { /* appending 0 before time elements if less than 10 */
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

currentTime();