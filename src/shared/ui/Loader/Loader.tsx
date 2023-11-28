import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Loader.module.scss';

export const Loader = memo(() => {
    return (
        <div className={classNames(cls.Loader, {}, [])} />
    );
});

Loader.displayName = 'Loader';
