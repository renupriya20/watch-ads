import { CheckCircle2 } from 'lucide-react';
import Confetti from './Confetti';
import s from '../pages/WatchAds.module.css';

export default function WatchModal({ session, total, onClose }) {
    const { ad, left, done } = session;
    const percent = ((total - left) / total) * 100;

    return (
        <div className={s.overlay}>
            {done && <Confetti />}
            <div className={`${s.modal} ${s.pop}`} role="dialog" aria-modal="true">
                {done ? (
                    <>
                        <CheckCircle2 size={64} color="var(--green)" className={s.pop} />
                        <h3>Reward Successfully Earned!</h3>
                        <div className={s.bigReward}>+{ad.reward} VEs</div>
                        <p className={s.muted}>Thanks for watching {ad.brand}. Your balance has been updated.</p>
                        <button className={s.watchBtn} onClick={onClose}>Continue Earning</button>
                    </>
                ) : (
                    <>
                        <h3>{ad.brand}</h3>
                        <p className={s.muted}>Please keep watching to earn your reward.</p>
                        <div className={s.player}>▶ Ad playing...</div>
                        <div className={s.track}><div className={s.fill} style={{ width: `${percent}%` }} /></div>
                        <strong>{left}s remaining</strong>
                    </>
                )}
            </div>
        </div>
    );
}
