var _class, _temp2;

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

var ListItems = (_temp2 = _class = function (_React$PureComponent) {
  _inherits(ListItems, _React$PureComponent);

  function ListItems() {
    var _temp, _this, _ret;

    _classCallCheck(this, ListItems);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.goToNextItem = function () {
      if (!_this.props.disabled && _this.itemPosition.getNext() !== 0) {
        _this.props.goToItem(_this.itemPosition.getNext());
      }
    }, _this.goToPreviousItem = function () {
      if (!_this.props.disabled && _this.itemPosition.getPrevious() !== 0) {
        _this.props.goToItem(_this.itemPosition.getPrevious());
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ListItems.prototype.componentWillMount = function componentWillMount() {
    this.itemPosition = new ItemPosition();
  };

  ListItems.prototype.render = function render() {
    var _props = this.props,
        id = _props.id,
        className = _props.className,
        disabled = _props.disabled,
        itemElement = _props.itemElement,
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
      React.createElement(
        'span',
        { className: 'oc-list-items-element' },
        itemElement || React.createElement(
          'span',
          { className: 'oc-list-items-string' },
          this.itemPosition.getString()
        )
      ),
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
  itemElement: null
}, _temp2);
export { ListItems as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LWl0ZW1zLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJJbW11dGFibGVQcm9wVHlwZXMiLCJGYUNoZXZyb25MZWZ0IiwiRmFDaGV2cm9uUmlnaHQiLCJJdGVtUG9zaXRpb24iLCJMaXN0SXRlbXMiLCJnb1RvTmV4dEl0ZW0iLCJwcm9wcyIsImRpc2FibGVkIiwiaXRlbVBvc2l0aW9uIiwiZ2V0TmV4dCIsImdvVG9JdGVtIiwiZ29Ub1ByZXZpb3VzSXRlbSIsImdldFByZXZpb3VzIiwiY29tcG9uZW50V2lsbE1vdW50IiwicmVuZGVyIiwiaWQiLCJjbGFzc05hbWUiLCJpdGVtRWxlbWVudCIsIml0ZW1JZCIsIml0ZW1JZHMiLCJzZXQiLCJnZXRTdHJpbmciLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0IsMkJBQS9CO0FBQ0EsT0FBT0MsYUFBUCxNQUEwQixpQ0FBMUI7QUFDQSxPQUFPQyxjQUFQLE1BQTJCLGtDQUEzQjs7QUFFQSxPQUFPQyxZQUFQLE1BQXlCLCtCQUF6QjtBQUNBLE9BQU8sNkJBQVA7O0lBRXFCQyxTOzs7Ozs7Ozs7Ozs7Z0tBNkJuQkMsWSxHQUFlLFlBQU07QUFDbkIsVUFBSSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0MsUUFBWixJQUF3QixNQUFLQyxZQUFMLENBQWtCQyxPQUFsQixPQUFnQyxDQUE1RCxFQUErRDtBQUM3RCxjQUFLSCxLQUFMLENBQVdJLFFBQVgsQ0FBb0IsTUFBS0YsWUFBTCxDQUFrQkMsT0FBbEIsRUFBcEI7QUFDRDtBQUNGLEssUUFFREUsZ0IsR0FBbUIsWUFBTTtBQUN2QixVQUFJLENBQUMsTUFBS0wsS0FBTCxDQUFXQyxRQUFaLElBQXdCLE1BQUtDLFlBQUwsQ0FBa0JJLFdBQWxCLE9BQW9DLENBQWhFLEVBQW1FO0FBQ2pFLGNBQUtOLEtBQUwsQ0FBV0ksUUFBWCxDQUFvQixNQUFLRixZQUFMLENBQWtCSSxXQUFsQixFQUFwQjtBQUNEO0FBQ0YsSzs7O3NCQWREQyxrQixpQ0FBcUI7QUFDbkIsU0FBS0wsWUFBTCxHQUFvQixJQUFJTCxZQUFKLEVBQXBCO0FBQ0QsRzs7c0JBY0RXLE0scUJBQVM7QUFBQSxpQkFRSCxLQUFLUixLQVJGO0FBQUEsUUFFTFMsRUFGSyxVQUVMQSxFQUZLO0FBQUEsUUFHTEMsU0FISyxVQUdMQSxTQUhLO0FBQUEsUUFJTFQsUUFKSyxVQUlMQSxRQUpLO0FBQUEsUUFLTFUsV0FMSyxVQUtMQSxXQUxLO0FBQUEsUUFNTEMsTUFOSyxVQU1MQSxNQU5LO0FBQUEsUUFPTEMsT0FQSyxVQU9MQSxPQVBLOztBQVNQLFNBQUtYLFlBQUwsQ0FBa0JZLEdBQWxCLENBQXNCRCxPQUF0QixFQUErQkQsTUFBL0I7QUFDQSxXQUNFO0FBQUE7QUFBQTtBQUNFLHNDQUE0QkYsU0FEOUI7QUFFRSxZQUFJRDtBQUZOO0FBSUU7QUFBQTtBQUFBO0FBQ0UsY0FBT0EsRUFBUCxxQkFERjtBQUVFLHFCQUFVLG9CQUZaO0FBR0UsbUJBQVMsS0FBS0osZ0JBSGhCO0FBSUUsb0JBQVVKLFlBQVksS0FBS0MsWUFBTCxDQUFrQkksV0FBbEIsT0FBb0M7QUFKNUQ7QUFNRSw0QkFBQyxhQUFEO0FBTkYsT0FKRjtBQVlFO0FBQUE7QUFBQSxVQUFNLFdBQVUsdUJBQWhCO0FBQ0dLLHVCQUVDO0FBQUE7QUFBQSxZQUFNLFdBQVUsc0JBQWhCO0FBQXdDLGVBQUtULFlBQUwsQ0FBa0JhLFNBQWxCO0FBQXhDO0FBSEosT0FaRjtBQW1CRTtBQUFBO0FBQUE7QUFDRSxjQUFPTixFQUFQLGlCQURGO0FBRUUscUJBQVUsb0JBRlo7QUFHRSxtQkFBUyxLQUFLVixZQUhoQjtBQUlFLG9CQUFVRSxZQUFZLEtBQUtDLFlBQUwsQ0FBa0JDLE9BQWxCLE9BQWdDO0FBSnhEO0FBTUUsNEJBQUMsY0FBRDtBQU5GO0FBbkJGLEtBREY7QUE4QkQsRzs7O0VBakZvQ1gsTUFBTXdCLGEsVUFrQnBDQyxZLEdBQWU7QUFDcEJSLE1BQUksZUFEZ0I7QUFFcEJDLGFBQVcsRUFGUztBQUdwQlQsWUFBVSxLQUhVO0FBSXBCVSxlQUFhO0FBSk8sQztTQWxCSGIsUyIsImZpbGUiOiJsaXN0LWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCBGYUNoZXZyb25MZWZ0IGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jaGV2cm9uLWxlZnQnO1xuaW1wb3J0IEZhQ2hldnJvblJpZ2h0IGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jaGV2cm9uLXJpZ2h0JztcblxuaW1wb3J0IEl0ZW1Qb3NpdGlvbiBmcm9tICcuL2l0ZW0tcG9zaXRpb24vaXRlbS1wb3NpdGlvbic7XG5pbXBvcnQgJy4vbGlzdC1pdGVtcy5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RJdGVtcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZ29Ub0l0ZW06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaXRlbUVsZW1lbnQ6IFByb3BUeXBlcy5lbGVtZW50LFxuICAgIGl0ZW1JZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gICAgaXRlbUlkczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBJbW11dGFibGVQcm9wVHlwZXMubGlzdCxcbiAgICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICAgICAgXSkpLFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZDogJ29jLWxpc3QtaXRlbXMnLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGl0ZW1FbGVtZW50OiBudWxsLFxuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLml0ZW1Qb3NpdGlvbiA9IG5ldyBJdGVtUG9zaXRpb24oKTtcbiAgfVxuXG4gIGdvVG9OZXh0SXRlbSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQgJiYgdGhpcy5pdGVtUG9zaXRpb24uZ2V0TmV4dCgpICE9PSAwKSB7XG4gICAgICB0aGlzLnByb3BzLmdvVG9JdGVtKHRoaXMuaXRlbVBvc2l0aW9uLmdldE5leHQoKSk7XG4gICAgfVxuICB9XG5cbiAgZ29Ub1ByZXZpb3VzSXRlbSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQgJiYgdGhpcy5pdGVtUG9zaXRpb24uZ2V0UHJldmlvdXMoKSAhPT0gMCkge1xuICAgICAgdGhpcy5wcm9wcy5nb1RvSXRlbSh0aGlzLml0ZW1Qb3NpdGlvbi5nZXRQcmV2aW91cygpKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGl0ZW1FbGVtZW50LFxuICAgICAgaXRlbUlkLFxuICAgICAgaXRlbUlkcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLml0ZW1Qb3NpdGlvbi5zZXQoaXRlbUlkcywgaXRlbUlkKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BvYy1saXN0LWl0ZW1zICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIGlkPXtpZH1cbiAgICAgID5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGlkPXtgJHtpZH0tcHJldmlvdXMtYnV0dG9uYH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJvYy1saXN0LWl0ZW1zLWljb25cIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ29Ub1ByZXZpb3VzSXRlbX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgdGhpcy5pdGVtUG9zaXRpb24uZ2V0UHJldmlvdXMoKSA9PT0gMH1cbiAgICAgICAgPlxuICAgICAgICAgIDxGYUNoZXZyb25MZWZ0IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvYy1saXN0LWl0ZW1zLWVsZW1lbnRcIj5cbiAgICAgICAgICB7aXRlbUVsZW1lbnQgfHxcbiAgICAgICAgICAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvYy1saXN0LWl0ZW1zLXN0cmluZ1wiPnt0aGlzLml0ZW1Qb3NpdGlvbi5nZXRTdHJpbmcoKX08L3NwYW4+XG4gICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgaWQ9e2Ake2lkfS1uZXh0LWJ1dHRvbmB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwib2MtbGlzdC1pdGVtcy1pY29uXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdvVG9OZXh0SXRlbX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgdGhpcy5pdGVtUG9zaXRpb24uZ2V0TmV4dCgpID09PSAwfVxuICAgICAgICA+XG4gICAgICAgICAgPEZhQ2hldnJvblJpZ2h0IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19