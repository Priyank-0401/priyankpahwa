"use client";

import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

export const FadeUp = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: delay
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const FadeUpStagger = ({ children, className = "", staggerDelay = 0.1 }: { children: React.ReactNode, className?: string, staggerDelay?: number }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const FadeUpItem = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        ease: "easeOut",
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const ParallaxText = ({ children, className = "", offset = 100 }: { children: React.ReactNode, className?: string, offset?: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
};

export const FocusProject = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-40% 0px -40% 0px", once: false });

    return (
        <div ref={ref} className={`transition-all duration-700 ease-out origin-center ${isInView ? 'opacity-100 scale-[1.02]' : 'opacity-40 scale-100 grayscale-[0.3]'} ${className}`}>
            {children}
        </div>
    );
};
