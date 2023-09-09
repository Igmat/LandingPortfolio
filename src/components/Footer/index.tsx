import styles from './Footer.module.scss';
import { LogoLight } from '../Header/LogoLight';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href="#home">
                <LogoLight />
            </a>

            <ul className={styles.menu}>
                <li className={styles.menuButton}>
                    <a className={styles.menuLink} href="#home">Home</a>
                </li>
                <li className={styles.menuButton}>
                    <a className={styles.menuLink} href="#about">About</a>
                </li>
                <li className={styles.menuButton}>
                    <a className={styles.menuLink} href="#case">Work</a>
                </li>
            </ul>

            <p className={styles.copyRight}>Copyright © 2023 Julia Savchuk.</p>
        </footer>
    )
}