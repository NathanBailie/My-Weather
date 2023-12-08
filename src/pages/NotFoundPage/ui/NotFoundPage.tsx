import { classNames } from 'shared/lib/classNames/classNames';
import errorLight from 'shared/assets/icons/errorLight.png';
import errorDark from 'shared/assets/icons/errorDark.png';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './NotFoundPage.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { BackToList } from 'widgets/BackToList/BackToList';

export const NotFoundPage = () => {
    const { theme } = useTheme();

    const errorImage = theme === 'light' ? errorLight : errorDark;

    return (
        <div className={classNames(cls.NotFoundPage, {}, [])}>
            <Icon src={errorImage} alt='error_image' />
            <h2>The page did not found</h2>
            <BackToList />
        </div>
    );
};
