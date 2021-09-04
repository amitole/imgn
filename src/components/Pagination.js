import React from "react";
import "./Pagination.css"

const Pagination = ({ rowPerPage, totalRows , paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRows / rowPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
