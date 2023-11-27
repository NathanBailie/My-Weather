import { ListPage } from 'pages/ListPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { WeatherDetailsPage } from 'pages/WeatherDetails';
import { type RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps;

export enum AppRoutes {
    LIST = 'list',
    WEATHER_DETAILS = 'weather_details',
    NOT_FOUND = 'notFound'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.LIST]: '/',
    [AppRoutes.WEATHER_DETAILS]: '/list/',
    [AppRoutes.NOT_FOUND]: '/*'
};
export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.LIST]: {
        path: RoutePaths.list,
        element: <ListPage />
    },
    [AppRoutes.WEATHER_DETAILS]: {
        path: `${RoutePaths.weather_details}:id`,
        element: <WeatherDetailsPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.notFound,
        element: <NotFoundPage />
    }
};
