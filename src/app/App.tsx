import { Suspense } from 'react';
import { Header } from 'entities/Header';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from 'app/providers/AppRouter';
import { Modal } from 'entities/Modal/Modal/Modal';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Header />
                <AppRouter />
                <Modal />
            </Suspense>
        </div>
    )
}

export default App;
