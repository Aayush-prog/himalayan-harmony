'use client';

import { useState, useEffect } from 'react';

interface CountdownProps {
    targetDate: string; // ISO string e.g., "2026-03-28T00:00:00"
}

export default function Countdown({ targetDate }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const target = new Date(targetDate).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = target - now;

            if (difference <= 0) {
                clearInterval(interval);
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="inline-block relative mt-8 md:mt-12 group">
            <div className="absolute inset-0 bg-primary/20 transform skew-x-[-10deg] blur-lg group-hover:blur-xl transition-all duration-500"></div>
            <div className="relative bg-[#0a193c]/90 px-6 sm:px-8 md:px-12 py-5 md:py-6 border border-white/10 backdrop-blur-md w-full max-w-md md:max-w-none md:w-auto transform skew-x-[-10deg] hover:border-primary/50 transition-colors italic">
                <div className="transform skew-x-[10deg] text-center">
                    <h3 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary mb-3 font-bold">Race Start Countdown</h3>
                    <div className="flex items-start justify-center gap-3 sm:gap-5 md:gap-8">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tighter filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{timeLeft.days}</span>
                            <span className="text-[9px] sm:text-[10px] uppercase text-gray-400 mt-1 font-bold tracking-wider">Days</span>
                        </div>
                        <div className="text-2xl sm:text-3xl md:text-5xl font-black text-primary/50 self-start mt-1">:</div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tighter filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{timeLeft.hours.toString().padStart(2, '0')}</span>
                            <span className="text-[9px] sm:text-[10px] uppercase text-gray-400 mt-1 font-bold tracking-wider">Hrs</span>
                        </div>
                        <div className="text-2xl sm:text-3xl md:text-5xl font-black text-primary/50 self-start mt-1">:</div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tighter filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                            <span className="text-[9px] sm:text-[10px] uppercase text-gray-400 mt-1 font-bold tracking-wider">Min</span>
                        </div>
                        <div className="text-2xl sm:text-3xl md:text-5xl font-black text-primary/50 self-start mt-1">:</div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tighter filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                            <span className="text-[9px] sm:text-[10px] uppercase text-gray-400 mt-1 font-bold tracking-wider">Sec</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
