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


export const pathState = [] as string[]
// хранит в себе все названия файлов в папке cases-pages

export const createPath = (files: string[]) => {

    const context = require.context('../../public/markdown/cases-pages', true, /\.md$/).keys();

    context.forEach((item: string) => {
        const file = item.replace(/(\.\/|\.md|\/case-page)/g, '') as string
    pathState.push(file)
    })
    
    console.log(pathState);
    
    return files.map((file => {
        const capitalizesString = file.charAt(0).toUpperCase() + file.slice(1)
        return { path: `/${file.toLocaleLowerCase()}`, element: capitalizesString }
    }))
}