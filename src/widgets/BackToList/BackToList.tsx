import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import back from 'shared/assets/icons/back.png';
import { Link } from 'react-router-dom';
import { RoutePaths } from 'app/providers/AppRouter/lib/routerConfig';
import cls from './BackToList.module.scss';

interface BackToListProps {
    className?: string
}

export const BackToList = memo((props: BackToListProps) => {
    const { className } = props;
    const { t } = useTranslation('Buttons');

    return (
        <div className={classNames(cls.BackToList, {}, [className])} title={t('Back')}>
            <button>
                <Link to={RoutePaths.list}>
                    <img src={back} alt="back_button" title={t('Back')} />
                </Link>
            </button>
        </div>
    );
});

BackToList.displayName = 'BackToList';
