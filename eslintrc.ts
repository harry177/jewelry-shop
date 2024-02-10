module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@next/next/recommended',
        'plugin:react/recommended',
        'prettier',
        'next/core-web-vitals'
    ],
    plugins: ['react', 'react-hooks', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-unused-vars': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'camelcase': 'error',
        'spaced-comment': 'error',
        'no-duplicate-imports': 'error',
        '@next/next/no-html-link-for-pages': 'off',
    },
};