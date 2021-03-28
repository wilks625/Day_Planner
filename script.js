let timeDisplayEl = $("#time-display");
let saveBtn = document.getElementById("btn");
let userTextInput = document.querySelector("#inputField");


//this function displays the current time and date in the header of the application
function displayTime() { 
  var rightNow = moment().format("MMMM DD, YYYY [|] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);
renderMessege();

//color of current time will display as red, time in the past will display as grey, and time in the future will display as green
$(".time-block").each(function() {

  var hour = parseInt($(this).data().number);
  var currentTime = parseInt(moment().format("HH"))

    if(currentTime > hour){
      $(this).addClass("past")
      // console.log("seth, whats up?"); //used for testing functions
    } else if (currentTime < hour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
    // console.log("are you working?", (this))
});

//testing below
function renderMessege() { 
  console.log("testing")
  var userInput = localStorage.getItem("inputField") //retrieves local storage from inputField
  
  userTextInput.textContent = userInput; //changes text from globally scoped variable userTextInput to whatever was stored in the local storage.
  
}
//testing above
//testing local storage part 2 below


// `
$(".saveBtn").on("click", function (event) {
  console.log($(this).siblings(".description")[0].value);
  event.preventDefault();
  // $("#hour-9 .description").val(localStorage.setItem("hour-9"));
  // $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  // $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  // $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  // $("#hour-13 .description").val(localStorage.getItem("hour-13"));
});

//function that listens for a mouse click on the save button to the right of the text input area
saveBtn.addEventListener("click", function (event) { 
  event.preventDefault();
  console.log("hello");
  var inputField = document.getElementById("inputField").value;
  console.log(inputField);

  if (inputField === "") { //console logs if the input field was 
    console.log("error");
  } else {
    console.log("success");

    localStorage.setItem("inputField", inputField); //stores input from inputField text area to inputField variable to be stored in local storage
  }
});



// for(i=9; i<18; i++) {
//   $("hour-"+i+" .description").val(localStorage.getItem("hour-"+i));
// }

// $("#hour-9 .description").val(localStorage.getItem("hour-9"));
// $("#hour-10 .description").val(localStorage.getItem("hour-10"));
// $("#hour-11 .description").val(localStorage.getItem("hour-11"));
// $("#hour-12 .description").val(localStorage.getItem("hour-12"));
// $("#hour-13 .description").val(localStorage.getItem("hour-13"));