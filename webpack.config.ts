import * as path from 'path';
import { Configuration, WebpackOptionsNormalized } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

interface EnvironmentVariable {
    environment: 'DEV' | 'PROD';
    //add here other custom environment variables
}

const config = (env: Partial<EnvironmentVariable>): Configuration & Pick<WebpackOptionsNormalized, 'devServer'> => {
    const isProduction = env.environment === 'PROD';
    console.log(`Mode: ${env.environment || 'DEV'}`);
    console.log();

    return {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? undefined : 'source-map',
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'build'),
            publicPath: '/',
            filename: 'index.js',
            library: {
                name: '@dvmstudios/reactylon',
                type: 'umd',
            },
        },
        devServer: {
            devMiddleware: {
                writeToDisk: true,
            },
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js'],
            plugins: [new TsconfigPathsPlugin()],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: {
                        loader: 'ts-loader',
                    },
                    exclude: '/node_modules/',
                },
            ],
        },
        /* optimization: {
            moduleIds: 'deterministic',
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            },
        },*/
        externals: ['react', 'react-dom/client', /^@babylonjs\/*/],
        plugins: [new CleanWebpackPlugin()],
    };
};

export default config;
