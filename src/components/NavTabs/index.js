import React from 'react';

function NavTabs(props) {
  const tabs = ['About', 'Contact', 'Resume', 'Portfolio'];
  return (
    <ul className="nav nav-tabs justify-content-center">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a   style={{ color: "black", fontSize: "20px"}}
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;