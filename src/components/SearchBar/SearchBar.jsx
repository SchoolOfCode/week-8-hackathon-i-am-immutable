import { useState, useEffect } from "react";

function SearchBar() {
  const [jobs, setJobs] = useState([]);
  const api_key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:4000/api/jobs", {
          headers: { authorization: `Basic ${btoa(api_key + ":")}` },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setJobs(data.results); // Adjust based on API response structure
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }

    fetchData();
  }, [api_key]); // Only runs once when component mounts

  return (
    <>
      <form>
        <input type="text" placeholder="Search by keyword" />
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="Salary range" />
      </form>

      {/* Display fetched job data */}
      <ul>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <li key={job.jobId}>
              <h3>{job.jobTitle}</h3>
              <p>{job.locationName}</p>
              <p>Salary: {job.minimumSalary} - {job.maximumSalary}</p>
              <a href={job.jobUrl} target="_blank" rel="noopener noreferrer">
                View Job
              </a>
            </li>
          ))
        ) : (
          <p>Loading jobs...</p>
        )}
      </ul>
    </>
  );
}

export default SearchBar;
