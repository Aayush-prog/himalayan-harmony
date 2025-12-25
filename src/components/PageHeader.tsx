'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    bgImage?: string;
}

const PageHeader = ({ title, subtitle, bgImage = '/inner-bg.png' }: PageHeaderProps) => {
    return (
        <div className="relative h-[300px] md:h-[450px] w-full flex items-center justify-center overflow-hidden mb-8 clip-path-slant">
            {/* Poster Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a193c]/30 via-[#0a193c]/60 to-[#0a193c] z-10 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 z-10 mix-blend-overlay"></div>

            <motion.img
                src={bgImage}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                initial={{ scale: 1.1, filter: 'grayscale(0%)' }}
                animate={{ scale: 1, filter: 'grayscale(20%)' }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            />
            <div className="container mx-auto px-4 relative z-20 text-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4 drop-shadow-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        className="text-lg md:text-xl text-primary font-bold tracking-widest uppercase mb-0 drop-shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
};

export default PageHeader;
