import { useState } from 'react';
import { Play, Check, Loader2 } from 'lucide-react';
import s from '../pages/WatchAds.module.css';

const WatchButton = ({ status, disabled, onClick, reward, className = '' }) => {

    const [ripples, setRipples] = useState([]);

    const handleClick = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const keyboard = e.clientX === 0 && e.clientY === 0;
        const id = Date.now();
        setRipples((p) => [...p,
        {
            id,
            x: keyboard ? r.width / 2 : e.clientX - r.left, y: keyboard ? r.height / 2 : e.clientY - r.top
        }]);
        setTimeout(() => setRipples((p) => p.filter((x) => x.id !== id)), 600);
        onClick();
    };

    return (
        <button
            className={`${s.watchBtn} ${status === 'completed' ? s.btnDone : ''} ${className}`}
            disabled={disabled || status !== 'idle'}
            onClick={handleClick}
        >
            {ripples.map((r) => <span key={r.id} className={s.ripple} style={{ left: r.x, top: r.y }} />)}
            {status === 'completed' ? <><Check size={18} /> Completed</>
                : status === 'loading' ? <><Loader2 size={18} className={s.spin} /> Watching...</>
                    : <><Play size={18} /> Watch Now{reward ? ` • +${reward} VEs` : ''}</>}
        </button>
    );
}
export default WatchButton;
