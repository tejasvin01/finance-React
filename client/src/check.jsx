import React, { useState, useEffect } from "react";
import axios from "axios";

const EditDetails = ({ id }) => {
  console.log("Received ID:", id); // ✅ Debugging

  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/${id}/${id}`);
        console.log("Fetched Data:", response.data);

        if (Array.isArray(response.data) && response.data.length > 0) {
          setFormData(response.data[0]); // ✅ Extract first object from array
        } else {
          console.error("Error: API returned an empty array");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading || !formData) {
    return <p>Loading...</p>;
  }

  return (
    <form>
      <div>
        <label>Expense Title:</label>
        <input type="text" name="ExpenseTitle" value={formData.ExpenseTitle || ""} readOnly />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" name="Amount" value={formData.Amount || ""} readOnly />
      </div>
    </form>
  );
};

export default EditDetails;
