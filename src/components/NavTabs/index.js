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
    <ul className="nav nav-tabs justify-content-center">
      <li className="nav-item" style={{ margin: "10px"}}>
        <a href="/">Home</a>
      </li>
      <li className="nav-item" style={{ margin: "10px"}}>
        <a href="/About">About</a>
      </li>
      <li style={{ margin: "10px"}}>
        <a href="/Contact">Contact</a>
      </li>
      <li style={{ margin: "10px"}}>
        <a href="/Portfolio">Portfolio</a>
      </li>
    </ul>
  </div>
  );
}

export default NavTabs;