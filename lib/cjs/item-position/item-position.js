'use strict';

exports.__esModule = true;

var _immutable = require('immutable');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ItemPosition = function ItemPosition() {
  var _this = this;

  _classCallCheck(this, ItemPosition);

  this.set = function (srcList, itemId) {
    var list = srcList;
    if (!_immutable.List.isList(list)) list = (0, _immutable.List)(srcList);

    var index = list.findIndex(function (i) {
      return i === itemId;
    });
    if (index !== -1) {
      _this.data.itemIds = list;
      _this.data.current = list.get(index);
      _this.data.previous = index > 0 ? list.get(index - 1) : 0;
      _this.data.next = index !== list.size - 1 ? list.get(index + 1) : 0;
      _this.data.size = list.size;
      _this.data.string = index + 1 + '/' + list.size;
    }
  };

  this.getItem = function (index) {
    return _this.data.itemIds.get(index);
  };

  this.getCurrent = function () {
    return _this.data.current;
  };

  this.getNext = function () {
    return _this.data.next;
  };

  this.getPrevious = function () {
    return _this.data.previous;
  };

  this.getString = function () {
    return _this.data.string;
  };

  this.getSize = function () {
    return _this.data.size;
  };

  this.getSizeString = function () {
    return '/' + _this.data.size;
  };

  this.reset = function () {
    _this.data = _this.getInitial();
  };

  this.getInitial = function () {
    return {
      current: 0,
      next: 0,
      previous: 0,
      size: 0,
      string: ''
    };
  };

  this.data = this.getInitial();
};

