import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import styles from './NewCase.module.scss';

export type CaseCardProps = {
    post: string;
    name: string;
    isShownButton?: boolean;
}

export const Casecard = (props: CaseCardProps) => {

    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.sectionTextWrapper}>
                <ReactMarkdown children={props.post} />
                {props.isShownButton ? <Link className={styles.button} to={`case${props.name}`}>View Case Study</Link> : (null)}
            </div>
            <div>
                <img className={styles.caseImage} src={`/markdown/cases/${props.name}/cover-bg.png`} alt="case background" />
            </div>
        </section>)


}