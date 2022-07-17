import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import Project from "./components/Project";
function App() {
  const [pages] = useState([
    { name: 'about me' },
    { name: 'portfolio' },
    { name: 'contact' },
    { name: 'resume' },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  const surf = {
    name: "Surf Report",
    description: "MERN Stack",
    imgName: "github.png"
  };

  return (
    <div className="App">
      <Header
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Header>
      <main className="App-header">
        {currentPage.name === "about me" && <About></About>}
        {currentPage.name === "resume" && <Resume></Resume>}
        {currentPage.name === "contact" && <Contact></Contact>}
        {currentPage.name === "portfolio" &&
          <>
            <h2>
              Portfolio
            </h2>
            <div className="portfolio">
              <Project
                project={surf}
              ></Project>
              <Project
                project={surf}
              ></Project>
              <Project
                project={surf}
              ></Project>
              <Project
                project={surf}
              ></Project>
            </div>
          </>
        }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
