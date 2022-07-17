import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
function App() {
  const [pages] = useState([
    {name: 'about me'},
    {name: 'portfolio'},
    { name: 'contact'},
    { name: 'resume' },
]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
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
          </>
        }
      </main>
    </div>
  );
}

export default App;
