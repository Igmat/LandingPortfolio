import { StrokeForImage } from "./StrokeForImage"
import hero from '../../../../images/hero_image.png'
import styles from './HeroImage.module.scss'

export const HeroImage = () => {
    return (
        <div className={styles.heroImageWrapper}>
            <img src={hero} alt="hero" />
            <StrokeForImage />
        </div>
    )
}