import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [hoverState, setHoverState] = useState(false);
  const [hoverText, setHoverText] = useState('');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setHoverState(true);
        setHoverText(target.getAttribute('data-cursor-text') || '');
      } else if (e.target.closest('button, a, input, select, textarea, [role="button"]')) {
        setHoverState(true);
        setHoverText('');
      } else {
        setHoverState(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    const followInterval = requestAnimationFrame(() => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
    });
    return () => cancelAnimationFrame(followInterval);
  }, [position, trailingPos]);

  // Hide cursor on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Primary Dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#00f3ff] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />

      {/* Trailing Neon Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-[#00f3ff]/60 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out flex items-center justify-center ${
          hoverState
            ? 'w-16 h-16 bg-[#00f3ff]/15 border-[#ccff00] scale-110 shadow-[0_0_20px_rgba(0,243,255,0.4)]'
            : 'w-8 h-8 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      >
        {hoverText && (
          <span className="text-[9px] font-bold tracking-widest uppercase text-[#ccff00] text-center px-1">
            {hoverText}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomCursor;
