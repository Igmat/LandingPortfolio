import ReactMarkdown from 'react-markdown';
import styles from './NewCasePage.module.scss'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

    const [post, setPost] = useState("");

    useEffect(() => {
        async function fetchCases() {
            try {
                const res = await fetch(`/markdown/cases/${mycase}/full.md`);
                const text = await res.text();
                setPost(text);
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
            <ReactMarkdown children={post} />
        </main>
    );
}