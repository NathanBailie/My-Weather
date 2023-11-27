import { classNames } from 'shared/lib/classNames/classNames';
import cls from './WeatherDetailsPage.module.scss';

const WeatherDetailsPage = () => {
    return (
        <div className={classNames(cls.WeatherDetailsPage, {}, [])}>
            <h1>WeatherDetailsPage</h1>
        </div>
    );
};

export default WeatherDetailsPage;
