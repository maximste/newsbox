import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { Suspense } from 'react';
import AppRouter from './providers/router/ui/AppRouter';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            {/* Suspense is used due to localization is async */}
            <Suspense fallback="">
                <Navbar />
                <main className="content-page">
                    <Sidebar />
                    <AppRouter />
                </main>
            </Suspense>
        </div>
    );
};

export default App;
