'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimationProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}

// Fade in from bottom
export const FadeInUp = ({ children, className = '', delay = 0, duration = 0.6 }: AnimationProps) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration, delay, ease: 'easeOut' }}
        className={className}
    >
        {children}
    </motion.div>
);

// Fade in from left
export const FadeInLeft = ({ children, className = '', delay = 0, duration = 0.6 }: AnimationProps) => (
    <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration, delay, ease: 'easeOut' }}
        className={className}
    >
        {children}
    </motion.div>
);

// Fade in from right
export const FadeInRight = ({ children, className = '', delay = 0, duration = 0.6 }: AnimationProps) => (
    <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration, delay, ease: 'easeOut' }}
        className={className}
    >
        {children}
    </motion.div>
);

// Scale in
export const ScaleIn = ({ children, className = '', delay = 0, duration = 0.5 }: AnimationProps) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration, delay, ease: 'easeOut' }}
        className={className}
    >
        {children}
    </motion.div>
);

// Simple fade in
export const FadeIn = ({ children, className = '', delay = 0, duration = 0.6 }: AnimationProps) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration, delay, ease: 'easeOut' }}
        className={className}
    >
        {children}
    </motion.div>
);

// Stagger container for children animations
interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}

export const staggerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const staggerItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

export const StaggerContainer = ({ children, className = '', staggerDelay = 0.1 }: StaggerContainerProps) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: staggerDelay,
                    delayChildren: 0.1,
                },
            },
        }}
        className={className}
    >
        {children}
    </motion.div>
);

export const StaggerItem = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
    <motion.div variants={staggerItemVariants} className={className}>
        {children}
    </motion.div>
);

// Hover card animation wrapper
export const HoverCard = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
    <motion.div
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className={className}
    >
        {children}
    </motion.div>
);

// Hover scale animation
export const HoverScale = ({ children, className = '', scale = 1.02 }: { children: ReactNode; className?: string; scale?: number }) => (
    <motion.div
        whileHover={{ scale, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.98 }}
        className={className}
    >
        {children}
    </motion.div>
);

// Animated counter for stats
interface CounterProps {
    value: string;
    className?: string;
}

export const AnimatedStat = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        className={className}
    >
        {children}
    </motion.div>
);

// Text reveal animation
export const TextReveal = ({ children, className = '', delay = 0 }: AnimationProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: 'easeOut' }}
        className={className}
    >
        {children}
    </motion.div>
);

// Parallax wrapper
interface ParallaxProps {
    children: ReactNode;
    className?: string;
    speed?: number;
}

export const ParallaxSection = ({ children, className = '' }: ParallaxProps) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className={className}
    >
        {children}
    </motion.div>
);

// Glow pulse animation for CTAs
export const GlowPulse = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
    <motion.div
        animate={{
            boxShadow: [
                '0 0 20px rgba(22, 163, 74, 0.3)',
                '0 0 40px rgba(22, 163, 74, 0.5)',
                '0 0 20px rgba(22, 163, 74, 0.3)',
            ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className={className}
    >
        {children}
    </motion.div>
);
