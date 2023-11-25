import App from 'app/App'
import { createRoot } from 'react-dom/client'
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';

const container = document.getElementById('root')
const root = createRoot(container as Element)

root.render(
    <StoreProvider>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </StoreProvider>
)
