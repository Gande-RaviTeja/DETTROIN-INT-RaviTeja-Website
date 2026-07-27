import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function ScratchRevealLogo({
  imageSrc = '/welcome-scratchpad-bg.png',
  maskColor = '#C8CCD4',
  brushRadius = 28,
  onRevealComplete,
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [revealPercent, setRevealPercent] = useState(0);
  const [isFullyRevealed, setIsFullyRevealed] = useState(false);

  const isScratching = useRef(false);
  const lastPos = useRef(null);
  const animationFrameId = useRef(null);
  const cursorPos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, rect.width, rect.height);

    ctx.fillStyle = maskColor;
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.strokeStyle = 'rgba(11, 35, 65, 0.04)';
    ctx.lineWidth = 1;
    for (let i = 0; i < rect.width; i += 30) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, rect.height);
      ctx.stroke();
    }
  }, [maskColor]);

  useEffect(() => {
    initCanvas();
    window.addEventListener('resize', initCanvas);
    return () => window.removeEventListener('resize', initCanvas);
  }, [initCanvas]);

  const checkScratchPercentage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isFullyRevealed) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = Math.floor(canvas.width);
    const height = Math.floor(canvas.height);

    try {
      const imageData = ctx.getImageData(0, 0, width, height);
      const pixels = imageData.data;
      let transparentPixels = 0;
      const totalPixels = pixels.length / 16;

      for (let i = 3; i < pixels.length; i += 16) {
        if (pixels[i] === 0) {
          transparentPixels++;
        }
      }

      const percent = Math.min(100, Math.round((transparentPixels / totalPixels) * 100));
      setRevealPercent(percent);

      if (percent >= 90 && !isFullyRevealed) {
        setIsFullyRevealed(true);
        if (onRevealComplete) onRevealComplete();
      }
    } catch {
    }
  }, [isFullyRevealed, onRevealComplete]);

  const eraseLine = (x1, y1, x2, y2) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || isFullyRevealed) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';

    const distance = Math.hypot(x2 - x1, y2 - y1);
    const steps = Math.max(1, Math.ceil(distance / 4));

    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = x1 + (x2 - x1) * t;
      const y = y1 + (y2 - y1) * t;

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, brushRadius);
      gradient.addColorStop(0, 'rgba(0,0,0,1)');
      gradient.addColorStop(0.6, 'rgba(0,0,0,0.85)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, brushRadius, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
    checkScratchPercentage();
  };

  useEffect(() => {
    const updateCursorLoop = () => {
      const pos = cursorPos.current;
      pos.x += (pos.targetX - pos.x) * 0.25;
      pos.y += (pos.targetY - pos.y) * 0.25;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.x - 14}px, ${pos.y - 14}px, 0)`;
      }

      animationFrameId.current = requestAnimationFrame(updateCursorLoop);
    };

    animationFrameId.current = requestAnimationFrame(updateCursorLoop);
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  const handlePointerDown = (e) => {
    isScratching.current = true;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left;
    const y = (e.clientY || e.touches?.[0]?.clientY) - rect.top;

    lastPos.current = { x, y };
    eraseLine(x, y, x, y);
  };

  const handlePointerMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX || e.touches?.[0]?.clientX;
    const clientY = e.clientY || e.touches?.[0]?.clientY;

    if (!clientX || !clientY) return;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    cursorPos.current.targetX = x;
    cursorPos.current.targetY = y;

    if (isScratching.current && lastPos.current) {
      eraseLine(lastPos.current.x, lastPos.current.y, x, y);
      lastPos.current = { x, y };
    }
  };

  const handlePointerUp = () => {
    isScratching.current = false;
    lastPos.current = null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col items-center justify-center w-full"
    >
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          handlePointerUp();
        }}
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
        className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 cursor-none select-none touch-none bg-white group"
      >
        <img
          src={imageSrc}
          alt="Vasant Valley School Campus Entrance Gate"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        <canvas
          ref={canvasRef}
          className={`absolute inset-0 z-10 w-full h-full transition-opacity duration-700 ${isFullyRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
        />

        {!isFullyRevealed && (
          <div
            className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center transition-opacity duration-500"
            style={{ opacity: Math.max(0, (40 - revealPercent) / 40) }}
          >
            <div className="px-7 py-3.5 rounded-full bg-[#0B2341]/90 backdrop-blur-md border-2 border-[#D4AF37] text-white shadow-[0_0_30px_rgba(212,175,55,0.85)] flex items-center gap-2.5 animate-pulse">
              <span className="text-[#D4AF37] text-xl">✨</span>
              <span className="font-serif font-bold text-lg sm:text-xl tracking-widest uppercase text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">
                SCRATCH ME
              </span>
              <span className="text-[#D4AF37] text-xl">✨</span>
            </div>
          </div>
        )}

        <div
          ref={cursorRef}
          className={`absolute top-0 left-0 z-30 w-7 h-7 rounded-full bg-white/90 border-2 border-white shadow-xl shadow-black/50 pointer-events-none transition-opacity duration-300 ${isHovered && !isFullyRevealed ? 'opacity-100 scale-110' : 'opacity-0 scale-75'
            }`}
          style={{ willChange: 'transform' }}
        />
      </div>

      <div className="mt-3 text-center">
        {!isFullyRevealed ? (
          <p className="text-xs font-medium text-gray-500 tracking-wider flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            Scratch surface to reveal full campus photo ({revealPercent}%)
          </p>
        ) : (
          <p className="text-xs font-semibold text-[#0B2341] tracking-wider uppercase flex items-center justify-center gap-1.5">
            <span className="text-[#D4AF37]">✦</span> Vasant Valley Campus Revealed <span className="text-[#D4AF37]">✦</span>
          </p>
        )}
      </div>
    </motion.div>
  );
}
