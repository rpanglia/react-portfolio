import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';

function App() {

  const [currentPage, handlePageChange] = useState("Home");
  const renderPage = () => {
      switch (currentPage) {
          case "About":
              return <About />;
          case "Projects":
              return <Projects />;
          case "Resume":
              return <Resume />;
          case "Contact":
              return <Contact />;
          default:
              return <Home />;
      }
  }
  
  const year = new Date().getFullYear()

  return (
    <div>
      <main>
          <header>
              <Nav
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
          </header>
          <div>{renderPage(currentPage)}</div>
          
          <footer>
            Ravneet Panglia &#169; {year} 
          </footer>
      </main>
    </div>
  )
}

export default App;
