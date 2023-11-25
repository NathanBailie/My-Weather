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

export enum ButtonSizes {
    SWITCHER_THEME = 'switcher_theme',
    SWITCHER_LANG = 'switcher_lang',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    children?: ReactNode
    font?: string
    width?: string
    height?: string
    size?: string
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        theme = ButtonTheme.CLEAR,
        children,
        font = ButtonFonts.FONT_L,
        size = ButtonSizes.SWITCHER_LANG,
        ...otherProps
    } = props;

    const aditionalClasses = [cls[theme], cls[font], cls[size]];

    return (
        <button
            className={classNames(cls.Button, {}, [className, ...aditionalClasses])}
            type="button"
            {...otherProps}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
