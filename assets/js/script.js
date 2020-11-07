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
}

console.log(currentHour);

// WHEN I click the save button for that timeblock
    // ADD .on("click")

$("").on("click", function (event) {
// THEN the text for that event is saved in local storage
    event.preventDefault();
    // SET eventInput
    localStorage.setItem(eventInput.val());
})

// WHEN I refresh the page
// THEN the saved events persist
    // GET eventInput

// GET the current hour from the ‘event.target’ to reference the click button to trigger & fire off on the hour.
// > var theClickedHour = $(event.target).data(“hour”)
// > var theClickedHour $(even.target).parent().attr(“id”)
// > var value = $(event.target).prev().val();
// localStorage.setItem(“scheduler-hour-“+ theClickedHour, value);
