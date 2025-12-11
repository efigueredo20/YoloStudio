'use client';

import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { useStudioStore } from '@/lib/store';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Activity, Box, Brain, Zap } from 'lucide-react';
import styles from './ModelConfigView.module.scss';

export const ModelConfigView = () => {
    const { modelSize, setModelSize, epochs, setEpochs, batchSize, setBatchSize, device, setDevice } = useStudioStore();

    const sizes = [
        { id: 'nano', label: 'Nano', icon: Zap, desc: 'Fastest' },
        { id: 'small', label: 'Small', icon: Box, desc: 'Standard' },
        { id: 'medium', label: 'Medium', icon: Activity, desc: 'Balanced' },
        { id: 'large', label: 'Large', icon: Brain, desc: 'Accurate' },
        { id: 'xlarge', label: 'X-Large', icon: Brain, desc: 'Most Accurate' },
    ];

    const handleDeviceToggle = () => {
        const newDevice = device === 'cpu' ? 'gpu' : 'cpu';
        setDevice(newDevice);
        if (newDevice === 'cpu') {
            alert('WARNING: CPU training is extremely slow. Using GPU is highly recommended.');
        }
    };

    return (
        <div className={styles.container}>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className={styles.sectionTitle}>Model Configuration</h1>
                <p className={styles.sectionDesc}>Select your model architecture and training hyperparameters.</p>

                <div className={styles.grid}>
                    {sizes.map((s) => {
                        const Icon = s.icon;
                        const isSelected = modelSize === s.id;
                        return (
                            <Card
                                key={s.id}
                                className={clsx(styles.modelCard, isSelected && styles.selected)}
                                onClick={() => setModelSize(s.id as any)}
                                hoverable
                            >
                                <div className={styles.iconWrapper}>
                                    <Icon size={32} />
                                </div>
                                <h3>{s.label}</h3>
                                <span style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.5)' }}>{s.desc}</span>
                            </Card>
                        );
                    })}
                </div>

                <div className={styles.configRow}>
                    <div style={{ width: '150px' }}>
                        <Input
                            label="Epochs"
                            type="number"
                            value={epochs}
                            onChange={(e) => setEpochs(Number(e.target.value))}
                        />
                    </div>
                    <div style={{ width: '150px' }}>
                        <Input
                            label="Batch Size"
                            type="number"
                            value={batchSize}
                            onChange={(e) => setBatchSize(Number(e.target.value))}
                        />
                    </div>

                    <div className={styles.hardwareToggle}>
                        <div>
                            <div style={{ fontWeight: 600 }}>Accelerator</div>
                            <div style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.5)' }}>{device.toUpperCase()}</div>
                        </div>
                        <div
                            className={clsx(styles.switch, device === 'gpu' && styles.active)}
                            onClick={handleDeviceToggle}
                        >
                            <div className={clsx(styles.dot, device === 'gpu' && styles.active)} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
