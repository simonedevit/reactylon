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
            index: './src/index.tsx',
            web: './src/web/index.ts',
            mobile: './src/mobile/index.ts',
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            publicPath: '/',
            filename: pathData => {
                if (['web', 'mobile'].includes(pathData.chunk?.name as string)) {
                    return '[name]/index.js';
                } else {
                    return '[name].js';
                }
            },
            // dynamic imported chunks
            // chunkFilename: '[name].dynamic-import.js',
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
        optimization: {
            moduleIds: 'deterministic',
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                        /*name: (module) => {
                            const packageName = module.context.match(
                              /[\\/]node_modules[\\/]((@[^\\/]+[\\/][^\\/]+)|([^\\/]+))([\\/]|$)/
                            )[1];
                            return `vendor.${packageName.replace('/', '.')}`;
                        }*/
                    },
                },
            },
        },
        externals: ['react', 'react-dom/server', /^@babylonjs\/*/, 'its-fine'],
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
