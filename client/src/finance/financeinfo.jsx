import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const FinanceInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [financeDetails, setFinanceDetails] = useState(null);
  const [error, setError] = useState(null); // Define the error state
  const api_url = "https://finance-react.onrender.com";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${api_url}/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        setFinanceDetails(data);
      } catch (error) {
        setError(error.message); // Set the error state
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return (
      <div style={styles.loadingContainer}>
        <p style={styles.loadingText}>Error: {error}</p>
      </div>
    );
  }

  if (!financeDetails) {
    return (
      <div style={styles.loadingContainer}>
        <p style={styles.loadingText}>Loading...</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Finance Detail</h1>
      <div style={styles.row}>
        <div style={styles.imageContainer}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCJJzPF2tnrh4u3PQEkc8O1uOzxR9H4g7Oyw&s"
            alt="Finance"
            style={styles.image}
          />
        </div>
        <div style={styles.detailsContainer}>
          {Object.entries(financeDetails[0]).map(([key, value]) => (
            <p key={key} style={styles.detailText}>
              <strong>{formatLabel(key)}:</strong> {String(value)}
            </p>
          ))}
          <button
            style={{ ...styles.button, backgroundColor: 'blue', color: 'white' }}
            onClick={() => navigate(`/editinfo/${id}`)}
          >
            Edit Details
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function to format labels
const formatLabel = (label) =>
  label.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());

const styles = {
  container: {
    padding: "30px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f4f4f9",
    color: "#333",
    maxWidth: "1200px",
    margin: "0 auto",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    color: "#4a90e2",
    marginBottom: "20px",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  imageContainer: {
    flex: "1 1 50%",
    textAlign: "center",
    marginBottom: "20px",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
 button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "10px",
  },
  detailsContainer: {
    flex: "1 1 50%",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  detailText: {
    fontSize: "16px",
    marginBottom: "10px",
    lineHeight: "1.6",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f9",
  },
  loadingText: {
    fontSize: "20px",
    color: "#666",
  },
};

export default FinanceInfo;
