'use client';

import { motion } from 'framer-motion';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styles from './AnalyticsView.module.scss';

const data = [
    { name: 'Ep 10', loss: 0.8, mAP: 0.2 },
    { name: 'Ep 20', loss: 0.6, mAP: 0.35 },
    { name: 'Ep 30', loss: 0.45, mAP: 0.5 },
    { name: 'Ep 40', loss: 0.3, mAP: 0.65 },
    { name: 'Ep 50', loss: 0.25, mAP: 0.72 },
    { name: 'Ep 60', loss: 0.2, mAP: 0.78 },
    { name: 'Ep 70', loss: 0.15, mAP: 0.82 },
    { name: 'Ep 80', loss: 0.12, mAP: 0.85 },
    { name: 'Ep 90', loss: 0.1, mAP: 0.87 },
    { name: 'Ep 100', loss: 0.08, mAP: 0.89 },
];

export const AnalyticsView = () => {
    return (
        <div className={styles.container}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 style={{ marginBottom: '2rem', fontFamily: 'var(--font-heading)', fontSize: '2rem' }}>Performance Metrics</h1>

                <div className={styles.kpiGrid}>
                    <div className={styles.kpiCard}>
                        <h3>mAP50</h3>
                        <div className={styles.value}>0.89</div>
                    </div>
                    <div className={styles.kpiCard} style={{ borderLeftColor: 'var(--color-secondary-accent)' }}>
                        <h3>Precision</h3>
                        <div className={styles.value}>0.92</div>
                    </div>
                    <div className={styles.kpiCard} style={{ borderLeftColor: '#00D1B2' }}>
                        <h3>Recall</h3>
                        <div className={styles.value}>0.86</div>
                    </div>
                    <div className={styles.kpiCard} style={{ borderLeftColor: '#FF4500' }}>
                        <h3>F1 Score</h3>
                        <div className={styles.value}>0.88</div>
                    </div>
                </div>

                <div className={styles.chartsGrid}>
                    <div className={styles.chartContainer}>
                        <h3 style={{ marginBottom: '1rem' }}>Training Evolution</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                                <XAxis dataKey="name" stroke="#888" />
                                <YAxis stroke="#888" />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                />
                                <Line type="monotone" dataKey="loss" stroke="#FF4500" strokeWidth={2} dot={false} />
                                <Line type="monotone" dataKey="mAP" stroke="#8A2BE2" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '1rem', fontSize: '0.8rem' }}>
                            <span style={{ color: '#FF4500' }}>● Loss</span>
                            <span style={{ color: '#8A2BE2' }}>● mAP</span>
                        </div>
                    </div>

                    <div className={styles.chartContainer}>
                        <h3 style={{ marginBottom: '1rem' }}>Confusion Matrix</h3>
                        <div style={{
                            height: '300px',
                            background: 'linear-gradient(135deg, rgba(204,255,0,0.1) 0%, rgba(138,43,226,0.1) 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '8px',
                            color: 'rgba(0,0,0,0.4)',
                            fontStyle: 'italic'
                        }}>
                            Interactive Heatmap Placeholder
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
