import styles from './Stats.module.scss';

export const Stats = () => {
    return (
        <section className={styles.statsWrapper}>
            <div className={styles.stats}>
                <span className={styles.boldText}>14 Y.</span>
                <span className={styles.thinText}>Experience</span>
            </div> 
            <div className={styles.stats}>
                <span className={styles.boldText}>50 +</span>
                <span className={styles.thinText}>Projects Completed</span>
            </div>
            <div className={styles.stats}>
                <span className={styles.boldText}>30+</span>
                <span className={styles.thinText}>Happy Clients</span>
            </div>
        </section>
    )
}