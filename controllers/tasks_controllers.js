const express = require("express");
const router = express.Router();

// Import the model (task.js) to use its database functions.
const task = require("../models/task.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  task.all(function(data) {
    let hbsObject = {
      tasks: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/tasks", function(req, res) {
  task.create(["task_name"], [req.body.task_name],
    function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
  });
});

router.put("/api/tasks/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  task.update({ completed: true }, condition,
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } 
      else {
        res.status(200).end();
      };
    }
  );
});

router.delete("/api/tasks/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  task.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } 
    else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;

