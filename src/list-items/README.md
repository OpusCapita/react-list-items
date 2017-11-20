# ListItems

### Description

It contains **ListItems** react component that displays navigation icons to the next and previous item in the list.

### Dependencies

- immutable.

### API

#### ListItems

Prop name | Type | Default | Description
--- | --- | --- | ---
disabled | bool | false | A sign of a disabled status of navigation icons
goToItem | function | required | Callback that is called when navigation to another item should happen
itemElement | element | null | Custom component to render between navigation icons. By default it renders a string [m/n].
itemId | [number, string] | required | Initially selected item id
itemIds | list | required | List of item ids

### Code example

```jsx
import React from 'react';
import { List } from 'immutable';

import { ListItems } from '@opuscapita/react-list-items';

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
        itemId={this.state.currentItem}
        itemIds={this.itemIds}
      />
    );
  }
}
```
