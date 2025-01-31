import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import JobsContainer from "../../components/JobsContainer/JobsContainer.jsx";

function Homepage() {
  const [jobs, setJobs] = useState([]);
  const api_key = import.meta.env.VITE_API_KEY;

  async function fetchData(searchParams = {}) {
    try {
      const query = new URLSearchParams(searchParams).toString();
      const response = await fetch(`http://localhost:4000/api/jobs?${query}`, {
        headers: { authorization: `Basic ${btoa(api_key + ":")}` },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setJobs(data.results || []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  }

  useEffect(() => {
    fetchData(); // Fetch initial jobs
  }, [api_key]);

  return (
    <>
      <h1>Homepage</h1>
      <SearchBar onSearch={fetchData} />
      <JobsContainer jobs={jobs} />
    </>
  );
}

export default Homepage;
