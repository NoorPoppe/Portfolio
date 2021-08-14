import "./App.css";
//import styles from "./App.module.css";
import { Route, Switch } from "react-router-dom";
//Routes
import { ROUTES } from "./consts";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
//import ProjectDetailPage from "./pages/ProjectDetail";
import ProjectDetails from "./pages/ProjectDetail";
import Nav from "./components/nav/NavBar";
import Succes from "./components/email/Succes"
import Footer from "./components/Footer"

const NoMatchRoute = () => <div>404 Page</div>;

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
        <Route path={ROUTES.SUCCES}>
          <Succes />
        </Route>
        <Route path="/projects/:id">
          <ProjectDetails />
        </Route>
        <Route path={ROUTES.CONTACT}>
          <Contact />
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route component={NoMatchRoute} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
