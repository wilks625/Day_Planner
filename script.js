let timeDisplayEl = $("#time-display");
let saveBtn = document.getElementById("btn");

function displayTime() {
  var rightNow = moment().format("MMMM DD, YYYY [|] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);





$(".time-block").each(function() {

  var hour = parseInt($(this).data().number);
  var currentTime = parseInt(moment().format("HH"))

    if(currentTime > hour){
      $(this).addClass("past")
      console.log("seth, whats up?");
    }else if (currentTime < hour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
    console.log("are you working?", (this))
});




function writeNotes() {
  console.log('Please');
  var inputField = localStorage.getItem("inputField");
  var hello = $(hello);
  if (!inputField) {
    return;
  }
hello.textContent = inputField.value;
}

// function renderMessage() {
//   input = JSON.parse(localStorage.getItem("input"));
//   if (!localStorage.getItem("input")) {
//     $window.localStorage.setItem("input", JSON.stringify($scope.initData));
//     var inputDescription = document.querySelector("description");
//     inputDescription.textContent = input;
//   }
// }


$(".saveBtn").on("click", function () {
  console.log($(this).siblings(".description")[0].value);
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

// function renderInputs(e) {

//   var inputField = localStorage.getElementById("inputField");
//   if (!inputField) {
//     return;
//   }
//   inputField.textContent = inputField;
// }
