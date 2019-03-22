# npm-create-p

:package: Create basic npm package.json programmatically from cli arguments

This project is a very basic [npm](https://www.npmjs.com/package/create-p) init [initializer](https://docs.npmjs.com/cli/init.html)

### Usage

`npm init p --name project -- --version 0.0.1`

### Supported package properties

- [name](https://docs.npmjs.com/files/package.json#name) (default: current directory name)
- [version](https://docs.npmjs.com/files/package.json#version) (default: 0.0.1, must be behind double dash `--` or `npm init` will just show npm version)
- [description](https://docs.npmjs.com/files/package.json#description-1)
- [keywords](https://docs.npmjs.com/files/package.json#keywords) (coma separated, ex: "keyword, more keyword")
- [homepage](https://docs.npmjs.com/files/package.json#homepage) (ex: "https://github.com/user/repo#readme")
- [bugs](https://docs.npmjs.com/files/package.json#bugs) (ex: "https://github.com/user/repo/issues")
- [license](https://docs.npmjs.com/files/package.json#license) (ex: "(ISC OR GPL-3.0)")
- [author](https://docs.npmjs.com/files/package.json#people-fields-author-contributors) (ex: "Barney Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)")
- [files](https://docs.npmjs.com/files/package.json#files) (coma separated, ex: "file.ext, path/**/*")
- [main](https://docs.npmjs.com/files/package.json#main) (ex: "index.js")
- [browser](https://docs.npmjs.com/files/package.json#browser) (ex: "index.umd.js")
- [repository](https://docs.npmjs.com/files/package.json#repository) (ex: "github:user/repo")
- [private](https://docs.npmjs.com/files/package.json#private) (boolean flag)
