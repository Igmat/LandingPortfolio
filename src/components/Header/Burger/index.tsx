import styles from './Burger.module.scss'

type BurgerProps = {
    handleClick: () => void
}

export const Burger = (props: BurgerProps) => {

    return (
        <div className={styles.burger} onClick={props.handleClick}>
            <div className={styles.burgerLine}></div>
        </div>
    )
}
