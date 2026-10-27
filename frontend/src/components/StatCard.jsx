import useCountUp from '../hooks/useCountUp';
import s from '../pages/WatchAds.module.css';

export default function StatCard({ icon: Icon, label, value, suffix, hint, color }) {
    const count = useCountUp(value);
    return (
        <div className={`${s.card} ${s.stat} ${s.fade}`}>
            <span className={s.statIcon} style={{ background: `${color}22`, color }}>
                <Icon size={22} />
            </span>
            <div>
                <div className={s.muted}>{label}</div>
                <div className={s.statValue}>
                    {count.toLocaleString()} {suffix && <small>{suffix}</small>}
                </div>
                <div className={s.hint}>{hint}</div>
            </div>
        </div>
    );
}
