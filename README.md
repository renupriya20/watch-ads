# VELOOP Rewards – Watch Ads Page

## Project Overview
A complete UI/UX redesign of the **Watch Ads** page of VELOOP Rewards, where users earn VEs (VELOOP Earn Tokens) by watching short advertisements. VEs can later be converted into real cash and withdrawn to a linked bank account. Built with dummy data only (no backend).

## Features
- Premium hero section with daily earnings progress
- Animated statistics counters
- 6 ad cards with reward badge, status and premium CTA (hover, loading, disabled, completed states)
- Ad-watching flow with countdown timer and reward success state
- Skeleton loading, empty and "all ads watched" states
- Daily streak, recent earnings timeline, weekly earnings chart
- Bonus reward banner (links to `/watchAd-bonus`) and "How It Works" section
- Sidebar + top bar shell (drawer on mobile), dark/light theme toggle
- Ripple CTA button, confetti celebration, auto-refresh timer
- Fully responsive (320px to ultra-wide)

## Demo States
Open with `?demo=empty` (no ads available) or `?demo=done` (all ads already watched).

## Technology Stack
React 19, Vite, Bootstrap 5, CSS Modules, Lucide React, React Icons, React Hooks

## Folder Structure
```
src/
  components/   # StatCard, Hero, AdCard, WatchButton, RewardInfo, ... (+ layout/)
  data/         # dummy data (ads.js)
  hooks/        # useCountUp, useCountdown, useTheme
  styles/       # global theme tokens (light/dark)
  pages/        # WatchAds.jsx, WatchAds.module.css
  main.jsx
```

## Installation
```bash
git clone <your-repo-url>
cd veloop-watchads
npm install
```

## Running the Project
```bash
npm run dev      # development
npm run build    # production build
npm run preview  # preview build
```

## Screenshots
https://github.com/renupriya20/watch-ads/blob/56a73ea4fc8a72aace1655ffd8dab28627d8a9d0/Screenshot%202026-11-02%20163642.png

## Live Demo
https://watch-ads-beta.vercel.app/

## Author
Renu Kumari – [GitHub](https://github.com/renupriya20)
