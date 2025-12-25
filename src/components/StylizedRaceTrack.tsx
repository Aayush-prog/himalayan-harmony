'use client';

import { useState } from 'react';

interface Checkpoint {
    id: number;
    name: string;
    x: number;
    y: number; // ViewBox coordinates
    description?: string;
    isStart?: boolean;
    isFinish?: boolean;
}

const StylizedRaceTrack = () => {
    const [activeCp, setActiveCp] = useState<Checkpoint | null>(null);

    // Redrawing the path to fill the 800x600 ViewBox significantly more.
    // Simulating a 3D "tilted" perspective by keeping the top narrower/flatter? 
    // Actually, just filling the space is prioritized based on user request.

    const trackPath = `
    M 700 450
    C 750 480, 780 400, 750 350
    S 650 300, 600 350
    S 500 500, 400 450
    S 450 300, 400 250
    S 300 100, 200 150
    S 100 250, 50 350
    C 20 420, 100 550, 200 500
    S 350 400, 450 500
  `;
    // Adjusted path to end near start or spiral? 
    // Let's do a loop that covers the whole area.

    // Revised Path (covers 50,50 to 750,550)
    const mainPath = `
    M 680 500 
    C 750 520, 780 400, 720 350 
    S 550 400, 500 450 
    S 350 550, 250 500 
    C 150 450, 50 400, 80 300 
    S 200 150, 350 100 
    S 600 50, 650 150 
    S 700 300, 680 500
  `;

    // Checkpoints mapped to the new path coordinates
    const checkpoints: Checkpoint[] = [
        { id: 1, name: "Start: Pak Tam Chung", x: 680, y: 500, description: "The adventure begins at the gateway to Sai Kung.", isStart: true },
        { id: 2, name: "CP1: East Dam", x: 720, y: 350, description: "Marvel at the hexagonal columns of the Geopark." },
        { id: 3, name: "CP2: Ham Tin", x: 500, y: 450, description: "Pristine white sands and azure waters." },
        { id: 4, name: "CP3: Kei Ling Ha", x: 250, y: 500, description: "A tough climb leads to breathtaking ridge lines." },
        { id: 5, name: "CP4: Gilwell Camp", x: 80, y: 300, description: "Halfway point. Rest, refuel, and push on." },
        { id: 6, name: "CP5: Beacon Hill", x: 350, y: 100, description: "City lights shimmer below the Lion Rock ridge." },
        { id: 7, name: "Finish: Tai Mo Shan", x: 650, y: 150, description: "Summit Hong Kong's highest peak to finish.", isFinish: true },
    ];

    return (
        <div className="bg-white/5 rounded-2xl p-8 relative overflow-hidden border border-white/10 shadow-2xl">
            <h2 className="text-3xl font-black text-white uppercase tracking-wider mb-2 text-center drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">HIMALAYAN 100 CIRCUIT</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10 text-sm">
                Spanning 103km with over 5,300m elevation gain, this legendary course tests endurance
                against the backdrop of Hong Kong's most rugged peaks and pristine coastlines.
            </p>

            {/* 3D Perspective Wrapper */}
            <div className="relative w-full h-[500px] perspective-[1000px]">
                <div className="w-full h-full transform rotate-x-[30deg] scale-90 transition-transform duration-700 ease-out hover:rotate-x-[20deg] hover:scale-100">
                    <svg
                        viewBox="0 0 800 600"
                        className="w-full h-full overflow-visible"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>

                            <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#FFD700" />
                                <stop offset="50%" stopColor="#ffeb3b" />
                                <stop offset="100%" stopColor="#FFD700" />
                            </linearGradient>
                        </defs>

                        {/* Background Grid Lines (Abstract Topography) - Scaled */}
                        <path d="M 0 100 H 800" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        <path d="M 0 200 H 800" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        <path d="M 0 300 H 800" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        <path d="M 0 400 H 800" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        <path d="M 0 500 H 800" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        <path d="M 200 0 V 600" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        <path d="M 400 0 V 600" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        <path d="M 600 0 V 600" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                        {/* Shadow Path */}
                        <path d={mainPath} className="fill-none stroke-black/50 stroke-[8px] blur-sm transform translate-y-2" />

                        {/* Main Path */}
                        <path d={mainPath} className="fill-none stroke-primary stroke-[4px] drop-shadow-[0_0_8px_rgba(255,215,0,0.8)] animate-[dash_3s_linear_infinite]" style={{ filter: 'url(#neon-glow)' }} />

                        {/* Speed Trap / DRS Zones (Aesthetic) */}
                        <line x1="600" y1="480" x2="620" y2="460" stroke="#fff" strokeWidth="2" opacity="0.5" />
                        <text x="610" y="500" className="fill-white/60 font-mono text-[10px] uppercase font-bold tracking-wider" style={{ fontSize: '10px' }}>SPEED TRAP</text>

                        <line x1="300" y1="80" x2="320" y2="80" stroke="#fff" strokeWidth="2" opacity="0.5" />
                        <text x="290" y="70" className="fill-white/60 font-mono text-[10px] uppercase font-bold tracking-wider" style={{ fontSize: '10px' }}>DRS ZONE</text>

                        {/* Checkpoints */}
                        {checkpoints.map((cp) => (
                            <g
                                key={cp.id}
                                className="cursor-pointer transition-all duration-300 hover:scale-125"
                                onClick={(e) => { e.stopPropagation(); setActiveCp(cp); }}
                                onMouseEnter={() => setActiveCp(cp)}
                            >
                                <circle cx={cp.x} cy={cp.y} r="16" fill="rgba(255, 215, 0, 0.15)" className="animate-ping origin-center" />

                                <circle cx={cp.x} cy={cp.y} r="6" className="transition-all duration-300"
                                    style={{
                                        fill: cp.isStart ? '#fff' : (cp.isFinish ? '#FFD700' : '#1a1a2e'),
                                        stroke: cp.isStart ? '#FFD700' : '#fff',
                                        strokeWidth: '2px'
                                    }}
                                />

                                {!cp.isStart && !cp.isFinish && (
                                    <text x={cp.x} y={cp.y} className="fill-white text-[10px] font-bold pointer-events-none" dy="0.3em" textAnchor="middle" style={{ fontSize: '10px' }}>{cp.id}</text>
                                )}

                                {cp.isStart && <text x={cp.x} y={cp.y - 15} className="fill-white font-bold text-[12px] shadow-black drop-shadow-md uppercase tracking-wider" textAnchor="middle" style={{ fontSize: '12px', fill: 'white' }}>START</text>}
                                {cp.isFinish && <text x={cp.x} y={cp.y - 15} className="fill-primary font-bold text-[12px] shadow-black drop-shadow-md uppercase tracking-wider" textAnchor="middle" style={{ fontSize: '12px', fill: '#FFD700' }}>FINISH</text>}

                            </g>
                        ))}
                    </svg>
                </div>
            </div>

            {/* Info Overlay - Moved to fix "middle" visibility */}
            <div className="absolute top-8 right-8 z-20 w-64 pointer-events-none">
                {activeCp ? (
                    <div className="glass bg-black/60 p-4 rounded-xl border border-primary/50 shadow-[0_0_20px_rgba(255,215,0,0.1)] backdrop-blur-md transform transition-all duration-300 translate-y-0 opacity-100 pointer-events-auto">
                        <div className="flex justify-between items-center mb-2 border-b border-white/10 pb-2">
                            <span className="text-primary font-mono font-bold text-xs uppercase tracking-widest">{activeCp.isStart ? 'START' : (activeCp.isFinish ? 'FINISH' : `CP ${activeCp.id}`)}</span>
                        </div>
                        <div className="text-white font-bold text-lg leading-tight mb-2">{activeCp.name}</div>
                        <div className="text-gray-300 text-xs leading-relaxed">{activeCp.description}</div>
                    </div>
                ) : (
                    <div className="glass bg-black/40 p-4 rounded-xl border border-white/10 backdrop-blur-sm text-center transform transition-all duration-300 pointer-events-auto">
                        <div className="text-gray-400 text-xs font-mono uppercase tracking-widest animate-pulse">
                            HOVER OVER A CHECKPOINT
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StylizedRaceTrack;
