import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ChampionsPage from "./components/ChampionsPage/ChampionsPage";
import Team from "./components/Team/Team";
import Landing from "./components/Landing/Landing";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/champions" exact>
            <ChampionsPage />
          </Route>
          <Route path="/team" exact>
            <Team />
          </Route>
          <Route path="/" exact>
            <Landing />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
