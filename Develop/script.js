$(function () {

  $(".saveBtn").on("click", function() {
    // Get the parent time-block element's ID
    var timeBlockId = $(this).closest(".time-block").attr("id");

    // Get the user input from the textarea within the clicked time-block
    var userInput = $(this).siblings(".description").val();

    // Save the user input in local storage with the time-block ID as the key
    localStorage.setItem(timeBlockId, userInput);
  });

  // Retrieve and set stored descriptions on page load
  $(".time-block").each(function() {
    var timeBlockId = $(this).attr("id");
    var storedDescription = localStorage.getItem(timeBlockId);

    if (storedDescription) {
      $(this).find(".description").val(storedDescription);
    }
  });


  var currentHour = dayjs().hour();

  // Loop through each time block
  $(".time-block").each(function() {
    // Get the hour from the time block's id
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // Apply the appropriate class based on the comparison
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });


  $(".time-block").each(function() {
    // Get the time block's ID
    var timeBlockId = $(this).attr("id");

    // Retrieve the user input from localStorage using the time block's ID as the key
    var savedInput = localStorage.getItem(timeBlockId);

    // Set the value of the corresponding textarea element
    $(this).find(".description").val(savedInput);
  });

  // TODO: Add code to display the current date in the header of the page.
  $(".time-block").each(function() {
    // Get the time block's ID
    var timeBlockId = $(this).attr("id");

    // Retrieve the user input from localStorage using the time block's ID as the key
    var savedInput = localStorage.getItem(timeBlockId);

    // Set the value of the corresponding textarea element
    $(this).find(".description").val(savedInput);
  });

  // TODO: Add code to display the current date in the header of the page.
  var currentDateEl = $("#currentDay");

  function updateDateTime() {
  var myDate = dayjs();
  currentDateEl.text( myDate.format('dddd , MMMM DD HH:mm:ss'));
}
updateDateTime();
setInterval(updateDateTime, 1000)
});
