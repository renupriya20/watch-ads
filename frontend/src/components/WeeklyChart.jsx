import { weeklyData } from '../data/ads';
import s from '../pages/WatchAds.module.css';

export default function WeeklyChart({ total }) {
    const max = Math.max(...weeklyData.map((d) => d.value));
    return (
        <div className={`${s.card} ${s.fade} h-100`}>
            <strong>Weekly Earnings</strong>
            <div className={s.statValue}>{total.toLocaleString()} <small>VEs</small></div>
            <div className={s.bars}>
                {weeklyData.map((d) => (
                    <div key={d.day} className={s.barCol}>
                        <div className={s.bar} style={{ height: `${(d.value / max) * 100}%` }} />
                        <span>{d.day}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
