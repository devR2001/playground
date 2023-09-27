const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

let todos = [];

const db = new sqlite3.Database("users.db", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to the users database.");
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT,
        lastName TEXT,
        age INTEGER,
        birth DATE,
        username TEXT,
        password TEXT
      )
    `);
  }
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const updatedTodo = req.body;
  todos = todos.map((todo) => (todo.id === todoId ? updatedTodo : todo));
  res.json(updatedTodo);
});

app.delete("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  todos = todos.filter((todo) => todo.id !== todoId);
  res.json({ message: "Todo deleted successfully" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.get("SELECT * FROM users WHERE username = ?", [username], (err, user) => {
    if (err) {
      console.error("Error retrieving user:", err.message);
      res.json({ success: false });
    } else {
      if (user && user.password === password) {
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    }
  });
});

app.post("/register-user", (req, res) => {
  const newUser = req.body;

  db.run(
    "INSERT INTO users (firstName, lastName, age, birth, username, password) VALUES (?, ?, ?, ?, ?, ?)",
    [
      newUser.firstName,
      newUser.lastName,
      newUser.age,
      newUser.birth,
      newUser.username,
      newUser.password,
    ],
    function (err) {
      if (err) {
        console.error("Error registering user:", err.message);
        res.json({ success: false });
      } else {
        console.log("User registered successfully");
        res.json({ success: true, user: newUser });
      }
    }
  );
});

app.get("/users", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
      console.error("Error retrieving users:", err.message);
      res.json([]);
    } else {
      res.json(rows);
    }
  });
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  db.run("DELETE FROM users WHERE id = ?", [userId], function (err) {
    if (err) {
      console.error("Error deleting user:", err.message);
      res.status(500).json({ success: false, error: err.message });
    } else {
      console.log("User deleted successfully");
      res.json({ success: true });
    }
  });
});

app.get("/quotes", (req, res) => {
  const filePath = path.join(__dirname, "quotes.json"); // Pfad zur quotes.json-Datei
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
