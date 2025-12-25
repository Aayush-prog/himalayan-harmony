import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { usePageTitle } from '@/hooks/usePageTitle';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

export default function AdminDashboard() {
    usePageTitle('Admin Dashboard');

    const barData = {
        labels: ['Himalayan 100', 'The Half', 'The Third', 'Kids Race'],
        datasets: [
            {
                label: 'Registrations',
                data: [450, 320, 210, 85],
                backgroundColor: 'rgba(255, 215, 0, 0.6)', // Gold
                borderColor: 'rgba(255, 215, 0, 1)',
                borderWidth: 1,
            },
        ],
    };

    const barOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: { color: '#ccc' }
            },
            title: {
                display: true,
                text: 'Registrations by Race Category',
                color: '#fff',
            },
        },
        scales: {
            y: {
                ticks: { color: '#aaa' },
                grid: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            x: {
                ticks: { color: '#aaa' },
                grid: { display: false }
            }
        }
    };

    const doughnutData = {
        labels: ['Paid', 'Pending', 'Cancelled'],
        datasets: [
            {
                data: [124000, 28000, 5000],
                backgroundColor: [
                    'rgba(74, 222, 128, 0.7)', // Green
                    'rgba(251, 191, 36, 0.7)',  // Yellow
                    'rgba(239, 68, 68, 0.7)',   // Red
                ],
                borderColor: [
                    'rgba(74, 222, 128, 1)',
                    'rgba(251, 191, 36, 1)',
                    'rgba(239, 68, 68, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const doughnutOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right' as const,
                labels: { color: '#ccc' }
            },
            title: {
                display: true,
                text: 'Revenue Status (HKD)',
                color: '#fff',
            },
        },
    };

    return (
        <div className="flex flex-col gap-8">
            <header className="flex justify-between items-center bg-[#15151e] p-6 rounded-xl border border-white/10 shadow-lg">
                <h1 className="text-2xl font-bold text-white uppercase tracking-wider">Dashboard Overview</h1>
                <div className="text-sm text-gray-400">Welcome, Admin User</div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#15151e] p-6 rounded-xl border border-white/10 shadow hover:border-primary/50 transition-colors">
                    <h3 className="text-gray-400 text-sm uppercase tracking-wider font-bold mb-2">Total Registrations</h3>
                    <div className="text-3xl font-black text-white mb-2">1,065</div>
                    <div className="text-xs font-medium text-green-400 flex items-center gap-1">
                        <span>↑</span> +12% this week
                    </div>
                </div>
                <div className="bg-[#15151e] p-6 rounded-xl border border-white/10 shadow hover:border-primary/50 transition-colors">
                    <h3 className="text-gray-400 text-sm uppercase tracking-wider font-bold mb-2">Revenue</h3>
                    <div className="text-3xl font-black text-white mb-2">$452k</div>
                    <div className="text-xs font-medium text-green-400 flex items-center gap-1">
                        <span>↑</span> +5% vs last year
                    </div>
                </div>
                <div className="bg-[#15151e] p-6 rounded-xl border border-white/10 shadow hover:border-primary/50 transition-colors">
                    <h3 className="text-gray-400 text-sm uppercase tracking-wider font-bold mb-2">Volunteers</h3>
                    <div className="text-3xl font-black text-white mb-2">85</div>
                    <div className="text-xs font-medium text-primary flex items-center gap-1">
                        <span>✓</span> All positions filled
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-[#15151e] p-6 rounded-xl border border-white/10">
                    <Bar data={barData} options={barOptions} />
                </div>
                <div className="bg-[#15151e] p-6 rounded-xl border border-white/10 flex items-center justify-center">
                    <div style={{ maxWidth: '350px', width: '100%' }}>
                        <Doughnut data={doughnutData} options={doughnutOptions} />
                    </div>
                </div>
            </div>

            <div className="bg-[#15151e] rounded-xl border border-white/10 overflow-hidden">
                <div className="p-6 border-b border-white/10">
                    <h3 className="text-xl font-bold text-white">Recent Registrations</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-black/20 text-gray-400 text-xs uppercase tracking-wider">
                                <th className="p-4 font-bold border-b border-white/10">Name</th>
                                <th className="p-4 font-bold border-b border-white/10">Race Category</th>
                                <th className="p-4 font-bold border-b border-white/10">Date</th>
                                <th className="p-4 font-bold border-b border-white/10">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="p-4 text-white font-medium">John Doe</td>
                                <td className="p-4 text-gray-300">103km Ultra</td>
                                <td className="p-4 text-gray-400 text-sm font-mono">Oct 24, 2024</td>
                                <td className="p-4"><span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded">Paid</span></td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="p-4 text-white font-medium">Jane Smith</td>
                                <td className="p-4 text-gray-300">56km Half</td>
                                <td className="p-4 text-gray-400 text-sm font-mono">Oct 24, 2024</td>
                                <td className="p-4"><span className="bg-yellow-500/20 text-yellow-500 text-xs font-bold px-2 py-1 rounded">Pending</span></td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="p-4 text-white font-medium">Mike Johnson</td>
                                <td className="p-4 text-gray-300">103km Ultra</td>
                                <td className="p-4 text-gray-400 text-sm font-mono">Oct 23, 2024</td>
                                <td className="p-4"><span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded">Paid</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
