// action when button is clicked or enter is pressed
document.getElementById('start-countdown').addEventListener("click", function (event) {
  event.preventDefault();

  // get the values from the input
  var dateTime = document.getElementById('date').value + " " + document.getElementById('time').value;

  // convert the values to milliseconds
  var finalDate = new Date(dateTime).getTime();

  // make countdown
  var x = setInterval(function() {

    // get today's date
    var todayDate = new Date().getTime();

    var difference = finalDate - todayDate;

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days + "<br>days";
    document.getElementById('hours').innerHTML = hours + "<br>hours";
    document.getElementById('minutes').innerHTML = minutes + "<br>minutes";
    document.getElementById('seconds').innerHTML = seconds + "<br>seconds";

    if (difference < 0) {
      clearInterval(x);
      document.getElementById('count').innerHTML = "Time Up";
    }

    if (todayDate > finalDate) {
      alert('Get Sense!');
    }

    document.getElementById('start-countdown').style.display = 'none';
    document.getElementById('date').style.display = 'none';
    document.getElementById('time').style.display = 'none';
    document.getElementById('words').innerHTML = 'COUNTDOWN TO ' + dateTime;
    document.getElementById('words').style.margin = '40px';

// the 1000 means for a second
  }, 1000);
});
