"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
exports.useNow = (interval = 1000) => {
    const [time, setTime] = react_1.useState(new Date());
    let _timer = null;
    const updateTime = () => setTime(new Date());
    react_1.useEffect(() => {
        _timer = setInterval(updateTime, interval);
        return (() => clearInterval(_timer));
    }, []);
    return [time];
};
//# sourceMappingURL=useNow.js.map