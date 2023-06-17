// reducers.js

import { ADD_CANDIDATE } from "./Action";

// Define the initial state
const initialState = {
  candidates: [
    {
      name: "Bala",
      email: "candidate@gmail.com",
      dob: "30-1-2023",
      password: "password",
      contact: 9514778271,
      whatsapp: 6369680681,
      qualification: "B.E - CSE",
      experience: "1"
    }
  ],
  loginCanDetails: {
    name: "Bala",
    email: "candidate@gmail.com",
    dob: "30-1-2023",
    password: "password",
    contact: 9514778271,
    whatsapp: 6369680681,
    qualification: "B.E - CSE",
    experience: "1"
  }
};

// Define the candidates reducer
const candidatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CANDIDATE:
      return {
        ...state,
        candidates: [...state.candidates, action.payload],
        loginCanDetails: action.payload
      };
    default:
      return state;
  }
};

export default candidatesReducer;
