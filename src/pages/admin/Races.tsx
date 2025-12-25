import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function RacesPage() {
    usePageTitle('Admin - Races');

    const [races, setRaces] = useState([
        { id: 'H100', name: 'Himalayan 100', distance: '103km', participants: 1542, date: '2026-01-15' },
        { id: 'HALF', name: 'The Half', distance: '56km', participants: 890, date: '2026-01-16' },
        { id: 'THIRD', name: 'The Third', distance: '33km', participants: 450, date: '2026-01-16' },
        { id: 'KIDS', name: 'Kids Race', distance: '3km', participants: 120, date: '2026-01-14' },
    ]);

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this race?')) {
            setRaces(prev => prev.filter(r => r.id !== id));
        }
    };

    return (
        <div>
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-white uppercase tracking-wider">Race Management</h1>
                <Link to="/admin/races/config" className="btn btn-primary px-4 py-2 text-sm">+ Add New Race</Link>
            </header>

            <div className="bg-[#15151e] rounded-xl border border-white/10 overflow-hidden shadow-lg">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-black/20 text-gray-400 text-xs uppercase tracking-wider">
                                <th className="p-4 font-bold border-b border-white/10">Code</th>
                                <th className="p-4 font-bold border-b border-white/10">Name</th>
                                <th className="p-4 font-bold border-b border-white/10">Distance</th>
                                <th className="p-4 font-bold border-b border-white/10">Participants</th>
                                <th className="p-4 font-bold border-b border-white/10">Date</th>
                                <th className="p-4 font-bold border-b border-white/10">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {races.map((race) => (
                                <tr key={race.id} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-gray-400 font-mono text-sm">{race.id}</td>
                                    <td className="p-4 text-white font-medium">{race.name}</td>
                                    <td className="p-4 text-gray-300">{race.distance}</td>
                                    <td className="p-4 text-gray-300">{race.participants}</td>
                                    <td className="p-4 text-gray-400 text-sm font-mono">{race.date}</td>
                                    <td className="p-4 flex items-center gap-2">
                                        <Link to="/admin/races/config" className="px-2 py-1 rounded border border-white/20 text-gray-300 text-xs hover:bg-white/10 hover:text-white transition-colors">Configure</Link>
                                        <button
                                            onClick={() => handleDelete(race.id)}
                                            className="px-2 py-1 rounded border border-red-500/30 text-red-500 text-xs hover:bg-red-500/10 hover:text-red-400 transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
