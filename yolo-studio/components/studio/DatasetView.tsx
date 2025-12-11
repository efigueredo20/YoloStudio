'use client';

import { useStudioStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { UploadCloud } from 'lucide-react';
import styles from './DatasetView.module.scss';

export const DatasetView = () => {
    const { trainSplit, setTrainSplit } = useStudioStore();

    return (
        <div className={styles.container}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className={styles.sectionTitle}>Dataset Management</h1>
                <p className={styles.sectionDesc}>Upload your images and annotations, then configure the train/test split.</p>

                <div className={styles.uploadArea}>
                    <UploadCloud className={styles.icon} size={48} />
                    <p>Drag & Drop your dataset (.zip) here</p>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.5)' }}>or click to browse</span>
                </div>

                <div className={styles.splitSection}>
                    <h3>Train / Test Split</h3>

                    <div className={styles.sliderContainer}>
                        <div className={styles.sliderTrack}>
                            <div
                                className={styles.sliderFill}
                                style={{ width: `${trainSplit}%` }}
                            />
                        </div>
                        <input
                            type="range"
                            min="50"
                            max="95"
                            value={trainSplit}
                            onChange={(e) => setTrainSplit(parseInt(e.target.value))}
                            className={styles.sliderInput}
                        />
                        {/* Thumb indicator logic could be added for custom styling */}
                    </div>

                    <div className={styles.sliderLabel}>
                        <span style={{ color: 'var(--color-success)' }}>Train: {trainSplit}%</span>
                        <span style={{ color: '#9CA3AF' }}>Test: {100 - trainSplit}%</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
