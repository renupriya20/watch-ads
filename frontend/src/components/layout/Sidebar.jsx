import { Home, PlayCircle, Gift, Wallet, Clock, User, Settings, HelpCircle, Crown } from 'lucide-react';
import s from './Layout.module.css';

const NAV = [
    { label: 'Dashboard', icon: Home },
    { label: 'Watch Ads', icon: PlayCircle, active: true },
    { label: 'Rewards', icon: Gift },
    { label: 'Wallet', icon: Wallet },
    { label: 'History', icon: Clock },
    { label: 'Profile', icon: User },
    { label: 'Settings', icon: Settings },
    { label: 'Help & Support', icon: HelpCircle },
];

export default function Sidebar({ open, onClose }) {
    return (
        <aside className={`${s.sidebar} ${open ? s.open : ''}`}>
            <div className={s.logo}><b>V</b>ELOOP<small>REWARDS</small></div>
            {NAV.map(({ label, icon: Icon, active }) => (
                <a key={label} href="#" className={`${s.link} ${active ? s.active : ''}`}
                    onClick={(e) => { e.preventDefault(); onClose(); }}>
                    <Icon size={18} /> {label}
                </a>
            ))}
            <div className={s.premium}>
                <strong><Crown size={14} color="#f5a623" /> Go Premium</strong>
                <div>Higher earnings, exclusive offers and more.</div>
                <button>Upgrade Now →</button>
            </div>
            <div className={s.copy}>© 2026 VELOOP Rewards. All rights reserved.</div>
        </aside>
    );
}
