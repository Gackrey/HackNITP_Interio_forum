import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ConsultPage from "./Components/ConsultPage";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import LogInPage from "./Components/LogInPage";
import MessageForm from "./Components/MessageForm";
import ProfilePage from "./Components/ProfilePage";
import SearchedLocation from "./Components/SearchedLocation";
import TemplatesPage from "./Components/TemplatesPage";
import UserNotFound from "./Components/UserNotFound";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LogInPage />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/consult">
            <ConsultPage />
          </Route>
          <Route exact path="/template">
            <TemplatesPage addClass={"d-flex justify-content-center flex-wrap"}/>
          </Route>
          <Route
            exact
            path="/consult/:locationSearch"
            children={<SearchedLocation />}
          ></Route>
          <Route exact path="/noUser">
            <UserNotFound />
          </Route>
          <Route exact path="/:id" children={<ProfilePage />}></Route>
          <Route exact path="/:id/message" children={<MessageForm />}></Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
