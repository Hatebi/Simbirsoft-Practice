import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Components/Main";
import Header from "./Components/Header";
import Leagues from "./Components/Leagues";
import Teams from "./Components/Teams";
import MatchesTeam from "./Components/MatchesTeam";
import MatchesLeague from "./Components/MatchesLeague";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" render={() => <Main />} />
      <Route path="/leagues" render={() => <Leagues />} />
      <Route exact path="/league/:id" render={() => <Teams />} />
      <Route path="/team/:id" render={() => <MatchesTeam />} />
      <Route path="/league/:id/calendar" render={() => <MatchesLeague />} />
    </BrowserRouter>
  );
}

export default App;
