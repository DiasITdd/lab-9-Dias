import './App.css';
import React from 'react';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        <Nav />
      </header>
      <div class="content">
        <Main></Main>
        
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
