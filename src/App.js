import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navbarmain from './common/navbar';
import News from './pages/components/news';




function App() {

  return (
    <div className="App">
      
        <Navbarmain />
        <News pageSize={5} category="general" />

    </div>
  );
}

export default App;

