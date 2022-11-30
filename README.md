## craco

npm install @craco/craco@alpha -D

## prettier

npm install prettier -D
package.json 里面加上这个脚本 可以全局的代码格式化
"prettier": "prettier --write ."

同时 .prettierignore 里面要忽略 node_modules 等一些文件

## eslint

npm install eslint -D
配置 eslint
npx eslint --init

## eslint 和 prettier 风格一致

npm install eslint-plugin-prettier eslint-config-prettier -D
eslintrc.js 中
extends: [
'eslint:recommended',
'plugin:react/recommended',
'plugin:@typescript-eslint/recommended',

<!-- eslint 检测时同时检测 prettier -->

'plugin:prettier/recommended'
],
