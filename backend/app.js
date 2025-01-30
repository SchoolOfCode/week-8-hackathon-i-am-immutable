import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors()); 

const PORT = process.env.PORT || 5000;
const REED_API_KEY = process.env.REED_API_KEY;

app.get("/api/jobs", async (req, res) => {
  try {
    const url =
      "https://www.reed.co.uk/api/1.0/search?keywords=developer&locationName=London&distanceFromLocation=10&permanent=true&fullTime=true&minimumSalary=30000&maximumSalary=60000";

    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${REED_API_KEY}:`).toString("base64")}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch jobs from Reed API");
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Error fetching jobs" });
  }
});

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
