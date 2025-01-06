import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FinanceInfo = () => {
  const { id } = useParams();
  const [financeDetails, setFinanceDetails] = useState(null);

  useEffect(() => {
    fetch(`https://6756aaecc0a427baf949c2ed.mockapi.io/financedetails/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setFinanceDetails(data))
      .catch((error) =>
        console.error("Error fetching finance details:", error)
      );
  }, [id]);

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
          {Object.entries(financeDetails).map(([key, value]) => (
            <p key={key} style={styles.detailText}>
              <strong>{formatLabel(key)}:</strong> {value}
            </p>
          ))}
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
