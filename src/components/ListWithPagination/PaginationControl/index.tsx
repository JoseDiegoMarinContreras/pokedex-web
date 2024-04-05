import { useState, useCallback, } from 'react';
import './style.css';

interface PaginationControlProps {
    totalResults: number;
    onChangePage?: (pageNumber: number) => void;
}

const PaginationControl = ({ totalResults, onChangePage } : PaginationControlProps) => {
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState([1, 2, 3, 4, 5]);
    const controlEvent = useCallback((type: "inc" | "dec" | number) => {
        const newPage = typeof type === 'number'? type : type === "inc" ? page + 1 : page - 1;
        setPage(newPage);
        setPages(state => {
            if(type === "inc" && state[4] < newPage)
                return state.map((item) => item + 1);

            if(type === "dec" && state[0] > newPage)
                return state.map((item) => item - 1);
            return state;
        });
        onChangePage && onChangePage(newPage);
    }, [onChangePage, page]);

    return (
    <div className='maincontainer-pc-lp'>
        <button onClick={() => controlEvent("dec")} disabled={page === 1}>{"<"}</button>

        <div className='page-number-pc-lp'>
        {
            pages.map((item) => (
                <p key={item}
                  onClick={() => controlEvent(item)}
                  className={`page-number-item-pc-lp ${item === page? "active-pc-lp" : ""}`}
                >{item}</p>
            ))
        }
        </div>

        <button onClick={() => controlEvent("inc")} disabled={page === 8}>{">"}</button>
      </div>
    );
}

export default PaginationControl