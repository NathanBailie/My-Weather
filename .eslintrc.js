module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    "overrides": [
        {
            files: ['**/src/**/*.{ts,tsx}'],
        },
    ],
    "parser": '@typescript-eslint/parser',
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 'latest',
        "sourceType": 'module',
    },
    "plugins": [
        '@typescript-eslint',
        "react",
        'react-hooks',
    ],
    "rules": {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'indent': [2, 4],
        'react/react-in-jsx-scope': 'off',
        "@typescript-eslint/indent": "off",
        "semi": "off",
        "@typescript-eslint/semi": "off",
        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/strict-boolean-expressions": "off",
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-filename-extension':
            [2,
                {
                    extensions: ['.js', '.jsx', '.tsx'],
                }],
        "no-unused-vars": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'max-len': ['error', { code: 120, ignoreComments: true }],
        'linebreak-style': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'react/no-array-index-key': 'off',
        'prefer-const': 'off',
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/consistent-type-imports": "warn"
    },
    "globals": {
        IS_DEV: true,
    },
    "ignorePatterns": [
        '.eslintrc.js',
    ],

}
