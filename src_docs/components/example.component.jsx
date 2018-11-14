import React from 'react';
import { List } from 'immutable';

import ListItems from '../../src/index';


export default class ComponentView extends React.PureComponent {
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
          id="listItemsExample"
          itemId={this.state.currentItem}
          itemIds={this.itemIds}
        />
      </div>
    );
  }
}
