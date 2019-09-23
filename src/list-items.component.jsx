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
    typeable: PropTypes.bool,
  };

  static defaultProps = {
    id: 'oc-list-items',
    className: '',
    disabled: false,
    itemElement: null,
    typeable: false,
  };

  constructor(props) {
    super(props);
    this.itemPosition = new ItemPosition();
    const { itemId, itemIds } = props;
    const ranking = itemIds.findIndex(i => i === itemId) + 1;

    this.state = { ranking };
  }

  componentDidUpdate = (prevProps) => {
    const { itemId } = this.props;
    const { ranking } = this.state;

    if (prevProps.itemId === itemId) return;
    if (ranking !== '' && itemId !== ranking) {
      this.goToItem(itemId);
    }
  }

  goToNextItem = () => {
    if (!this.props.disabled && this.itemPosition.getNext() !== 0) {
      const next = this.itemPosition.getNext();
      this.goToItem(next);
    }
  }

  goToPreviousItem = () => {
    if (!this.props.disabled && this.itemPosition.getPrevious() !== 0) {
      const previous = this.itemPosition.getPrevious();
      this.goToItem(previous);
    }
  }

  goToItem = (itemId) => {
    const { itemIds } = this.props;
    const ranking = itemIds.findIndex(i => i === itemId) + 1;
    this.props.goToItem(itemId);
    this.setState({ ranking });
  }

  handleBlur = () => {
    const { ranking } = this.state;
    if (ranking > 0) return;
    const { itemIds } = this.props;
    const itemId = this.itemPosition.getCurrent();
    const index = itemIds.findIndex(i => i === itemId);
    this.setState({ ranking: index + 1 });
  }

  handleChange = (e) => {
    const { value } = e.target;
    let ranking = value ? Number(value) : value;
    if (ranking !== '') {
      const size = this.itemPosition.getSize();
      ranking = size < ranking ? size : ranking;
      ranking = ranking < 1 ? 1 : ranking;
      const index = ranking - 1;
      const item = this.itemPosition.getItem(index);
      this.goToItem(item);
    } else {
      this.setState({ ranking });
    }
  }

  renderItemPosition = () => {
    const { disabled, itemElement, typeable } = this.props;
    const { ranking } = this.state;
    const size = this.itemPosition.getSize();
    return (typeable ?
      <span className="oc-list-items-element">
        <input
          disabled={disabled}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onClick={e => e.target.select()}
          onFocus={e => e.target.select()}
          onKeyPress={this.handleKeyPress}
          min="1"
          max={size}
          type="number"
          value={ranking}
          style={{ width: `${size.toString().length}em` }}
        />
        {this.itemPosition.getSizeString()}
      </span> :
      <span className="oc-list-items-element">
        {itemElement ||
        (
          <span className="oc-list-items-string">{this.itemPosition.getString()}</span>
        )
        }
      </span>);
  }

  render() {
    const {
      id,
      className,
      disabled,
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
        {this.renderItemPosition()}
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
