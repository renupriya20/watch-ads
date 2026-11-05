import { useState } from 'react';
import { weeklyData } from '../data/ads';
import s from '../pages/WatchAds.module.css';

const TODAY = weeklyData.length - 1;

const WeeklyChart = ({ total, todayValue, todayAds }) => {
    const [active, setActive] = useState(TODAY);

    const data = weeklyData.map((d, i) => (i === TODAY ? { ...d, value: todayValue, ads: todayAds } : d));
    const max = Math.max(...data.map((d) => d.value));
    const best = data.reduce((a, b) => (b.value > a.value ? b : a));
    const sel = data[active];

    return (
        <div className={`${s.card} ${s.fade} h-100`}>
            <div className={s.chartHead}>
                <strong>Weekly Earnings</strong>
                <span className={s.badgeUp}>↑ 18% vs last week</span>
            </div>

            <div className={s.statValue}>{total.toLocaleString()} <small>VEs</small></div>
            <div className={s.detail} aria-live="polite">
                <strong>{sel.day}{active === TODAY ? ' (Today)' : ''}</strong>
                <span>{sel.value} VEs · {sel.ads} ads watched</span>
            </div>

            <div className={s.bars}>
                {data.map((d, i) => (
                    <button key={d.day} type="button" className={`${s.barBtn} ${i === active ? s.on : ''}`}
                        onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}
                        aria-label={`${d.day}: ${d.value} VEs`}>
                        <span className={s.bar2} style={{ height: `${(d.value / max) * 100}%` }} />
                        {d.day}
                    </button>
                ))}
            </div>

            <div className={s.chartFoot}>
                <span>Daily avg: <b>{Math.round(total / 7)} VEs</b></span>
                <span>Best day: <b>{best.day} ({best.value})</b></span>
            </div>
        </div>
    );
}

export default WeeklyChart;