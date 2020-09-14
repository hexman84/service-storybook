module.exports = {
    plugins: [
        '@typescript-eslint',
        'security',
        'vue'
    ],
    parserOptions: {
        /* parser: 'babel-eslint',
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
            spread: true,
            legacyDecorators: true
        },
        allowImportExportEverywhere: true */
        // project: './tsconfig.json',
        parser: '@typescript-eslint/parser',
        env: { es6: true },
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    extends: [
        'standard',
        'eslint:recommended',
        'plugin:vue/base',
        'plugin:vue/essential',
        'plugin:vue/strongly-recommended',
        'plugin:security/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/recommended'
    ],
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4],
        'vue/no-multiple-template-root': 'off',
        // '@typescript-eslint/semi': ['error'],
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/explicit-function-return-type': 0
    }
}
