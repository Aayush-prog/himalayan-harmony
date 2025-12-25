
import { MapContainer, TileLayer, Polyline, Popup, useMap, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState, useMemo } from 'react';

interface Checkpoint {
    name: string;
    dist: string;
    cutoff: string;
}

interface RaceMapProps {
    gpxFile?: string;
    checkpoints?: Checkpoint[];
}

// Component to fit map bounds to track
const FitBounds = ({ trackPoints }: { trackPoints: [number, number][] }) => {
    const map = useMap();

    useEffect(() => {
        if (trackPoints.length > 0) {
            const bounds = L.latLngBounds(trackPoints);
            map.fitBounds(bounds, { padding: [20, 20] });
        }
    }, [map, trackPoints]);

    return null;
};

// Calculate distance between two points in km (Haversine formula)
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

// Find point on track at given distance
const findPointAtDistance = (trackPoints: [number, number][], targetDist: number): [number, number] | null => {
    if (trackPoints.length < 2) return null;

    let accumulatedDist = 0;
    for (let i = 1; i < trackPoints.length; i++) {
        const segmentDist = calculateDistance(
            trackPoints[i - 1][0], trackPoints[i - 1][1],
            trackPoints[i][0], trackPoints[i][1]
        );

        if (accumulatedDist + segmentDist >= targetDist) {
            const remaining = targetDist - accumulatedDist;
            const ratio = remaining / segmentDist;
            const lat = trackPoints[i - 1][0] + ratio * (trackPoints[i][0] - trackPoints[i - 1][0]);
            const lon = trackPoints[i - 1][1] + ratio * (trackPoints[i][1] - trackPoints[i - 1][1]);
            return [lat, lon];
        }
        accumulatedDist += segmentDist;
    }

    return trackPoints[trackPoints.length - 1];
};

const RaceMap = ({ gpxFile = '/trail.gpx', checkpoints = [] }: RaceMapProps) => {
    const [trackPoints, setTrackPoints] = useState<[number, number][]>([]);

    useEffect(() => {
        const fetchGPX = async () => {
            try {
                const response = await fetch(gpxFile);
                const text = await response.text();
                const parser = new DOMParser();
                const xml = parser.parseFromString(text, 'text/xml');

                const trkpts: [number, number][] = [];
                const segments = xml.querySelectorAll('trkseg');
                segments.forEach(seg => {
                    const points = seg.querySelectorAll('trkpt');
                    points.forEach(pt => {
                        trkpts.push([
                            parseFloat(pt.getAttribute('lat') || '0'),
                            parseFloat(pt.getAttribute('lon') || '0')
                        ]);
                    });
                });
                setTrackPoints(trkpts);
            } catch (err) {
                console.error("Error loading GPX:", err);
            }
        };

        fetchGPX();
    }, [gpxFile]);

    // Calculate checkpoint positions on the track
    const checkpointPositions = useMemo(() => {
        if (trackPoints.length < 2) return [];

        return checkpoints.map((cp) => {
            const distKm = parseFloat(cp.dist.replace(' km', ''));
            const position = findPointAtDistance(trackPoints, distKm);
            return { ...cp, position };
        }).filter(cp => cp.position !== null);
    }, [trackPoints, checkpoints]);

    const initialCenter: [number, number] = trackPoints.length > 0
        ? trackPoints[0]
        : [22.4042, 114.1063];

    return (
        <MapContainer
            center={initialCenter}
            zoom={13}
            className="h-full w-full z-0"
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <FitBounds trackPoints={trackPoints} />

            {trackPoints.length > 0 && (
                <Polyline positions={trackPoints} pathOptions={{ color: '#a855f7', weight: 4 }} />
            )}

            {/* Checkpoint markers */}
            {checkpointPositions.map((cp, idx) => {
                const isStart = cp.name.toLowerCase().includes('start');
                const isFinish = cp.name.toLowerCase().includes('finish');
                const markerColor = isStart ? '#22c55e' : isFinish ? '#ef4444' : '#3b82f6';

                return (
                    <CircleMarker
                        key={idx}
                        center={cp.position as [number, number]}
                        radius={isStart || isFinish ? 12 : 10}
                        pathOptions={{ color: markerColor, fillColor: markerColor, fillOpacity: 1, weight: 2 }}
                    >
                        <Popup>
                            <div className="text-sm font-bold" style={{ color: markerColor }}>{cp.name}</div>
                            <div className="text-xs text-gray-600">{cp.dist}</div>
                            <div className="text-xs text-gray-500">Cut-off: {cp.cutoff}</div>
                        </Popup>
                    </CircleMarker>
                );
            })}
        </MapContainer>
    );
};

export default RaceMap;
