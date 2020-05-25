import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import pkg from './package.json';

export default [
    {
        input: 'src/index.js',
        output: {
            name: 'utters',
            file: pkg.main,
            format: 'umd',
            exports: 'default'
        },
        plugins: [filesize()]
    },
    {
        input: 'src/index.js',
        output: {
            name: 'utters',
            file: pkg.unpkg,
            format: 'umd',
            exports: 'default'
        },
        plugins: [
            terser({ mangle: true, compress: true }),
            filesize()
        ]
    },
    {
		input: 'src/index.js',
		output: { file: pkg.module, format: 'es' }
	}
]