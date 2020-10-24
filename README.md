# Learnings

#### ESLint
1. ESLint will have to ignore files under `node_modules` and `dist` folder. We don't lint library files and generated (transpiled) file(s). 
2. As the files to be igonred by ESLint are same as files to be ignored under .gitignore, we are using `.gitignore` files along with `--ignore-path` flag for ESLint.

#### Prettier
1. Prettier is used for formatting the code. Our strategy is same as the ESLint here, we ignore the same files which are mentioned in `.gitignore` as well.
2. If one is not sure about what should be the configuration for Prettier, one can visit https://prettier.io and try the playground and copy configuration options from there.
3. We have installed `eslint-config-prettier`. The aim here is, disable to eslint rules that prettier thinks is useless. This package should be part of `.eslintrc` in the section called `extends` and, it should be included at the end after any configuration we extend.