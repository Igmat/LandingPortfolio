/// <reference types="react-scripts" />
declare module '*.md' {
    const content: string;
    export default content;
}

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
