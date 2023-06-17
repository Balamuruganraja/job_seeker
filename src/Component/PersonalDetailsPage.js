import React from "react";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";

const PersonalDetailsPage = () => {
  const candidate = useSelector((state) => state.loginCanDetails);

  return (
    <div className="personal-details-page">
      <NavBar />
      <h2>Personal Details</h2>
      <p>Name: {candidate && candidate.name}</p>
      <p>Email: {candidate && candidate.email}</p>
      <p>DOB: {candidate && candidate.dob}</p>
      <p>Contact: {candidate && candidate.contactNumber}</p>
      <p>WhatsApp: {candidate && candidate.whatsappNumber}</p>
      <p>Qualification: {candidate && candidate.qualification}</p>
      <p>Experience: {candidate && candidate.experience} year</p>
    </div>
  );
};

export default PersonalDetailsPage;
