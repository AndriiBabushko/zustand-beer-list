import React, { FC } from 'react';

import { MyButton } from '../custom/MyButton';

interface PaginationProps {
  currentPage: number;
  itemsPerPage: number;
  totalBeers: number;
  onPageChangeHandler: (pageNumber: number) => void;
}

export const Pagination: FC<PaginationProps> = ({ currentPage, itemsPerPage, totalBeers, onPageChangeHandler }) => {
  const totalPages = Math.ceil(totalBeers / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      className={`mt-2 flex justify-between md:overflow-x-auto  ${
        pageNumbers.length > 25 && 'md:scrollbar-thin md:scrollbar-track-slate-600 md:scrollbar-thumb-slate-800'
      }`}
    >
      {pageNumbers.map((number) => (
        <MyButton
          key={number}
          onClickEvent={() => onPageChangeHandler(number)}
          disabled={number === currentPage}
          className={'text-lg rounded px-4 py-2 font-bold bg-slate-700 border-2 border-slate-800'}
        >
          {number}
        </MyButton>
      ))}
    </div>
  );
};
