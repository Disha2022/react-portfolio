import "./Navigation.css";
import { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

// used to conditionally render the different sections of the portfolio
function Navigation(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    <header className="flex-row px-1">

      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setCurrentPage({name: "about me"})}>
              Disha Barua
            </a>
          </li>
          {pages.map((category) => (
            <li
              className={`mx-1 ${currentPage.name === category.name && 'navActive'}`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentPage(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
