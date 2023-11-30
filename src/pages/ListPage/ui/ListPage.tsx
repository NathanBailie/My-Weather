import { classNames } from 'shared/lib/classNames/classNames';
import { ForecastAdder } from 'entities/ForecastAdder';
import { ForecastList } from 'entities/ForecastList';
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
