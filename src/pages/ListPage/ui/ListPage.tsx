import { classNames } from 'shared/lib/classNames/classNames';
import { ForecastAdder, ForecastList } from 'features/ForecastList';
import cls from './ListPage.module.scss';

const ListPage = () => {
    return (
        <div className={classNames(cls.ListPage, {}, [])}>
            <ForecastList />
            <ForecastAdder />
        </div>
    );
};

export default ListPage;
