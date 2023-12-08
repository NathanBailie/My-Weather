import { classNames } from 'shared/lib/classNames/classNames';
import errorLight from 'shared/assets/icons/errorLight.png';
import errorDark from 'shared/assets/icons/errorDark.png';
import { Icon } from 'shared/ui/Icon/Icon';
import { useTheme } from 'app/providers/ThemeProvider';
import { BackToList } from 'widgets/BackToList/BackToList';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    const errorImage = theme === 'light' ? errorLight : errorDark;

    return (
        <div className={classNames(cls.NotFoundPage, {}, [])}>
            <Icon src={errorImage} alt='error_image' size='250px' />
            <h2>{t('PageDidNotFound')}</h2>
            <BackToList />
        </div>
    );
};
