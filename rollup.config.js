import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    name: 'Issue',
    format: 'umd',
    sourcemap: 'inline',
    globals: {
      react: 'React',
      'react-redux': 'ReactRedux',
      'react-router-dom': 'ReactRouterDOM',
      'redux': 'Redux',
      'history': 'History',
      'connected-react-router': 'ConnectedReactRouter'
    }
  },
  plugins: [
    nodeResolve({
      only: [
        /^@babel\/.*$/
      ]
    }),
    babel({
      exclude: '**/node_modules/**',
      runtimeHelpers: true
    }),
    commonjs({
      namedExports: {
        'node_modules/react-is/index.js': ['isValidElementType'],
        'node_modules/react/index.js': ['Component', 'PureComponent', 'Children', 'createElement'],
        'node_modules/connected-react-router/immutable.js': ['routerMiddleware']
      }
    })
  ]
};
