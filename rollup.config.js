const minify = require('@rollup/plugin-terser');
const pkg = require('./package');

const copyright = `// ${pkg.homepage} v${pkg.version} Copyright ${(new Date()).getFullYear()} ${pkg.author.name} <${pkg.author.email}>`;

// ESM
const ESM = {
  input: './index.js',
  output: [
    {
      file: pkg.module,
      format: 'esm',
      banner: copyright,
      indent: false,
      name: pkg.name,
      sourcemap: true
    }
  ],
  plugins: []
};

// UMD
const UMD = {
  input: './index.js',
  output: {
    esModule: false,
    exports: 'named',
    file: pkg.unpkg,
    format: 'umd',
    banner: copyright,
    name: pkg.name,
    indent: false
  },
  plugins: [
    minify()
  ]
};

// CJS
const CJS = {
  external: [],
  input: './index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      name: pkg.name,
      indent: false,
      banner: copyright,
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: []
};

module.exports = [
  UMD,
  ESM,
  CJS
];
