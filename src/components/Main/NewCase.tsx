import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import markdown from '../../markdown/readme1.md'


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

const context = require.context('../../markdown', false, /\.md$/);

const importAll = (r: any) => r.keys().map(r);

const markdownFiles = importAll(context);

console.log(context.keys());

console.log(markdownFiles)
console.log(markdownFiles.map((file: any) => file.default));
console.log(markdown);


export const NewCase = (): any => {
    const [posts, setPosts] = useState<string[]>([]);

    useEffect(() => {
        async function fetchCases() {
            try {
                const postTexts = await Promise.all(
                    markdownFiles.map(async (file: any) => {
                        const res = await fetch(file);
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

    return (
        <section>
            {posts.map((post: string, i: number) =>
                <div key={i}>
                    <ReactMarkdown children={post} />
                </div>
            )}
        </section>
    );
}

