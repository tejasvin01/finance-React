import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./detail.css";
import "./editinfo";
const api_url = "http://localhost:5000/detail";

const Detail = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => setData(data.items || data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  const [refresh, setRefresh] = useState(false);
  const handleDelete = (id) => {
    fetch(`${api_url}/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Deleted: ", data);
        setRefresh((prev) => !prev);
        window.location.reload(); // Reload the page after deletion
      })
      .catch((error) => console.error("Error deleting data: ", error));
  };
  return (
    <div className="container">
      <h1 className="text-center my-4">Finance Table</h1>
      <table className="finance-table">
        <thead>
          <tr>
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
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
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
              <td>
                <a href={`/editinfo/${item.id}`} className="btn btn-primary">
                  Edit
                </a>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
