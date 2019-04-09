import { useEffect, useState } from 'react';

export const useNow = (interval = 1000) => {
    const [time, setTime] = useState(new Date());
    let _timer = null;
    const updateTime = () => setTime(new Date());

    useEffect(() => {
        _timer = setInterval(updateTime, interval);
        return (() => clearInterval(_timer));
    }, []);

    return [time];
};
