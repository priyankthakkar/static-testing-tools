# Learnings
1. ESLint will have to ignore files under `node_modules` and `dist` folder. We don't lint library files and generated (transpiled) file(s). 
2. As the files to be igonred by ESLint are same as files to be ignored under .gitignore, we are using `.gitignore` files along with `--ignore-path` flag for ESLint.