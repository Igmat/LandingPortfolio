import { useState, useEffect } from 'react';
import { Button } from '../../../components/Button';
import ReactMarkdown from 'react-markdown';
import styles from './NewCase.module.scss';
import { Link } from 'react-router-dom';

declare const require: {
    context(
        directory: string,
        useSubdirectories: boolean,
        regExp: RegExp,
    ): {
        keys(): string[];
        <T>(id: string): T;
    };
};

const context = require.context('../../../../public/markdown/cases', true, /case\.md$/);

export const NewCase = (): any => {
    const [posts, setPosts] = useState<string[]>([]);

    useEffect(() => {
        async function fetchCases() {
            try {
                const postTexts = await Promise.all(
                    context.keys().map(async (file: any) => {
                        const res = await fetch(`./markdown/cases/${file.slice(2)}`);
                        const text = await res.text();
                        return text;
                    })
                );
                setPosts(postTexts);
            } catch (error) {
                console.error(error);
            }
        }

        fetchCases();
    }, []);

    return (<>
        {
            posts.map((post: string, i) => (
                <section key={i} className={styles.sectionWrapper}>
                    <div className={styles.sectionTextWrapper}>
                        <ReactMarkdown children={post} />
                        <Link className={styles.button} to={`/case${context.keys()[i].toLowerCase().slice(1).slice(0, -8)}`}>View Case Study</Link>
                    </div>
                    <div>
                        <img className={styles.caseImage} src={`./markdown/cases${context.keys()[i].slice(1).slice(0, -8)}/cover-bg.png`} alt="case background" />
                    </div>
                </section>
            )
            )
        }
    </>)
}

// context.keys()[i].toLowerCase().slice(1).slice(0, -8)} вычислить отдельно внутри этого компонента
//вынести в компонент с пропсами 
