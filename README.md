## React Tabler Icons

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

as well as stroke width for each icon individually

```ts
const renderedIcon = <Icon name={'ArrowDown'} strokeWidth={'5px'} />
```

### Roadmap

- [ ] Code splitting
- [ ] More properties support
- [ ] Open sourcing the generator code

### License

Package is MIT licensed
