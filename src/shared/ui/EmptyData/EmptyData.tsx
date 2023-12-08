import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import noDataLight from 'shared/assets/icons/noDataLight.png';
import noDataDark from 'shared/assets/icons/noDataDark.png';
import { Icon } from '../Icon/Icon';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './EmptyData.module.scss';

interface EmptyDataProps {
    className?: string
}

export const EmptyData = memo((props: EmptyDataProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { theme } = useTheme();

    const noDataImage = theme === 'light' ? noDataLight : noDataDark;

    return (
        <div className={classNames(cls.EmptyData, {}, [className])}>
            <Icon src={noDataImage} alt="no_data" size='250px' />
            <h2>{t('EmptyData')}</h2>
        </div>
    );
});

EmptyData.displayName = 'EmptyData';
