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
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/faq">
            <FaqPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/services">
            <ServicesPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/signup">
            <SignupPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
