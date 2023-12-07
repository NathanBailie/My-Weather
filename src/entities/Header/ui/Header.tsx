import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import cls from './Header.module.scss';
import { DataShower } from 'entities/DataShower';

export const Header = memo(() => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Header, {}, [])}>
            <h1>{t('MyWeather')}</h1>
            <DataShower />
            <div className={cls.Header__wrapper}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
});

Header.displayName = 'Header';
