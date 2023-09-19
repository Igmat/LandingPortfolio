import { Hero } from "./Hero"
import { About } from "./About"
import { NewCase } from "./NewCase"
import styles from './Home.module.scss'


export const Home = () => {
    return (
        <main className={styles.mainSection}>
            <Hero />
            <About />
            <NewCase />
        </main>
    )
}