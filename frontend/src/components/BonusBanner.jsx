import { Gift, ArrowRight } from 'lucide-react';
import s from '../pages/WatchAds.module.css';

const BonusBanner = () => {
    return (
        <a href="/watchAd-bonus" className={s.bonus}>
            <span className={s.bonusIcon}>
                <Gift size={30} />
            </span>
            <div className={s.bonusBody}>
                <span className={s.bonusTag}>BONUS REWARD</span>
                <strong>Watch 3 bonus ads and earn +100 VEs extra</strong>

                <div className={s.bonusTrack}>
                    <i style={{ width: '33%' }} />
                </div>

                <small>1 of 3 bonus ads completed</small>
            </div>
            <span className={s.bonusBtn}>Claim Bonus <ArrowRight size={16} /></span>
        </a>
    );
}

export default BonusBanner;