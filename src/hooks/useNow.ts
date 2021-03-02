import { useEffect, useState } from 'react';

export const useNow = (interval = 1000): [Date] => {
    const [time, setTime] = useState(new Date());
    const updateTime = (): void => setTime(new Date());

    useEffect(() => {
        const _timer = setInterval(updateTime, interval);
        return (): void => clearInterval(_timer);
    }, [interval]);

    return [time];
};
