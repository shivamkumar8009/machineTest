import  { useState } from 'react';
import './style.css'; // Import your CSS file for styling

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-logo">MovieDb</a>
        <div className={showMenu ? "menu-toggle open" : "menu-toggle"} onClick={toggleMenu}>
          <div className="hamburger"></div>
        </div>
        <ul className={showMenu ? "nav-links show" : "nav-links"}>
       
          <li><a href="/">Popular</a></li>
          <li><a href="/topRated">Top Rated</a></li>
          <li><a href="/upcoming">Upcoming</a></li>
          <li><a href="#"><input
               className="input"
               type="text"
               placeholder="Movie Name"
             /></a></li>
          <li><a href="#"> <button className="button">Search</button></a></li>
      
        </ul>
      </div>
    </nav>
  );
};

export default Header;
