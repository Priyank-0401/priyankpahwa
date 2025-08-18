import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/*
  SkillsBanner: Layout-only component.
  Variants:
  - orbit (default): positions items on a circle and rotates the ring continuously.
  - lineTilt: straight marquee with subtle continuous rotateX for 3D feel.
  Both variants use a horizontal marquee on small screens.
*/
const SkillsBanner = ({
  items = [],
  size = 360,
  radius = 130,
  duration = 28,
  renderItem,
  variant = 'orbit', // 'orbit' | 'lineTilt'
  direction = 'left', // for lineTilt marquee: 'left' or 'right'
}) => {
  const count = items.length;
  const angleStep = 360 / Math.max(count, 1);

  // lineTilt variant: CSS marquee with pause-on-hover that resumes from current position
  if (variant === 'lineTilt') {
    const [pausedDesktop, setPausedDesktop] = useState(false);
    const [pausedMobile, setPausedMobile] = useState(false);

    // Inject keyframes once (scoped by component mounting)
    useEffect(() => {
      const styleEl = document.createElement('style');
      styleEl.setAttribute('data-skills-banner-marquee', '');
      styleEl.innerHTML = `
        @keyframes marquee-left { from { transform: translateX(0%); } to { transform: translateX(-50%); } }
        @keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0%); } }
      `;
      document.head.appendChild(styleEl);
      return () => { document.head.removeChild(styleEl); };
    }, []);

    const animName = direction === 'right' ? 'marquee-right' : 'marquee-left';

    return (
      <div className="w-full">
        {/* Desktop/tablet */}
        <div
          className="hidden md:block overflow-hidden py-14"
          style={{ perspective: 900 }}
          onMouseEnter={() => setPausedDesktop(true)}
          onMouseLeave={() => setPausedDesktop(false)}
        >
          <div
            className="flex gap-7 md:gap-9 will-change-transform"
            style={{ width: '200%', animation: `${animName} 26s linear infinite`, animationPlayState: pausedDesktop ? 'paused' : 'running' }}
          >
            {[...items, ...items].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.06, filter: 'drop-shadow(0 8px 18px rgba(56,189,248,0.25))' }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="shrink-0"
              >
                {renderItem ? renderItem(item, idx) : null}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile marquee */}
        <div
          className="md:hidden w-full overflow-hidden py-8"
          onMouseEnter={() => setPausedMobile(true)}
          onMouseLeave={() => setPausedMobile(false)}
        >
          <div
            className="flex gap-4"
            style={{ width: '200%', animation: `${animName} 20s linear infinite`, animationPlayState: pausedMobile ? 'paused' : 'running' }}
          >
            {[...items, ...items].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.08 }}
                className="shrink-0"
              >
                {renderItem ? renderItem(item, idx) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* 3D depth wrapper */}
      <div className="hidden md:flex items-center justify-center" style={{ perspective: 900 }}>
        <motion.div
          className="relative"
          style={{ width: size, height: size }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: 'linear', duration }}
        >
          {/* Circular ring */}
          <div className="absolute inset-0 rounded-full opacity-20" style={{
            background: 'radial-gradient(ellipse at center, rgba(148,163,184,0.15) 0%, rgba(30,41,59,0.0) 60%)'
          }} />

          {items.map((item, idx) => {
            const angle = idx * angleStep;
            // Position point on circle then un-rotate child to keep upright
            const transform = `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`;
            return (
              <div
                key={idx}
                className="absolute left-1/2 top-1/2"
                style={{ transform, transformOrigin: '0 0' }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, filter: 'drop-shadow(0 6px 16px rgba(255,255,255,0.25))' }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  className="select-none"
                >
                  {renderItem ? renderItem(item, idx) : null}
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Mobile marquee fallback */}
      <div className="md:hidden w-full overflow-hidden py-4">
        <motion.div
          className="flex gap-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ width: '200%' }}
        >
          {[...items, ...items].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08 }}
              className="shrink-0"
            >
              {renderItem ? renderItem(item, idx) : null}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsBanner;
