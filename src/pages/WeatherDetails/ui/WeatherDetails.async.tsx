import { lazy } from 'react';

export const WeatherDetailsPageAsync = lazy(async () => await import('./WeatherDetailsPage'));
