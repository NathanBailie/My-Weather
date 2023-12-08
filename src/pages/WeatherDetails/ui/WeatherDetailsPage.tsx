import { classNames } from 'shared/lib/classNames/classNames';
import { WeatherDetails } from 'features/WeatherDetails';
import { useParams } from 'react-router-dom';
import { BackToList } from 'widgets/BackToList/BackToList';
import cls from './WeatherDetailsPage.module.scss';

const WeatherDetailsPage = () => {
    const params = useParams();
    const cityName = params.id as string;

    return (
        <div className={classNames(cls.WeatherDetailsPage, {}, [])}>
            <WeatherDetails cityName={cityName} />
            <BackToList />
        </div>
    );
};

export default WeatherDetailsPage;
