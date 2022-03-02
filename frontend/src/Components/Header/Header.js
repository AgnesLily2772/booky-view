import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <div className="navigation">
      
      <nav className="navbar py-3 navbar-expand navbar-dark bg-success">
        
        <div className="container">
          <Link className="navbar-brand" to="/" style={{fontWeight:'bolder'},{fontSize:'30px'}}> Booky View </Link>
          <div>
            <ul className="navbar-nav ml-auto">

              </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;