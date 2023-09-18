import { ReactNode } from "react"
import styles from './Button.module.scss'

type ButtonProps = {
    children: string | ReactNode
}

export const Button = (props: ButtonProps) => {

    return (
        <button className={styles.button}>
            {props.children}
        </button>
    )
}