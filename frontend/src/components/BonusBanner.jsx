import { Gift } from 'lucide-react';
import s from '../pages/WatchAds.module.css';

// Bonus banner - /watchAd-bonus page par redirect karta hai
export default function BonusBanner() {
    return (
        <a href="/watchAd-bonus" className={s.bonus}>
            <Gift size={28} />
            <div>
                <strong>Bonus Rewards available!</strong>
                <div className="small">Complete special tasks and earn extra VEs.</div>
            </div>
            <span className={s.bonusGo}>Claim →</span>
        </a>
    );
}
