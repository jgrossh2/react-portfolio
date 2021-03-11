import React from 'react';
import { Link } from "react-router-dom";

function NavTabs(props) {
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
    <ul style={{margin: "0", padding: "0"}} className="nav nav-tabs justify-content-center">
      
      <li className="nav-item" style={{ margin: "10px"}}>
        <a href="/" >Home</a>
      </li>
      {/* <li className="nav-item" style={{ margin: "10px"}}>
        <Link to="/Home">Home</Link>
      </li> */}
      <li style={{ margin: "10px"}}>
        <Link to="/About">About</Link>
      </li>
      <li style={{ margin: "10px"}}>
        <Link to="/Resume">Resume</Link>
      </li>
      <li style={{ margin: "10px"}}>
        <Link to="/Portfolio">Portfolio</Link>
      </li>
    </ul>
  </div>
  );
}

export default NavTabs;