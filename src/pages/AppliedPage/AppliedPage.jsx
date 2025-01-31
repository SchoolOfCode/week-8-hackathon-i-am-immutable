// import Navbar from "../../components/NavBar/NavBar.jsx";
import styles from "./AppliedPage.module.css";
import React, { useReducer } from "react";

// Define possible states
const initialState = "NEW"; // Default state

// Reducer function
const jobReducer = (state, action) => {
  switch (action.type) {
    case "AWAITING_INTERVIEW":
      return "AWAITING_INTERVIEW";
    case "REJECTED":
      return "REJECTED";
    case "APPLIED":
      return "APPLIED";
      case "NEW":
      return "NEW";
        case "VIEWED":
            return "VIEWED";
    default:
      return state;
  }
};

function AppliedPage() {
    const [status, dispatch] = useReducer(jobReducer, initialState);
  return (
    <>

<div className="card">
      
    </div>

      <h1>Applied for Jobs</h1>
      <div className={styles.card}>
      <h2>Junior Software Developer</h2>
      <p>LMAX Group</p>
      <p>London</p>
      <p className={styles.salary}>Salary: £40,000</p>
      <p className={styles.date}>30/01/2025</p>

      <button onClick={() => dispatch({ type: "NEW" })}>
        New
      </button>

      <button onClick={() => dispatch({ type: "VIEWED" })}>
        Viewed
      </button>

      <button onClick={() => dispatch({ type: "AWAITING_INTERVIEW" })}>
        Awaiting Interview
      </button>
      
      <button onClick={() => dispatch({ type: "REJECTED" })}>
        Rejected
      </button>

      <button onClick={() => dispatch({ type: "APPLIED" })}>
        Applied
      </button>
      </div>
      {/* <JobCard /> */}
    </>
  );
}

export default AppliedPage;
