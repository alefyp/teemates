import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ChampionsPage from "./components/ChampionsPage/ChampionsPage";
import Team from "./components/Team/Team";
import Landing from "./components/Landing/Landing";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./redux/configureStore";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
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
      </Router>
    </Provider>
  );
}

export default App;
