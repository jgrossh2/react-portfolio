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
    <ul style={{margin: "0", padding: "0"}} className="nav nav-tabs justify-content-left">
      <li className="nav-item" style={{ margin: "10px" }}>
        <a href="/" ><span style={{color: "white"}}>Home</span></a>
      </li>
      <li style={{ margin: "10px" }}>
        <Link to="/About"><span style={{color: "white"}}>About</span></Link>
      </li>
      <li style={{ margin: "10px" }}>
        <Link to="/Resume"><span style={{color: "white"}}>Resume</span></Link>
      </li>
      <li style={{ margin: "10px" }}>
        <Link to="/Portfolio"><span style={{color: "white"}}>Portfolio</span></Link>
      </li>
    </ul>
  </div>
  );
}

export default NavTabs;