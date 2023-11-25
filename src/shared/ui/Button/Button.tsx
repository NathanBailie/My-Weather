import { classNames } from 'shared/lib/classNames/classNames';
import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        theme = ButtonTheme.CLEAR,
        children,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            type="button"
            {...otherProps}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
