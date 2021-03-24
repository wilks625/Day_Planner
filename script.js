var timeDisplayEl = $('#time-display');

// var time = moment().format("hh:mm:ss");
// $("#time-display").text(time);

function displayTime() {
    var rightNow = moment().format('MMMM DD, YYYY [|] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  



  setInterval(displayTime, 1000);

  