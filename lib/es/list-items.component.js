var _class, _temp, _initialiseProps;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import FaChevronLeft from 'react-icons/lib/fa/chevron-left';
import FaChevronRight from 'react-icons/lib/fa/chevron-right';

import ItemPosition from './item-position/item-position';
import './list-items.component.scss';

var ListItems = (_temp = _class = function (_React$PureComponent) {
  _inherits(ListItems, _React$PureComponent);

  function ListItems(props) {
    _classCallCheck(this, ListItems);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _initialiseProps.call(_this);

    _this.itemPosition = new ItemPosition();
    var itemId = props.itemId,
        itemIds = props.itemIds;

    var ranking = itemIds.findIndex(function (i) {
      return i === itemId;
    }) + 1;

    _this.state = { ranking: ranking };
    return _this;
  }

  ListItems.prototype.render = function render() {
    var _props = this.props,
        id = _props.id,
        className = _props.className,
        disabled = _props.disabled,
        itemId = _props.itemId,
        itemIds = _props.itemIds;

    this.itemPosition.set(itemIds, itemId);
    return React.createElement(
      'div',
      {
        className: 'oc-list-items ' + className,
        id: id
      },
      React.createElement(
        'button',
        {
          id: id + '-previous-button',
          className: 'oc-list-items-icon',
          onClick: this.goToPreviousItem,
          disabled: disabled || this.itemPosition.getPrevious() === 0
        },
        React.createElement(FaChevronLeft, null)
      ),
      this.renderItemPosition(),
      React.createElement(
        'button',
        {
          id: id + '-next-button',
          className: 'oc-list-items-icon',
          onClick: this.goToNextItem,
          disabled: disabled || this.itemPosition.getNext() === 0
        },
        React.createElement(FaChevronRight, null)
      )
    );
  };

  return ListItems;
}(React.PureComponent), _class.defaultProps = {
  id: 'oc-list-items',
  className: '',
  disabled: false,
  itemElement: null,
  typeable: false
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.componentDidUpdate = function () {
    var itemId = _this2.props.itemId;
    var ranking = _this2.state.ranking;

    if (ranking !== '' && itemId !== ranking) {
      _this2.goToItem(itemId);
    }
  };

  this.goToNextItem = function () {
    if (!_this2.props.disabled && _this2.itemPosition.getNext() !== 0) {
      var next = _this2.itemPosition.getNext();
      _this2.goToItem(next);
    }
  };

  this.goToPreviousItem = function () {
    if (!_this2.props.disabled && _this2.itemPosition.getPrevious() !== 0) {
      var previous = _this2.itemPosition.getPrevious();
      _this2.goToItem(previous);
    }
  };

  this.goToItem = function (itemId) {
    var itemIds = _this2.props.itemIds;

    var ranking = itemIds.findIndex(function (i) {
      return i === itemId;
    }) + 1;
    _this2.props.goToItem(itemId);
    _this2.setState({ ranking: ranking });
  };

  this.handleBlur = function () {
    var ranking = _this2.state.ranking;

    if (ranking > 0) return;
    var itemIds = _this2.props.itemIds;

    var itemId = _this2.itemPosition.getCurrent();
    var index = itemIds.findIndex(function (i) {
      return i === itemId;
    });
    _this2.setState({ ranking: index + 1 });
  };

  this.handleChange = function (e) {
    var value = e.target.value;

    var ranking = value ? Number(value) : value;
    if (ranking !== '') {
      var size = _this2.itemPosition.getSize();
      ranking = size < ranking ? size : ranking;
      ranking = ranking < 1 ? 1 : ranking;
      var index = ranking - 1;
      var item = _this2.itemPosition.getItem(index);
      _this2.goToItem(item);
    } else {
      _this2.setState({ ranking: ranking });
    }
  };

  this.renderItemPosition = function () {
    var _props2 = _this2.props,
        disabled = _props2.disabled,
        itemElement = _props2.itemElement,
        typeable = _props2.typeable;
    var ranking = _this2.state.ranking;

    var size = _this2.itemPosition.getSize();
    return typeable ? React.createElement(
      'span',
      { className: 'oc-list-items-element' },
      React.createElement('input', {
        disabled: disabled,
        onBlur: _this2.handleBlur,
        onChange: _this2.handleChange,
        onClick: function onClick(e) {
          return e.target.select();
        },
        onFocus: function onFocus(e) {
          return e.target.select();
        },
        onKeyPress: _this2.handleKeyPress,
        min: '1',
        max: size,
        type: 'number',
        value: ranking,
        style: { width: size.toString().length + 'em' }
      }),
      _this2.itemPosition.getSizeString()
    ) : React.createElement(
      'span',
      { className: 'oc-list-items-element' },
      itemElement || React.createElement(
        'span',
        { className: 'oc-list-items-string' },
        _this2.itemPosition.getString()
      )
    );
  };
}, _temp);
export { ListItems as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LWl0ZW1zLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJJbW11dGFibGVQcm9wVHlwZXMiLCJGYUNoZXZyb25MZWZ0IiwiRmFDaGV2cm9uUmlnaHQiLCJJdGVtUG9zaXRpb24iLCJMaXN0SXRlbXMiLCJwcm9wcyIsIml0ZW1Qb3NpdGlvbiIsIml0ZW1JZCIsIml0ZW1JZHMiLCJyYW5raW5nIiwiZmluZEluZGV4IiwiaSIsInN0YXRlIiwicmVuZGVyIiwiaWQiLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsInNldCIsImdvVG9QcmV2aW91c0l0ZW0iLCJnZXRQcmV2aW91cyIsInJlbmRlckl0ZW1Qb3NpdGlvbiIsImdvVG9OZXh0SXRlbSIsImdldE5leHQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiaXRlbUVsZW1lbnQiLCJ0eXBlYWJsZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsImdvVG9JdGVtIiwibmV4dCIsInByZXZpb3VzIiwic2V0U3RhdGUiLCJoYW5kbGVCbHVyIiwiZ2V0Q3VycmVudCIsImluZGV4IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiTnVtYmVyIiwic2l6ZSIsImdldFNpemUiLCJpdGVtIiwiZ2V0SXRlbSIsInNlbGVjdCIsImhhbmRsZUtleVByZXNzIiwid2lkdGgiLCJ0b1N0cmluZyIsImxlbmd0aCIsImdldFNpemVTdHJpbmciLCJnZXRTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxrQkFBUCxNQUErQiwyQkFBL0I7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLGlDQUExQjtBQUNBLE9BQU9DLGNBQVAsTUFBMkIsa0NBQTNCOztBQUVBLE9BQU9DLFlBQVAsTUFBeUIsK0JBQXpCO0FBQ0EsT0FBTyw2QkFBUDs7SUFFcUJD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QUFFdEIsZ0JBQUYsRUFBZDtBQUNEO0FBQ0YsRzs7T0FFRFcsa0IsR0FBcUIsWUFBTTtBQUFBLGtCQUNtQixPQUFLZixLQUR4QjtBQUFBLFFBQ2pCVyxRQURpQixXQUNqQkEsUUFEaUI7QUFBQSxRQUNQUyxXQURPLFdBQ1BBLFdBRE87QUFBQSxRQUNNQyxRQUROLFdBQ01BLFFBRE47QUFBQSxRQUVqQmpCLE9BRmlCLEdBRUwsT0FBS0csS0FGQSxDQUVqQkgsT0FGaUI7O0FBR3pCLFFBQU0rQixPQUFPLE9BQUtsQyxZQUFMLENBQWtCbUMsT0FBbEIsRUFBYjtBQUNBLFdBQVFmLFdBQ047QUFBQTtBQUFBLFFBQU0sV0FBVSx1QkFBaEI7QUFDRTtBQUNFLGtCQUFVVixRQURaO0FBRUUsZ0JBQVEsT0FBS2dCLFVBRmY7QUFHRSxrQkFBVSxPQUFLRyxZQUhqQjtBQUlFLGlCQUFTO0FBQUEsaUJBQUtDLEVBQUVFLE1BQUYsQ0FBU00sTUFBVCxFQUFMO0FBQUEsU0FKWDtBQUtFLGlCQUFTO0FBQUEsaUJBQUtSLEVBQUVFLE1BQUYsQ0FBU00sTUFBVCxFQUFMO0FBQUEsU0FMWDtBQU1FLG9CQUFZLE9BQUtDLGNBTm5CO0FBT0UsYUFBSSxHQVBOO0FBUUUsYUFBS0wsSUFSUDtBQVNFLGNBQUssUUFUUDtBQVVFLGVBQU8vQixPQVZUO0FBV0UsZUFBTyxFQUFFcUMsT0FBVU4sS0FBS08sUUFBTCxHQUFnQkMsTUFBMUIsT0FBRjtBQVhULFFBREY7QUFjRyxhQUFLMUMsWUFBTCxDQUFrQjJDLGFBQWxCO0FBZEgsS0FETSxHQWlCTjtBQUFBO0FBQUEsUUFBTSxXQUFVLHVCQUFoQjtBQUNHeEIscUJBRUM7QUFBQTtBQUFBLFVBQU0sV0FBVSxzQkFBaEI7QUFBd0MsZUFBS25CLFlBQUwsQ0FBa0I0QyxTQUFsQjtBQUF4QztBQUhKLEtBakJGO0FBd0JELEc7O1NBckhrQjlDLFMiLCJmaWxlIjoibGlzdC1pdGVtcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQgRmFDaGV2cm9uTGVmdCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi1sZWZ0JztcbmltcG9ydCBGYUNoZXZyb25SaWdodCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi1yaWdodCc7XG5cbmltcG9ydCBJdGVtUG9zaXRpb24gZnJvbSAnLi9pdGVtLXBvc2l0aW9uL2l0ZW0tcG9zaXRpb24nO1xuaW1wb3J0ICcuL2xpc3QtaXRlbXMuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbXMgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGdvVG9JdGVtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGl0ZW1FbGVtZW50OiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICBpdGVtSWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICAgIGl0ZW1JZHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QsXG4gICAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICAgIF0pKSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICAgIHR5cGVhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlkOiAnb2MtbGlzdC1pdGVtcycsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaXRlbUVsZW1lbnQ6IG51bGwsXG4gICAgdHlwZWFibGU6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaXRlbVBvc2l0aW9uID0gbmV3IEl0ZW1Qb3NpdGlvbigpO1xuICAgIGNvbnN0IHsgaXRlbUlkLCBpdGVtSWRzIH0gPSBwcm9wcztcbiAgICBjb25zdCByYW5raW5nID0gaXRlbUlkcy5maW5kSW5kZXgoaSA9PiBpID09PSBpdGVtSWQpICsgMTtcblxuICAgIHRoaXMuc3RhdGUgPSB7IHJhbmtpbmcgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGl0ZW1JZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHJhbmtpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHJhbmtpbmcgIT09ICcnICYmIGl0ZW1JZCAhPT0gcmFua2luZykge1xuICAgICAgdGhpcy5nb1RvSXRlbShpdGVtSWQpO1xuICAgIH1cbiAgfVxuXG4gIGdvVG9OZXh0SXRlbSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQgJiYgdGhpcy5pdGVtUG9zaXRpb24uZ2V0TmV4dCgpICE9PSAwKSB7XG4gICAgICBjb25zdCBuZXh0ID0gdGhpcy5pdGVtUG9zaXRpb24uZ2V0TmV4dCgpO1xuICAgICAgdGhpcy5nb1RvSXRlbShuZXh0KTtcbiAgICB9XG4gIH1cblxuICBnb1RvUHJldmlvdXNJdGVtID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCAmJiB0aGlzLml0ZW1Qb3NpdGlvbi5nZXRQcmV2aW91cygpICE9PSAwKSB7XG4gICAgICBjb25zdCBwcmV2aW91cyA9IHRoaXMuaXRlbVBvc2l0aW9uLmdldFByZXZpb3VzKCk7XG4gICAgICB0aGlzLmdvVG9JdGVtKHByZXZpb3VzKTtcbiAgICB9XG4gIH1cblxuICBnb1RvSXRlbSA9IChpdGVtSWQpID0+IHtcbiAgICBjb25zdCB7IGl0ZW1JZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcmFua2luZyA9IGl0ZW1JZHMuZmluZEluZGV4KGkgPT4gaSA9PT0gaXRlbUlkKSArIDE7XG4gICAgdGhpcy5wcm9wcy5nb1RvSXRlbShpdGVtSWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyByYW5raW5nIH0pO1xuICB9XG5cbiAgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJhbmtpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHJhbmtpbmcgPiAwKSByZXR1cm47XG4gICAgY29uc3QgeyBpdGVtSWRzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGl0ZW1JZCA9IHRoaXMuaXRlbVBvc2l0aW9uLmdldEN1cnJlbnQoKTtcbiAgICBjb25zdCBpbmRleCA9IGl0ZW1JZHMuZmluZEluZGV4KGkgPT4gaSA9PT0gaXRlbUlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgcmFua2luZzogaW5kZXggKyAxIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBsZXQgcmFua2luZyA9IHZhbHVlID8gTnVtYmVyKHZhbHVlKSA6IHZhbHVlO1xuICAgIGlmIChyYW5raW5nICE9PSAnJykge1xuICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuaXRlbVBvc2l0aW9uLmdldFNpemUoKTtcbiAgICAgIHJhbmtpbmcgPSBzaXplIDwgcmFua2luZyA/IHNpemUgOiByYW5raW5nO1xuICAgICAgcmFua2luZyA9IHJhbmtpbmcgPCAxID8gMSA6IHJhbmtpbmc7XG4gICAgICBjb25zdCBpbmRleCA9IHJhbmtpbmcgLSAxO1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbVBvc2l0aW9uLmdldEl0ZW0oaW5kZXgpO1xuICAgICAgdGhpcy5nb1RvSXRlbShpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJhbmtpbmcgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVySXRlbVBvc2l0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQsIGl0ZW1FbGVtZW50LCB0eXBlYWJsZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHJhbmtpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuaXRlbVBvc2l0aW9uLmdldFNpemUoKTtcbiAgICByZXR1cm4gKHR5cGVhYmxlID9cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9jLWxpc3QtaXRlbXMtZWxlbWVudFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gZS50YXJnZXQuc2VsZWN0KCl9XG4gICAgICAgICAgb25Gb2N1cz17ZSA9PiBlLnRhcmdldC5zZWxlY3QoKX1cbiAgICAgICAgICBvbktleVByZXNzPXt0aGlzLmhhbmRsZUtleVByZXNzfVxuICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgIG1heD17c2l6ZX1cbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT17cmFua2luZ31cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7c2l6ZS50b1N0cmluZygpLmxlbmd0aH1lbWAgfX1cbiAgICAgICAgLz5cbiAgICAgICAge3RoaXMuaXRlbVBvc2l0aW9uLmdldFNpemVTdHJpbmcoKX1cbiAgICAgIDwvc3Bhbj4gOlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2MtbGlzdC1pdGVtcy1lbGVtZW50XCI+XG4gICAgICAgIHtpdGVtRWxlbWVudCB8fFxuICAgICAgICAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2MtbGlzdC1pdGVtcy1zdHJpbmdcIj57dGhpcy5pdGVtUG9zaXRpb24uZ2V0U3RyaW5nKCl9PC9zcGFuPlxuICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvc3Bhbj4pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBpdGVtSWQsXG4gICAgICBpdGVtSWRzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuaXRlbVBvc2l0aW9uLnNldChpdGVtSWRzLCBpdGVtSWQpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YG9jLWxpc3QtaXRlbXMgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgaWQ9e2Ake2lkfS1wcmV2aW91cy1idXR0b25gfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9jLWxpc3QtaXRlbXMtaWNvblwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5nb1RvUHJldmlvdXNJdGVtfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCB0aGlzLml0ZW1Qb3NpdGlvbi5nZXRQcmV2aW91cygpID09PSAwfVxuICAgICAgICA+XG4gICAgICAgICAgPEZhQ2hldnJvbkxlZnQgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHt0aGlzLnJlbmRlckl0ZW1Qb3NpdGlvbigpfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgaWQ9e2Ake2lkfS1uZXh0LWJ1dHRvbmB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwib2MtbGlzdC1pdGVtcy1pY29uXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdvVG9OZXh0SXRlbX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgdGhpcy5pdGVtUG9zaXRpb24uZ2V0TmV4dCgpID09PSAwfVxuICAgICAgICA+XG4gICAgICAgICAgPEZhQ2hldnJvblJpZ2h0IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19