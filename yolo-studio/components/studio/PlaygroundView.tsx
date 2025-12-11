'use client';

import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';
import React, { useRef, useState } from 'react';
import styles from './PlaygroundView.module.scss';

export const PlaygroundView = () => {
    const [image, setImage] = useState<string | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImage(url);
            // Draw to canvas would happen here
        }
    };

    return (
        <div className={styles.container}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h1 style={{ marginBottom: '2rem', fontFamily: 'var(--font-heading)', fontSize: '2rem' }}>Inference Playground</h1>

                <div className={styles.workspace}>
                    <div className={styles.sidebar}>
                        <h3 style={{ marginBottom: '1rem' }}>Input</h3>
                        <div style={{ marginBottom: '2rem' }}>
                            <input
                                type="file"
                                id="upload-test"
                                hidden
                                onChange={handleUpload}
                                accept="image/*"
                            />
                            <label htmlFor="upload-test">
                                <Button variant="outline" style={{ width: '100%' }} asMotion>
                                    <Upload size={16} style={{ marginRight: '0.5rem' }} /> Upload Image
                                </Button>
                            </label>
                        </div>

                        <h3 style={{ marginBottom: '1rem' }}>Settings</h3>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>
                            Confidence Threshold: 0.5 <br />
                            IOU Threshold: 0.45
                        </div>
                    </div>

                    <div className={styles.canvasContainer}>
                        {image ? (
                            <img src={image} alt="Test" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        ) : (
                            <div className={styles.placeholder}>
                                <Upload size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                <p>Upload an image to test the model</p>
                            </div>
                        )}
                        {/* Bounding box overlay logic would go here */}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
