const orm = require("../config/orm");

const task = {
  all: function(cb) {
    orm.selectAll("tasks", function(res) { cb(res); });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.insertOne("tasks", cols, vals, function(res) { cb(res); });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("tasks", objColVals, condition, function(res) { cb(res); });
  },
  delete: function(condition, cb) {
    orm.deleteOne("tasks", condition, function(res) { cb(res); });
  }
};

// Export the database functions for the controller (tasks_controller.js).
module.exports = task;