'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactImmutableProptypes = require('react-immutable-proptypes');

var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);

var _chevronLeft = require('react-icons/lib/fa/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('react-icons/lib/fa/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _itemPosition = require('./item-position/item-position');

var _itemPosition2 = _interopRequireDefault(_itemPosition);

require('./list-items.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItems = (_temp = _class = function (_React$PureComponent) {
  _inherits(ListItems, _React$PureComponent);

  function ListItems(props) {
    _classCallCheck(this, ListItems);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _initialiseProps.call(_this);

    _this.itemPosition = new _itemPosition2.default();
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
    return _react2.default.createElement(
      'div',
      {
        className: 'oc-list-items ' + className,
        id: id
      },
      _react2.default.createElement(
        'button',
        {
          id: id + '-previous-button',
          className: 'oc-list-items-icon',
          onClick: this.goToPreviousItem,
          disabled: disabled || this.itemPosition.getPrevious() === 0
        },
        _react2.default.createElement(_chevronLeft2.default, null)
      ),
      this.renderItemPosition(),
      _react2.default.createElement(
        'button',
        {
          id: id + '-next-button',
          className: 'oc-list-items-icon',
          onClick: this.goToNextItem,
          disabled: disabled || this.itemPosition.getNext() === 0
        },
        _react2.default.createElement(_chevronRight2.default, null)
      )
    );
  };

  return ListItems;
}(_react2.default.PureComponent), _class.defaultProps = {
  id: 'oc-list-items',
  className: '',
  disabled: false,
  itemElement: null,
  typeable: false
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

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
        itemElement = _props2.itemElement,
        typeable = _props2.typeable;
    var ranking = _this2.state.ranking;

    var size = _this2.itemPosition.getSize();
    return typeable ? _react2.default.createElement(
      'span',
      { className: 'oc-list-items-element' },
      _react2.default.createElement('input', {
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
    ) : _react2.default.createElement(
      'span',
      { className: 'oc-list-items-element' },
      itemElement || _react2.default.createElement(
        'span',
        { className: 'oc-list-items-string' },
        _this2.itemPosition.getString()
      )
    );
  };
}, _temp);
exports.default = ListItems;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LWl0ZW1zLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTGlzdEl0ZW1zIiwicHJvcHMiLCJpdGVtUG9zaXRpb24iLCJJdGVtUG9zaXRpb24iLCJpdGVtSWQiLCJpdGVtSWRzIiwicmFua2luZyIsImZpbmRJbmRleCIsImkiLCJzdGF0ZSIsInJlbmRlciIsImlkIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJzZXQiLCJnb1RvUHJldmlvdXNJdGVtIiwiZ2V0UHJldmlvdXMiLCJyZW5kZXJJdGVtUG9zaXRpb24iLCJnb1RvTmV4dEl0ZW0iLCJnZXROZXh0IiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiaXRlbUVsZW1lbnQiLCJ0eXBlYWJsZSIsIm5leHQiLCJnb1RvSXRlbSIsInByZXZpb3VzIiwic2V0U3RhdGUiLCJoYW5kbGVCbHVyIiwiZ2V0Q3VycmVudCIsImluZGV4IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiTnVtYmVyIiwic2l6ZSIsImdldFNpemUiLCJpdGVtIiwiZ2V0SXRlbSIsInNlbGVjdCIsImhhbmRsZUtleVByZXNzIiwid2lkdGgiLCJ0b1N0cmluZyIsImxlbmd0aCIsImdldFNpemVTdHJpbmciLCJnZXRTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsUzs7O0FBMkJuQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FBTixDQURpQjs7QUFBQTs7QUFFakIsVUFBS0MsWUFBTCxHQUFvQixJQUFJQyxzQkFBSixFQUFwQjtBQUZpQixRQUdUQyxNQUhTLEdBR1dILEtBSFgsQ0FHVEcsTUFIUztBQUFBLFFBR0RDLE9BSEMsR0FHV0osS0FIWCxDQUdESSxPQUhDOztBQUlqQixRQUFNQyxVQUFVRCxRQUFRRSxT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TSxNQUFULEVBQUw7QUFBQSxTQUpYO0FBS0Usb0JBQVksT0FBS0MsY0FMbkI7QUFNRSxhQUFJLEdBTk47QUFPRSxhQUFLTCxJQVBQO0FBUUUsY0FBSyxRQVJQO0FBU0UsZUFBTy9CLE9BVFQ7QUFVRSxlQUFPLEVBQUVxQyxPQUFVTixLQUFLTyxRQUFMLEdBQWdCQyxNQUExQixPQUFGO0FBVlQsUUFERjtBQWFHLGFBQUszQyxZQUFMLENBQWtCNEMsYUFBbEI7QUFiSCxLQURNLEdBZ0JOO0FBQUE7QUFBQSxRQUFNLFdBQVUsdUJBQWhCO0FBQ0d2QixxQkFFQztBQUFBO0FBQUEsVUFBTSxXQUFVLHNCQUFoQjtBQUF3QyxlQUFLckIsWUFBTCxDQUFrQjZDLFNBQWxCO0FBQXhDO0FBSEosS0FoQkY7QUF1QkQsRzs7a0JBNUdrQi9DLFMiLCJmaWxlIjoibGlzdC1pdGVtcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQgRmFDaGV2cm9uTGVmdCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi1sZWZ0JztcbmltcG9ydCBGYUNoZXZyb25SaWdodCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi1yaWdodCc7XG5cbmltcG9ydCBJdGVtUG9zaXRpb24gZnJvbSAnLi9pdGVtLXBvc2l0aW9uL2l0ZW0tcG9zaXRpb24nO1xuaW1wb3J0ICcuL2xpc3QtaXRlbXMuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbXMgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGdvVG9JdGVtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGl0ZW1FbGVtZW50OiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICBpdGVtSWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICAgIGl0ZW1JZHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgSW1tdXRhYmxlUHJvcFR5cGVzLmxpc3QsXG4gICAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICAgIF0pKSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICAgIHR5cGVhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlkOiAnb2MtbGlzdC1pdGVtcycsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaXRlbUVsZW1lbnQ6IG51bGwsXG4gICAgdHlwZWFibGU6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaXRlbVBvc2l0aW9uID0gbmV3IEl0ZW1Qb3NpdGlvbigpO1xuICAgIGNvbnN0IHsgaXRlbUlkLCBpdGVtSWRzIH0gPSBwcm9wcztcbiAgICBjb25zdCByYW5raW5nID0gaXRlbUlkcy5maW5kSW5kZXgoaSA9PiBpID09PSBpdGVtSWQpICsgMTtcblxuICAgIHRoaXMuc3RhdGUgPSB7IHJhbmtpbmcgfTtcbiAgfVxuXG4gIGdvVG9OZXh0SXRlbSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQgJiYgdGhpcy5pdGVtUG9zaXRpb24uZ2V0TmV4dCgpICE9PSAwKSB7XG4gICAgICBjb25zdCBuZXh0ID0gdGhpcy5pdGVtUG9zaXRpb24uZ2V0TmV4dCgpO1xuICAgICAgdGhpcy5nb1RvSXRlbShuZXh0KTtcbiAgICB9XG4gIH1cblxuICBnb1RvUHJldmlvdXNJdGVtID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCAmJiB0aGlzLml0ZW1Qb3NpdGlvbi5nZXRQcmV2aW91cygpICE9PSAwKSB7XG4gICAgICBjb25zdCBwcmV2aW91cyA9IHRoaXMuaXRlbVBvc2l0aW9uLmdldFByZXZpb3VzKCk7XG4gICAgICB0aGlzLmdvVG9JdGVtKHByZXZpb3VzKTtcbiAgICB9XG4gIH1cblxuICBnb1RvSXRlbSA9IChpdGVtSWQpID0+IHtcbiAgICBjb25zdCB7IGl0ZW1JZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcmFua2luZyA9IGl0ZW1JZHMuZmluZEluZGV4KGkgPT4gaSA9PT0gaXRlbUlkKSArIDE7XG4gICAgdGhpcy5wcm9wcy5nb1RvSXRlbShpdGVtSWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyByYW5raW5nIH0pO1xuICB9XG5cbiAgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJhbmtpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHJhbmtpbmcgPiAwKSByZXR1cm47XG4gICAgY29uc3QgeyBpdGVtSWRzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGl0ZW1JZCA9IHRoaXMuaXRlbVBvc2l0aW9uLmdldEN1cnJlbnQoKTtcbiAgICBjb25zdCBpbmRleCA9IGl0ZW1JZHMuZmluZEluZGV4KGkgPT4gaSA9PT0gaXRlbUlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgcmFua2luZzogaW5kZXggKyAxIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBsZXQgcmFua2luZyA9IHZhbHVlID8gTnVtYmVyKHZhbHVlKSA6IHZhbHVlO1xuICAgIGlmIChyYW5raW5nICE9PSAnJykge1xuICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuaXRlbVBvc2l0aW9uLmdldFNpemUoKTtcbiAgICAgIHJhbmtpbmcgPSBzaXplIDwgcmFua2luZyA/IHNpemUgOiByYW5raW5nO1xuICAgICAgcmFua2luZyA9IHJhbmtpbmcgPCAxID8gMSA6IHJhbmtpbmc7XG4gICAgICBjb25zdCBpbmRleCA9IHJhbmtpbmcgLSAxO1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbVBvc2l0aW9uLmdldEl0ZW0oaW5kZXgpO1xuICAgICAgdGhpcy5nb1RvSXRlbShpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJhbmtpbmcgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVySXRlbVBvc2l0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaXRlbUVsZW1lbnQsIHR5cGVhYmxlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcmFua2luZyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBzaXplID0gdGhpcy5pdGVtUG9zaXRpb24uZ2V0U2l6ZSgpO1xuICAgIHJldHVybiAodHlwZWFibGUgP1xuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2MtbGlzdC1pdGVtcy1lbGVtZW50XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBvbkNsaWNrPXtlID0+IGUudGFyZ2V0LnNlbGVjdCgpfVxuICAgICAgICAgIG9uRm9jdXM9e2UgPT4gZS50YXJnZXQuc2VsZWN0KCl9XG4gICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVLZXlQcmVzc31cbiAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICBtYXg9e3NpemV9XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgdmFsdWU9e3Jhbmtpbmd9XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke3NpemUudG9TdHJpbmcoKS5sZW5ndGh9ZW1gIH19XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLml0ZW1Qb3NpdGlvbi5nZXRTaXplU3RyaW5nKCl9XG4gICAgICA8L3NwYW4+IDpcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9jLWxpc3QtaXRlbXMtZWxlbWVudFwiPlxuICAgICAgICB7aXRlbUVsZW1lbnQgfHxcbiAgICAgICAgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9jLWxpc3QtaXRlbXMtc3RyaW5nXCI+e3RoaXMuaXRlbVBvc2l0aW9uLmdldFN0cmluZygpfTwvc3Bhbj5cbiAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L3NwYW4+KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaXRlbUlkLFxuICAgICAgaXRlbUlkcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLml0ZW1Qb3NpdGlvbi5zZXQoaXRlbUlkcywgaXRlbUlkKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BvYy1saXN0LWl0ZW1zICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIGlkPXtpZH1cbiAgICAgID5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGlkPXtgJHtpZH0tcHJldmlvdXMtYnV0dG9uYH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJvYy1saXN0LWl0ZW1zLWljb25cIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ29Ub1ByZXZpb3VzSXRlbX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgdGhpcy5pdGVtUG9zaXRpb24uZ2V0UHJldmlvdXMoKSA9PT0gMH1cbiAgICAgICAgPlxuICAgICAgICAgIDxGYUNoZXZyb25MZWZ0IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7dGhpcy5yZW5kZXJJdGVtUG9zaXRpb24oKX1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGlkPXtgJHtpZH0tbmV4dC1idXR0b25gfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9jLWxpc3QtaXRlbXMtaWNvblwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5nb1RvTmV4dEl0ZW19XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IHRoaXMuaXRlbVBvc2l0aW9uLmdldE5leHQoKSA9PT0gMH1cbiAgICAgICAgPlxuICAgICAgICAgIDxGYUNoZXZyb25SaWdodCAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==