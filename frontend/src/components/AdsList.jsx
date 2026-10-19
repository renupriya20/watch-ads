import { PartyPopper, Inbox } from 'lucide-react';
import AdCard from './AdCard';
import s from '../pages/WatchAds.module.css';

export default function AdsList({ ads, loading, activeId, onWatch }) {
    if (loading) {
        return (
            <div className="row g-3">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="col-12 col-md-6 col-xl-4">
                        <div className={`${s.card} ${s.skeleton}`} />
                    </div>
                ))}
            </div>
        );
    }

    if (ads.length === 0) {
        return (
            <div className={`${s.card} ${s.empty}`}>
                <Inbox size={44} />
                <h4>No ads available right now</h4>
                <p className={s.muted}>Check back later for new advertisements.</p>
            </div>
        );
    }

    const allDone = ads.every((a) => a.status === 'watched');

    return (
        <>
            {allDone && (
                <div className={`${s.card} ${s.empty}`}>
                    <PartyPopper size={44} />
                    <h4>You've watched all ads for now!</h4>
                    <p className={s.muted}>New ads arrive soon. Come back later.</p>
                </div>
            )}
            <div className="row g-3">
                {ads.map((ad) => (
                    <div key={ad.id} className="col-12 col-md-6 col-xl-4">
                        <AdCard
                            ad={ad}
                            onWatch={onWatch}
                            isWatching={activeId === ad.id}
                            isBusy={activeId !== null}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
