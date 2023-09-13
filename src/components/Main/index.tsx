import { Hero } from "./Hero"
import { About } from "./About"
import { Case } from "./Case"
import { NewCase } from "./NewCase"
import styles from './Main.module.scss'


export const Main = () => {
    return (
        <main className={styles.mainSection}>
            <Hero />
            <About />
            <Case />
            <NewCase />
        </main>
    )
}


