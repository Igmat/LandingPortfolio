import { Button } from '../../../components/Button';
import { Stats } from './Stats';
import { HeroImage } from './HeroImage';
import styles from './Hero.module.scss';

export const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.background}>
                <div className={styles.heroInfoWrapper}>
                    <article className={styles.articleWrapper}>
                        <h1>Journey Through <br /> UX/UI Artistry</h1>
                        <p>Crafting Captivating User-Centric and Pixel-Perfect Designs</p>
                        <Button link={"mailto:yulia.savchuk.a@gmail.com"}>Say Hello!</Button>
                    </article>
                    <HeroImage />
                    <Stats />
                </div>

                
            </div>
            <div className={styles.greenEllipse}></div>
            <div className={styles.purpleRectangle}></div>
            <div className={styles.blueCircle}></div>
        </section>
    )
}