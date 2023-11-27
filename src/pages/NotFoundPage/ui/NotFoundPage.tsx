import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    return (
        <div className={classNames(cls.NotFoundPage, {}, [])}>
            <h1>The page did not found</h1>
        </div>
    );
};
