
export const ads = [
  { id: 1, brand: 'FinVerse Pro', tagline: 'The future of smart finance.', reward: 38, duration: 60, icon: 'finance', color: '#6c47e8', status: 'available' },
  { id: 2, brand: 'StrideX', tagline: 'Step up your game.', reward: 20, duration: 45, icon: 'shoe', color: '#16a34a', status: 'available' },
  { id: 3, brand: 'SafeNet VPN', tagline: 'Secure. Private. Fast.', reward: 15, duration: 20, icon: 'vpn', color: '#0891b2', status: 'available' },
  { id: 4, brand: 'Melody Beats', tagline: 'Feel every beat.', reward: 50, duration: 60, icon: 'music', color: '#ea7a1a', status: 'available', limited: true },
  { id: 5, brand: 'DriveEZ', tagline: 'Book rides easier.', reward: 20, duration: 40, icon: 'car', color: '#475569', status: 'available' },
  { id: 6, brand: 'ShopJoy', tagline: 'Best deals. Big savings.', reward: 15, duration: 25, icon: 'gift', color: '#a21caf', status: 'watched' },
];

export const initialStats = {
  today: 96,
  lifetime: 12450,
  watchedToday: 5,
  dailyGoal: 150,
  weekly: 1260,
};

export const weeklyData = [
  { day: 'Mon', value: 140 }, { day: 'Tue', value: 190 }, { day: 'Wed', value: 150 },
  { day: 'Thu', value: 200 }, { day: 'Fri', value: 210 }, { day: 'Sat', value: 220 },
  { day: 'Sun', value: 150 },
];

export const recentEarnings = [
  { id: 'r1', brand: 'StrideX', reward: 25, time: '18 mins ago' },
  { id: 'r2', brand: 'DriveEZ', reward: 20, time: '25 mins ago' },
  { id: 'r3', brand: 'ShopJoy', reward: 15, time: '1 hour ago' },
  { id: 'r4', brand: 'SafeNet VPN', reward: 18, time: '2 hours ago' },
];
