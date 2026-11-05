import { Coins, ListChecks, ShieldCheck, Banknote } from 'lucide-react';
import { earningRules as r } from '../data/ads';
import s from '../pages/WatchAds.module.css';

const EarningRules = ({ adsWatched }) => {
    const used = Math.min((adsWatched / r.dailyAdLimit) * 100, 100);
    return (
        <section className={`${s.card} ${s.fade}`}>
            <h4 className={s.sectionTitle}>Earning Rules &amp; Limits</h4>
            <div className={s.rulesGrid}>

                <div className={s.ruleTile}>
                    <span className={s.ruleIcon}><Coins size={20} /></span>
                    <small className={s.muted}>Reward per ad</small>
                    <span className={s.ruleValue}>{r.minReward} – {r.maxReward} VEs</span>
                    <small className={s.muted}>Longer ads usually pay more.</small>
                </div>

                <div className={s.ruleTile}>
                    <span className={s.ruleIcon}><ListChecks size={20} /></span>
                    <small className={s.muted}>Daily ad limit</small>
                    <span className={s.ruleValue}>{adsWatched} / {r.dailyAdLimit} ads</span>
                    <div className={s.track}><div className={s.fill} style={{ width: `${used}%` }} /></div>
                </div>

                <div className={s.ruleTile}>
                    <span className={s.ruleIcon}><ShieldCheck size={20} /></span>
                    <small className={s.muted}>Earning rule</small>
                    <span className={s.ruleValue}>Watch the full ad</span>
                    <small className={s.muted}>Closing or skipping early gives no reward.</small>
                </div>

                <div className={s.ruleTile}>
                    <span className={s.ruleIcon}><Banknote size={20} /></span>
                    <small className={s.muted}>Withdrawal</small>
                    <span className={s.ruleValue}>Min {r.minWithdrawal.toLocaleString()} VEs</span>
                    <small className={s.muted}>Paid to your linked bank in {r.payoutDays}.</small>
                </div>
            </div>
        </section>
    );
}

export default EarningRules;