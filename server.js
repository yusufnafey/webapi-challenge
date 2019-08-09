const express = require("express");
const server = express();

server.use(express.json());

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

// server.get("/", (req, res) => {
//   res.send("testing");
// });

server.get("/chores", (req, res) => {
  res.status(200).json(chores);
});

server.get("/people/:id/chores", (req, res) => {
  const id = req.params.id;

  if (!id) {
    res
      .status(404)
      .json({ message: "The person with the specified ID does not exist." });
  } else if (!people.chores) {
    res.send([]);
  } else {
    res.status(200).json(chores.description);
  }
});

server.post("/chores", (req, res) => {
  const chore = req.body;

  if (!chore.description) {
    res
      .status(400)
      .json({ message: "Please provie a description for the chore." });
  } else {
    chores.push(chore);
    res.status(200).json(chore);
  }
});

server.delete("/chores/:id", (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(404).json({ message: "There was an error deleting the chore." });
  } else {
    chores.splice(id, 1);
    res.status(201).json(); // =======
  }
});

module.exports = server;
