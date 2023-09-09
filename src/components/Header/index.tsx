import Logo from '../../images/Logo.svg'
import styles from './Header.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <a href="#home"><img src={Logo} alt="Logo"/></a>
                <ul className={styles.menu}>
                    <li className={styles.menuButton}>
                        <a className={styles.menuAnchor} href="#home">Home</a>
                    </li>
                    <li className={styles.menuButton}>
                        <a className={styles.menuAnchor} href="#about">About</a>
                    </li>
                    <li className={styles.menuButton}>
                        <a className={styles.menuAnchor} href="#case">Work</a>
                    </li>
                    <li className={styles.menuButton}>
                        <a className={styles.menuAnchor}  href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}