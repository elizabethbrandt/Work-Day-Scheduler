// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var time = moment();
$("#currentDay").text(time.format("dddd, MMMM Do"));

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
var currentHour = time.hour();

for (var i = 9; i <= 17; i++) {

    // add classes to change color depending on the current time
    if (currentHour === i) {
        $(("#text" + i).toString()).addClass("present");
    } else if (currentHour < i) {
        $(("#text" + i).toString()).addClass("future");
    } else (currentHour > i)
    $(("#text" + i).toString()).addClass("past");

    // WHEN I refresh the page
    // THEN the saved events persist
    // GET eventInput
    var savedInfo = localStorage.getItem("Hour " + i);
    $("#text" + i).text(savedInfo);

}

// WHEN I click the save button for that timeblock
// ADD .on("click")
$(".container").on("click", "button", saveEventInfo);
function saveEventInfo(event) {
    // THEN the text for that event is saved in local storage
    event.preventDefault();
    // Variable to get the hour from the same line that the button was clicked
    var hourClicked = $(event.target).data("hour");
    // Variable to get the text input from the same line where the button was clicked
    var eventInput = $(event.target).prev().val();
    // SET eventInput
    localStorage.setItem("Hour " + hourClicked, eventInput);
}