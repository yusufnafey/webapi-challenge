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

const choreId = 1;

// function insert(chore) {
//   return;
// }

// function remove(id) {
//   return;
// }

server.get("/", (req, res) => {
  res.send({ hellO: "how are you?" });
});

// server.get("/chores", (req, res) => {
//   const completed = req.query.completed.id;
//   console.log(completed);

//   if (completed) {
//     const filter = completed === "true" ? true : false;
//     if (compiled === "true") {
//       filter = true;
//     }
//   } else {
//   }

//   res.status(200).json(chores);
// });

// server.get("chores/:id", (req, res) => {
//   // const id = req.params.id

//   // chores.get(id)
//   // .then(chore => {
//   //     if (chore) {
//   //         res.status(200).json(chore)
//   //     } else {
//   //         res.status(404).json({ message: "The chore with the specified ID does not exist." })
//   //     }
//   // })
//   // .catch(error => {
//   //     res.status(500).json({ error: "The chores information could not be retreived "})
//   // })

//   const id = req.params.id;

//   const chore = chores.find(chore => chore.id === Number(id));

//   res.status(201).json(chores);

//   //   const id = req.params.id;

//   //   if (!id) {
//   //     res
//   //       .status(404)
//   //       .json({ message: "The person with the specified ID does not exist." });
//   //   } else if (!people.chores) {
//   //     res.send([]);
//   //   } else {
//   //     res.status(200).json(chores.description);
//   //   }
// });

// server.post("/chores", (req, res) => {
//   //   const chore = req.body;

//   //   if (!chore.description) {
//   //     res
//   //       .status(400)
//   //       .json({ message: "Please provide a description for the chore." });
//   //   } else {
//   //     chores
//   //       .insert(chore)
//   //       .then(chore => {
//   //         res.status(201).json(chore);
//   //       })
//   //       .catch(error => {
//   //         res
//   //           .status(500)
//   //           .json({ message: "There was an error adding the chore." });
//   //       });
//   //   }

//   let chore = req.body;

//   chore.id = choreId++;

//   chores.push(chore);

//   res.status(201).json(chores);

//   //   if (!chore.description) {
//   //     res
//   //       .status(400)
//   //       .json({ message: "Please provie a description for the chore." });
//   //   } else {
//   //     chores.push(chore);
//   //     res.status(200).json(chore);
//   //   }
// });

// server.delete("/chores/:id", (req, res) => {
//   //   const id = req.params.id;

//   //   chores
//   //     .remove(id)
//   //     .then(chore => {
//   //       if (chore) {
//   //         res.status(200).json(chore);
//   //       } else {
//   //         res.status(404).json({
//   //           message: "The chore with the specified ID does not exist."
//   //         });
//   //       }
//   //     })
//   //     .catch(error => {
//   //       res.status(500).json({ message: "The chore could not be removed." });
//   //     });

//   const id = req.params.id;

//   chores = chores.filter(chore => chore.id !== Number(id));

//   //   const id = req.params.id;

//   //   if (!id) {
//   //     res.status(404).json({ message: "There was an error deleting the chore." });
//   //   } else {
//   //     chores.splice(id, 1);
//   //     res.status(201).json(); // =======
//   //   }
// });

module.exports = server;
