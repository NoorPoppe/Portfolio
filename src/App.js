import "./App.css";
//import styles from "./App.module.css";
import { Route, Switch } from "react-router-dom";
//Routes
import { ROUTES } from "./consts";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Nav from "./components/nav/NavBar";

function App() {

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path={ROUTES.ABOUT}>
          <About />
        </Route>
        <Route path={ROUTES.PROJECTS}>
          <Projects />
        </Route>
        <Route path={ROUTES.CONTACT}>
          <Contact />
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
