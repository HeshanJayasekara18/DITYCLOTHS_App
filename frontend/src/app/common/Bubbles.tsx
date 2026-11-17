// Soap bubbles drifting upward. Positions are fixed so server and client render the same markup.
const bubbles = [
  { left: '6%', size: 18, delay: 0, duration: 13 },
  { left: '14%', size: 34, delay: 4, duration: 16 },
  { left: '27%', size: 12, delay: 7, duration: 11 },
  { left: '41%', size: 26, delay: 2, duration: 15 },
  { left: '55%', size: 14, delay: 9, duration: 12 },
  { left: '66%', size: 40, delay: 5, duration: 18 },
  { left: '78%', size: 20, delay: 1, duration: 14 },
  { left: '89%', size: 28, delay: 8, duration: 17 },
  { left: '95%', size: 10, delay: 3, duration: 10 },
];

const Bubbles = ({ className = '' }: { className?: string }) => (
  <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
    {bubbles.map((b, i) => (
      <span
        key={i}
        className="absolute -bottom-12 animate-rise rounded-full border border-white/70 bg-gradient-to-br from-white/70 via-white/20 to-transparent shadow-[inset_-4px_-4px_10px_rgba(255,255,255,0.5)]"
        style={{
          left: b.left,
          width: b.size,
          height: b.size,
          animationDelay: `${b.delay}s`,
          animationDuration: `${b.duration}s`,
        }}
      />
    ))}
  </div>
);

export default Bubbles;
