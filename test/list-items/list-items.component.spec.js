/* eslint-disable no-unused-expressions, prefer-arrow-callback, react/jsx-filename-extension */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { List } from 'immutable';
import sinon from 'sinon';

import { ListItems } from '../../src/list-items/index';

describe('ListItems component', function describe() {
  it('should render and function correctly', function it() {
    const props = {
      goToItem: () => {},
      itemId: 2,
      itemIds: List([1, 2, 3]),
    };
    const wrapper = mount(<ListItems {...props} />);
    expect(wrapper.find('.fa fa-chevron-left')).to.exist;
    expect(wrapper.find('.fa fa-chevron-right')).to.exist;
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
