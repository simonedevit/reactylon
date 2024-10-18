import * as path from 'path';
import { Configuration, EnvironmentPlugin, WebpackOptionsNormalized } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

interface EnvironmentVariable {
    environment: 'DEV' | 'PROD';
    isLogging: boolean;
    //add here other custom environment variables
}

const config = (env: Partial<EnvironmentVariable>): Configuration & Pick<WebpackOptionsNormalized, 'devServer'> => {
    const isProduction = env.environment === 'PROD';
    const isLogging = !!env.isLogging;
    console.log(`Mode: ${env.environment || 'DEV'}`);
    console.log(`Logging: ${isLogging ? 'Enabled' : 'Disabled'}`);
    console.log();

    return {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? undefined : 'source-map',
        entry: {
            hooks: './src/hooks.ts',
            index: './src/index.tsx',
            web: './src/web/index.ts',
            mobile: './src/mobile/index.ts',
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            publicPath: '/',
            filename: pathData => {
                return pathData.runtime === 'index' ? 'index.js' : `${pathData.runtime}/index.js`;
            },
            globalObject: 'globalThis', // Use globalThis instead of self
            library: {
                type: 'module',
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
        experiments: {
            outputModule: true,
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
        externals: ['react', 'react-dom/client', /^@babylonjs\/*/, 'its-fine'],
        plugins: [
            new CleanWebpackPlugin(),
            // serve custom environment variable to application
            new EnvironmentPlugin({
                IS_LOGGING_ENABLED: isLogging,
            }),
        ],
    };
};

export default config;
