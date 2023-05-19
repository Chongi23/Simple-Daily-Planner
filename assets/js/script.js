

//This is the same as $(function(){});--Just longer for begginer developers.
$(document).ready(function () {
   // TODO: Add a listener for click events on the save button.(DONE) This code should
  // use the id in the containing time-block as a key to save the user input in
  n = new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();

document.getElementById("currentDate").innerHTML = m + "/" + d + "/" + y;


  for (var i = 9; i < 18; i++) {


    var currentHour = new Date().getHours();
    var colorKey = "";


    if(currentHour>i){
      colorKey = "past"
    }
    else if (currentHour === i){
      colorKey = "present"
    }
     else {
      colorKey = "future"
     }
console.log(currentHour)




    var rowDiv = $("<div>").addClass("row time-block "+colorKey).attr("id", "hour " + i)
    var hourDiv = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(i)

    var textarea = $("<textarea>").addClass("col-8 col-md-10 description").attr("rows","3").val(localStorage.getItem("hour-"+i))
    var btn = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label","save")
    var icon = $("<i>").addClass("fas fa-save").attr("aria-hidden","true")

$(".main").append(rowDiv.append(hourDiv,textarea,btn.append(icon)))
  }
//Cant figure out how to change hours text to display 9am-5pm.

  // local storage.

  $(".saveBtn").on("click",function() {

  

    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
   
    console.log(text, time)
    localStorage.setItem(time, text)
    //Save to local storege


  })

  

  //HINT: What does `this` reference in the click listener
  // function?This is to say: inside of the click event handler,"this" refers to the element that was clicked.
  //When you put "this"inside of:$(), you "wrap" the JavaScript "this" keyword which adds a number of properties and methods.
  
  // How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

 


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
