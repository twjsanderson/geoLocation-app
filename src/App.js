import React, { } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';

// components
import Navbar from './features/navbar';
import Footer from './features/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <section id="app">
        {routes}
      </section>
      <Footer />
    </Router>
  );
}

export default App;