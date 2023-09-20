import { useState, useEffect } from 'react';
import { CaseCardProps, Casecard } from './Casecard';
import { useCases } from '../../../casesContext';

export const NewCase = (): any => {
    const context = useCases();

    const [posts, setPosts] = useState<CaseCardProps[]>([]);

    useEffect(() => {
        async function fetchCases() {
            try {
                const postTexts = await Promise.all(
                    context.map(async (file, i) => {
                        const nameOfCase = file.toLowerCase().slice(1).slice(0, -8);
                        const res = await fetch(`./markdown/cases/${file.slice(2)}`);
                        const text = await res.text();

                        const resStyles = await fetch(`./markdown/cases/${nameOfCase}/styles.json`);
                        const styles = await resStyles.json();
   
                        return {
                            post: text,
                            name: nameOfCase,
                            styles: styles
                        };
                    })
                );
                setPosts(postTexts);
                
            } catch (error) {
                console.error(error);
            }
        }

        fetchCases();
    }, [context]);

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

