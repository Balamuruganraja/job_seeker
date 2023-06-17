import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

const JobVacancyDetails = () => {
  const [vacancy, setVacancy] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("vacancy.json");
        const data = await response.json();
        setVacancy(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <h2>Job Vacancy Details</h2>
      {!vacancy ? (
        <div>Loading...</div>
      ) : (
        vacancy.map((data, index) => (
          <div key={index} className="vacancy-card">
            <div className="flex">
              <img className="icon" src={data.icon} alt="" />
              <div className="padleft20">
                <p className="position">Position: {data.position}</p>
                <p className="company">Company: {data.company}</p>
              </div>
            </div>
            <p className="location">Location: {data.location}</p>
            <p className="description">Description: {data.description}</p>
            <p className="salary">Salary: {data.salary}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default JobVacancyDetails;
