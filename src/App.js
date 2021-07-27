import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ChampionsPage from "./components/ChampionsPage/ChampionsPage";
import Team from "./components/Team/Team";
import Landing from "./components/Landing/Landing";
import "./App.scss";
import LegalAnnouncement from "./components/LegalAnnouncement/LegalAnnouncement";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
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
      <Footer />
    </div>
  );
}

export default App;
