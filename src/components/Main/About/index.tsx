import { FacebookIcon } from './Social/FacebookIcon'
import { DribbleIcon } from './Social/DribbleIcon'
import { InstagramIcon } from './Social/InstagramIcon'
import { LinkedInIcon } from './Social/LinkedInIcon'
import { BehanceIcon } from './Social/BehanceIcon'
import { Button } from '../../Button'
import { ArrowDownload } from './ArrowDownload'
import styles from './About.module.scss'

export const About = () => {
    return (
        <section className={styles.sectionWrapper}>
            <article className={styles.aboutWrapper}>
                <h2 className={styles.aboutTitle}>Passionate UX/UI Designer Creating Seamless Digital Experiences</h2>
                <p className={styles.aboutText}>
                    I'm a UX/UI designer with a passion for crafting user-friendly digital experiences. With a keen eye for design and a focus on user needs, I create interfaces that are not only visually appealing but also highly functional. I love turning complex ideas into simple and intuitive solutions. Let's make the digital world a better place, one click at a time!
                </p>
                <div className={styles.buttonWrapper}>
                    <Button>My projects</Button>
                    <Button><ArrowDownload/>Download CV</Button>
                </div>
            </article>
            <ul className={styles.social}>
                <li className={styles.socialIcon}>
                    <a href="#">
                        <FacebookIcon />
                    </a>
                </li>
                <li className={styles.socialIcon}>
                    <a href="#">
                        <DribbleIcon />
                    </a>
                </li>
                <li className={styles.socialIcon}>
                    <a href="#">
                        <InstagramIcon />
                    </a>
                </li>
                <li className={styles.socialIcon}>
                    <a href="#">
                        <LinkedInIcon />
                    </a>
                </li>
                <li className={styles.socialIcon}>
                    <a href="#">
                        <BehanceIcon />
                    </a>
                </li>
            </ul>
        </section>
    )
}