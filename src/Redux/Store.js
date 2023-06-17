import { createStore } from "redux";
import candidatesReducer from "./Reducer";

const store = createStore(candidatesReducer);
export default store;
