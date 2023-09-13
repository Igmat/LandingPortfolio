import { StrokeForImage } from './StrokeForImage';
import styles from './HeroImage.module.scss';
import hero from '../../../../images/hero_image.png';

export const HeroImage = () => {
    return (
        <div className={styles.heroImageWrapper}>
            <img src={hero} alt="hero" />
            <StrokeForImage />
        </div>
    )
}