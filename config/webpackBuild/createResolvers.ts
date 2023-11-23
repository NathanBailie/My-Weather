import path from 'path';
import { type ResolveOptions } from 'webpack';

export function createResolvers(src: string): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [src, 'node_modules'],
        preferAbsolute: true,
        alias: {},
        mainFiles: ['index']
    };
}
