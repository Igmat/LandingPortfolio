import ReactMarkdown from 'react-markdown';
import styles from './NewCasePage.module.scss'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Casecard, CaseCardProps } from '../Home/NewCase/Casecard';

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

    useEffect(() => {
        async function fetchCases() {
            try {
                  const resFull = await fetch(`/markdown/cases/${mycase}/full.md`);
                    const textFullCase = await resFull.text();
                    setFullCasePost(textFullCase);
                
                    const res = await fetch(`/markdown/cases/${mycase}/case.md`);
                    const textShortCase = await res.text();
                    setShortCasePost(textShortCase);
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
            <Casecard name={mycase!} post={shortCasePost} isShownButton={false} />
            <ReactMarkdown children={fullCasePost} />
        </main>
    );
}