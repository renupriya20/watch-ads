import { useMemo } from 'react';
import s from '../pages/WatchAds.module.css';

const COLORS = ['#6c47e8', '#f5a623', '#16a34a', '#ea580c', '#2563eb'];

// Lightweight CSS confetti (no extra dependency)
export default function Confetti() {
  const pieces = useMemo(() => Array.from({ length: 36 }, (_, i) => ({
    id: i, left: Math.random() * 100, delay: Math.random() * 0.4, dur: 1.4 + Math.random() * 1.2, color: COLORS[i % COLORS.length],
  })), []);
  return (
    <div className={s.confetti} aria-hidden="true">
      {pieces.map((p) => (
        <i key={p.id} style={{ left: `${p.left}%`, background: p.color, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s` }} />
      ))}
    </div>
  );
}
