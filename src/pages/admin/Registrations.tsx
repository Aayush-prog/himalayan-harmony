import { usePageTitle } from '@/hooks/usePageTitle';

export default function RegistrationsPage() {
    usePageTitle('Admin - Registrations');

    const registrations = [
        { id: '1001', name: 'John Doe', race: 'Himalayan 100', status: 'Paid', date: '2024-10-24' },
        { id: '1002', name: 'Jane Smith', race: 'The Half', status: 'Pending', date: '2024-10-25' },
        { id: '1003', name: 'Mike Ross', race: 'Himalayan 100', status: 'Paid', date: '2024-10-26' },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-white uppercase tracking-wider mb-8">Registrations</h1>
            <div className="bg-[#15151e] rounded-xl border border-white/10 overflow-hidden shadow-lg">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-black/20 text-gray-400 text-xs uppercase tracking-wider">
                                <th className="p-4 font-bold border-b border-white/10">ID</th>
                                <th className="p-4 font-bold border-b border-white/10">Name</th>
                                <th className="p-4 font-bold border-b border-white/10">Race</th>
                                <th className="p-4 font-bold border-b border-white/10">Date</th>
                                <th className="p-4 font-bold border-b border-white/10">Status</th>
                                <th className="p-4 font-bold border-b border-white/10">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {registrations.map((reg) => (
                                <tr key={reg.id} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-gray-400 font-mono text-sm">#{reg.id}</td>
                                    <td className="p-4 text-white font-medium">{reg.name}</td>
                                    <td className="p-4 text-gray-300">{reg.race}</td>
                                    <td className="p-4 text-gray-400 text-sm font-mono">{reg.date}</td>
                                    <td className="p-4">
                                        <span className={`text-xs font-bold px-2 py-1 rounded ${reg.status === 'Paid'
                                                ? 'bg-green-500/20 text-green-400'
                                                : 'bg-yellow-500/20 text-yellow-500'
                                            }`}>
                                            {reg.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <button className="btn btn-primary px-3 py-1 text-xs">View</button>
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
