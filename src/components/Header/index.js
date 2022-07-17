import Navigation from "../Navigation";
function Header(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;


    return (
      <header>
        <Navigation
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navigation>
      </header>
    );
  }
  
  export default Header;