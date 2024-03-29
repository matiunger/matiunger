import React from 'react';
import logo from './img/web_avatar600.png';
import './App.css';
import { Switch, Route, Link, useLocation, useParams } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import { Paitings, Sketches, Bungalow, NFTs } from "./pages/art";
import { TuBirra, Timetab } from "./pages/projects";

import _ from "lodash";

/*import GitHubIcon from '@material-ui/icons/GitHub';*/
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';

function Header() {

  const location = useLocation();
  const section = location.pathname.split("/")[1]

  return (
    <header>
      <div className="logo-container"><img className="logo" src={logo} alt="Logo" /></div>
      <nav>
        <ul>
          <li className={section === "" ? "nav--active" : ""}>
            <Link to="/">Home</Link>
          </li>
          {/* <li className={section === "projects" ? "nav--active" : ""}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className={section === "art" ? "nav--active" : ""}>
            <Link to="/art">Art</Link>
          </li> */}
          <li className={section === "about" ? "nav--active" : ""}>
            <Link to="/about">About</Link>
          </li>
          <li className={section === "opensea" ? "nav--active" : ""}>
            <Link to={{ pathname: "https://opensea.io/munger-art" }} target="_blank">OpenSea</Link>
          </li>
          <li className="social-icons">
            <a href="https://instagram.com/munger.art" target="_blanck" ><InstagramIcon fontSize="small" /></a>
            <a href="mailto:matiunger@gmail.com" style={{"marginRight" : "6dpx"}}><MailOutlineIcon fontSize="small" /></a>
          </li>
        </ul>
      </nav>
    </header>
  );

}

function Entry(props) {

  const data = props.data
  const path = "/" + data.category + "/" + data.id
  return (
    <Link to={path} className="entry">
      <div>
        <p className="entry__title"><span className="entry__icon">{data.icon}</span>{data.name}</p>
        <p className="entry__description">{data.description}</p>
      </div>
    </Link>
  )

}

function List(props) {

  const entries = props.entries
  let filteredEntries = entries
  if (props.category !== "home") {
    filteredEntries = _.filter(entries, function (o) { return o.category === props.category }) || []
  }
  return (
    <div className="entries" style={props.style}>
      {filteredEntries.map((item) => { return <Entry key={item.id} data={item} /> })}
    </div>
  )

}

function Page(props) {
  const { c, p } = useParams()
  let filteredEntry = _.filter(props.entries, function (o) { return (o.category === c && o.id === p) }) || []
  const entry = filteredEntry[0]
  const EntryComponent = entry["component"]
  
  return <div className="page" style={props.style}>
    <h2 className="page__title">{entry["name"]}</h2>
    <EntryComponent />
    </div>;
}

function About(props) {
  return <div className="page" style={props.style}>
    <h2 className="page__title">Hi, I'm Mathi!</h2>
    <p>and this site is the home for my art and experimental projects.</p>
    </div>;
}

function App() {

  const location = useLocation();

  const entries = [
    {
      "id": "paintings",
      "name": "Paintings",
      "description": "Oil and acrylic paintings",
      "category": "art",
      "icon": "🖌️",
      "component": Paitings,
    },
    {
      "id": "sketches",
      "name": "Sketches",
      "description": "Pencil sketches and caricatures",
      "category": "art",
      "icon": "✏️",
      "component": Sketches,
    },
    /*{
      "id": "tubirra",
      "name": "Tu Birra",
      "description": "tubirra.com recommends the best styles of beer for your taste",
      "category": "projects",
      "icon": "🍺",
      "component": TuBirra,
    },*/
    {
      "id": "bungalow",
      "name": "Mural",
      "description": "Mural painting in Munich's Olympic Village",
      "category": "art",
      "icon": "🎨",
      "component": Bungalow,
    },
    {
      "id": "nfts",
      "name": "NFTs",
      "description": "Digital art as non fungible tokens",
      "category": "art",
      "icon": "🥔",
      "component": NFTs,
    },
    /*{
      "id": "timetab",
      "name": "Timetab",
      "description": "A beautiful new tab page to take control of your time.",
      "category": "projects",
      "icon": "⌛",
      "component": Timetab,
    }*/
  ]

  const transitions = useTransition(location, {
    from: { opacity: 0, transform:"translateX(-100px)" },
    enter: { opacity: 1, transform:"translateX(0px)" },
    leave: { opacity: 0, transform:"translateX(100px)" }
  });

  return (
    <div className="App">
      <Header />
      <div className="routes">
        {transitions((props, item) => (
          <animated.div style={props}>
            <Switch location={item}>
              <Route exact path="/"><List category="home" entries={entries} /></Route>
              <Route exact path="/projects"><List category="projects" entries={entries} /></Route>
              <Route exact path="/art"><List category="art" entries={entries} /></Route>
              <Route exact path="/:c/:p"><Page entries={entries} /></Route>
              <Route exact path="/about"><About /></Route>
            </Switch>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default App;
