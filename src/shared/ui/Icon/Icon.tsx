import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    src: string
    alt: string
    title?: string
    size?: string
    maxSize?: string
    maxWidth?: string
    maxHeight?: string
    width?: string
    height?: string
}

export const Icon = memo((props: IconProps) => {
    const {
        src,
        alt,
        title = '',
        size = '',
        maxSize = '',
        maxWidth = '',
        maxHeight = '',
        width = '',
        height = '',
        ...otherProps
    } = props;
    return (
        <img
            src={src}
            alt={alt}
            title={title}
            className={classNames(cls.Icon, {}, [])}
            style={{
                width: `${width || size}`,
                height: `${height || size}`,
                maxWidth: `${maxWidth || maxSize}`,
                maxHeight: `${maxHeight || maxSize}`
            }}
            {...otherProps}
        />
    )
}
);

Icon.displayName = 'Icon';
