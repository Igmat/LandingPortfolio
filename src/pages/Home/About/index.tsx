import { FacebookIcon } from './Social/FacebookIcon'
import { DribbleIcon } from './Social/DribbleIcon'
import { InstagramIcon } from './Social/InstagramIcon'
import { LinkedInIcon } from './Social/LinkedInIcon'
import { BehanceIcon } from './Social/BehanceIcon'
import { Button } from '../../../components/Button'
import { ArrowDownload } from './ArrowDownload'
import { useEffect, useState } from 'react'
import styles from './About.module.scss'

export const About = () => {

    const [isMobile, setIsMobile] = useState(false);

    const handleWindowResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const buttonLabel = isMobile ? "CV" : "Download CV";


    return (
        <section id='about' className={styles.sectionWrapper}>
            <article className={styles.aboutWrapper}>
                <h2 className={styles.aboutTitle}>Passionate UX/UI Designer Creating Seamless Digital Experiences</h2>
                <p className={styles.aboutText}>
                    I'm a UX/UI designer with a passion for crafting user-friendly digital experiences. With a keen eye for design and a focus on user needs, I create interfaces that are not only visually appealing but also highly functional. I love turning complex ideas into simple and intuitive solutions. Let's make the digital world a better place, one click at a time!
                </p>
                <div className={styles.buttonWrapper}>
                    <Button>My projects</Button>
                    <Button><ArrowDownload />{buttonLabel}</Button>
                </div>
            </article>
            <ul className={styles.social}>
                <li className={styles.socialIcon}>
                    <a href="#" target="_blank">
                        <FacebookIcon />
                    </a>
                </li>
                <li className={styles.socialIcon}>
                    <a href="#" target="_blank">
                        <DribbleIcon />
                    </a>
                </li>
                <li className={styles.socialIcon}>
                    <a href="#" target="_blank">
                        <InstagramIcon />
                    </a>
                </li>
                <li className={styles.socialIcon}>
                    <a href="https://www.linkedin.com/in/julia-savchuk-46b922107/" target="_blank">
                        <LinkedInIcon />
                    </a>
                </li>
                <li className={styles.socialIcon}>
                    <a href="#" target="_blank">
                        <BehanceIcon />
                    </a>
                </li>
            </ul>
        </section>
    )
}