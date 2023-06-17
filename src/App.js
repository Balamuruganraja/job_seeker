import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import LoginPage from "./Component/LoginPage";
import SignupPage from "./Component/SingUpPage";
import PersonalDetailsPage from "./Component/PersonalDetailsPage";
import JobVacancyDetails from "./Component/JobVacancy";
import "./styles.css";
import store from "./Redux/Store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/personal-details" component={PersonalDetailsPage} />
          <Route path="/job-vacancies" component={JobVacancyDetails} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
