import path from "path";
import { Configuration } from "webpack";
import CopyPlugin from "copy-webpack-plugin";
import nodeExternals from "webpack-node-externals";

const modes = [`development`, `production`, `none`] as const;
type Mode = typeof modes[number];

const dirtyNodeEnv = process.env.NODE_ENV as Mode;
const nodeEnv =
    (modes.includes(dirtyNodeEnv) ? dirtyNodeEnv : undefined) ?? `production`;
const isDev = nodeEnv === `development`;

const outputDir = path.resolve(__dirname, "dist");

const config: Configuration = {
    mode: nodeEnv,
    entry: {
        index: "./src/index.ts",
        "brands/kidsloop/index": "./src/brands/kidsloop/index.ts",
        "brands/rumahkisah/index": "./src/brands/rumahkisah/index.ts",
    },
    output: {
        filename: "[name].js",
        path: outputDir,
        globalObject: "this",
        libraryTarget: "umd",
        library: "kidsloop-branding",
    },
    devServer: isDev
        ? {
              open: true,
              host: "localhost",
          }
        : undefined,
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: "ts-loader",
                exclude: ["/node_modules/"],
            },
        ],
    },
    plugins: [
        // Copy raw, unmodified assets for use by client libraries
        new CopyPlugin({
            patterns: [
                {
                    from: "./*/assets/**",
                    to: path.resolve(outputDir, "brands"),
                    context: "./src/brands",
                },
                {
                    from: "./*/locale/**",
                    to: path.resolve(outputDir, "brands"),
                    context: "./src/brands",
                },
            ],
        }),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            "~types": "./types",
        },
    },
    externals: [nodeExternals()],
};

export default config;
