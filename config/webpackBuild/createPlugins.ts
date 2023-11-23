import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';

export function createPlugins(
    html: string,
    isDev: boolean
): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: '[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            IS_DEV: JSON.stringify(isDev)
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('./public/favicon.png'),
                    to: path.resolve('build/icons')
                }
            ]
        })
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
}
