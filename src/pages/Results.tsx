import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Search, ExternalLink, Award, Flag } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { usePageTitle } from '@/hooks/usePageTitle';
import {
    RESULTS_50KM,
    RESULTS_12KM,
    EVENT_DATE,
    OFFICIAL_RESULTS_URL,
    type RaceResult,
} from '@/data/results2026';

type RaceKey = '50KM' | '12KM';

const RACES: Record<RaceKey, RaceResult[]> = {
    '50KM': RESULTS_50KM,
    '12KM': RESULTS_12KM,
};

const statusBadge: Record<string, string> = {
    DNF: 'text-red-400 border-red-500/40 bg-red-500/10',
    DNS: 'text-gray-400 border-white/10 bg-white/5',
};

const podiumStyles = [
    // index 0 => 1st (center, tallest); shared level base, stepped tops
    { rank: 1, color: '#FFD700', label: 'Champion', order: 'md:order-2', height: 'md:h-[340px]' },
    { rank: 2, color: '#C0C0C0', label: 'Runner-up', order: 'md:order-1', height: 'md:h-[300px]' },
    { rank: 3, color: '#CD7F32', label: 'Third', order: 'md:order-3', height: 'md:h-[264px]' },
];

export default function ResultsPage() {
    usePageTitle('Results');
    const [race, setRace] = useState<RaceKey>('50KM');
    const [query, setQuery] = useState('');

    const all = RACES[race];

    const finishers = useMemo(() => all.filter((r) => r.status === 'FIN'), [all]);
    const podium = finishers.slice(0, 3);

    const stats = useMemo(
        () => ({
            finishers: finishers.length,
            dnf: all.filter((r) => r.status === 'DNF').length,
            dns: all.filter((r) => r.status === 'DNS').length,
        }),
        [all, finishers],
    );

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return all;
        return all.filter(
            (r) =>
                r.name.toLowerCase().includes(q) ||
                (r.nameZh?.includes(query.trim()) ?? false) ||
                r.bib.includes(q) ||
                r.country.toLowerCase().includes(q) ||
                r.cat.toLowerCase().includes(q),
        );
    }, [all, query]);

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Race Results"
                subtitle={`Himalayan Harmony 2026 · ${EVENT_DATE}`}
                bgImage="/IMG_8069.JPG"
            />

            <div className="container mx-auto px-4 py-8 md:py-16">
                {/* Race switcher */}
                <div className="flex justify-center mb-8 md:mb-12">
                    <div className="inline-flex bg-black/40 border border-white/10 p-1 skew-x-[-8deg]">
                        {(Object.keys(RACES) as RaceKey[]).map((key) => (
                            <button
                                key={key}
                                onClick={() => {
                                    setRace(key);
                                    setQuery('');
                                }}
                                className={`px-8 md:px-12 py-3 text-sm md:text-base font-black uppercase tracking-widest transition-colors ${
                                    race === key
                                        ? 'bg-primary text-white'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                <span className="inline-block skew-x-[8deg]">{key}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto mb-10 md:mb-16">
                    {[
                        { label: 'Finishers', value: stats.finishers, accent: 'text-primary' },
                        { label: 'DNF', value: stats.dnf, accent: 'text-red-400' },
                        { label: 'DNS', value: stats.dns, accent: 'text-gray-400' },
                    ].map((s) => (
                        <div
                            key={s.label}
                            className="bg-[#0a193c] border border-white/10 p-4 md:p-6 text-center"
                        >
                            <div className={`text-3xl md:text-5xl font-black ${s.accent}`}>{s.value}</div>
                            <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 mt-1 font-bold">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Podium */}
                {podium.length === 3 && (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={race}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col md:flex-row md:items-end justify-center gap-4 md:gap-6 mb-12 md:mb-20 max-w-4xl mx-auto"
                        >
                            {podium.map((r, i) => {
                                const style = podiumStyles[i];
                                return (
                                    <motion.div
                                        key={r.bib}
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.15, type: 'spring', bounce: 0.4 }}
                                        className={`relative flex-1 ${style.order} ${style.height}`}
                                    >
                                        <div
                                            className="design-box bg-[#0a193c] border border-white/10 p-5 md:p-6 text-center h-full"
                                            style={{
                                                borderTop: `4px solid ${style.color}`,
                                                boxShadow: `0 0 30px ${style.color}22`,
                                            }}
                                        >
                                            <div
                                                className="mx-auto w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 border"
                                                style={{ borderColor: style.color }}
                                            >
                                                <Trophy className="w-6 h-6 md:w-7 md:h-7" style={{ color: style.color }} />
                                            </div>
                                            <div
                                                className="text-4xl md:text-5xl font-black italic mb-1"
                                                style={{ color: style.color }}
                                            >
                                                {style.rank}
                                            </div>
                                            <div className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-bold">
                                                {style.label}
                                            </div>
                                            <div className="text-white font-black text-base md:text-lg uppercase tracking-wide leading-tight">
                                                {r.name}
                                            </div>
                                            {r.nameZh && (
                                                <div className="text-gray-400 text-sm mt-0.5">{r.nameZh}</div>
                                            )}
                                            <div className="flex items-center justify-center gap-2 mt-3 text-[10px] uppercase tracking-wider">
                                                <span className="bg-white/10 text-gray-300 px-2 py-0.5 rounded border border-white/10 font-bold">
                                                    {r.cat}
                                                </span>
                                                <span className="text-primary font-bold flex items-center gap-1">
                                                    <Flag size={11} /> {r.country}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>
                )}

                {/* Full results */}
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <h2 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-wider flex items-center gap-3">
                            <Award className="text-primary" /> {race} Classifications
                        </h2>
                        <div className="relative w-full sm:w-72">
                            <Search
                                size={16}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                            />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search name, bib, country…"
                                className="w-full bg-black/40 border border-white/10 focus:border-primary/60 outline-none text-white text-sm pl-9 pr-3 py-2.5 placeholder:text-gray-600 transition-colors"
                            />
                        </div>
                    </div>

                    <div className="bg-[#15151e] border-t-4 border-primary shadow-2xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-[#1a1a2e]">
                                    <tr className="text-gray-500 text-[10px] md:text-xs uppercase tracking-widest border-b-2 border-primary/50">
                                        <th className="p-3 md:p-4 w-14 text-center">Pos</th>
                                        <th className="p-3 md:p-4 w-16 font-bold text-white">Bib</th>
                                        <th className="p-3 md:p-4">Name</th>
                                        <th className="p-3 md:p-4 hidden sm:table-cell">Category</th>
                                        <th className="p-3 md:p-4 hidden md:table-cell text-center">Cat</th>
                                        <th className="p-3 md:p-4 text-right">Nat</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 bg-[#0e0e14]">
                                    {filtered.map((r) => (
                                        <tr
                                            key={r.bib}
                                            className="transition-colors hover:bg-white/5 h-12 md:h-14"
                                        >
                                            <td className="p-3 md:p-4 text-center font-mono font-bold text-sm">
                                                {r.status === 'FIN' ? (
                                                    <span className="text-white">{r.pos}</span>
                                                ) : (
                                                    <span
                                                        className={`text-[9px] px-1.5 py-0.5 rounded border font-bold ${statusBadge[r.status]}`}
                                                    >
                                                        {r.status}
                                                    </span>
                                                )}
                                            </td>
                                            <td className="p-3 md:p-4 font-mono text-primary font-bold text-sm">
                                                {r.bib}
                                            </td>
                                            <td className="p-3 md:p-4">
                                                <div className="flex flex-col leading-tight">
                                                    <span className="text-white font-bold text-sm md:text-base uppercase tracking-wide">
                                                        {r.name}
                                                    </span>
                                                    <span className="sm:hidden text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">
                                                        {r.cat} · {r.country}
                                                    </span>
                                                    {r.nameZh && (
                                                        <span className="hidden sm:block text-xs text-gray-500">
                                                            {r.nameZh}
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="p-3 md:p-4 hidden sm:table-cell">
                                                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold bg-[#1a1a2e] px-2 py-0.5 rounded border border-white/10">
                                                    {r.cat}
                                                </span>
                                            </td>
                                            <td className="p-3 md:p-4 hidden md:table-cell text-center text-gray-400 font-mono text-sm">
                                                {r.catPos ?? '—'}
                                            </td>
                                            <td className="p-3 md:p-4 text-right text-gray-400 font-mono text-xs uppercase">
                                                {r.country}
                                            </td>
                                        </tr>
                                    ))}
                                    {filtered.length === 0 && (
                                        <tr>
                                            <td colSpan={6} className="p-8 text-center text-gray-500 text-sm">
                                                No runners match “{query}”.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
                        <p>
                            Showing {filtered.length} of {all.length} entries · finish times available
                            on the official timing page.
                        </p>
                        <a
                            href={OFFICIAL_RESULTS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:text-white font-bold uppercase text-xs tracking-widest transition-colors"
                        >
                            Official Results <ExternalLink size={14} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
