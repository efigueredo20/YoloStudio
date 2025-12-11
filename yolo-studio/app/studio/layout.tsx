'use client';

import { StudioStep, useStudioStore } from '@/lib/store';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { BarChart2, Brain, Database, LogOut, PlayCircle, Terminal } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './layout.module.scss';

export default function StudioLayout({ children }: { children: React.ReactNode }) {
    const { currentStep, setStep } = useStudioStore();
    const router = useRouter();

    const menuItems: { id: StudioStep; label: string; icon: any }[] = [
        { id: 'dataset', label: 'Dataset', icon: Database },
        { id: 'model', label: 'Model Config', icon: Brain },
        { id: 'training', label: 'Training', icon: Terminal },
        { id: 'analytics', label: 'Analytics', icon: BarChart2 },
        { id: 'playground', label: 'Playground', icon: PlayCircle },
    ];

    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                <div className={styles.logo} onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
                    YOLO STUDIO
                </div>

                <nav className={styles.nav}>
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = currentStep === item.id;

                        return (
                            <div
                                key={item.id}
                                className={clsx(styles.navItem, isActive && styles.active)}
                                onClick={() => setStep(item.id)}
                            >
                                <Icon size={18} />
                                <span>{item.label}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        style={{
                                            position: 'absolute',
                                            left: 0,
                                            width: '3px',
                                            height: '100%',
                                            background: 'var(--color-primary-accent)'
                                        }}
                                    />
                                )}
                            </div>
                        );
                    })}
                </nav>

                <div style={{ marginTop: 'auto' }}>
                    <div className={styles.navItem} onClick={() => router.push('/')}>
                        <LogOut size={18} />
                        <span>Exit Studio</span>
                    </div>
                </div>
            </aside>

            <main className={styles.main}>
                <div className={styles.content}>
                    {children}
                </div>
            </main>
        </div>
    );
}
