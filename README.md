# react-list-items

### Description
Renders a custom element or by default a string m/n with the navigation icons 'previous' and 'next' to list items from the list.

### Installation
```
npm install @opuscapita/react-list-items
```

### Demo
View the [DEMO](https://opuscapita.github.io/react-list-items)

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API

#### ListItems
| Prop name   | Type             | Default         | Description                                                                               |
| ----------- | ---------------- | --------------- | ----------------------------------------------------------------------------------------- |
| id          | string           | 'oc-list-items' | Unique HTML id attribute                                                                  |
| className   | string           | ''              | Custom className                                                                          |
| disabled    | bool             | false           | A sign of a disabled status of navigation icons                                           |
| goToItem    | function         | required        | Callback that is called when navigation to another item should happen                     |
| itemElement | element          | null            | Custom component to render between navigation icons. By default it renders a string [m/n] |
| itemId      | [number, string] | required        | Initially selected item id                                                                |
| itemIds     | list             | required        | List of item ids                                                                          |
| typeable    | bool             | false           | If true, current item can be changed by typing.                                           |

### Code example
```jsx
import React from 'react';
import { List } from 'immutable';

import ListItems from '@opuscapita/react-list-items';

export default class ListItemsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentItem: 3 };
  }

  componentWillMount() {
    this.itemIds = List([1, 2, 3, 4, 5]);
  }

  goToItem = (currentItem) => {
    this.setState({ currentItem });
  }

  render() {
    return (
      <ListItems
        goToItem={this.goToItem}
        id="listItemsExample"
        itemId={this.state.currentItem}
        itemIds={this.itemIds}
      />
    );
  }
}
```
