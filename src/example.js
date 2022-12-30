import { mapClass } from 'kreattix-design-utils'

console.log(
	mapClass(
		'test-123',
		{
			class1: true,
			class2: false,
			class3: true
		},
		'static_class'
	)
)
