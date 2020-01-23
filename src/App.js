import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// components
import Navigation from './features/navbar';
import routes from './routes';
import Footer from './features/footer';

function App() {
  return (
    <Router>
      <Navigation />
      <section id='app'>
        {routes}
      </section>
      <Footer />
    </Router>
  );
}

export default App;