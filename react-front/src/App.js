import react from 'react';

import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import Home from './pages/Home';
// import Projects from './components/projects.jsx';
// import Education from './components/Education.jsx';
// import Contact from './components/Contact.jsx';


import './scss/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;