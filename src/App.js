// import HomePage from "./pages/Home";
import HomePage from "./pages/home";
import Navbar from "./components/navbar";
import FaqPage from "./pages/faq";
import ProfilePage from "./pages/profile";
import ServicesPage from "./pages/services";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/siderbar";
import { AppBar } from "@material-ui/core";
import * as routes from "../src/routes";
import ServiceDetails from "./pages/serviceDetails";

function App() {
  return (
    <div>
      <Router>
        {/*  refactoring style!!!*/}

        <AppBar
          position="sticky"
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            // paddingRight: "2rem",
          }}
        >
          <div style={{ marginRight: "auto" }}>
            <Sidebar />
          </div>

          <Navbar />
        </AppBar>
        <Switch>
          <Route exact path={routes.home}>
            <HomePage />
          </Route>
        </Switch>
        <Switch>
          <Route path={routes.faq}>
            <FaqPage />
          </Route>
        </Switch>
        <Switch>
          <Route path={routes.profile}>
            <ProfilePage />
          </Route>
        </Switch>
        <Switch>
          <Route exact path={routes.services}>
            <ServicesPage />
          </Route>
        </Switch>
        <Switch>
          <Route exact path={routes.serviceDetails}>
            <ServiceDetails />
          </Route>
        </Switch>
        <Switch>
          <Route path={routes.login}>
            <LoginPage />
          </Route>
        </Switch>
        <Switch>
          <Route path={routes.signup}>
            <SignupPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
