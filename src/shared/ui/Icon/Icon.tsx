import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    src: string
    alt: string
    size?: string
}

export const Icon = memo((props: IconProps) => {
    const {
        src,
        alt,
        size = '100%'
    } = props;
    return (
        <img
            src={src}
            alt={alt}
            className={classNames(cls.Icon, {}, [])}
            style={{
                width: `${size}`,
                height: `${size}`
            }}
        />
    )
}
);

Icon.displayName = 'Icon';
