import { Button } from '../../Button';
import background from '../../../images/Auction-app.png'
import styles from './Case.module.scss';

export const Case = () => {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.sectionTextWrapper}>
                <h3>Crypto Startup with Streaming</h3>
                <p>Exploring the fusion of streaming and auctions, this project showcases a unique platform for content creators to connect with their audience. At its core, a custom crypto token empowers users to bid on exclusive content and engage with their favorite creators.</p>
                <Button>View Case Study</Button>
            </div>
            <div>
                <img className={styles.caseImage} src={background} alt="case image"/>
            </div>
        </section>
    )
}