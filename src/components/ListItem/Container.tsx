import { ReactNode, useState, useEffect, } from 'react';
import './style.css';

interface ContainerProps {
    children: ReactNode;
    onClick?: () => void;
    onDoubleClick?: () => void;
    className: string;

}

const Container = ({ children, onDoubleClick, onClick, className, } : ContainerProps) => {
    const [click, setClicks] = useState(0);

    useEffect(() => {
        let timmer: number;
        if(click === 2){
            onDoubleClick && onDoubleClick();
            setClicks(0);
        }
        if(click === 1){
            timmer = setTimeout(() => {
                onClick && onClick();
                setClicks(0);
            }, 260)
        }

        return () => clearTimeout(timmer);
    }, [click, onClick, onDoubleClick]);

    return(
        <div onClick={() => setClicks(state => state + 1)} className={className}>
            { children }
        </div>
    );
}

export default Container;