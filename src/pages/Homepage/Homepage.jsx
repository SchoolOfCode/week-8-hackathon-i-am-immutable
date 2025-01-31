import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import JobsContainer from "../../components/JobsContainer/JobsContainer.jsx";

function Homepage() {
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

  if (jobs.length === 0) {
    return <p>Loading jobs...</p>;
  }
  return (
    <>
      <h1>Jobs</h1>
      <SearchBar />
      <JobsContainer jobs={jobs} />
    </>
  );
}

export default Homepage;
