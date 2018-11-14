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
      _this.data.previous = index > 0 ? list.get(index - 1) : 0;
      _this.data.next = index !== list.size - 1 ? list.get(index + 1) : 0;
      _this.data.string = index + 1 + '/' + list.size;
    }
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

  this.reset = function () {
    _this.data = _this.getInitial();
  };

  this.getInitial = function () {
    return {
      next: 0,
      previous: 0,
      string: ''
    };
  };

  this.data = this.getInitial();
};

exports.default = ItemPosition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtLXBvc2l0aW9uL2l0ZW0tcG9zaXRpb24uanMiXSwibmFtZXMiOlsiSXRlbVBvc2l0aW9uIiwic2V0Iiwic3JjTGlzdCIsIml0ZW1JZCIsImxpc3QiLCJMaXN0IiwiaXNMaXN0IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpIiwiZGF0YSIsInByZXZpb3VzIiwiZ2V0IiwibmV4dCIsInNpemUiLCJzdHJpbmciLCJnZXROZXh0IiwiZ2V0UHJldmlvdXMiLCJnZXRTdHJpbmciLCJyZXNldCIsImdldEluaXRpYWwiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztJQUVNQSxZLEdBQ0osd0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxPQUlkQyxHQUpjLEdBSVIsVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3pCLFFBQUlDLE9BQU9GLE9BQVg7QUFDQSxRQUFJLENBQUNHLGdCQUFLQyxNQUFMLENBQVlGLElBQVosQ0FBTCxFQUF3QkEsT0FBTyxxQkFBS0YsT0FBTCxDQUFQOztBQUV4QixRQUFNSyxRQUFRSCxLQUFLSSxTQUFMLENBQWU7QUFBQSxhQUFLQyxNQUFNTixNQUFYO0FBQUEsS0FBZixDQUFkO0FBQ0EsUUFBSUksVUFBVSxDQUFDLENBQWYsRUFBa0I7QUFDaEIsWUFBS0csSUFBTCxDQUFVQyxRQUFWLEdBQXFCSixRQUFRLENBQVIsR0FBWUgsS0FBS1EsR0FBTCxDQUFTTCxRQUFRLENBQWpCLENBQVosR0FBa0MsQ0FBdkQ7QUFDQSxZQUFLRyxJQUFMLENBQVVHLElBQVYsR0FBaUJOLFVBQVVILEtBQUtVLElBQUwsR0FBWSxDQUF0QixHQUEwQlYsS0FBS1EsR0FBTCxDQUFTTCxRQUFRLENBQWpCLENBQTFCLEdBQWdELENBQWpFO0FBQ0EsWUFBS0csSUFBTCxDQUFVSyxNQUFWLEdBQXVCUixRQUFRLENBQS9CLFNBQXFDSCxLQUFLVSxJQUExQztBQUNEO0FBQ0YsR0FkYTs7QUFBQSxPQWdCZEUsT0FoQmMsR0FnQko7QUFBQSxXQUFNLE1BQUtOLElBQUwsQ0FBVUcsSUFBaEI7QUFBQSxHQWhCSTs7QUFBQSxPQWtCZEksV0FsQmMsR0FrQkE7QUFBQSxXQUFNLE1BQUtQLElBQUwsQ0FBVUMsUUFBaEI7QUFBQSxHQWxCQTs7QUFBQSxPQW9CZE8sU0FwQmMsR0FvQkY7QUFBQSxXQUFNLE1BQUtSLElBQUwsQ0FBVUssTUFBaEI7QUFBQSxHQXBCRTs7QUFBQSxPQXNCZEksS0F0QmMsR0FzQk4sWUFBTTtBQUNaLFVBQUtULElBQUwsR0FBWSxNQUFLVSxVQUFMLEVBQVo7QUFDRCxHQXhCYTs7QUFBQSxPQTBCZEEsVUExQmMsR0EwQkQ7QUFBQSxXQUFPO0FBQ2xCUCxZQUFNLENBRFk7QUFFbEJGLGdCQUFVLENBRlE7QUFHbEJJLGNBQVE7QUFIVSxLQUFQO0FBQUEsR0ExQkM7O0FBQ1osT0FBS0wsSUFBTCxHQUFZLEtBQUtVLFVBQUwsRUFBWjtBQUNELEM7O2tCQStCWXBCLFkiLCJmaWxlIjoiaXRlbS1wb3NpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3QgfSBmcm9tICdpbW11dGFibGUnO1xuXG5jbGFzcyBJdGVtUG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmdldEluaXRpYWwoKTtcbiAgfVxuXG4gIHNldCA9IChzcmNMaXN0LCBpdGVtSWQpID0+IHtcbiAgICBsZXQgbGlzdCA9IHNyY0xpc3Q7XG4gICAgaWYgKCFMaXN0LmlzTGlzdChsaXN0KSkgbGlzdCA9IExpc3Qoc3JjTGlzdCk7XG5cbiAgICBjb25zdCBpbmRleCA9IGxpc3QuZmluZEluZGV4KGkgPT4gaSA9PT0gaXRlbUlkKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLmRhdGEucHJldmlvdXMgPSBpbmRleCA+IDAgPyBsaXN0LmdldChpbmRleCAtIDEpIDogMDtcbiAgICAgIHRoaXMuZGF0YS5uZXh0ID0gaW5kZXggIT09IGxpc3Quc2l6ZSAtIDEgPyBsaXN0LmdldChpbmRleCArIDEpIDogMDtcbiAgICAgIHRoaXMuZGF0YS5zdHJpbmcgPSBgJHsoaW5kZXggKyAxKX0vJHtsaXN0LnNpemV9YDtcbiAgICB9XG4gIH07XG5cbiAgZ2V0TmV4dCA9ICgpID0+IHRoaXMuZGF0YS5uZXh0O1xuXG4gIGdldFByZXZpb3VzID0gKCkgPT4gdGhpcy5kYXRhLnByZXZpb3VzO1xuXG4gIGdldFN0cmluZyA9ICgpID0+IHRoaXMuZGF0YS5zdHJpbmc7XG5cbiAgcmVzZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5nZXRJbml0aWFsKCk7XG4gIH1cblxuICBnZXRJbml0aWFsID0gKCkgPT4gKHtcbiAgICBuZXh0OiAwLFxuICAgIHByZXZpb3VzOiAwLFxuICAgIHN0cmluZzogJycsXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtUG9zaXRpb247XG4iXX0=