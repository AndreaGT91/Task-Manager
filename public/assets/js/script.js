// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".complete-task").on("click", function(event) {
    let id = $(this).data("id");

    // Send the PUT request.
    $.ajax("/api/tasks/" + id, {
      type: "PUT",
    }).then(
      function() {
        console.log("Completed task ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newTask = {
      task_name: $("#task").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/tasks", {
      type: "POST",
      data: newTask
    }).then(
      function() {
        console.log("Created new task");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-task").on("click", function(event) {
    let id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/tasks/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("Deleted task ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
