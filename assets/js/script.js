// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var time = moment();
$("#currentDay").text(time.format("dddd, MMMM Do"));

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
var currentHour = time.hour();

for (var i = 9; i <= 22; i++) {

    if (currentHour === i) {
        $(("#text" + i).toString()).addClass("present");
    } else if (currentHour < i) {
        $(("#text" + i).toString()).addClass("future");
    } else (currentHour > i)
        $(("#text" + i).toString()).addClass("past");
}

console.log(currentHour);
// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
    // ADD .on("click")
var saveButton = $("saveBtn");
var eventInput = $("#text9");

console.log(eventInput);

saveButton.on("click", function () {
// THEN the text for that event is saved in local storage
    // SET eventInput
    for (var i = 9; i <= 20; i++) {
        localStorage.setItem(eventInput.val());
    }
})


// WHEN I refresh the page
// THEN the saved events persist
    // GET eventInput


