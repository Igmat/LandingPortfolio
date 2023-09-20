import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import styles from './NewCase.module.scss';

export type StyleProps = {
    ["title"]: string,
    ["subtitle"]: string,
    ["background"]: string
}

export type CaseCardProps = {
    post: string
    name: string
    styles?: StyleProps
    isShownButton?: boolean
}

export const Casecard = (props: CaseCardProps) => {

    return (
        <section id="cases" className={styles.sectionWrapper} style={{background: props.styles?.background }}>
            <div className={styles.sectionTextWrapper}>
                <ReactMarkdown components={{
                    h3: ({ node, ...h3Props }) => <h3 style={{ color: props.styles?.title }} {...h3Props}>{h3Props.children}</h3>,
                    p: ({ node, ...pProps }) => <p style={{ color: props.styles?.subtitle }} {...pProps}>{pProps.children}</p>
                }}>
                    {props.post}
                </ReactMarkdown>
                {props.isShownButton ? <Link className={styles.button} to={`case${props.name}`}>View Case Study</Link> : (null)}
            </div>
            <div>
                <img className={styles.caseImage} src={`./markdown/cases/${props.name}/cover-bg.png`} alt="case background" />
            </div>
        </section>)
}