import { Play, Coins } from 'lucide-react';
import { FaMoneyBillWave } from 'react-icons/fa';
import s from '../pages/WatchAds.module.css';

const STEPS = [
    { icon: Play, title: 'Watch', text: 'Watch short ads and complete the timer.' },
    { icon: Coins, title: 'Earn', text: 'Earn VEs instantly after completing the ad.' },
    { icon: FaMoneyBillWave, title: 'Withdraw', text: 'Convert your VEs to real cash and withdraw to your bank.' },
];

export default function HowItWorks() {
    return (
        <section className={`${s.card} ${s.fade}`}>
            <strong>How It Works</strong>
            <div className={s.steps}>
                {STEPS.map(({ icon: Icon, title, text }, i) => (
                    <div key={title} className={s.step}>
                        <span className={s.stepNo}>{i + 1}</span>
                        <Icon size={26} color="#6c47e8" />
                        <div>
                            <strong>{title}</strong>
                            <p className="mb-0 text-muted small">{text}</p>
                        </div>
                    </div>
                ))}
                <button className={s.outlineBtn}>View My Wallet →</button>
            </div>
        </section>
    );
}
