import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./detail.css";

const Detail = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://6756aaecc0a427baf949c2ed.mockapi.io/financedetails")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Finance Table</h1>
      <table className="finance-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Expense Title</th>
            <th>Amount</th>
            <th>Expense Category</th>
            <th>Date of Expense</th>
            <th>Vendor Name</th>
            <th>Payment Mode</th>
            <th>Invoice Number</th>
            <th>Recurring Expense</th>
            <th>Budget Category</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.ExpenseTitle}</td>
              <td>{item.Amount}</td>
              <td>{item.ExpenseCategory}</td>
              <td>{item.DateofExpense}</td>
              <td>{item.VendorName}</td>
              <td>{item.PaymentMode}</td>
              <td>{item.InvoiceNumber}</td>
              <td>{item.RecurringExpense}</td>
              <td>{item.BudgetCategory}</td>
              <td>{item.Note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
