export type I_JoinClass = (classlist: string[]) => string

export type I_AddPrefix = (
	classlist: string | string[],
	prefix: string
) => string

export type I_MapClass = (
	prefix: string | null,
	classlist: string | { [key: string]: boolean },
	staticClass?: string
) => string

export const joinClass: I_JoinClass = (classlist = []) => {
	return classlist.join(' ').trim()
}

export const addPrefix: I_AddPrefix = (classlist = '', prefix = '') => {
	if (!classlist || (classlist && classlist.length <= 0)) return ''
	if (typeof classlist === 'string') {
		return [prefix, classlist].join('-')
	}
	return joinClass(
		classlist.map((singleClass) => [prefix, singleClass].join('-'))
	)
}

export const mapClass: I_MapClass = (prefix, classlist, staticClasses = '') => {
	const classnames: string[] = []

	if (typeof classlist === 'string') {
		classnames.push(classlist)
	} else {
		Object.keys(classlist).forEach((singleClass) => {
			if (classlist[singleClass]) classnames.push(singleClass)
		})
	}

	if (!prefix) {
		return joinClass([...classnames, staticClasses])
	} else {
		return joinClass([addPrefix(classnames, prefix), staticClasses])
	}
}
