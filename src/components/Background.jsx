import React, { useEffect, useRef } from 'react';

export default function Background() {
  const ref = useRef(null);
  const rafRef = useRef(null);
  const stateRef = useRef({ mx: 0, my: 0, lx: 0, ly: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const mx = (e.clientX - cx) / rect.width; // -0.5 .. 0.5
      const my = (e.clientY - cy) / rect.height;
      stateRef.current.mx = mx;
      stateRef.current.my = my;
      if (!rafRef.current) rafRef.current = requestAnimationFrame(update);
    };

    const onLeave = () => {
      stateRef.current.mx = 0;
      stateRef.current.my = 0;
      if (!rafRef.current) rafRef.current = requestAnimationFrame(update);
    };

    const update = () => {
      rafRef.current = null;
      const s = stateRef.current;
      // smoothing
      s.lx += (s.mx - s.lx) * 0.12;
      s.ly += (s.my - s.ly) * 0.12;
      el.style.setProperty('--bg-mx', String(s.lx));
      el.style.setProperty('--bg-my', String(s.ly));
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerleave', onLeave);
    window.addEventListener('blur', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('blur', onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={ref} className="dynamic-bg" aria-hidden="true">
      <div className="dynamic-bg__blob dynamic-bg__blob--one" />
      <div className="dynamic-bg__blob dynamic-bg__blob--two" />
      <div className="dynamic-bg__blob dynamic-bg__blob--three" />
      <div className="dynamic-bg__particles" />
    </div>
  );
}
