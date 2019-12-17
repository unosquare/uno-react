import { useEffect, useState } from 'react';

export const useNow = (interval = 1000): [Date] => {
    const [time, setTime] = useState(new Date());
    let _timer = null;
    const updateTime = (): void => setTime(new Date());

    useEffect(() => {
        _timer = setInterval(updateTime, interval);
        return (): void => clearInterval(_timer);
    }, []);

    return [time];
};
