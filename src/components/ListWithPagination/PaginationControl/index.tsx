import { useState, useCallback, } from 'react';
import './style.css';
import { setAppState, } from '@storage/app-state';
import { useDispatch, useSelector } from 'react-redux';

interface PaginationControlProps {
    totalResults?: number;
    onChangePage?: (pageNumber: number) => void;
}

const PaginationControl = ({ onChangePage } : PaginationControlProps) => {
    const { controlsPosition, pageNumber, } = useSelector(state => state.appState);
    const [page, setPage] = useState(pageNumber ?? 1);
    const [pages, setPages] = useState(controlsPosition ?? [1, 2, 3, 4, 5]);
    const dispatch = useDispatch();

    const controlEvent = useCallback((type: "inc" | "dec") => {
        
        setPages(state => {
            let newState = state
            if(type === "inc" && state[4] < 8)
                newState = state.map((item) => item + 1);

            if(type === "dec" && state[0] > 1)
                newState = state.map((item) => item - 1);

            dispatch(setAppState({ controlsPosition: newState }))
            return newState;
        });
        
    }, []);

    return (
    <div className='maincontainer-pc-lp'>
        <button onClick={() => controlEvent("dec")} disabled={pages[0] === 1}>{"<"}</button>

        <div className='page-number-pc-lp'>
        {
            pages.map((item) => (
                <p key={item}
                  onClick={() => {
                    setPage(item);
                    dispatch(setAppState({ pageNumber: item, }));
                    onChangePage && onChangePage(item);
                  }}
                  className={`page-number-item-pc-lp ${item === page? "active-pc-lp" : ""}`}
                >{item}</p>
            ))
        }
        </div>

        <button onClick={() => controlEvent("inc")} disabled={pages[4] === 8}>{">"}</button>
      </div>
    );
}

export default PaginationControl