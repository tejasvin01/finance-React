import React, { useEffect, useState } from "react";
import axios from "axios";
// import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import { useNavigate } from "react-router-dom";
const API_URL = "http://localhost:5000/home";
const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Finance Details</h1>
      {data.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="card"
              style={{ position: "relative", width: "18rem", margin: "10px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{ width: "100%", height: "50px" }}
              >
                <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
              </svg>
              <div className="card__content" style={{ padding: "10px" }}>
                <p
                  className="card__title"
                  style={{ fontSize: "2.5rem", fontWeight: "bold" }}
                >
                  {item.ExpenseTitle}
                </p>
                <p className="card__description" style={{ fontSize: "1rem" }}>
                  Date: {new Date(item.DateofExpense).toLocaleDateString()}
                </p>
                <br />
                <button
                  onClick={() => item.id && navigate(`/${item.id}`)}
                  className="btnn"
                >
                  View More
                </button>
               
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="loader"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div data-glitch="Loading..." className="glitch">
            Loading...
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
