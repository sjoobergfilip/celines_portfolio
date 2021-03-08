import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import SingleProject from "./components/project/SingleProject";
import Project from "./components/project/Project";
import Navbar from "./components/navbar/NavBar";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={About} path="/about" />
                <Route component={SingleProject} path="/project/:slug" />
                <Route component={Project} path="/project" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
