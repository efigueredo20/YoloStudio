import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
    glass?: boolean;
    active?: boolean;
    onClick?: () => void;
    asMotion?: boolean;
}

export const Card = ({ children, className, hoverable, glass, active, onClick, asMotion }: CardProps) => {
    const classNames = clsx(
        styles.card,
        {
            [styles.hoverable]: hoverable,
            [styles.glass]: glass,
            [styles.active]: active
        },
        className
    );

    if (asMotion) {
        return (
            <motion.div
                className={classNames}
                onClick={onClick}
                layout
            >
                {children}
            </motion.div>
        );
    }

    return (
        <div className={classNames} onClick={onClick}>
            {children}
        </div>
    );
};
