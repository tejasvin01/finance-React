import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./upload.css";

const Upload = () => {
    const [formData, setFormData] = useState({
        ExpenseTitle: "",
        Amount: "",
        ExpenseCategory: "",
        DateofExpense: "",
        VendorName: "",
        PaymentMode: "",
        InvoiceNumber: "",
        RecurringExpense: "",
        BudgetCategory: "",
        Note: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch("https://6756aaecc0a427baf949c2ed.mockapi.io/financedetails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert("Information is Stored");
            } else {
                alert("Something went wrong while storing the information.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong.");
        }
    };

    return (
        <div className="container mt-3">
            <h1 className="text-center mb-4">Finance Form</h1>
            <div className="cardd p-4 ">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                        <label htmlFor="ExpenseTitle" className="form-label">Expense Title:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="ExpenseTitle"
                            placeholder="Enter the expense title"
                            value={formData.ExpenseTitle}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Amount" className="form-label">Amount:</label>
                        <input
                            type="number"
                            className="form-control"
                            id="Amount"
                            placeholder="Enter the amount"
                            value={formData.Amount}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="ExpenseCategory" className="form-label">Expense Category:</label>
                        <select
                            id="ExpenseCategory"
                            className="form-control"
                            value={formData.ExpenseCategory}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select an expense category</option>
                            <option value="transportation">Transportation</option>
                            <option value="food">Food</option>
                            <option value="utilities">Utilities</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="education">Education</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="DateofExpense" className="form-label">Date of Expense:</label>
                        <input
                            type="date"
                            className="form-control"
                            id="DateofExpense"
                            value={formData.DateofExpense}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="VendorName" className="form-label">Vendor Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="VendorName"
                            value={formData.VendorName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="PaymentMode" className="form-label">Payment Mode:</label>
                        <select
                            id="PaymentMode"
                            className="form-control"
                            value={formData.PaymentMode}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select a payment mode</option>
                            <option value="cash">Cash</option>
                            <option value="credit-card">Credit Card</option>
                            <option value="debit-card">Debit Card</option>
                            <option value="online-wallet">Online</option>
                            <option value="bank-transfer">Bank Transfer</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="InvoiceNumber" className="form-label">Invoice Number:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="InvoiceNumber"
                            placeholder="Enter the invoice number"
                            value={formData.InvoiceNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="RecurringExpense" className="form-label">Recurring Expense:</label>
                        <select
                            id="RecurringExpense"
                            className="form-control"
                            value={formData.RecurringExpense}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select</option>
                            <option value="NO">No</option>
                            <option value="YES">Yes</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="BudgetCategory" className="form-label">Budget Category:</label>
                        <select
                            id="BudgetCategory"
                            className="form-control"
                            value={formData.BudgetCategory}
                            onChange={handleChange}
                            
                            required
                        >
                            <option value="" disabled>Select a budget category</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="veryhigh">Very High</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Note" className="form-label">Notes:</label>
                        <textarea
                            id="Note"
                            className="form-control"
                            placeholder="Enter notes"
                            value={formData.Note}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <br />

                    <div className="text-center">
                        <button className="bttn" onClick={handleSubmit}>Submit</button>
                    </div>
                    <br /><br />
                </form>
            </div>
        </div>
    );
};

export default Upload;
