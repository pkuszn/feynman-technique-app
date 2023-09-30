import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai";
import "./style-pagination.css";


interface IPaginationProps {
    totalPages: number
    onPageChange: (selectedPage: number) => void;
  }

const CorpusPaginationPanel: React.FC<IPaginationProps> = ({ totalPages, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      onPageChange(page);
    };
  
    const renderLeftArrow = () => {
        return <span className='pagination-number left'>
            <AiOutlineArrowLeft onClick={() => leftArrowHandler()}/>
        </span>
    }

    const renderRightArrow = () => {
        return <span className='pagination-number right'>
        <AiOutlineArrowRight onClick={() => rightArrowHandler()}/>
    </span>
    }

    const renderDoubleLeftArrow = () => {
        return <span className='pagination-number left left'>
        <AiOutlineDoubleLeft onClick={() => leftDoubleArrowHandler()}/>
    </span>
    }

    const renderDoubleRightArrow = () => {
        return <span className='pagination-number right right'>
        <AiOutlineDoubleRight onClick={() => rightDoubleArrowHandler()}/>
    </span>
    }
    
    const leftDoubleArrowHandler = () => {
        setCurrentPage(1);
        onPageChange(1);
    }

    const rightDoubleArrowHandler = () => {
        setCurrentPage(totalPages);
        onPageChange(totalPages);
    }

    const rightArrowHandler = () => {
        let page = currentPage + 1;
        setCurrentPage(page);
        onPageChange(page);
    }

    const leftArrowHandler = () => {
        let page = currentPage - 1;
        setCurrentPage(page);
        onPageChange(page);
    }

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
        if (totalPages <= maxPagesToShow) {
          startPage = 1;
          endPage = totalPages;
        } else {
          if (currentPage <= Math.ceil(maxPagesToShow / 2) + 1) {
            endPage = maxPagesToShow;
          } else if (currentPage >= totalPages - Math.floor(maxPagesToShow / 2)) {
            startPage = totalPages - maxPagesToShow + 1;
          }
        }
    
        for (let i = startPage; i <= endPage; i++) {
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
        {renderDoubleLeftArrow()}
        {renderLeftArrow()}
        {renderPageNumbers()}
        {renderRightArrow()}
        {renderDoubleRightArrow()}
        </div>;
  };

export default CorpusPaginationPanel