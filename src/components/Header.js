import React from 'react'
import { CartFill } from 'react-bootstrap-icons'
import { List } from 'react-bootstrap-icons'
import { Search } from 'react-bootstrap-icons'
import { PersonCircle } from 'react-bootstrap-icons'




const Header = () => {
  return (
    <div>
      <header
        className="navbar navbar-expand-lg navbar-dark header"
        style={{ backgroundColor: "#FFFAFA" }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container-fluid">
          <nav>
            

            <div>
              <List />
              <PersonCircle/>
              <Search />
              <CartFill />
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header
