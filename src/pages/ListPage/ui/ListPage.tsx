import { classNames } from 'shared/lib/classNames/classNames';
import { ForecastList } from 'features/ForecastList';
import cls from './ListPage.module.scss';

const ListPage = () => {
    return (
        <div className={classNames(cls.ListPage, {}, [])}>
            <ForecastList />
        </div>
    );
};

export default ListPage;
