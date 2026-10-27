import { Flame } from 'lucide-react';
import s from '../pages/WatchAds.module.css';

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

// Daily streak card - dots un dino ke liye filled hain jab ad dekha gaya
export default function Streak({ count = 7, activeUpTo = 6 }) {
    return (
        <div className={`${s.card} ${s.fade} h-100`}>
            <strong><Flame size={18} color="#ea580c" /> Daily Streak</strong>
            <div className={s.statValue}>{count} <small>Days</small></div>
            <p className={s.muted}>Keep it up! Watch an ad daily to extend your streak.</p>
            <div className={s.streakRow}>
                {DAYS.map((d, i) => (
                    <div key={i} className={s.streakDay}>
                        <span className={i <= activeUpTo ? s.dotOn : s.dotOff}>{i <= activeUpTo ? '✓' : ''}</span>
                        <small>{d}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}
