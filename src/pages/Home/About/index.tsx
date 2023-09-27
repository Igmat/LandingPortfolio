import { FacebookIcon } from './Social/FacebookIcon'
import { DribbleIcon } from './Social/DribbleIcon'
import { InstagramIcon } from './Social/InstagramIcon'
import { LinkedInIcon } from './Social/LinkedInIcon'
import { BehanceIcon } from './Social/BehanceIcon'
import { Button } from '../../../components/Button'
import { ArrowDownload } from './ArrowDownload'
import { useEffect, useState } from 'react'
import styles from './About.module.scss'

type SocialLinksType = {
    Facebook: string
    Dribble: string
    Instagram: string
    LinkedIn: string
    Behance: string
}
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


    const [socialLinks, setSocialLinks] = useState<SocialLinksType>({
        Facebook: "",
        Dribble: "",
        Instagram: "",
        LinkedIn: "",
        Behance: "",
    });

    useEffect(() => {
        async function fetchSocialLinks(){
        try {
            const res = await fetch('/socialLinks.json');
            const links = await res.json();
            setSocialLinks(links);
        }
        catch (error) {
            console.error(error);
            }
        }

        fetchSocialLinks();

    }, []);


    const svgMap = {
        Facebook: FacebookIcon,
        Dribble: DribbleIcon,
        Instagram: InstagramIcon,
        LinkedIn: LinkedInIcon,
        Behance: BehanceIcon
    }

    const socialLinksArray = Object.entries<string, SocialLinksType>(socialLinks).map(([name, url]) => ({
        name,
        url,
        IconComponent: svgMap[name] 
    }));
    
    return (
        <section id='about' className={styles.sectionWrapper}>
            <article className={styles.aboutWrapper}>
                <h2 className={styles.aboutTitle}>Passionate UX/UI Designer Creating Seamless Digital Experiences</h2>
                <p className={styles.aboutText}>
                    I'm a UX/UI designer with a passion for crafting user-friendly digital experiences. With a keen eye for design and a focus on user needs, I create interfaces that are not only visually appealing but also highly functional. I love turning complex ideas into simple and intuitive solutions. Let's make the digital world a better place, one click at a time!
                </p>
                <div className={styles.buttonWrapper}>
                    <Button>My projects</Button>
                    <Button link={"./CV/CV.pdf"} isDownload={true}><ArrowDownload />{buttonLabel}</Button>
                </div>
            </article>
            <ul className={styles.social}>
                {socialLinksArray.map(({name, url, IconComponent })=> 
                    <li key={name} className={styles.socialIcon}>
                        <a href={url} target="_blank" rel="noreferrer">
                            <IconComponent />
                        </a>
                    </li>
                )}
            </ul>
        </section>
    )
}
