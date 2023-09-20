
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

export const config = require.context('../public/markdown/cases', true, /case\.md$/).keys();

