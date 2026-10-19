import { Landmark, Footprints, ShieldCheck, Headphones, Car, Gift, Clock } from 'lucide-react';
import WatchButton from './WatchButton';
import s from '../pages/WatchAds.module.css';

const icons = { finance: Landmark, shoe: Footprints, vpn: ShieldCheck, music: Headphones, car: Car, gift: Gift };

export default function AdCard({ ad, onWatch, isWatching, isBusy }) {
    const Icon = icons[ad.icon];
    const watched = ad.status === 'watched';
    const status = watched ? 'completed' : isWatching ? 'loading' : 'idle';

    return (
        <article className={`${s.card} ${s.adCard} ${s.fade}`}>
            {ad.limited && <span className={s.limited}>⚡ Limited Time Bonus!</span>}
            <div className={s.adTop}>
                <div className={s.adArt} style={{ background: `linear-gradient(135deg, ${ad.color}, ${ad.color}99)` }}>
                    <span className={s.sponsored}>Sponsored</span>
                    <Icon size={38} color="#fff" />
                </div>
                <div>
                    <h3>{ad.brand}</h3>
                    <p className={s.muted}>{ad.tagline}</p>
                    <span className={s.muted}><Clock size={14} /> {ad.duration} sec</span>
                </div>
            </div>
            <div className={s.adMeta}>
                <span className={s.reward}>+{ad.reward} VEs</span>
                <span className={watched ? s.statusDone : s.statusOn}>
                    <i /> {watched ? 'Already watched' : isWatching ? 'Watching' : 'Available'}
                </span>
            </div>
            <WatchButton status={status} disabled={isBusy && !isWatching} onClick={() => onWatch(ad)} />
        </article>
    );
}
