import { useEffect, useRef, useState } from 'react';

// Repeating countdown. Calls onExpire every time it reaches 0, then restarts.
const useCountdown = (seconds, onExpire) => {
    const [left, setLeft] = useState(seconds);
    const cb = useRef(onExpire);
    useEffect(() => { cb.current = onExpire; });

    useEffect(() => {
        const id = setInterval(() => setLeft((l) => l - 1), 1000);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        if (left <= 0) { cb.current(); setLeft(seconds); }
    }, [left, seconds]);

    return [left, () => setLeft(seconds)];
}
export default useCountdown;