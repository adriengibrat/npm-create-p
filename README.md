# npm-create-p

:package: Create basic npm package.json programmatically from cli arguments

This project is a very basic [npm](https://www.npmjs.com/package/create-p) init [initializer](https://docs.npmjs.com/cli/init.html)

### Usage

`npm init p --name project -- --version 0.0.1`

### Supported package properties

- name (default: current directory name)
- version (default: 0.0.1, must be behind double dash `--` or `npm init` will just show npm version)
- description
- main
- repository
- keywords (coma separated string)
- author
- license
- homepage
