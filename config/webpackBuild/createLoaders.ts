import { type RuleSetRule } from 'webpack';
import { createSassLoader } from './loaders/sassLoader';
import { createBabelLoader } from './loaders/babelLoader';

export function createLoaders(isDev: boolean): RuleSetRule[] {
    const sassLoader = createSassLoader(isDev);
    const babelLoader = createBabelLoader(isDev);

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    const imageLoader = {
        test: /\.(png|svg|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'img/[name].[hash][ext]'
        }
    };

    const fontLoader = {
        test: /\.(woff2|woff|ttf)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'fonts/font/[name].[hash][ext]'
        }
    };

    return [
        imageLoader,
        fontLoader,
        babelLoader,
        typeScriptLoader,
        sassLoader
    ];
}
