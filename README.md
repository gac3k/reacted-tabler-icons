# React Tabler Icons
![](https://img.shields.io/npm/dw/reacted-tabler-icons)

A dead simple project which is providing a React wrapper over a fantastic set of [Tabler Icons](https://github.com/tabler/tabler-icons)

### Installation

```npm install reacted-tabler-icons```

or

```yarn add reacted-tabler-icons```

### Usage

```ts
import { Icon } from 'reacted-tabler-icons'

const renderedIcon = <Icon name={'ArrowDown'} />
```

A set of 3 predefined sizes can be used

```ts
// Will output a bigger icon
const renderedIcon = <Icon name={'ArrowLeft'} size={'md'} />
```

You can also specify your own size if you want to
```ts
// Will output an icon with 48x48px size
const renderedIcon = <Icon name={'ArrowLeft'} size={[48, 48]} />
```

### Setting custom color
It is also possible to set a custom color for the icon with

```ts
// surprisingly will produce a green icon 
const renderedIcon = <Icon name={'ArrowRight'} color={'green'} />
```

### Defining custom stroke width
You can set a stroke width for each icon individually

```ts
const renderedIcon = <Icon name={'ArrowDown'} strokeWidth={'5px'} />
```

### Loading individual icons

If you do not want to use an icon wrapper, it's possible to load individual icons i.e.

```ts
import { Accessible } from 'reacted-tabler-icons'
const renderedIcon = <Accessible width={24} height={24} strokeWidth={'5px'} />
```

### Roadmap

- [x] Code splitting
- [ ] More properties support
- [ ] Open sourcing the generator code

### License

Package is MIT licensed
