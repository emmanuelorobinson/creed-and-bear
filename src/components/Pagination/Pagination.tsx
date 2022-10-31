import "./Pagination.scss";
import React from "react";

import {
  usePagination,
  DOTS,
  PaginationRange,
} from "../../hooks/usePagination";

interface Props {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

const Pagination = (props: Props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (
    currentPage === 0 ||
    (paginationRange ? paginationRange?.length : 0) < 2
  ) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange
    ? paginationRange[paginationRange.length - 1]
    : 0;

  return (
    <ul className="pagination-container">
      <li
        className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={onPrevious}
      >
        <div className="a-background">
          <div className="arrow left" />
        </div>
      </li>
      {paginationRange?.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            className={`pagination-item ${
              pageNumber === currentPage ? "selected" : ""
            }`}
            onClick={() => onPageChange(Number(pageNumber))}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`pagination-item ${
          currentPage === lastPage ? "disabled" : ""
        }`}
        onClick={onNext}
      >
        <div className="a-background">
          <div className="arrow right" />
        </div>
      </li>
    </ul>
  );
};

export default Pagination;
