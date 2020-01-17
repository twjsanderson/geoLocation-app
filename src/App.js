import React, { } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';


function App() {
  return (
    <Router>
      <section id="app">
        {routes}
      </section>
    </Router>
  );
}

export default App;