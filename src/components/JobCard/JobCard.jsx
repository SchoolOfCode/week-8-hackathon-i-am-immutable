import JobCardStyles from "./JobCard.module.css";
import { useState } from "react";

function JobCard({ JobCard }) {
  const [showJob, setShowJob] = useState(false);
  function toggleJob() {
    setShowJob(!showJob);
  }
  return (
    <article
      className={`
        ${JobCardStyles.jobcard}
        ${showJob ? JobCardStyles.active : ""}
      `}
      onClick={toggleJob}
    >
      {!showJob ? (
        <>
          <img alt="company-logo" src={companyLogo} width={100} />
          <h3>{employerName}</h3>
          <h4>{jobPosition}</h4>
          <h4>{companyWebsite}</h4>
          <p>{jobDescription}</p>
        </>
      ) : (
        <>
          <h2>{jobPosition}</h2>
          <p>{jobDescription}</p>
        </>
      )}
    </article>
  );
}
export default JobCard;
