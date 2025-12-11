'use client';

import { Button } from '@/components/ui/Button';
import { useStudioStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { Pause, Play } from 'lucide-react';
import { useEffect, useRef } from 'react';
import styles from './TrainingView.module.scss';

export const TrainingView = () => {
    const { isTraining, startTraining, stopTraining, logs, addLog, progress } = useStudioStore();
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [logs]);

    // Simulation effect
    useEffect(() => {
        let interval: any;
        if (isTraining) {
            interval = setInterval(() => {
                const randomLog = `Epoch ${Math.floor(Math.random() * 100)}: loss_box: ${Math.random().toFixed(4)} - loss_obj: ${Math.random().toFixed(4)} - mAP: ${(Math.random() * 0.9).toFixed(4)}`;
                addLog(randomLog);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isTraining, addLog]);

    return (
        <div className={styles.container}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h1 style={{ marginBottom: '1rem', fontFamily: 'var(--font-heading)', fontSize: '2rem' }}>Training Execution</h1>

                <div className={styles.controls}>
                    {!isTraining ? (
                        <Button
                            onClick={startTraining}
                            style={{ background: 'var(--color-black)', color: 'var(--color-primary-accent)', padding: '1rem 3rem' }}
                        >
                            <Play size={20} style={{ marginRight: '0.5rem' }} /> START FINE-TUNING
                        </Button>
                    ) : (
                        <Button
                            onClick={stopTraining}
                            variant="secondary"
                        >
                            <Pause size={20} style={{ marginRight: '0.5rem' }} /> PAUSE
                        </Button>
                    )}
                </div>

                {isTraining && (
                    <div className={styles.progressSection}>
                        <div className={styles.label}>
                            <span>Global Progress</span>
                            <span>{progress}%</span>
                        </div>
                        <div className={styles.progressBar}>
                            <div className={styles.fill} style={{ width: `${progress}%` }} />
                        </div>
                    </div>
                )}

                <div className={styles.terminal}>
                    {logs.length === 0 && <div className={styles.line} style={{ opacity: 0.5 }}>Waiting for commands...</div>}
                    {logs.map((log, index) => (
                        <div key={index} className={styles.line}>
                            <span style={{ opacity: 0.5 }}>[{new Date().toLocaleTimeString()}]</span> {log}
                        </div>
                    ))}
                    <div ref={bottomRef} />
                </div>
            </motion.div>
        </div>
    );
};
