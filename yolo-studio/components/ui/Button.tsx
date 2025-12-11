import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    children: React.ReactNode;
    className?: string;
    asMotion?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', children, className, asMotion = false, ...props }, ref) => {
        const classNames = clsx(styles.button, styles[variant], className);

        if (asMotion) {
            return (
                <motion.button
                    className={classNames}
                    whileTap={{ scale: 0.95 }}
                    ref={ref as any}
                    {...(props as any)}
                >
                    {children}
                </motion.button>
            );
        }

        return (
            <button ref={ref} className={classNames} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
