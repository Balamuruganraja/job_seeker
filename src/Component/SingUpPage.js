import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCandidate } from "../Redux/Action";
const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPass] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = {};
    if (name.trim() === "") {
      validationErrors.name = "Name is required";
    }
    if (email.trim() === "") {
      validationErrors.email = "Email is required";
    }
    if (password.trim() === "") {
      validationErrors.password = "Password is required";
    }
    if (dob.trim() === "") {
      validationErrors.dob = "DOB is required";
    }
    if (contactNumber.trim() === "") {
      validationErrors.contactNumber = "Contact Number is required";
    }
    if (whatsappNumber.trim() === "") {
      validationErrors.whatsappNumber = "WhatsApp Number is required";
    }
    if (qualification.trim() === "") {
      validationErrors.qualification = "Qualification is required";
    }
    if (experience.trim() === "") {
      validationErrors.experience = "Experience is required";
    }
    if (!resume) {
      validationErrors.resume = "Resume is required";
    }

    // Check if there are any errors
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Create a new candidate object
    const newCandidate = {
      name,
      email,
      dob,
      password,
      contactNumber,
      whatsappNumber,
      qualification,
      experience,
      resume
    };

    // Dispatch an action to add the candidate to the Redux store
    dispatch(addCandidate(newCandidate));

    // Simulating sign-up logic with basic validation for demonstration purposes
    // Successful sign-up
    console.log("Sign-up successful!");

    // Redirect to the welcome page
    history.push("/job-vacancies");
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <label htmlFor="dob">DOB:</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        {errors.dob && <p className="error">{errors.dob}</p>}

        <label htmlFor="contactNumber">Contact Number:</label>
        <input
          type="text"
          id="contactNumber"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
        {errors.contactNumber && (
          <p className="error">{errors.contactNumber}</p>
        )}

        <label htmlFor="whatsappNumber">WhatsApp Number:</label>
        <input
          type="text"
          id="whatsappNumber"
          value={whatsappNumber}
          onChange={(e) => setWhatsappNumber(e.target.value)}
        />
        {errors.whatsappNumber && (
          <p className="error">{errors.whatsappNumber}</p>
        )}

        <label htmlFor="qualification">Qualification:</label>
        <input
          type="text"
          id="qualification"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
        />
        {errors.qualification && (
          <p className="error">{errors.qualification}</p>
        )}

        <label htmlFor="experience">Experience:</label>
        <input
          type="text"
          id="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        {errors.experience && <p className="error">{errors.experience}</p>}

        <label htmlFor="resume">Resume Upload:</label>
        <input
          type="file"
          id="resume"
          onChange={(e) => setResume(e.target.files[0])}
        />
        {errors.resume && <p className="error">{errors.resume}</p>}

        <button type="submit">Sign Up</button>
      </form>
      <p className="center">
        Already have a account
        <a href="/"> SignIn</a>
      </p>
    </div>
  );
};

export default SignupPage;
