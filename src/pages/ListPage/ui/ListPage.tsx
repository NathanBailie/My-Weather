import { classNames } from 'shared/lib/classNames/classNames';
import { ForecastAdder } from 'entities/ForecastAdder';
import cls from './ListPage.module.scss';

const ListPage = () => {
    return (
        <div className={classNames(cls.ListPage, {}, [])}>
            <ForecastAdder />
        </div>
    );
};

export default ListPage;
