// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var time = moment();
$("#currentDay").text(time.format("dddd, MMMM Do"));

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
var scheduledHour = [9, 10, 11, 12, 13, 15, 16, 17];

for (var i = 0; i < scheduledHour.length; i++) {
    
    var currentHour = time.hour();

    if (currentHour === scheduledHour[i]) {
        $("textarea").addClass("present")
    } else if (currentHour < scheduledHour[i]) {
        $("textarea").addClass("future")
    } else (currentHour > scheduledHour[i])
        $("textarea").addClass("past")
}
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
