'use client';

import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';

export default function LandingPage() {
  const router = useRouter();

  const handleStart = () => {
    // Zoom transition handling could be added here
    router.push('/studio');
  };

  return (
    <div className={styles.container}>
      {/* Background Video Simulator */}
      <div className={styles.videoBackground}>
        {/* Placeholder for video - in production use <video autoPlay loop muted playsInline src="/assets/hero-bg.mp4" /> */}
        <div style={{
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000000 100%)'
        }}>
          {/* Abstract visual elements */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              position: 'absolute', top: '20%', left: '20%', width: '400px', height: '400px',
              background: 'radial-gradient(circle, var(--color-secondary-accent) 0%, transparent 70%)',
              filter: 'blur(100px)',
              opacity: 0.3
            }}
          />
          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            style={{
              position: 'absolute', bottom: '20%', right: '20%', width: '500px', height: '500px',
              background: 'radial-gradient(circle, var(--color-primary-accent) 0%, transparent 70%)',
              filter: 'blur(120px)',
              opacity: 0.2
            }}
          />
        </div>
        <div className={styles.overlay} />
      </div>

      <header className={styles.header}>
        <div className={styles.logo}>YOLO <span>STUDIO</span></div>
      </header>

      <main className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          TRAIN YOUR<br />VISION
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          The advanced environment for fine-tuning YOLO models. <br />
          Surgical precision, organic workflow.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button
            variant="outline"
            asMotion
            onClick={handleStart}
            style={{ fontSize: '1.2rem', padding: '1.2rem 2.5rem', borderWidth: '1px' }}
          >
            LAUNCH STUDIO <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </main>
    </div>
  );
}
