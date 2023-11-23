import App from 'app/App'
import { createRoot } from 'react-dom/client'
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/StoreProvider';

const container = document.getElementById('root')
const root = createRoot(container as Element)

root.render(
    <StoreProvider>
        <App />
    </StoreProvider>
)
