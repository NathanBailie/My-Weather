import { memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig, type AppRoutesProps } from '../lib/routerConfig';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const { path, element } = route;
        return (
            <Route
                key={path}
                path={path}
                element={element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);
