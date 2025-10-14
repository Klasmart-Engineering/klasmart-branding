// required to load local dependencies of kidsloop-eslint-config
// https://github.com/eslint/eslint/issues/3458
require(`@rushstack/eslint-patch/modern-module-resolution`);

module.exports = {
    extends: [ `@klasmart-engineering/eslint-config/react`, `@klasmart-engineering/eslint-config/jest/react` ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: `module`,
        project: `tsconfig.json`,
    },
    ignorePatterns: [ `dist/`, `types/` ], // ⬅️ prevent linting build outputs
    rules: {
        // ⬅️ overrides or custom rules
        "@typescript-eslint/naming-convention": [
            `error`,
            {
                selector: `property`,
                format: null, // allow any property names
            },
        ],
    },
};
