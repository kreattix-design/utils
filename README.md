## Kreattix Design Utils

Basic Utility functions for Kreattix Design. As kreattix design don't have their own utilities, we are here to help you. You easily can use this library with kreattix design. It is also usable with vanilla javascript or any javascript framework.

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) ![npm version](https://img.shields.io/npm/v/kreattix-design-utils)

## Installation

### using npm

```sh
$ npm install kreattix-design-utils
```

### using yarn

```sh
$ yarn add kreattix-design-utils
```

As of now we only have functions to map classes based on the values provided, along with the functionality of adding prefix to the class.

## Class Functions

### mapClass(prefix, classlist, staticClasses(optional))

```js
mapClass(
  'kd',
  {
    class1: true,
    class2: false
  },
  'static-class'
)
// result -> kd-class1 static-class

mapClass(
  null,
  {
    class1: true,
    class2: false
  },
  'static-class'
)
// result -> class1 static-class

mapClass('kd', 'class-as-string', 'static-class')
// result -> kd-class-as-string static-class
```

### Parameters

| Parameter Name | Type                                  | Default |
| -------------- | ------------------------------------- | ------- |
| prefix         | `string , null`                       | --      |
| classlist      | `string , { [key: string]: boolean }` | --      |
| staticClass    | `string`                              | ""      |

## License

MIT
