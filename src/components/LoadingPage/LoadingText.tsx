import React, { useEffect, useState, } from 'react';

interface LoadingTextProps {
    text: string;
}

const LoadingText = ({ text, } : LoadingTextProps) => {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((state) => {
                if(state.length === 3)
                    return "";
                return state + ".";
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return(
        <p>{ text + dots }</p>
    );
}

export default LoadingText;