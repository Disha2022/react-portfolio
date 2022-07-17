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
          <h1>
            <a data-testid="about" href="#about" onClick={() => setCurrentPage({ name: "about me" })}>
              Disha Barua
            </a>
          </h1>
        </li>
        {pages.map((category) => (
          <li
            className={`${currentPage.name === category.name && 'navActive'}`}
            key={category.name}
          >
            <a href="#about"
              onClick={() => {
                setCurrentPage(category);
              }}
            >
              {capitalizeFirstLetter(category.name)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