exports.default = ItemPosition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtLXBvc2l0aW9uL2l0ZW0tcG9zaXRpb24uanMiXSwibmFtZXMiOlsiSXRlbVBvc2l0aW9uIiwic2V0Iiwic3JjTGlzdCIsIml0ZW1JZCIsImxpc3QiLCJMaXN0IiwiaXNMaXN0IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpIiwiZGF0YSIsIml0ZW1JZHMiLCJjdXJyZW50IiwiZ2V0IiwicHJldmlvdXMiLCJuZXh0Iiwic2l6ZSIsInN0cmluZyIsImdldEl0ZW0iLCJnZXRDdXJyZW50IiwiZ2V0TmV4dCIsImdldFByZXZpb3VzIiwiZ2V0U3RyaW5nIiwiZ2V0U2l6ZSIsImdldFNpemVTdHJpbmciLCJyZXNldCIsImdldEluaXRpYWwiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztJQUVNQSxZLEdBQ0osd0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxPQUlkQyxHQUpjLEdBSVIsVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3pCLFFBQUlDLE9BQU9GLE9BQVg7QUFDQSxRQUFJLENBQUNHLGdCQUFLQyxNQUFMLENBQVlGLElBQVosQ0FBTCxFQUF3QkEsT0FBTyxxQkFBS0YsT0FBTCxDQUFQOztBQUV4QixRQUFNSyxRQUFRSCxLQUFLSSxTQUFMLENBQWU7QUFBQSxhQUFLQyxNQUFNTixNQUFYO0FBQUEsS0FBZixDQUFkO0FBQ0EsUUFBSUksVUFBVSxDQUFDLENBQWYsRUFBa0I7QUFDaEIsWUFBS0csSUFBTCxDQUFVQyxPQUFWLEdBQW9CUCxJQUFwQjtBQUNBLFlBQUtNLElBQUwsQ0FBVUUsT0FBVixHQUFvQlIsS0FBS1MsR0FBTCxDQUFTTixLQUFULENBQXBCO0FBQ0EsWUFBS0csSUFBTCxDQUFVSSxRQUFWLEdBQXFCUCxRQUFRLENBQVIsR0FBWUgsS0FBS1MsR0FBTCxDQUFTTixRQUFRLENBQWpCLENBQVosR0FBa0MsQ0FBdkQ7QUFDQSxZQUFLRyxJQUFMLENBQVVLLElBQVYsR0FBaUJSLFVBQVVILEtBQUtZLElBQUwsR0FBWSxDQUF0QixHQUEwQlosS0FBS1MsR0FBTCxDQUFTTixRQUFRLENBQWpCLENBQTFCLEdBQWdELENBQWpFO0FBQ0EsWUFBS0csSUFBTCxDQUFVTSxJQUFWLEdBQWlCWixLQUFLWSxJQUF0QjtBQUNBLFlBQUtOLElBQUwsQ0FBVU8sTUFBVixHQUF1QlYsUUFBUSxDQUEvQixTQUFxQ0gsS0FBS1ksSUFBMUM7QUFDRDtBQUNGLEdBakJhOztBQUFBLE9BbUJkRSxPQW5CYyxHQW1CSjtBQUFBLFdBQVMsTUFBS1IsSUFBTCxDQUFVQyxPQUFWLENBQWtCRSxHQUFsQixDQUFzQk4sS0FBdEIsQ0FBVDtBQUFBLEdBbkJJOztBQUFBLE9BcUJkWSxVQXJCYyxHQXFCRDtBQUFBLFdBQU0sTUFBS1QsSUFBTCxDQUFVRSxPQUFoQjtBQUFBLEdBckJDOztBQUFBLE9BdUJkUSxPQXZCYyxHQXVCSjtBQUFBLFdBQU0sTUFBS1YsSUFBTCxDQUFVSyxJQUFoQjtBQUFBLEdBdkJJOztBQUFBLE9BeUJkTSxXQXpCYyxHQXlCQTtBQUFBLFdBQU0sTUFBS1gsSUFBTCxDQUFVSSxRQUFoQjtBQUFBLEdBekJBOztBQUFBLE9BMkJkUSxTQTNCYyxHQTJCRjtBQUFBLFdBQU0sTUFBS1osSUFBTCxDQUFVTyxNQUFoQjtBQUFBLEdBM0JFOztBQUFBLE9BNkJkTSxPQTdCYyxHQTZCSjtBQUFBLFdBQU0sTUFBS2IsSUFBTCxDQUFVTSxJQUFoQjtBQUFBLEdBN0JJOztBQUFBLE9BK0JkUSxhQS9CYyxHQStCRTtBQUFBLGlCQUFVLE1BQUtkLElBQUwsQ0FBVU0sSUFBcEI7QUFBQSxHQS9CRjs7QUFBQSxPQWlDZFMsS0FqQ2MsR0FpQ04sWUFBTTtBQUNaLFVBQUtmLElBQUwsR0FBWSxNQUFLZ0IsVUFBTCxFQUFaO0FBQ0QsR0FuQ2E7O0FBQUEsT0FxQ2RBLFVBckNjLEdBcUNEO0FBQUEsV0FBTztBQUNsQmQsZUFBUyxDQURTO0FBRWxCRyxZQUFNLENBRlk7QUFHbEJELGdCQUFVLENBSFE7QUFJbEJFLFlBQU0sQ0FKWTtBQUtsQkMsY0FBUTtBQUxVLEtBQVA7QUFBQSxHQXJDQzs7QUFDWixPQUFLUCxJQUFMLEdBQVksS0FBS2dCLFVBQUwsRUFBWjtBQUNELEM7O2tCQTRDWTFCLFkiLCJmaWxlIjoiaXRlbS1wb3NpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3QgfSBmcm9tICdpbW11dGFibGUnO1xuXG5jbGFzcyBJdGVtUG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmdldEluaXRpYWwoKTtcbiAgfVxuXG4gIHNldCA9IChzcmNMaXN0LCBpdGVtSWQpID0+IHtcbiAgICBsZXQgbGlzdCA9IHNyY0xpc3Q7XG4gICAgaWYgKCFMaXN0LmlzTGlzdChsaXN0KSkgbGlzdCA9IExpc3Qoc3JjTGlzdCk7XG5cbiAgICBjb25zdCBpbmRleCA9IGxpc3QuZmluZEluZGV4KGkgPT4gaSA9PT0gaXRlbUlkKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLmRhdGEuaXRlbUlkcyA9IGxpc3Q7XG4gICAgICB0aGlzLmRhdGEuY3VycmVudCA9IGxpc3QuZ2V0KGluZGV4KTtcbiAgICAgIHRoaXMuZGF0YS5wcmV2aW91cyA9IGluZGV4ID4gMCA/IGxpc3QuZ2V0KGluZGV4IC0gMSkgOiAwO1xuICAgICAgdGhpcy5kYXRhLm5leHQgPSBpbmRleCAhPT0gbGlzdC5zaXplIC0gMSA/IGxpc3QuZ2V0KGluZGV4ICsgMSkgOiAwO1xuICAgICAgdGhpcy5kYXRhLnNpemUgPSBsaXN0LnNpemU7XG4gICAgICB0aGlzLmRhdGEuc3RyaW5nID0gYCR7KGluZGV4ICsgMSl9LyR7bGlzdC5zaXplfWA7XG4gICAgfVxuICB9O1xuXG4gIGdldEl0ZW0gPSBpbmRleCA9PiB0aGlzLmRhdGEuaXRlbUlkcy5nZXQoaW5kZXgpO1xuXG4gIGdldEN1cnJlbnQgPSAoKSA9PiB0aGlzLmRhdGEuY3VycmVudDtcblxuICBnZXROZXh0ID0gKCkgPT4gdGhpcy5kYXRhLm5leHQ7XG5cbiAgZ2V0UHJldmlvdXMgPSAoKSA9PiB0aGlzLmRhdGEucHJldmlvdXM7XG5cbiAgZ2V0U3RyaW5nID0gKCkgPT4gdGhpcy5kYXRhLnN0cmluZztcblxuICBnZXRTaXplID0gKCkgPT4gdGhpcy5kYXRhLnNpemU7XG5cbiAgZ2V0U2l6ZVN0cmluZyA9ICgpID0+IGAvJHt0aGlzLmRhdGEuc2l6ZX1gO1xuXG4gIHJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuZ2V0SW5pdGlhbCgpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbCA9ICgpID0+ICh7XG4gICAgY3VycmVudDogMCxcbiAgICBuZXh0OiAwLFxuICAgIHByZXZpb3VzOiAwLFxuICAgIHNpemU6IDAsXG4gICAgc3RyaW5nOiAnJyxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1Qb3NpdGlvbjtcbiJdfQ==