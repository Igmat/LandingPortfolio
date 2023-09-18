import { ReactNode } from "react"
import styles from './Button.module.scss'

type ButtonProps = {
    children: string | ReactNode
    link?: string
}

export const Button = (props: ButtonProps) => {

    return (
        <a href={props.link} className={styles.button}>
            {props.children}
        </a>
    )
}