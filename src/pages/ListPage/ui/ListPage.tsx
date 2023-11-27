import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ListPage.module.scss';

const ListPage = () => {
    return (
        <div className={classNames(cls.ListPage, {}, [])}>
            <h1>ListPage</h1>
        </div>
    );
};

export default ListPage;
