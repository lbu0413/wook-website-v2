import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";
import NavBar from "./components/Navbar";
import styled from "styled-components";

const StyledApp = styled.div`
  font-family: "IBM Plex Sans", sans-serif;
`;

function App() {
  return (
    <StyledApp className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
