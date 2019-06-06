#!/usr/bin/env node

const { writeFileSync: write } = require('fs')
const args = parse(process.argv.slice(2))
const json = data => JSON.stringify(data, null, 2)
const commaSplit = /\s*,\s*/

write('package.json', json({
	name: args.name || require('path').basename(__dirname),
	version: args.version || '0.0.1',
	description: args.description,
	keywords: args.keywords && args.keywords.split(commaSplit),
	homepage: args.homepage,
	bugs: args.bugs,
	license: args.license,
	author: args.author,
	files: args.files && args.files.split(commaSplit),
	main: args.main,
	types: args.types,
	repository: args.repository,
	private: !!args.private || undefined,
}))

function parse (args) {
	const param = arg => (/^--(\S+)$/.exec(arg) || []).pop()
	return args
		.reduce((params, argument, index) => {
			const key = param(argument)
			const next = args[index + 1]
			if (key)
				params[key] = null == next || param(next) ? true : next
			return params
		}, {})
}
