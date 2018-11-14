import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import FaChevronLeft from 'react-icons/lib/fa/chevron-left';
import FaChevronRight from 'react-icons/lib/fa/chevron-right';

import ItemPosition from './item-position/item-position';
import './list-items.component.scss';

export default class ListItems extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    goToItem: PropTypes.func.isRequired,
    itemElement: PropTypes.element,
    itemId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    itemIds: PropTypes.oneOfType([
      ImmutablePropTypes.list,
      PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.shape({}),
      ])),
    ]).isRequired,
  };

  static defaultProps = {
    id: 'oc-list-items',
    className: '',
    disabled: false,
    itemElement: null,
  };

  componentWillMount() {
    this.itemPosition = new ItemPosition();
  }

  goToNextItem = () => {
    if (!this.props.disabled && this.itemPosition.getNext() !== 0) {
      this.props.goToItem(this.itemPosition.getNext());
    }
  }

  goToPreviousItem = () => {
    if (!this.props.disabled && this.itemPosition.getPrevious() !== 0) {
      this.props.goToItem(this.itemPosition.getPrevious());
    }
  }

  render() {
    const {
      id,
      className,
      disabled,
      itemElement,
      itemId,
      itemIds,
    } = this.props;
    this.itemPosition.set(itemIds, itemId);
    return (
      <div
        className={`oc-list-items ${className}`}
        id={id}
      >
        <button
          id={`${id}-previous-button`}
          className="oc-list-items-icon"
          onClick={this.goToPreviousItem}
          disabled={disabled || this.itemPosition.getPrevious() === 0}
        >
          <FaChevronLeft />
        </button>
        <span className="oc-list-items-element">
          {itemElement ||
          (
            <span className="oc-list-items-string">{this.itemPosition.getString()}</span>
          )
          }
        </span>
        <button
          id={`${id}-next-button`}
          className="oc-list-items-icon"
          onClick={this.goToNextItem}
          disabled={disabled || this.itemPosition.getNext() === 0}
        >
          <FaChevronRight />
        </button>
      </div>
    );
  }
}
