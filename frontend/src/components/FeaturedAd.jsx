import { Clock, Star } from 'lucide-react';
import WatchButton from './WatchButton';
import { adIcons } from '../utils/adIcons';
import s from '../pages/WatchAds.module.css';

const FeaturedAd = ({ ad, onWatch, isWatching, isBusy }) => {
    const Icon = adIcons[ad.icon];
    return (
        <section className={`${s.featured} ${s.fade}`}>
            <div className={s.fArt}><Icon size={44} color="#fff" /></div>
            <div className={s.fBody}>
                <span className={s.fTag}><Star size={12} /> Featured · Highest reward</span>
                <h3>{ad.brand}</h3>
                <p>{ad.tagline}</p>
                <div className={s.fChips}>
                    <span className={s.fChip}>+{ad.reward} VEs</span>
                    <span className={s.fChip}><Clock size={14} /> {ad.duration} sec</span>
                </div>
            </div>
            <div className={s.fAction}>
                <WatchButton className={s.btnLight} status={isWatching ? 'loading' : 'idle'} disabled={isBusy && !isWatching} onClick={() => onWatch(ad)} />
                <small>Watch the full ad to earn your reward</small>
            </div>
        </section>
    );
}
export default FeaturedAd;