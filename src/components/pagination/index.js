import React, { useState } from 'react';
import './pagination.css';

export const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? 'active' : null}>
          <button onClick={() => handlePageChange(i)}>{i}</button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <nav className="pagination">
      <ul>
        <li>
          <button
            onClick={() =>
              handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
            }
            disabled={currentPage === 1}
          >
            Prev
          </button>
        </li>
        {renderPageNumbers()}
        <li>
          <button
            onClick={() =>
              handlePageChange(
                currentPage < totalPages ? currentPage + 1 : totalPages
              )
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};
