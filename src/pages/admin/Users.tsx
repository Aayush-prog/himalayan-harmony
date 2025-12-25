import { usePageTitle } from '@/hooks/usePageTitle';

export default function UsersPage() {
    usePageTitle('Admin - Users');

    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Runner', joined: '2024-09-15' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Runner', joined: '2024-09-18' },
        { id: 3, name: 'Admin User', email: 'admin@racetiming.com', role: 'Admin', joined: '2024-01-01' },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-white uppercase tracking-wider mb-8">User Management</h1>
            <div className="glass rounded-xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-primary/20 text-white text-xs uppercase tracking-wider">
                                <th className="p-4 font-bold border-b border-white/10">ID</th>
                                <th className="p-4 font-bold border-b border-white/10">Name</th>
                                <th className="p-4 font-bold border-b border-white/10">Email</th>
                                <th className="p-4 font-bold border-b border-white/10">Role</th>
                                <th className="p-4 font-bold border-b border-white/10">Joined</th>
                                <th className="p-4 font-bold border-b border-white/10">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-gray-400 font-mono text-sm">{user.id}</td>
                                    <td className="p-4 text-white font-medium">{user.name}</td>
                                    <td className="p-4 text-gray-300">{user.email}</td>
                                    <td className="p-4">
                                        <span className={`text-xs font-bold px-2 py-1 rounded ${user.role === 'Admin'
                                            ? 'bg-purple-500/20 text-purple-400 ring-1 ring-purple-500/50'
                                            : 'bg-blue-500/20 text-blue-300 ring-1 ring-blue-500/30'
                                            }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-400 text-sm font-mono">{user.joined}</td>
                                    <td className="p-4 flex items-center gap-2">
                                        <button className="px-3 py-1 rounded-none border border-white/20 text-gray-300 text-xs hover:bg-white hover:text-black transition-all uppercase font-bold tracking-wide">Edit</button>
                                        <button className="px-3 py-1 rounded-none border border-red-500/50 text-red-400 text-xs hover:bg-red-500 hover:text-white transition-all uppercase font-bold tracking-wide">Ban</button>
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
