/* eslint-disable no-unused-expressions, prefer-arrow-callback, react/jsx-filename-extension */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { List } from 'immutable';
import sinon from 'sinon';

import { ListItems } from '../../src/list-items/index';

describe('ListItems component', function describe() {
  it('should render and function correctly', function it() {
    const props = {
      goToItem: () => {},
      id: 'example',
      itemId: 2,
      itemIds: List([1, 2, 3]),
    };
    const wrapper = shallow(<ListItems {...props} />);
    const found = wrapper.find('.oc-list-items-icon');
    expect(found).to.exist;
    expect(found.length).to.eql(2);
    let spy;
    spy = sinon.spy(wrapper.instance(), 'goToNextItem');
    wrapper.instance().goToNextItem();
    expect(spy.called).to.be.true;
    spy = sinon.spy(wrapper.instance(), 'goToPreviousItem');
    wrapper.instance().goToPreviousItem();
    expect(spy.called).to.be.true;
    wrapper.unmount();
  });
});
