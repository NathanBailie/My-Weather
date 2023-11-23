import { Header } from 'entities/Header';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';

const App = (): any => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Header />
        </div>
    )
}

export default App;
