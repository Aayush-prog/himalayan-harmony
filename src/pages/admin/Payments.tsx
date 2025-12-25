import { useState } from 'react';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function PaymentsPage() {
    usePageTitle('Admin - Payments');
    const [selectedEvent, setSelectedEvent] = useState('All');

    // Mock Data
    const [payments, setPayments] = useState([
        { id: 'PAY-001', user: 'John Doe', race: 'Himalayan 100', amount: 'HKD 2,800', method: 'Credit Card', status: 'Completed', date: '2024-10-24' },
        { id: 'PAY-002', user: 'Mike Ross', race: 'Himalayan 100', amount: 'HKD 2,800', method: 'PayPal', status: 'Completed', date: '2024-10-26' },
        { id: 'PAY-003', user: 'Sarah Lee', race: 'The Half', amount: 'HKD 1,500', method: 'Credit Card', status: 'Pending', date: '2024-10-27' },
        { id: 'PAY-004', user: 'Tom Chen', race: 'The Third', amount: 'HKD 900', method: 'Stripe', status: 'Completed', date: '2024-10-27' },
    ]);

    const events = ['All', 'Himalayan 100', 'The Half', 'The Third'];

    const filteredPayments = selectedEvent === 'All'
        ? payments
        : payments.filter(p => p.race === selectedEvent);

    const handleDelete = (id: string) => {
        if (confirm('Delete this payment record?')) {
            setPayments(prev => prev.filter(p => p.id !== id));
        }
    };

    const handleStatusToggle = (id: string) => {
        setPayments(prev => prev.map(p =>
            p.id === id ? { ...p, status: p.status === 'Completed' ? 'Pending' : 'Completed' } : p
        ));
    };

    return (
        <div>
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <h1 className="text-3xl font-bold text-white uppercase tracking-wider">Payments</h1>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <select
                        className="bg-[#15151e] border border-white/20 text-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary w-full md:w-auto"
                        value={selectedEvent}
                        onChange={(e) => setSelectedEvent(e.target.value)}
                    >
                        {events.map(evt => <option key={evt} value={evt}>{evt === 'All' ? 'Filter by Event' : evt}</option>)}
                    </select>
                    <button className="btn btn-primary px-3 py-2 text-xs flex-shrink-0">+ Add Payment</button>
                </div>
            </header>

            <div className="bg-[#15151e] rounded-xl border border-white/10 overflow-hidden shadow-lg">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-black/20 text-gray-400 text-xs uppercase tracking-wider">
                                <th className="p-4 font-bold border-b border-white/10">ID</th>
                                <th className="p-4 font-bold border-b border-white/10">User</th>
                                <th className="p-4 font-bold border-b border-white/10">Race</th>
                                <th className="p-4 font-bold border-b border-white/10">Amount</th>
                                <th className="p-4 font-bold border-b border-white/10">Method</th>
                                <th className="p-4 font-bold border-b border-white/10">Date</th>
                                <th className="p-4 font-bold border-b border-white/10">Status</th>
                                <th className="p-4 font-bold border-b border-white/10">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {filteredPayments.map((pay) => (
                                <tr key={pay.id} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-gray-400 font-mono text-sm">{pay.id}</td>
                                    <td className="p-4 text-white font-medium">{pay.user}</td>
                                    <td className="p-4 text-gray-300">{pay.race}</td>
                                    <td className="p-4 text-white font-bold">{pay.amount}</td>
                                    <td className="p-4 text-gray-400 text-sm">{pay.method}</td>
                                    <td className="p-4 text-gray-400 text-sm font-mono">{pay.date}</td>
                                    <td className="p-4">
                                        <span className={`text-xs font-bold px-2 py-1 rounded ${pay.status === 'Completed'
                                                ? 'bg-green-500/20 text-green-400'
                                                : 'bg-yellow-500/20 text-yellow-500'
                                            }`}>
                                            {pay.status}
                                        </span>
                                    </td>
                                    <td className="p-4 flex items-center gap-2">
                                        <button
                                            onClick={() => handleStatusToggle(pay.id)}
                                            className="px-2 py-1 rounded border border-white/20 text-gray-300 text-xs hover:bg-white/10 hover:text-white transition-colors"
                                        >
                                            {pay.status === 'Completed' ? 'Mark Pending' : 'Mark Paid'}
                                        </button>
                                        <button
                                            onClick={() => handleDelete(pay.id)}
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
