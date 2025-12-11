import clsx from 'clsx';
import React from 'react';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, className, ...props }, ref) => {
        return (
            <div className={styles.inputWrapper}>
                {label && <label>{label}</label>}
                <div className={styles.inputContainer}>
                    <input
                        ref={ref}
                        className={clsx(className)}
                        {...props}
                    />
                </div>
            </div>
        );
    }
);

Input.displayName = 'Input';
