import React from 'react';
import logo from './img/web_avatar2.png';
import './App.css';
import { Switch, Route, Link, useLocation, useParams } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import { Paitings, Sketches } from "./pages/art";
import { TuBirra } from "./pages/projects";
import _ from "lodash";

function Header() {
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

function Entry(props) {

  return (
    <div>
      <p>{props.category} | {props.name} | <Link to={props.path}>{props.path}</Link></p>
    </div>
  )

}

function List(props) {

  const entries = props.entries
  let filteredEntries = entries
  if (props.category !== "home") {
    filteredEntries = _.filter(entries, function (o) { return o.category === props.category }) || []
  }
  return (
    <div>
      {filteredEntries.map((item) => { return <Entry name={item.name} path={"/"+item.category+"/"+item.id} category={item.category} /> })}
    </div>
  )

}

function Page(props) {
  const { c, p } = useParams()
  let filteredEntry = _.filter(props.entries, function (o) { return (o.category === c && o.id === p) }) || []
  const EntryComponent = filteredEntry[0]["component"]
  return <EntryComponent />;
}


function App() {

  const location = useLocation();

  const entries = [
    {
      "id": "paintings",
      "name": "Paitings",
      "category": "art",
      "component": Paitings,
    },
    {
      "id": "sketches",
      "name": "Sketches",
      "category": "art",
      "component": Sketches,
    },
    {
      "id": "tubirra",
      "name": "Tu Birra",
      "category": "projects",
      "component": TuBirra,
    }
  ]

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
              <Route exact path="/"><List category="home" entries={entries} /></Route>
              <Route exact path="/projects"><List category="projects" entries={entries} /></Route>
              <Route exact path="/art"><List category="art" entries={entries} /></Route>
              <Route exact path="/:c/:p"><Page entries={entries} /></Route>
            </Switch>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default App;
