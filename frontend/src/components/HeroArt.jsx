// Inline SVG illustration: video player card + VE coin stack
export default function HeroArt({ className }) {
    return (
        <svg viewBox="0 0 320 220" className={className} role="img" aria-label="Video ad earning coins">
            <defs>
                <linearGradient id="vg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8b6bff" /><stop offset="1" stopColor="#5b34d6" /></linearGradient>
            </defs>
            <ellipse cx="160" cy="205" rx="130" ry="9" fill="#6c47e8" opacity=".15" />
            <rect x="70" y="28" width="190" height="125" rx="18" fill="#a78bfa" opacity=".5" />
            <rect x="40" y="45" width="195" height="125" rx="18" fill="url(#vg)" />
            <circle cx="137" cy="100" r="30" fill="#fff" opacity=".95" />
            <path d="M127 84 L158 100 L127 116Z" fill="#6c47e8" />
            <rect x="60" y="150" width="120" height="6" rx="3" fill="#fff" opacity=".35" />
            <rect x="60" y="150" width="62" height="6" rx="3" fill="#fff" />
            {[0, 1].map((i) => (
                <g key={i} style={{ transformBox: 'fill-box' }}>
                    <ellipse cx="255" cy={178 - i * 22} rx="38" ry="13" fill="#d98a0b" />
                    <rect x="217" y={156 - i * 22} width="76" height="22" fill="#f5a623" />
                    <ellipse cx="255" cy={156 - i * 22} rx="38" ry="13" fill="#fcd34d" />
                </g>
            ))}
            <text x="255" y="139" textAnchor="middle" fontSize="16" fontWeight="800" fill="#b45309">VE</text>
            <path d="M285 40 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4z" fill="#f5a623" />
            <path d="M30 30 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" fill="#8b6bff" />
        </svg>
    );
}
