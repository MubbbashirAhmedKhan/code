import React from 'react';
// import { Navbar } from 'react-bootstrap';


function Navbar(){
    return(
      <div>
          <nav class="navbar navbar-light bg-warning">
  <a className="navbar-brand"> Hotel System </a>
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
        </div>
    )
}

export default Navbar;