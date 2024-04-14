import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/index.js',
	output: {
        dir:'dist',
		// file: 'dist/index.js',
		format: 'esm'
	},
    // plugins: [typescript()]
};