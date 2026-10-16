import { useEffect, useRef, useState } from 'react'

const useCountdown = (second, onExpire) => {
    const [left, setLeft] = useState(second);
    const cb = useRef(onExpire);

    useEffect(() => { cb.current = onExpire; })
    useEffect(() => {
        const id = setInterval(() => setLeft((1) => 1 - 1), 1000);
        return () => clearInterval(id);
    }, []);
    useEffect(() => {
        if(left <= 0 )
        {
            cb.current();
            setLeft(second)
        }
    }, [left, second]);
    return [left, () => setLeft(second)];

}

export default useCountdown