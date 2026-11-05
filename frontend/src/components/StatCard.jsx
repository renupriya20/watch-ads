import useCountUp from '../hooks/useCountUp';
import s from '../pages/WatchAds.module.css';

const StatCard = ({ icon: Icon, label, value, suffix, hint, color }) => {
    const count = useCountUp(value);
    return (
        <div className={`${s.card} ${s.stat} ${s.fade}`} style={{ '--accent': color }}>

            <span className={s.statIcon} style={{ background: `linear-gradient(135deg, ${color}, ${color}aa)` }}>
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

export default StatCard;