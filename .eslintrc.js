module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: ['standard'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                useTabs: true,
                printWidth: 80,
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'es5',
                jsxBracketSameLine: false,
                semi: true,
            },
        ],
        'no-var': 2,
        'no-const-assign': 'error',
         radix: 'error',
        'prefer-template': 'error',
        'prefer-const': 'error',
        'prefer-spread': 'error',
        'react/prop-types': 0,
        'react/jsx-uses-vars': [2],
        eqeqeq: ['error', 'always']
    },
}
