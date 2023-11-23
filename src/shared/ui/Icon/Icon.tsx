import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    src: string
}

export const Icon = memo(({ src }: IconProps) => (
    <img
        src={src}
        alt="theme_icon"
        className={classNames(cls.Icon, {}, [])}
    />
));

Icon.displayName = 'Icon';
