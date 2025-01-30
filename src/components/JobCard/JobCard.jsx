/* eslint-disable react/prop-types */
import { useState } from "react";

function JobCard({ job }) {
  const [showJob, setShowJob] = useState(false);
  function toggleJob() {
    setShowJob(!showJob);
  }
  return (
    <article onClick={toggleJob}>
      {!showJob ? (
        <>
          {/* <img alt="company-logo" src={companyLogo} width={100} /> */}
          <li key={job.jobId}>
            <h2>{job.jobTitle}</h2>
            <h3>{job.employerName}</h3>
            <p>{job.locationName}</p>
            <p>
              Salary: {job.currency}
              {job.minimumSalary} - {job.currency}
              {job.maximumSalary}
            </p>
            <p>{job.expirationDate}</p>
          </li>
        </>
      ) : (
        <>
          <h2>{job.jobTitle}</h2>
          <p>{job.jobDescription}</p>
          <a href={job.jobUrl} target="_blank" rel="noopener noreferrer">
            View job
          </a>
        </>
      )}
    </article>
  );
}
export default JobCard;
