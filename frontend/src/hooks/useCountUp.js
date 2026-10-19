import { useEffect, useRef, useState } from "react";

const useCountUp = (target, duration = 900) => {
    const [value, setValue] = useState(0);
    const prev = useRef(0);

    useEffect(() => {
        const form = prev.current;
        const to = performance.now();
        let raf;

        const tick = (t) => {
            const p = Math.min((t - to) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(from + (target - from) * eased));

            if (p < 1) {
                raf = requestAnimationFrame(tick);
            }
            else {
                prev.current = target;
            }
        }

        ref = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(raf);
    }, [target, duration]);

    return value;
}

export default useCountUp;