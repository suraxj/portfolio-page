import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
      setIsMobile(mobile);
    };
    checkDevice();

    if (isMobile) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('card-hover') ||
        target.closest('.card-hover') ||
        target.closest('.tool-card') ||
        target.closest('.project-card');

      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    let frameId;
    const animateRing = () => {
      setRingPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx / 5,
          y: prev.y + dy / 5,
        };
      });
      frameId = requestAnimationFrame(animateRing);
    };

    frameId = requestAnimationFrame(animateRing);
    return () => cancelAnimationFrame(frameId);
  }, [position, isMobile]);

  if (isMobile) return null;

  return (
    <div className={isHovering ? 'custom-cursor-hover' : ''}>
      <div
        className="custom-cursor"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <div
        className="custom-cursor-ring"
        style={{ left: `${ringPosition.x}px`, top: `${ringPosition.y}px` }}
      ></div>
    </div>
  );
}
