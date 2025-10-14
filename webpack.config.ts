import CopyPlugin from "copy-webpack-plugin";
import path from "path";
import { Configuration } from "webpack";
import nodeExternals from "webpack-node-externals";

const modes = [
    `development`,
    `production`,
    `none`,
] as const;
type Mode = typeof modes[number];

const dirtyNodeEnv = process.env.NODE_ENV as Mode;
const nodeEnv =
    (modes.includes(dirtyNodeEnv) ? dirtyNodeEnv : undefined) ?? `production`;
const isDev = nodeEnv === `development`;

const outputDir = path.resolve(__dirname, `dist`);

const config: Configuration = {
    mode: nodeEnv,
    entry: {
        index: `./src/index.ts`,
        "brands/kidsloop/index": `./src/brands/kidsloop/index.ts`,
        "brands/rumahkisah/index": `./src/brands/rumahkisah/index.ts`,
        "brands/akademimu/index": `./src/brands/akademimu/index.ts`,
    },
    output: {
        filename: `[name].js`,
        path: outputDir,
        globalObject: `this`,
        libraryTarget: `umd`,
        library: `@klasmart-engineering/klasmart-branding`,
    },
    devServer: isDev
        ? {
            open: true,
            host: `localhost`,
        }
        : undefined,
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: `ts-loader`,
                exclude: [ `/node_modules/` ],
            },
        ],
    },
    plugins: [
        // Copy raw, unmodified assets for use by client libraries
        new CopyPlugin({
            patterns: [
                {
                    from: `./*/assets/**`,
                    to: path.resolve(outputDir, `brands`),
                    context: `./src/brands`,
                },
                {
                    from: `./*/locale/**`,
                    to: path.resolve(outputDir, `brands`),
                    context: `./src/brands`,
                },
            ],
        }),
    ],
    resolve: {
        extensions: [
            `.tsx`,
            `.ts`,
            `.js`,
        ],
        alias: {
            "~types": `./types`,
        },
    },
    externals: [ nodeExternals() ],
};

export default config;
