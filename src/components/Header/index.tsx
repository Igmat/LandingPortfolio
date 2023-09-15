import { Link } from 'react-router-dom'
import { LogoDark } from '../Footer/LogoDark'
import styles from './Header.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <Link to="/" className={styles.menuLogo}>
                    <LogoDark />
                </Link>
                <ul className={styles.menu}>
                    <li className={styles.menuButton}>
                        <Link to="/" className={styles.menuAnchor}>Home</Link>
                    </li>
                    <li className={styles.menuButton}>
                        <a className={styles.menuAnchor} href="#about">About</a>
                    </li>
                    <li className={styles.menuButton}>
                        <a href="#cases" className={styles.menuAnchor}>Work</a>
                    </li>
                    <li className={styles.menuButton}>
                        <a href="#contact" className={styles.menuAnchor}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
