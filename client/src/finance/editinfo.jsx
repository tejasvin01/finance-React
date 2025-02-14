import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditInfo = () => {
  const { id } = useParams();
const [form, setForm] = useState({
    ExpenseTitle: "",
    Amount: "",
    ExpenseCategory: "",
    VendorName: "",
    PaymentMode: "",
    InvoiceNumber: "",
    RecurringExpense: "",
    BudgetCategory: "",
    Note: "",
});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://finance-react.onrender.com/editinfo/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((res) => {
        if (res.data) {
          setForm(res.data);
          console.log(res.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = new Date(form.DateofExpense).toISOString().split("T")[0];
    if (!form.ExpenseTitle || !form.Amount) {
      alert("Please fill in all required fields.");
      return;
    }
    fetch(`https://finance-react.onrender.com/editinfo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => {

        return response.json();
      })
      .then((res) => {
        if (res.success) {
          alert("Data updated successfully!");
        } else {
          alert("Failed to update data.");
        }
        window.location.href = "/home";
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        alert("An error occurred while updating data.");
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

return (
    <div className="container mt-3">
        <h1 className="text-center mb-4">Finance Form</h1>
        <div className="cardd p-4 ">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="ExpenseTitle" className="form-label">
                        Expense Title:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="ExpenseTitle"
                        value={form.ExpenseTitle}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="Amount" className="form-label">
                        Amount:
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="Amount"
                        value={form.Amount}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="ExpenseCategory" className="form-label">
                        Expense Category:
                    </label>
                    <select
                        id="ExpenseCategory"
                        className="form-control"
                        value={form.ExpenseCategory}
                        onChange={handleChange}
                    >
                        <option value="" disabled>
                            Select an expense category
                        </option>
                        <option value="transportation">Transportation</option>
                        <option value="food">Food</option>
                        <option value="utilities">Utilities</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="education">Education</option>
                    </select>
                </div>

                

                <div className="mb-3">
                    <label htmlFor="VendorName" className="form-label">
                        Vendor Name:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="VendorName"
                        value={form.VendorName}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="PaymentMode" className="form-label">
                        Payment Mode:
                    </label>
                    <select
                        id="PaymentMode"
                        className="form-control"
                        value={form.PaymentMode}
                        onChange={handleChange}
                    >
                        <option value="" disabled>
                            Select a payment mode
                        </option>
                        <option value="cash">Cash</option>
                        <option value="credit-card">Credit Card</option>
                        <option value="debit-card">Debit Card</option>
                        <option value="online-wallet">Online</option>
                        <option value="bank-transfer">Bank Transfer</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="InvoiceNumber" className="form-label">
                        Invoice Number:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="InvoiceNumber"
                        value={form.InvoiceNumber}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="RecurringExpense" className="form-label">
                        Recurring Expense:
                    </label>
                    <select
                        id="RecurringExpense"
                        className="form-control"
                        value={form.RecurringExpense}
                        onChange={handleChange}
                    >
                        <option value="" disabled>
                            Select
                        </option>
                        <option value="NO">No</option>
                        <option value="YES">Yes</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="BudgetCategory" className="form-label">
                        Budget Category:
                    </label>
                    <select
                        id="BudgetCategory"
                        className="form-control"
                        value={form.BudgetCategory}
                        onChange={handleChange}
                    >
                        <option value="" disabled>
                            Select a budget category
                        </option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="veryhigh">Very High</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="Note" className="form-label">
                        Notes:
                    </label>
                    <textarea
                        id="Note"
                        className="form-control"
                        value={form.Note}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <br />

                <div className="text-center">
                    <button className="bttn" type="submit">
                        Update
                    </button>
                </div>
                <br />
                <br />
            </form>
        </div>
    </div>
);
};

export default EditInfo;
