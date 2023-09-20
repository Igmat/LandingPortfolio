import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Casecard, StyleProps } from '../Home/NewCase/Casecard';
import styles from './NewCasePage.module.scss'

type KeywordsType = {
    "Keywords": string[]
}

export const NewCasePage = () => {
    const { mycase } = useParams<{ mycase: string }>();

    const [fullCasePost, setFullCasePost] = useState("");
    const [shortCasePost, setShortCasePost] = useState("");
    const [customStyles, setCustomStyles] = useState<StyleProps>({
        title: "",
        subtitle: "",
        background: ""
    });
    const [keywords, setKeywords] = useState<KeywordsType>({ "Keywords": [] });

    useEffect(() => {
        async function fetchCases() {
            try {
                const resFull = await fetch(`./markdown/cases/${mycase}/full.md`);
                const textFullCase = await resFull.text();
                setFullCasePost(textFullCase);

                const res = await fetch(`./markdown/cases/${mycase}/case.md`);
                const textShortCase = await res.text();
                setShortCasePost(textShortCase);

                const resStyles = await fetch(`./markdown/cases/${mycase}/styles.json`);
                const styles = await resStyles.json();
                setCustomStyles(styles);

                const keywords = await fetch(`./markdown/cases/${mycase}/keywords.json`);
                const keywordsArray = await keywords.json();
                setKeywords(keywordsArray);
            }

            catch (error) {
                console.error(error);
            }
        }

        fetchCases();

    }, [mycase]);

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
                            {keywords.Keywords &&

                                keywords.Keywords.map((keyword, i) => (
                                    <li className={styles.keyword} key={i}>{keyword}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={styles.reactMarkDown}>
                        <ReactMarkdown children={fullCasePost} />
                    </div>
                </div>
            </div>
        </main>
    );
}