
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';

export default function PublicLayout() {
    return (
        <>
            <Header />
            <main className="min-h-screen flex flex-col">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
