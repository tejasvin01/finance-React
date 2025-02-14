const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sql = require("mysql2");
const cors = require("cors");
const port = process.env.PORT || 4000;
app.use(cors()); 

app.use(bodyParser.json());
const connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "express",
});
connection.connect(function (err) {
  if (err) {
    console.log("Connection error: ", err);
  } else {
    console.log("connected");
  }
});

app.get("/home", async (req, res) => {
  connection.query("SELECT * FROM users", (err, results) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    res.json(results);
  });
});
app.get("/detail", async (req, res) => {
  connection.query("select * from users", (err, results) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json(results);
  });
});
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  connection.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(results);
  });
});

app.post("/upload", async (req, res) => {
  const {
    id,
    ExpenseTitle,
    Amount,
    ExpenseCategory,
    DateofExpense,
    VendorName,
    PaymentMode,
    InvoiceNumber,
    RecurringExpense,
    BudgetCategory,
    Note,
  } = req.body;
  connection.query(
    "INSERT INTO users(id, ExpenseTitle, Amount, ExpenseCategory, DateofExpense, VendorName, PaymentMode, InvoiceNumber, RecurringExpense, BudgetCategory, Note) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
    [
      id,
      ExpenseTitle,
      Amount,
      ExpenseCategory,
      DateofExpense,
      VendorName,
      PaymentMode,
      InvoiceNumber,
      RecurringExpense,
      BudgetCategory,
      Note,
    ],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.json(results);
    }
  );
});
app.get("/editinfo/:id", async (req, res) => {
  const { id } = req.params;
  connection.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    
    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ data: results[0] });
  });
});

app.put("/editinfo/:id", async (req, res) => {
  const { id } = req.params;
  const {
    ExpenseTitle,
    Amount,
    ExpenseCategory,
    VendorName,
    PaymentMode,
    InvoiceNumber,
    RecurringExpense,
    BudgetCategory,
    Note,
  } = req.body;
  console.log("Received update request for ID:", id);
  console.log("Received Data:", req.body);
  connection.query(
    "update users SET ExpenseTitle = ?, Amount = ?, ExpenseCategory = ?,  VendorName = ?, PaymentMode = ?, InvoiceNumber = ?, RecurringExpense = ?, BudgetCategory = ?, Note = ? WHERE id = ?",
    [
      ExpenseTitle,
      Amount,
      ExpenseCategory,
      VendorName,
      PaymentMode,
      InvoiceNumber,
      RecurringExpense,
      BudgetCategory,
      Note,
      id,
    ],
    (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ message: err.message });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "User not found" });
    }
      res.json({ success: true, message: "User updated successfully" });
    }
  );
});
app.delete("/detail/:id", async (req, res) => {
  const { id } = req.params;
  connection.query("DELETE FROM users WHERE id = ?", [id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ success: true, message: "User deleted successfully" });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
