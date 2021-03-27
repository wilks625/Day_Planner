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

//color corresponding to current time
$(".time-block").each(function() {

  var hour = parseInt($(this).data().number);
  var currentTime = parseInt(moment().format("HH"))

    if(currentTime > hour){
      $(this).addClass("past")
      // console.log("seth, whats up?");
    } else if (currentTime < hour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
    // console.log("are you working?", (this))
});

//testing below
function renderMessege() { //this function allows for saved events to remain, even after the page has been refreshed
  console.log("testing")
  var userInput = localStorage.getItem("inputField")
  
  userTextInput.textContent = userInput;
  
}
//testing above
//testing local storage part 2 below



$(".saveBtn").on("click", function (event) {
  console.log($(this).siblings(".description")[0].value);
  event.preventDefault();
  // $("#hour-9 .description").val(localStorage.setItem("hour-9"));
  // $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  // $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  // $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  // $("#hour-13 .description").val(localStorage.getItem("hour-13"));
});

saveBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("hello");
  var inputField = document.getElementById("inputField").value;
  console.log(inputField);

  if (inputField === "") {
    console.log("error");
  } else {
    console.log("success");

    localStorage.setItem("inputField", inputField);
   
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