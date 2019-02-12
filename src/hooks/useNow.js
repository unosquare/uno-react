import { useEffect, useState } from 'react';

export const useNow = () => {
    const [time, setTime] = useState(new Date());
    let _timer = null;
    const updateTime = () => setTime(new Date());

    useEffect(() => {
        _timer = setInterval(updateTime, 1000);
        return (() => clearInterval(_timer));
    }, []);

    return [ time ];
};

