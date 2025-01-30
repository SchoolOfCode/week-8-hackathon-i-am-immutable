/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import JobCard from "../JobCard/JobCard.jsx";

function JobsContainer({ jobs }) {
  {
    /* Display fetched job data */
  }
  return (
    <>
      {jobs.map((job) => (
        <JobCard job={job} />
        // <li key={job.jobId}>
        //   <h3>{job.jobTitle}</h3>
        //   <p>{job.locationName}</p>
        //   <p>
        //     Salary: {job.minimumSalary} - {job.maximumSalary}
        //   </p>
        //   <a href={job.jobUrl} target="_blank" rel="noopener noreferrer">
        //     View Job
        //   </a>
        // </li>
      ))}
    </>
  );
}

export default JobsContainer;
