import { Link } from 'react-router-dom'
import { LogoDark } from '../Footer/LogoDark'
import { Burger } from './Burger'
import { useState } from 'react'
import styles from './Header.module.scss'

export const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className={styles.header}>
            <nav>
                <Link to="/" className={styles.menuLogo}>
                    <LogoDark />
                </Link>
                {isMenuOpen
                    ?
                    <div className={styles.menuBackground}>
                        <ul>
                            <li className={styles.menuButton}>
                                <Link to="/" className={styles.menuAnchor} onClick={handleClick}>Home</Link>
                            </li>
                            <li className={styles.menuButton}>
                                <a className={styles.menuAnchor} href="#about" onClick={handleClick}>About</a>
                            </li>
                            <li className={styles.menuButton}>
                                <a href="#cases" className={styles.menuAnchor} onClick={handleClick}>Work</a>
                            </li>
                            <li className={styles.menuButton}>
                                <a href={"mailto:yulia.savchuk.a@gmail.com"} className={styles.menuAnchor} onClick={handleClick}>Say Hello!</a>
                            </li>
                        </ul>
                    </div> : null}
                <ul className={styles.menu}>
                    <li className={styles.menuButton}>
                        <Link to="/" className={styles.menuAnchor}>Home</Link>
                    </li>
                    <li className={styles.menuButton}>
                        <a className={styles.menuAnchor} href="#about">About</a>
                    </li>
                    <li className={styles.menuButton}>
                        <a className={styles.menuAnchor} href="#cases">Work</a>
                    </li>
                    <li className={styles.menuButton}>
                        <a href={"mailto:yulia.savchuk.a@gmail.com"} className={styles.menuAnchor}>Say Hello!</a>
                    </li>
                </ul>
                <Burger handleClick={handleClick} />
            </nav>
        </header>
    )
}
