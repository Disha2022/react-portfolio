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

  const weather = {
    name: "Weather Dashboard",
    description: "jQuery, APIs",
    imgName: "weather.jpg",
    gitLink: "https://github.com/Disha2022/weather_dashboard",
    deployLink: "https://disha2022.github.io/weather_dashboard/"
  };

  const html = {
    name: "HTML Portfolio",
    description: "Plain CSS and HTML",
    imgName: "html.png",
    gitLink: "https://github.com/Disha2022/disha-portfolio",
    deployLink: "https://disha2022.github.io/disha-portfolio/"
  };

  const restaurant = {
    name: "Restaurant Finder",
    description: "Tailwinds CSS, Google APIs",
    imgName: "restaurant.jpg",
    gitLink: "https://github.com/Disha2022/Interactive_Front_End_Project",
    deployLink: "https://disha2022.github.io/Interactive_Front_End_Project/"
  };
  const schedule = {
    name: "Work Day Scheduler",
    description: "Bootstrap, local storage",
    imgName: "schedule.jpg",
    gitLink: "https://github.com/Disha2022/work_day_scheduler",
    deployLink: "https://disha2022.github.io/work_day_scheduler/"
  };
  const runbuddy = {
    name: "Run Buddy Demo",
    description: "HTML, CSS, forms",
    imgName: "runbuddy.jpg",
    gitLink: "https://github.com/Disha2022/run-buddy",
    deployLink: "https://disha2022.github.io/run-buddy/"
  };
  const techblog = {
    name: "Rodde-it Tech Blog",
    description: "expressJS, MySQL, authentication",
    imgName: "techblog.jpg",
    gitLink: "https://github.com/Disha2022/rodde-it",
    deployLink: "https://rodde-it.herokuapp.com/"
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
                project={techblog}
              ></Project>
              <Project
                project={html}
              ></Project>
              <Project
                project={weather}
              ></Project>
              <Project
                project={restaurant}
              ></Project>
              <Project
                project={runbuddy}
              ></Project>
              <Project
                project={schedule}
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
