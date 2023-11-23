import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Header.module.scss';

export const Header = memo(() => {
    return (
        <div className={classNames(cls.Header, {}, [])}>
            <h1>My Weather</h1>
            <div className={cls.Header__wrapper}>
                <ThemeSwitcher />
            </div>
        </div>
    );
});

Header.displayName = 'Header';
