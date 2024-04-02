import  { useState } from 'react';
import './style.css';

const Header = ({ handleSearch }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => {
         setShowMenu(!showMenu);
       };
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-logo">MovieDb</a>
        <div className={showMenu ? "menu-toggle open" : "menu-toggle"} onClick={toggleMenu}>
           <div className="hamburger"></div>
           <div className="hamburger"></div>
           <div className="hamburger"></div>
         </div>
         <ul className={showMenu ? "nav-links show" : "nav-links"}>
       
                  <li><a href="/">Popular</a></li>
                  <li><a href="/topRated">Top Rated</a></li>
                  <li><a href="/upcoming">Upcoming</a></li>
                  <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Movie Name"
            value={searchTerm}
            onChange={handleInputChange}
            className="input"
          />
          <button type="submit" className="button">Search</button>
        </form>
              </ul>
       
      </div>
    </nav>
  );
};

export default Header;
