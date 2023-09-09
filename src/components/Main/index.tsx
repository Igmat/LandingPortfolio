import { Hero } from "./Hero"
import { About } from "./About"
import { Stats } from "./Stats"
import styles from './Main.module.scss'
import { Case } from "./Case"

export const Main = () => {
    return (
        <main className={styles.mainSection}>
            <Hero />
            <Stats />
            <About />
            <Case />
        </main>
    )
}