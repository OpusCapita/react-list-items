import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object } from '@storybook/addon-knobs';
import { Store, StateDecorator } from '@sambego/storybook-state';

// Application
import './scss/app.component.scss';
import ListItems from '../src/list-items.component';
/* eslint-disable no-alert */
/* eslint-disable no-console */

const itemIds = ['item-1', 'item-2', 'item-3', 'item-4'];
const store = new Store({ itemId: itemIds[0] });
const goToItem = (id) => {
  store.set({ itemId: id });
};

storiesOf('@opuscapita/react-list-items', module)
  .addDecorator(StateDecorator(store))
  .add('React List Items', () => (state) => {
    const knobs = {
      disabled: boolean('Disabled', false),
      itemId: state.itemId,
      itemIds: object('List items', itemIds),
      typeable: boolean('Typeable', false),
      goToItem,
    };

    return (
      <div className="list-items-container">
        <ListItems
          {...knobs}
        />
      </div>
    );
  });
