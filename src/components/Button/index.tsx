import { ReactNode } from "react"
import styles from './Button.module.scss'

type ButtonProps = {
    children: string | ReactNode
}

export const Button = ({ children }: ButtonProps) => {
    return (
        <button className={styles.button}>
            {children}
        </button>
    )
}