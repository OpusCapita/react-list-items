import React from 'react';
import { List } from 'immutable';

import { ListItems } from '../../../src/list-items/index';

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
      <div className="oc-list-items-view">
        <ListItems
          goToItem={this.goToItem}
          itemId={this.state.currentItem}
          itemIds={this.itemIds}
        />
      </div>
    );
  }
}
