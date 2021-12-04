module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2015: true
	},
	parser: 'vue-eslint-parser', // 解析 .vue 文件
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:vue/essential',
		'eslint:recommended'
	],
	parserOptions: {
		ecmaVersion: 13,
		parser: '@typescript-eslint/parser' // 解析 .vue 文件里面的 script 标签
	},
	plugins: ['vue', '@typescript-eslint', 'prettier'],
	// plugins: ['@typescript-eslint', 'vue'],
	rules: {
		// 定义其它校验规则
		'@typescript-eslint/no-extra-semi': ['error'],
		'@typescript-eslint/semi': [2, 'never'],
		'@typescript-eslint/no-empty-interface': 0,
		'@typescript-eslint/ban-ts-comment': 'off',
		// 关闭any类型的警告
		'@typescript-eslint/no-explicit-any': 'off',
		'vue/valid-v-for': 'off'
	}
}
