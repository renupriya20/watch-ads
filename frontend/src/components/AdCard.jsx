import { Clock } from 'lucide-react';
import WatchButton from './WatchButton';
import { adIcons } from '../utils/adIcons';
import s from '../pages/WatchAds.module.css';

const AdCard = ({ ad, onWatch, isWatching, isBusy }) => {
    const Icon = adIcons[ad.icon];
    const watched = ad.status === 'watched';
    const status = watched ? 'completed' : isWatching ? 'loading' : 'idle';

    return (
        <article className={`${s.card} ${s.adCard} ${s.fade}`}>
            {ad.limited && <span className={s.limited}>⚡ Limited Time Bonus</span>}

            <div className={s.adTop}>

                <div className={s.adArt} style={{ background: `linear-gradient(135deg, ${ad.color}, ${ad.color}99)` }}>
                    <span className={s.sponsored}>Sponsored</span>
                    <Icon size={36} color="#fff" />
                </div>

                <div className={s.adInfo}>
                    <h3>{ad.brand}</h3>
                    <p className={s.muted}>{ad.tagline}</p>
                    <div className={s.pills}>
                        <span className={s.metaPill}><Clock size={12} /> {ad.duration} sec</span>

                        <span className={watched ? s.statusDone : s.statusOn}><i />
                            {watched ? 'Already watched' : isWatching ? 'Watching' : 'Available'}
                        </span>
                    </div>
                </div>
            </div>

            <div className={s.rewardRow}>
                <small>You earn</small>
                <span className={s.reward}>+{ad.reward} VEs</span>
            </div>

            <WatchButton status={status} disabled={isBusy && !isWatching} onClick={() => onWatch(ad)} />
        </article>
    );
};

export default AdCard;
