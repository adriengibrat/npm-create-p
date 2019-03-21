#!/usr/bin/env node

const { writeFileSync: write } = require('fs')
const args = parse(process.argv.slice(2))
const json = data => JSON.stringify(data, null, 2)

write('package.json', json({
	name: args.name || require('path').basename(__dirname),
	version: args.version || '0.0.1',
	description: args.description,
	main: args.main,
	repository: args.repository,
	keywords: args.keywords && args.keywords.split(','),
	author: args.author,
	license: args.license,
	homepage: args.homepage,
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

