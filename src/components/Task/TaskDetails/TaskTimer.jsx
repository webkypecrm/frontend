import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import dayjs from 'dayjs';

const TaskTimer = ({ startDate, endDate }) => {
    // Calculate time difference in seconds
    const endTimeInSeconds = dayjs(endDate).diff(dayjs(startDate), 'second');
    const [timeLeft, setTimeLeft] = useState(endTimeInSeconds);

    useEffect(() => {
        // Update time left every second
        const timer = setInterval(() => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        // Clear the timer on unmount
        return () => clearInterval(timer);
    }, []);

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(timeLeft / (3600 * 24));
    const hours = Math.floor((timeLeft % (3600 * 24)) / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);

    return (
        <CountUp
            start={timeLeft}
            end={0}
            duration={timeLeft}
            prefix={`${days} Days ${hours} Hours ${minutes} Min `}
        />
    );
};

// Usage example with specific dates
// export default function App() {
//     return (
//         <CountdownTimer 
//             startDate={new Date()} 
//             endDate={new Date(Date.now() + 60 * 60 * 1000)} // 1 hour later
//         />
//     );
// }

export default TaskTimer;

