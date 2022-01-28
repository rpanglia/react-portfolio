import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';


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
  


  return (
    <div>
      <main>
            <Nav
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          <div>{renderPage(currentPage)}</div>
          
          <Footer></Footer>
      </main>
    </div>
  )
}

export default App;
