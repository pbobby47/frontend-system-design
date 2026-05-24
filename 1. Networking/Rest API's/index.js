import express from "express";

const app = express();

// Middlewares
app.use(express.json());

app.all("/", (req, res) => {
  console.log("Request >", req);
  console.log("Response >", res);

  res.send("I am Bobby!!!");
});

const todos = [
  {
    id: "1",
    title: "Task 1",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    completed: false,
  },
  {
    id: "3",
    title: "Task 3",
    completed: false,
  },
];

// ! READ
app.get("/api/todos", (req, res) => {
  res.send({
    data: todos,
  });
});

// ! CREATE
app.post("/api/todos", (req, res) => {
  let newTodo = req.body;

  todos.push(newTodo);

  res.json({
    message: "New Todo Added",
  });
});

// ! UPDATE
app.put("/api/todos/:id", (req, res) => {
  let updatedTodo = req.body;

  let todoIndex = todos.findIndex(val => val.id == req.params.id);

  if (todoIndex !== -1) {
    todos[todoIndex] = {
      id: req.params.id,
      ...updatedTodo,
    };
  }

  res.json({
    message: `${req.params.id} Todo Updated Successfully`,
  });
});

// ! DELETE
app.delete("/api/todos/:id", (req, res) => {
  let todoId = +req.params.id;

  let todoIndex = todos.findIndex(val => val.id == todoId);

  if (todoId !== 1) {
    todos.splice(todoIndex, 1);
  }

  res.json({
    message: `${req.params.id} Todo Deleted Successfully`,
  });
});

const PORT = 5111;
app.listen(PORT, () => {
  console.log("Server is running on the port ", PORT);
  console.log(`127.0.0.1:${PORT}`);
});
