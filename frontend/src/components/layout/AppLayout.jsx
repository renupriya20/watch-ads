import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import s from './Layout.module.css';

// App shell: sidebar (drawer on mobile) + top bar + page content
export default function AppLayout({ balance, theme, onToggleTheme, children }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={s.shell}>
            <Sidebar open={open} onClose={() => setOpen(false)} />
            {open && <div className={s.backdrop} onClick={() => setOpen(false)} />}
            <div className={s.main}>
                <Topbar balance={balance} theme={theme} onToggleTheme={onToggleTheme} onMenu={() => setOpen(true)} />
                {children}
            </div>
        </div>
    );
}
