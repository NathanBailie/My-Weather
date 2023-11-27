import { Suspense } from 'react';
import { Header } from 'entities/Header';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/AppRouter';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Header />
                <AppRouter />
            </Suspense>
        </div>
    )
}

export default App;
