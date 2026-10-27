import { CheckCircle2 } from 'lucide-react';
import s from '../pages/WatchAds.module.css';

// Recent earnings timeline (latest 5 entries)
export default function RecentEarnings({ items }) {
    return (
        <div className={`${s.card} ${s.fade} h-100`}>
            <strong>Recent Earnings</strong>
            <ul className={s.recentList}>
                {items.slice(0, 5).map((item) => (
                    <li key={item.id}>
                        <CheckCircle2 size={16} color="#16a34a" />
                        <span className="flex-grow-1">{item.brand}</span>
                        <span className={s.recentReward}>
                            +{item.reward} VEs
                            <small>{item.time}</small>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
