import HeroArt from './HeroArt';
import s from '../pages/WatchAds.module.css';

// Hero: intro text, daily progress and quick summary chips
export default function Hero({ today, goal, lifetime, available, completed }) {
  const percent = Math.min(Math.round((today / goal) * 100), 100);
  const chips = [
    ['Total VEs Earned', lifetime.toLocaleString()],
    ["Today's Earnings", `${today} VEs`],
    ['Available Ads', available],
    ['Ads Completed', completed],
  ];
  return (
    <section className={`${s.hero} ${s.fade}`}>
      <div className={s.heroText}>
        <h1>Watch Ads &amp; Earn <span>Real Rewards</span></h1>
        <p>Watch short advertisements and earn VEs. Convert VEs into real cash and withdraw to your linked bank account.</p>
        <div className={s.chips}>
          {chips.map(([label, value]) => (
            <div key={label} className={s.chip}><small>{label}</small><strong>{value}</strong></div>
          ))}
        </div>
        <div className={s.progressHead}>
          <strong>Daily Earnings Progress</strong>
          <span>{today} / {goal} VEs</span>
        </div>
        <div className={s.track} role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
          <div className={s.fill} style={{ width: `${percent}%` }} />
        </div>
        <small className={s.muted}>
          {percent >= 100 ? 'Daily goal complete! 🎉' : "Keep going! You're so close to your daily goal."}
        </small>
      </div>
      <div className={s.heroArt}><HeroArt className={s.float} /></div>
    </section>
  );
}
