import { lazy } from 'react';

export const ListPageAsync = lazy(async () => await import('./ListPage'));
