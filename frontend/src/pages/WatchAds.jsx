import { useCallback, useEffect, useState } from 'react';
import { Wallet, Coins, PlayCircle, ListChecks, RefreshCw } from 'lucide-react';
import AppLayout from '../components/layout/AppLayout';
import Hero from '../components/Hero';
import StatCard from '../components/StatCard';
import RewardInfo from '../components/RewardInfo';
import AdsList from '../components/AdsList';
import WatchModal from '../components/WatchModal';
import WeeklyChart from '../components/WeeklyChart';
import Streak from '../components/Streak';
import RecentEarnings from '../components/RecentEarnings';
import HowItWorks from '../components/HowItWorks';
import BonusBanner from '../components/BonusBanner';
import useTheme from '../hooks/useTheme';
import useCountdown from '../hooks/useCountdown';
import { ads as dummyAds, initialStats, recentEarnings } from '../data/ads';
import s from './WatchAds.module.css';

const DEMO_SECONDS = 5;      // demo timer (real app: ad.duration)
const REFRESH_SECONDS = 45;  // auto refresh interval
const WALLET_BALANCE = 2450; // dummy wallet balance shown in top bar

// Demo states via URL: ?demo=empty (no ads) or ?demo=done (all watched)
const demo = new URLSearchParams(window.location.search).get('demo');
const startAds = demo === 'empty' ? [] : demo === 'done' ? dummyAds.map((a) => ({ ...a, status: 'watched' })) : dummyAds;

const fmt = (sec) => `00:${String(Math.max(sec, 0)).padStart(2, '0')}`;

export default function WatchAds() {
    const [theme, toggleTheme] = useTheme();
    const [loading, setLoading] = useState(true);
    const [ads, setAds] = useState(startAds);
    const [stats, setStats] = useState(initialStats);
    const [recent, setRecent] = useState(recentEarnings);
    const [session, setSession] = useState(null); // { ad, left, done }

    // Fake fetch -> shows skeletons
    const refresh = useCallback(() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 900);
    }, []);
    useEffect(() => { refresh(); }, [refresh]);

    const [secondsLeft, resetTimer] = useCountdown(REFRESH_SECONDS, () => { if (!session) refresh(); });

    // Watch countdown; reward is given when it reaches 0
    useEffect(() => {
        if (!session || session.done) return;
        if (session.left <= 0) {
            const { ad } = session;
            setStats((p) => ({ ...p, today: p.today + ad.reward, lifetime: p.lifetime + ad.reward, weekly: p.weekly + ad.reward, watchedToday: p.watchedToday + 1 }));
            setRecent((r) => [{ id: Date.now(), brand: ad.brand, reward: ad.reward, time: 'Just now' }, ...r]);
            setAds((list) => list.map((a) => (a.id === ad.id ? { ...a, status: 'watched' } : a)));
            setSession({ ...session, done: true });
            return;
        }
        const t = setTimeout(() => setSession((p) => ({ ...p, left: p.left - 1 })), 1000);
        return () => clearTimeout(t);
    }, [session]);

    const remaining = ads.filter((a) => a.status === 'available').length;
    const handleRefresh = () => { resetTimer(); refresh(); };

    return (
        <AppLayout balance={WALLET_BALANCE + stats.today - initialStats.today} theme={theme} onToggleTheme={toggleTheme}>
            <main className={s.page}>
                <div className={s.inner}>
                    <Hero today={stats.today} goal={stats.dailyGoal} lifetime={stats.lifetime} available={remaining} completed={stats.watchedToday} />

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3">
                        <div className="col"><StatCard icon={Wallet} label="Today's Earnings" value={stats.today} suffix="VEs" hint="↑ 12% vs yesterday" color="#16a34a" /></div>
                        <div className="col"><StatCard icon={Coins} label="Total VEs Earned" value={stats.lifetime} suffix="VEs" hint="All time" color="#f5a623" /></div>
                        <div className="col"><StatCard icon={PlayCircle} label="Ads Watched Today" value={stats.watchedToday} hint="↑ 2 vs yesterday" color="#6c47e8" /></div>
                        <div className="col"><StatCard icon={ListChecks} label="Remaining Ads" value={remaining} hint="Start watching now!" color="#2563eb" /></div>
                    </div>

                    <RewardInfo />

                    <section>
                        <div className={s.listHead}>
                            <h4 className="mb-0">Available Ads <span className={s.pill}>{remaining} available</span></h4>
                            <button className={s.refreshBtn} onClick={handleRefresh} disabled={loading || !!session} aria-label="Refresh ads">
                                Auto refresh in {fmt(secondsLeft)} <RefreshCw size={15} className={loading ? s.spin : ''} />
                            </button>
                        </div>
                        <AdsList ads={ads} loading={loading} activeId={session && !session.done ? session.ad.id : null}
                            onWatch={(ad) => setSession({ ad, left: DEMO_SECONDS, done: false })} />
                        <p className={`${s.muted} text-center mt-3`}>No more ads? Check back later for new advertisements.</p>
                    </section>

                    <div className="row g-3">
                        <div className="col-12 col-md-6 col-xl-4"><Streak /></div>
                        <div className="col-12 col-md-6 col-xl-4"><RecentEarnings items={recent} /></div>
                        <div className="col-12 col-xl-4"><WeeklyChart total={stats.weekly} /></div>
                    </div>

                    <BonusBanner />
                    <HowItWorks />
                </div>
            </main>
            {session && <WatchModal session={session} total={DEMO_SECONDS} onClose={() => setSession(null)} />}
        </AppLayout>
    );
}
