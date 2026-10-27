import { ShieldCheck, Coins, Banknote, Landmark } from 'lucide-react';
import s from '../pages/WatchAds.module.css';

const POINTS = [
    { icon: Coins, title: 'Earn VEs', text: 'Users earn VEs by watching advertisements.' },
    { icon: Banknote, title: 'Convert to cash', text: 'Earned VEs can later be converted into real cash.' },
    { icon: Landmark, title: 'Withdraw to bank', text: "Withdraw to your linked bank account once the minimum withdrawal conditions are met." },
];

// Reward information banner with 3 info cards
export default function RewardInfo() {
    return (
        <section className={`${s.card} ${s.banner} ${s.fade}`}>
            <div className={s.bannerHead}>
                <ShieldCheck size={30} color="var(--green)" />
                <div><strong>Your VEs. Your Rewards.</strong><div className={s.muted}>Secure, transparent and rewarding.</div></div>
            </div>
            <div className={s.infoGrid}>
                {POINTS.map(({ icon: Icon, title, text }) => (
                    <div key={title} className={s.infoCard}>
                        <Icon size={22} color="var(--primary)" />
                        <div><strong>{title}</strong><p className="mb-0 small">{text}</p></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
