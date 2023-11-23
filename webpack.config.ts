import path from 'path';
import type webpack from 'webpack';
import { type Envs } from './config/webpackBuild/types/typesAndInterfaces';
import { webpackConfigBuild } from './config/webpackBuild/webpackConfigBuild';

export default (env: Envs) => {
    const paths = {
        input: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    };

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;

    const config: webpack.Configuration = webpackConfigBuild({
        mode,
        paths,
        isDev,
        port: PORT
    });

    return config;
};
