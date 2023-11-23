declare module '*.scss' {
    type IClassNames = Record<string, string>
    const classNames: IClassNames;
    export = classNames
}

declare const IS_DEV: boolean;

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
