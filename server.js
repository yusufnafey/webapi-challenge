const express = require("express");
const server = express();

let people = [
  {
    id: 1,
    name: "Bob"
  },
  {
    id: 2,
    name: "Joe"
  },
  {
    id: 3,
    name: "Jon"
  }
];

let chores = [
  {
    id: 1,
    description: "Wash dishes",
    assignedTo: 1,
    completed: false
  },
  {
    id: 2,
    description: "Vacuum house",
    assignedTo: 1,
    completed: false
  },
  {
    id: 3,
    description: "Buy groceries",
    assignedTo: 2,
    completed: false
  },
  {
    id: 4,
    description: "Take out trash",
    assignedTo: 2,
    completed: false
  },
  {
    id: 5,
    description: "Wash car",
    assignedTo: 3,
    completed: false
  },
  {
    id: 6,
    description: "Wash laundry",
    assignedTo: 3,
    completed: false
  }
];

module.exports = server;
