import { classNames } from 'shared/lib/classNames/classNames';
import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
}

export enum ButtonFonts {
    FONT_M = 'font_m',
    FONT_L = 'font_l',
    FONT_XL = 'font_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    children?: ReactNode
    font?: string
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        theme = ButtonTheme.CLEAR,
        children,
        font = ButtonFonts.FONT_L,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme], cls[font]])}
            type="button"
            {...otherProps}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
