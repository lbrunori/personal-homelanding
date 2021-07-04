import './Navbar.css';

const Navbar = () => {
  return (
    <div className="Navbar">
      <header>
        <nav className="Header">
            <div className="navigation">
              <span>HOME</span>
              <span>ABOUT</span>
              <span>WORK</span>
              <span>SKILLS</span>
              <span>CONTACT</span>
            </div>
            <div className="name">Lucas Brunori</div>
            <div className="language">EN / ES</div> 
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
