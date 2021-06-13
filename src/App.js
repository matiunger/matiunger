import React from 'react';
import logo from './img/web_avatar2.png';
import './App.css';
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";


function Header () {
  return (
    <header>
      <div className="logo-container"><img className="logo" src={logo} alt="Logo" /></div>
      <nav>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/art">Art
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );

}


function App() {

  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0, width: "0%" },
    enter: { opacity: 1, width: "100%" },
    leave: { opacity: 0, width: "0%" }
  });

  return (
    <div className="App">
      <Header />
      <div className="Routes">
        {transitions((props, item) => (
          <animated.div style={props}>
            <Switch location={item}>
              <Route exact path="/"  >home</Route>
              <Route exact path="/projects">projects</Route>
              <Route exact path="/art">art</Route>
            </Switch>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default App;
