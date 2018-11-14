/* eslint-disable no-unused-expressions, prefer-arrow-callback */
import { expect } from 'chai';
import { List } from 'immutable';

import ItemPosition from '../../../src/item-position/item-position';

describe('ItemPosition class', function describe() {
  it('should function correctly', function it() {
    const position = new ItemPosition();
    expect(position.getNext()).to.eql(0);
    expect(position.getPrevious()).to.eql(0);
    expect(position.getString()).to.eql('');
    const list = List([1, 2, 3]);
    position.set(list, 2);
    expect(position.getPrevious()).to.eql(list.get(0));
    expect(position.getNext()).to.eql(list.get(2));
    expect(position.getString()).to.eql('2/3');
  });
});

