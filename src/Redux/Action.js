export const ADD_CANDIDATE = "ADD_CANDIDATE";

export const addCandidate = (candidate) => {
  return {
    type: ADD_CANDIDATE,
    payload: candidate
  };
};
