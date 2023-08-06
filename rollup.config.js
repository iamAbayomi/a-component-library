import resolve from "@rollup/plugin-node-resolve";
import sucrase from '@rollup/plugin-sucrase';
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss'
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import json from "rollup-plugin-json"

const packageJson = require("./package.json");

// const pkg = process.env.LERNA_PACKAGE_NAME &&
//     require(`${process.env.LERNA_PACKAGE_NAME}/package.json`);

// const dependencies = ({ dependencies }) => Object.keys(dependencies || {});

// const pkgdependencies = dependencies(pkg);

// /* exported rollup configuration */
// const config = {
//     /* your config goes here... */
//     /* id is the source name if list of dependencies includes
//      * id source name, then mark it as external,
//      */
//     external: id => pkgdependencies.includes(id)
// };


export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve({
                extensions: ['.js', '.ts']
            }),
            sucrase({
                exclude: ['node_modules/**', 'src/**/*.css'],
                transforms: ['typescript', 'jsx'],
            }),
            commonjs(),
            typescript(),
            terser(),
            postcss(),
            nodeResolve()
        ],
        external: ["react", "react-dom", "styled-components"]
    },
    {
        // input: "dist/esm/types/index.d.ts",
        input: "src/index.ts",
        output: [{ file: "dist/types.d.ts", format: "es" }],
        plugins: [dts()],
        external: [/\.css$/],
    },
];