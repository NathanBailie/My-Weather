import App from 'app/App'
import { createRoot } from 'react-dom/client'
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';

const container = document.getElementById('root')
const root = createRoot(container as Element)

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>
)
