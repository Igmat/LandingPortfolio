import { Button } from '../../Button';
import { Stats } from './Stats';
import { StrokeForImage } from '../StrokeForImage';
import hero from '../../../images/hero_image.png'
import styles from './Hero.module.scss';

export const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.background}>
                <div className={styles.heroInfoWrapper}>
                    <article className={styles.articleWrapper}>
                        <h1>Journey Through <br /> UX/UI Artistry</h1>
                        <p>Crafting Captivating User-Centric and Pixel-Perfect Designs</p>
                        <Button>Say Hello!</Button>
                    </article>
                    <Stats />
                </div>

                <div className={styles.heroImageWrapper}>
                    <img src={hero} alt="hero" />
                    <StrokeForImage />
                </div>
            </div>
            <div className={styles.greenEllipse}></div>
            <div className={styles.purpleRectangle}></div>
        </section>
    )
}