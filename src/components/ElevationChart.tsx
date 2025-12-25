import { useMemo } from 'react';

interface Checkpoint {
    name: string;
    distance: number; // in km
}

interface ElevationChartProps {
    raceType: '50KM' | '12KM';
}

const elevationData = {
    '50KM': {
        // Simplified elevation points [distance (km), elevation (m)]
        points: [
            [0, 450], [1, 400], [2, 350], [3, 300], [4, 320], [5, 300], [6, 280], [7, 300], [8, 280], [9, 300], [10, 280],
            [11, 200], [12, 150], [13, 120], [14, 180], [15, 280], [16, 380], [17, 450], [18, 420], [19, 380], [20, 400], [21, 380], [22, 350],
            [23, 250], [24, 150], [25, 100], [26, 120], [27, 100], [28, 120], [29, 100], [30, 150], [31, 180], [32, 150], [33, 200],
            [34, 250], [35, 200], [36, 280], [37, 350], [38, 450], [39, 400], [40, 280],
            [41, 320], [42, 400], [43, 500], [44, 650], [45, 780], [46, 830],
            [47, 750], [48, 600], [49, 500], [50, 450]
        ] as [number, number][],
        checkpoints: [
            { name: 'CP1\nShing Mun', distance: 9 },
            { name: 'CP2\nShatin Pass', distance: 22 },
            { name: 'CP3\nShing Mun', distance: 35 },
            { name: 'CP4\nLead Pass', distance: 42 },
            { name: 'CP5\nSze Fong Shan', distance: 45 },
        ],
        maxDistance: 50,
        maxElevation: 1000,
    },
    '12KM': {
        points: [
            [0, 450], [1, 550], [2, 650], [3, 800], [4, 880], [4.5, 920],
            [5, 850], [5.5, 780], [6, 750], [6.5, 800], [7, 870], [7.8, 930],
            [8.5, 850], [9, 700], [10, 550], [11, 480], [12, 450]
        ] as [number, number][],
        checkpoints: [
            { name: 'CP1\nSze Fong Shan', distance: 6 },
        ],
        maxDistance: 12,
        maxElevation: 1000,
    }
};

const ElevationChart = ({ raceType }: ElevationChartProps) => {
    const data = elevationData[raceType];

    const { pathD, areaD } = useMemo(() => {
        const width = 100;
        const height = 100;
        const padding = { top: 15, right: 5, bottom: 5, left: 5 };

        const chartWidth = width - padding.left - padding.right;
        const chartHeight = height - padding.top - padding.bottom;

        const xScale = (d: number) => padding.left + (d / data.maxDistance) * chartWidth;
        const yScale = (e: number) => padding.top + chartHeight - (e / data.maxElevation) * chartHeight;

        let pathD = `M ${xScale(data.points[0][0])} ${yScale(data.points[0][1])}`;
        data.points.forEach((point, i) => {
            if (i > 0) {
                pathD += ` L ${xScale(point[0])} ${yScale(point[1])}`;
            }
        });

        // Area path for fill
        let areaD = pathD;
        areaD += ` L ${xScale(data.points[data.points.length - 1][0])} ${yScale(0)}`;
        areaD += ` L ${xScale(data.points[0][0])} ${yScale(0)} Z`;

        return { pathD, areaD };
    }, [data]);

    const width = 100;
    const height = 100;
    const padding = { top: 15, right: 5, bottom: 5, left: 5 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    const xScale = (d: number) => padding.left + (d / data.maxDistance) * chartWidth;
    const yScale = (e: number) => padding.top + chartHeight - (e / data.maxElevation) * chartHeight;

    // Y-axis labels
    const yLabels = raceType === '50KM'
        ? [0, 200, 400, 600, 800, 1000]
        : [0, 250, 500, 750, 1000];

    // X-axis labels
    const xLabels = raceType === '50KM'
        ? [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
        : [0, 3, 6, 9, 12];

    return (
        <div className="w-full h-full relative">
            <svg
                viewBox={`0 0 ${width} ${height}`}
                className="w-full h-full"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="elevationGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#9ca3af" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.2" />
                    </linearGradient>
                </defs>

                {/* Grid lines */}
                {yLabels.map((val) => (
                    <line
                        key={`grid-${val}`}
                        x1={padding.left}
                        y1={yScale(val)}
                        x2={width - padding.right}
                        y2={yScale(val)}
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="0.2"
                    />
                ))}

                {/* Area fill */}
                <path
                    d={areaD}
                    fill="url(#elevationGradient)"
                />

                {/* Elevation line */}
                <path
                    d={pathD}
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Dotted overlay line */}
                <path
                    d={pathD}
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="0.4"
                    strokeDasharray="1 1"
                    strokeLinecap="round"
                />

                {/* Checkpoint vertical lines */}
                {data.checkpoints.map((cp, i) => (
                    <line
                        key={`cp-line-${i}`}
                        x1={xScale(cp.distance)}
                        y1={padding.top}
                        x2={xScale(cp.distance)}
                        y2={height - padding.bottom}
                        stroke="#3b82f6"
                        strokeWidth="0.3"
                    />
                ))}
            </svg>

            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[8px] md:text-[10px] text-gray-400 py-2 pl-1">
                {[...yLabels].reverse().map((val) => (
                    <span key={val}>{val} m</span>
                ))}
            </div>

            {/* X-axis labels */}
            <div className="absolute bottom-0 left-8 right-2 flex justify-between text-[6px] md:text-[8px] text-gray-400">
                {xLabels.map((val) => (
                    <span key={val}>{val}.0 km</span>
                ))}
            </div>

            {/* Checkpoint labels */}
            <div className="absolute top-1 left-8 right-2 h-full pointer-events-none">
                {data.checkpoints.map((cp, i) => (
                    <div
                        key={`cp-label-${i}`}
                        className="absolute text-[7px] md:text-[9px] text-white font-bold text-center whitespace-pre-line leading-tight"
                        style={{
                            left: `${(cp.distance / data.maxDistance) * 100}%`,
                            transform: 'translateX(-50%)',
                        }}
                    >
                        {cp.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ElevationChart;
