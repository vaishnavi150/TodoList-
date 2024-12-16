function clock() {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var today = new Date();

    // Display the full date
    document.getElementById('day').innerHTML =
        dayNames[today.getDay()] +
        " " +
        today.getDate() +
        " " +
        monthNames[today.getMonth()] +
        " " +
        today.getFullYear();

    // Get time components
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    // Determine AM/PM
    let ampm = h >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    h = h % 12;
    h = h ? h : 12; // Adjust 0 to 12 for midnight

    // Pad single digits with a leading zero
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    // Update the clock display
    document.getElementById('hour').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    document.getElementById('ampm').innerHTML = ampm;
}

// Update the clock every second
setInterval(clock, 1000);

// Initialize the clock
clock();
