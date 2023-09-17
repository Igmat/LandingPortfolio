import { useState, useEffect } from 'react';
import { CaseCardProps, Casecard } from './Casecard';

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
    const [posts, setPosts] = useState<CaseCardProps[]>([]);

    useEffect(() => {
        async function fetchCases() {
            try {
                const postTexts = await Promise.all(
                    context.keys().map(async (file: any, i) => {
                        const nameOfCase = context.keys()[i].toLowerCase().slice(1).slice(0, -8);
                        const res = await fetch(`/markdown/cases/${file.slice(2)}`);
                        const text = await res.text();

                        const resStyles = await fetch(`/markdown/cases/${nameOfCase}/styles.json`);
                        const styles = await resStyles.json();

                        console.log(styles);
                        
                        return {
                            post: text,
                            name: nameOfCase,
                            styles: styles
                        };
                    })
                );
                setPosts(postTexts);
                console.log(posts);
                
            } catch (error) {
                console.error(error);
            }
        }

        fetchCases();
    }, []);

    return (<>
        {posts.map((post, i) => (
            <Casecard
                key={i}
                post={post.post}
                name={post.name}
                styles={post.styles}
                isShownButton={true}
            />
        ))
        }
    </>)
}

