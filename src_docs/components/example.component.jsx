import React from 'react';
import { List } from 'immutable';

import ListItems from '../../src/index';


export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentBasicItem: 3,
      currentItem: 5,
    };
  }

  componentWillMount() {
    this.basicItemIds = List([1, 2, 3, 4, 5]);
    this.itemIds = List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  }

  goToBasicItem = (currentBasicItem) => {
    this.setState({ currentBasicItem });
  }

  goToItem = (currentItem) => {
    this.setState({ currentItem });
  }

  render() {
    return (
      <div className="oc-list-items-view">
        <ListItems
          goToItem={this.goToBasicItem}
          id="listItemsExample"
          itemId={this.state.currentBasicItem}
          itemIds={this.basicItemIds}
        />
        <ListItems
          goToItem={this.goToItem}
          id="listItemsExample"
          itemId={this.state.currentItem}
          itemIds={this.itemIds}
          typeable
        />
      </div>
    );
  }
}
