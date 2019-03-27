import { useEffect, useState } from 'react';
export var useNow = function () {
    var _a = useState(new Date()), time = _a[0], setTime = _a[1];
    var _timer = null;
    var updateTime = function () { return setTime(new Date()); };
    useEffect(function () {
        _timer = setInterval(updateTime, 1000);
        return (function () { return clearInterval(_timer); });
    }, []);
    return [time];
};
