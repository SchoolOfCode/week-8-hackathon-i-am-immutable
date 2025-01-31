import styles from "./AppliedPage.module.css";
import React, { useReducer } from "react";

//Set initial state
const initialState = "NEW";

//Reducer Function
const jobReducer = (state, action) => {
  switch (action) {
    case "NEW":
      return "NEW";
    case "REJECTED":
      return "REJECTED";
    case "APPLIED":
      return "APPLIED";
      case "AWAITING_INTERVIEW":
      return "AWAITING_INTERVIEW";
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

      <button onClick={() => dispatch("NEW")}>
        New
      </button>

      <button onClick={() => dispatch("VIEWED")}>
        Viewed
      </button>

      <button onClick={() => dispatch("AWAITING_INTERVIEW" )}>
        Awaiting Interview
      </button>
      
      <button onClick={() => dispatch("REJECTED" )}>
        Rejected
      </button>

      <button onClick={() => dispatch( "APPLIED" )}>
        Applied
      </button>
      </div>
      {/* <JobCard /> */}
    </>
  );
}

export default AppliedPage;
