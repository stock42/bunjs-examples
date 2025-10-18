import typescriptEslint from '@typescript-eslint/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
	{
		plugins: {
			ts: typescriptEslint,
		},
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			curly: 'error',
			'no-console': 'off',
			'no-empty': ['error', { allowEmptyCatch: true }],
			'padding-line-between-statements': [
				'error',
				{ blankLine: 'always', prev: 'import', next: '*' },
				{ blankLine: 'any', prev: 'import', next: 'import' },
			],
		},
	},
	eslintConfigPrettier,
]
