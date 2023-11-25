import { Suspense } from 'react';
import { Header } from 'entities/Header';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { useTranslation } from 'react-i18next';

const App = (): any => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Header />
                {t('Word')}
            </Suspense>
        </div>
    )
}

export default App;
