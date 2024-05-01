import { Routes, Route } from 'react-router-dom';

import SearchPage from './pages/SearchPage';
import './App.css';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { Layout } from './components/Layout/Layout';

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />}></Route>
                    <Route path="/search" element={<SearchPage />}></Route>
                    <Route path="/about" element={<AboutPage />}></Route>
                </Route>
            </Routes>
        </>
    );
}
