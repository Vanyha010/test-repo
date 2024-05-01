import { NavLink, Outlet } from 'react-router-dom';
import styles from './Header.module.css';

type ClassType = {
    isActive: boolean;
};

const Layout = () => {
    const setClass = ({ isActive }: ClassType) => {
        return isActive ? styles.activeLink : styles.headerLink;
    };

    return (
        <>
            <header className={styles.header}>
                <NavLink to="/" className={setClass}>
                    Home
                </NavLink>
                <NavLink to="/search" className={setClass}>
                    Search
                </NavLink>
                <NavLink to="/about" className={setClass}>
                    About
                </NavLink>
            </header>
            <Outlet />
        </>
    );
};

export { Layout };
