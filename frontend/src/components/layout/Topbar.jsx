import { Bell, Menu, Moon, Sun } from 'lucide-react';
import s from './Layout.module.css';

export default function Topbar({ balance, theme, onToggleTheme, onMenu }) {
    return (
        <header className={s.topbar}>
            <button className={`${s.iconBtn} ${s.menuBtn}`} onClick={onMenu} aria-label="Open menu"><Menu size={20} /></button>
            <div className={s.title}><h2>Watch Ads</h2><span>Watch ads and earn VEs</span></div>
            <button className={s.iconBtn} onClick={onToggleTheme} aria-label="Toggle theme">
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button className={s.iconBtn} aria-label="Notifications"><Bell size={18} /><i className={s.dot} /></button>
            <div className={s.balance}><i className={s.coin} /><span>{balance.toLocaleString()}</span><span>VEs</span></div>
            <div className={s.avatar}>SM</div>
        </header>
    );
}
