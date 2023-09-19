import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Casecard, StyleProps } from '../Home/NewCase/Casecard';
import styles from './NewCasePage.module.scss'

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


export const NewCasePage = () => {
    const { mycase } = useParams<{ mycase: string }>();

    const [fullCasePost, setFullCasePost] = useState("");
    const [shortCasePost, setShortCasePost] = useState("");
    const [customStyles, setCustomStyles] = useState<StyleProps>({
        title: "",
        subtitle: "",
        background: ""
    });
    const [keywords, setKeywords] = useState<string[]>([]);

    useEffect(() => {
        async function fetchCases() {
            try {
                const resFull = await fetch(`/markdown/cases/${mycase}/full.md`);
                const textFullCase = await resFull.text();
                setFullCasePost(textFullCase);

                const res = await fetch(`/markdown/cases/${mycase}/case.md`);
                const textShortCase = await res.text();
                setShortCasePost(textShortCase);

                const resStyles = await fetch(`/markdown/cases/${mycase}/styles.json`);
                const styles = await resStyles.json();
                setCustomStyles(styles);

                const keywords = await fetch(`/markdown/cases/${mycase}/keywords.json`);
                const keywordsArray = await keywords.json();
                console.log(keywordsArray);
                setKeywords(keywordsArray);
            }

            catch (error) {
                console.error(error);
            }
        }

        let unmounted = false;

        fetchCases();

        return () => {
            unmounted = true;
        };
    }, []);

    return (
        <main>
            <div className={styles.mainWrapper}>
                <div className={styles.caseCardWrapper}>
                    <Casecard name={mycase!} post={shortCasePost} isShownButton={false} styles={customStyles} />
                </div>
                <div className={styles.clearfix}>
                    <div className={styles.keywords}>
                        <h5>Keywords</h5>
                        <ul>
                        {
                        keywords.map((keyword, i) => (
                            <li className={styles.keyword} key={i}>{keyword}</li>
                        ))
                    }</ul></div>
                    <div className={styles.reactMarkDown}>
                        <ReactMarkdown children={fullCasePost} />
                    </div>
                </div>

            </div>

        </main>
    );
}