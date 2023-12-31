import { ReactNode } from "react"
import styles from './Button.module.scss'

type ButtonProps = {
    children: string | ReactNode
    link?: string
    isDownload?: boolean
}

export const Button = (props: ButtonProps) => {

    return (
        <a href={props.link} className={`${styles.button} ${props.isDownload ? styles.secButton : ''}`} download={props.isDownload}>
            {props.children}
        </a>
    )
}