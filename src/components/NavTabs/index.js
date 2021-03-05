import React from 'react';
import { Link } from "react-router-dom";

function NavTabs(props) {
  const tabs = ['About', 'Contact', 'Resume', 'Portfolio'];
  return (
    // <ul className="nav nav-tabs justify-content-center">
    //   {tabs.map(tab => (
    //     <li className="nav-item" key={tab}>
        
    //       <a   style={{ color: "black", fontSize: "20px"}}
    //         href={'#' + tab.toLowerCase()}
    //         onClick={() => props.handlePageChange(tab)}
    //         className={
    //           props.currentPage === tab ? 'nav-link active' : 'nav-link'
    //         }
    //       >
    //         {tab}
    //       </a>
    //     </li>
    //   ))}
    // </ul>
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Portfolio">Portfolio</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;