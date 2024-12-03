import React, { useState, useEffect, useMemo } from 'react';

const TextChanger = () => {
    const text = useMemo(() => ["Hi, I'm Hussain", "Hi, I'm Hussain"], []);
    const [currenttext, setCurrenttext] = useState("");
    const [endvalue, setEndvalue] = useState(true);
    const [isforward, setIsForward] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrenttext(text[index].substring(0, endvalue));
            if (isforward) {
                setEndvalue((prev) => prev + 1);
            } else {
                setEndvalue((prev) => prev - 1);
            }
            if (endvalue > text[index].length + 10) {
                setIsForward(false);
            }
            if (endvalue < 2.1) {
                setIsForward(true);
                setIndex((prev) => (prev + 1) % text.length);
            }
        }, 50);
        return () => clearInterval(intervalId);
    }, [endvalue, isforward, index, text]);

    return <div className='transition ease duration-300'>{currenttext}</div>;
};

export default TextChanger;
