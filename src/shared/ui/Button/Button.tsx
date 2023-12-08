import { classNames } from 'shared/lib/classNames/classNames';
import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
}

export enum ButtonFonts {
    FONT_24 = 'font_24',
    FONT_30 = 'font_30'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    children?: ReactNode
    font?: string
    size?: string
    width?: string
    height?: string
}

export const Button = memo((props: ButtonProps) => {
    const {
        className = '',
        theme = ButtonTheme.CLEAR,
        children,
        font = ButtonFonts.FONT_24,
        size = '',
        width = '',
        height = '',
        ...otherProps
    } = props;

    const aditionalClasses = [cls[theme], cls[font], cls[className]];

    return (
        <button
            className={classNames(cls.Button, {}, aditionalClasses)}
            type="button"
            style={{
                width: `${width || size}`,
                height: `${height || size}`
            }}
            {...otherProps}
        >
            {children}
        </button >
    );
});

Button.displayName = 'Button';
