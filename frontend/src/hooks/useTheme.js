import { useEffect, useState } from 'react';

const KEY = 'veloop-theme';

// Light/Dark theme state, saved in localStorage
export default function useTheme() {
    const [theme, setTheme] = useState(() => {
        try { return localStorage.getItem(KEY) || 'light'; } catch { return 'light'; }
    });
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        try { localStorage.setItem(KEY, theme); } catch { /* ignore */ }
    }, [theme]);
    return [theme, () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))];
}
