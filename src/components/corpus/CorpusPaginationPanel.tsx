import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./style-pagination.css";


interface IPaginationProps {
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (selectedPage: number) => void;
  }

const CorpusPaginationPanel: React.FC<IPaginationProps> = ({ totalItems, itemsPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      onPageChange(page);
      alert(page);
    };
  
    const renderLeftArrow = () => {
        return <span className='pagination-number left'>
            <AiOutlineArrowLeft onClick={() => leftArrowHandler()}/>
        </span>
    }

    const renderRightArrow = () => {
        return <span className='pagination-number left'>
        <AiOutlineArrowRight onClick={() => rightArrowHandler()}/>
    </span>
    }

    const rightArrowHandler = () => {
        let page = currentPage + 1;
        setCurrentPage(page);
        onPageChange(page);
        alert(page);
    }

    const leftArrowHandler = () => {
        let page = currentPage - 1;
        setCurrentPage(page);
        onPageChange(page);
        alert(page);
    }

    const renderPageNumbers = () => {
      const pageNumbers = [];
  
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <span
            key={i}
            className={`pagination-number ${currentPage === i ? 'active' : ''}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </span>
        );
      }
  
      return pageNumbers;
    };
  
    return <div className="pagination-container">
        {renderLeftArrow()}
        {renderPageNumbers()}
        {renderRightArrow()}
        </div>;
  };

export default CorpusPaginationPanel