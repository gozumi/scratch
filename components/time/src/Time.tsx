import React, { useEffect, useState } from 'react';

const Time: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h1>Current Date and Time</h1>
            <p>{currentTime.toLocaleString()}</p>
        </div>
    );
};

export default Time;