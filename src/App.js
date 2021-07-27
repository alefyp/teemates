import { BrowserRouter as Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ChampionsPage from "./components/ChampionsPage/ChampionsPage";
import Team from "./components/Team/Team";
import ChampionPage from "./components/ChampionPage/ChampionPage";
import Landing from "./components/Landing/Landing";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/champs/:name">
            <ChampionPage />
          </Route>
          <Route path="/champs">
            <ChampionsPage />
          </Route>
          <Route path="/team">
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
