'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text?: string;
  className?: string;
}

export default function GlitchText({ text = 'Bilalli Blendz', className = '' }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const finalText = text;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';
    let position = 0;
    let scrambleCount = 0;
    
    const scrambleInterval = setInterval(() => {
      if (position >= finalText.length) {
        clearInterval(scrambleInterval);
        setDisplayText(finalText);
        return;
      }

      const currentChar = finalText[position];
      const isSpecialChar = currentChar === ' ' || currentChar === '&' || currentChar === '.';
      
      if (isSpecialChar || scrambleCount >= 5) {
        position++;
        scrambleCount = 0;
        setDisplayText(finalText.slice(0, position) + (position < finalText.length ? chars[Math.floor(Math.random() * chars.length)] : ''));
      } else {
        scrambleCount++;
        setDisplayText(() => {
          const scrambled = finalText.slice(0, position) + chars[Math.floor(Math.random() * chars.length)];
          return scrambled + (position + 1 < finalText.length ? chars[Math.floor(Math.random() * chars.length)] : '');
        });
      }
    }, 25);

    // Glitch effect starts after text is complete
    const glitchInterval = setInterval(() => {
      if (displayText === finalText) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 100);
      }
    }, 2000);

    return () => {
      clearInterval(scrambleInterval);
      clearInterval(glitchInterval);
    };
  }, [text]);

  return (
    <div className="relative glitch-container">
      <motion.h1
        className={`${className} relative z-10 font-mono text-white`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {displayText}
      </motion.h1>
      <motion.h1
        className={`${className} absolute top-0 left-0 text-white opacity-50 z-0 cyber-glitch-1 font-mono ${
          isGlitching ? 'active' : ''
        }`}
      >
        {displayText}
      </motion.h1>
      <motion.h1
        className={`${className} absolute top-0 left-0 text-white opacity-50 z-0 cyber-glitch-2 font-mono ${
          isGlitching ? 'active' : ''
        }`}
      >
        {displayText}
      </motion.h1>
      <style jsx global>{`
        .glitch-container {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }

        @keyframes cyber-glitch-1 {
          0% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            transform: translate(0);
          }
          20% {
            clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
            transform: translate(-10px, 10px);
          }
          40% {
            clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
            transform: translate(10px, -10px);
          }
          60% {
            clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
            transform: translate(-10px, 10px);
          }
          80% {
            clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
            transform: translate(10px, -10px);
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            transform: translate(0);
          }
        }

        @keyframes cyber-glitch-2 {
          0% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            transform: translate(0);
          }
          20% {
            clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
            transform: translate(10px, -10px);
          }
          40% {
            clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
            transform: translate(-10px, 10px);
          }
          60% {
            clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
            transform: translate(10px, -10px);
          }
          80% {
            clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
            transform: translate(-10px, 10px);
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            transform: translate(0);
          }
        }

        .cyber-glitch-1, .cyber-glitch-2 {
          opacity: 0.5;
        }

        .cyber-glitch-1.active {
          animation: cyber-glitch-1 0.2s infinite;
        }

        .cyber-glitch-2.active {
          animation: cyber-glitch-2 0.2s infinite;
        }
      `}</style>
    </div>
  );
} 