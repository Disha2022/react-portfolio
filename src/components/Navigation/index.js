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
      <nav>
        <ul>
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setCurrentPage({name: "about me"})}>
              Disha Barua
            </a>
          </li>
          {pages.map((category) => (
            <li
              className={`${currentPage.name === category.name && 'navActive'}`}
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
  );
}

export default Navigation;
