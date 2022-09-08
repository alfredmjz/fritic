module.exports = {
	env: {
		node: true,
		commonjs: true,
		es2021: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "windows"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
	},
};
