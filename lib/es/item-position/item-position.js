function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import { List } from 'immutable';

var ItemPosition = function ItemPosition() {
  var _this = this;

  _classCallCheck(this, ItemPosition);

  this.set = function (srcList, itemId) {
    var list = srcList;
    if (!List.isList(list)) list = List(srcList);

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

export default ItemPosition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pdGVtLXBvc2l0aW9uL2l0ZW0tcG9zaXRpb24uanMiXSwibmFtZXMiOlsiTGlzdCIsIkl0ZW1Qb3NpdGlvbiIsInNldCIsInNyY0xpc3QiLCJpdGVtSWQiLCJsaXN0IiwiaXNMaXN0IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpIiwiZGF0YSIsIml0ZW1JZHMiLCJjdXJyZW50IiwiZ2V0IiwicHJldmlvdXMiLCJuZXh0Iiwic2l6ZSIsInN0cmluZyIsImdldEl0ZW0iLCJnZXRDdXJyZW50IiwiZ2V0TmV4dCIsImdldFByZXZpb3VzIiwiZ2V0U3RyaW5nIiwiZ2V0U2l6ZSIsImdldFNpemVTdHJpbmciLCJyZXNldCIsImdldEluaXRpYWwiXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsSUFBVCxRQUFxQixXQUFyQjs7SUFFTUMsWSxHQUNKLHdCQUFjO0FBQUE7O0FBQUE7O0FBQUEsT0FJZEMsR0FKYyxHQUlSLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN6QixRQUFJQyxPQUFPRixPQUFYO0FBQ0EsUUFBSSxDQUFDSCxLQUFLTSxNQUFMLENBQVlELElBQVosQ0FBTCxFQUF3QkEsT0FBT0wsS0FBS0csT0FBTCxDQUFQOztBQUV4QixRQUFNSSxRQUFRRixLQUFLRyxTQUFMLENBQWU7QUFBQSxhQUFLQyxNQUFNTCxNQUFYO0FBQUEsS0FBZixDQUFkO0FBQ0EsUUFBSUcsVUFBVSxDQUFDLENBQWYsRUFBa0I7QUFDaEIsWUFBS0csSUFBTCxDQUFVQyxPQUFWLEdBQW9CTixJQUFwQjtBQUNBLFlBQUtLLElBQUwsQ0FBVUUsT0FBVixHQUFvQlAsS0FBS1EsR0FBTCxDQUFTTixLQUFULENBQXBCO0FBQ0EsWUFBS0csSUFBTCxDQUFVSSxRQUFWLEdBQXFCUCxRQUFRLENBQVIsR0FBWUYsS0FBS1EsR0FBTCxDQUFTTixRQUFRLENBQWpCLENBQVosR0FBa0MsQ0FBdkQ7QUFDQSxZQUFLRyxJQUFMLENBQVVLLElBQVYsR0FBaUJSLFVBQVVGLEtBQUtXLElBQUwsR0FBWSxDQUF0QixHQUEwQlgsS0FBS1EsR0FBTCxDQUFTTixRQUFRLENBQWpCLENBQTFCLEdBQWdELENBQWpFO0FBQ0EsWUFBS0csSUFBTCxDQUFVTSxJQUFWLEdBQWlCWCxLQUFLVyxJQUF0QjtBQUNBLFlBQUtOLElBQUwsQ0FBVU8sTUFBVixHQUF1QlYsUUFBUSxDQUEvQixTQUFxQ0YsS0FBS1csSUFBMUM7QUFDRDtBQUNGLEdBakJhOztBQUFBLE9BbUJkRSxPQW5CYyxHQW1CSjtBQUFBLFdBQVMsTUFBS1IsSUFBTCxDQUFVQyxPQUFWLENBQWtCRSxHQUFsQixDQUFzQk4sS0FBdEIsQ0FBVDtBQUFBLEdBbkJJOztBQUFBLE9BcUJkWSxVQXJCYyxHQXFCRDtBQUFBLFdBQU0sTUFBS1QsSUFBTCxDQUFVRSxPQUFoQjtBQUFBLEdBckJDOztBQUFBLE9BdUJkUSxPQXZCYyxHQXVCSjtBQUFBLFdBQU0sTUFBS1YsSUFBTCxDQUFVSyxJQUFoQjtBQUFBLEdBdkJJOztBQUFBLE9BeUJkTSxXQXpCYyxHQXlCQTtBQUFBLFdBQU0sTUFBS1gsSUFBTCxDQUFVSSxRQUFoQjtBQUFBLEdBekJBOztBQUFBLE9BMkJkUSxTQTNCYyxHQTJCRjtBQUFBLFdBQU0sTUFBS1osSUFBTCxDQUFVTyxNQUFoQjtBQUFBLEdBM0JFOztBQUFBLE9BNkJkTSxPQTdCYyxHQTZCSjtBQUFBLFdBQU0sTUFBS2IsSUFBTCxDQUFVTSxJQUFoQjtBQUFBLEdBN0JJOztBQUFBLE9BK0JkUSxhQS9CYyxHQStCRTtBQUFBLGlCQUFVLE1BQUtkLElBQUwsQ0FBVU0sSUFBcEI7QUFBQSxHQS9CRjs7QUFBQSxPQWlDZFMsS0FqQ2MsR0FpQ04sWUFBTTtBQUNaLFVBQUtmLElBQUwsR0FBWSxNQUFLZ0IsVUFBTCxFQUFaO0FBQ0QsR0FuQ2E7O0FBQUEsT0FxQ2RBLFVBckNjLEdBcUNEO0FBQUEsV0FBTztBQUNsQmQsZUFBUyxDQURTO0FBRWxCRyxZQUFNLENBRlk7QUFHbEJELGdCQUFVLENBSFE7QUFJbEJFLFlBQU0sQ0FKWTtBQUtsQkMsY0FBUTtBQUxVLEtBQVA7QUFBQSxHQXJDQzs7QUFDWixPQUFLUCxJQUFMLEdBQVksS0FBS2dCLFVBQUwsRUFBWjtBQUNELEM7O0FBNENILGVBQWV6QixZQUFmIiwiZmlsZSI6Iml0ZW0tcG9zaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0IH0gZnJvbSAnaW1tdXRhYmxlJztcblxuY2xhc3MgSXRlbVBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5nZXRJbml0aWFsKCk7XG4gIH1cblxuICBzZXQgPSAoc3JjTGlzdCwgaXRlbUlkKSA9PiB7XG4gICAgbGV0IGxpc3QgPSBzcmNMaXN0O1xuICAgIGlmICghTGlzdC5pc0xpc3QobGlzdCkpIGxpc3QgPSBMaXN0KHNyY0xpc3QpO1xuXG4gICAgY29uc3QgaW5kZXggPSBsaXN0LmZpbmRJbmRleChpID0+IGkgPT09IGl0ZW1JZCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5kYXRhLml0ZW1JZHMgPSBsaXN0O1xuICAgICAgdGhpcy5kYXRhLmN1cnJlbnQgPSBsaXN0LmdldChpbmRleCk7XG4gICAgICB0aGlzLmRhdGEucHJldmlvdXMgPSBpbmRleCA+IDAgPyBsaXN0LmdldChpbmRleCAtIDEpIDogMDtcbiAgICAgIHRoaXMuZGF0YS5uZXh0ID0gaW5kZXggIT09IGxpc3Quc2l6ZSAtIDEgPyBsaXN0LmdldChpbmRleCArIDEpIDogMDtcbiAgICAgIHRoaXMuZGF0YS5zaXplID0gbGlzdC5zaXplO1xuICAgICAgdGhpcy5kYXRhLnN0cmluZyA9IGAkeyhpbmRleCArIDEpfS8ke2xpc3Quc2l6ZX1gO1xuICAgIH1cbiAgfTtcblxuICBnZXRJdGVtID0gaW5kZXggPT4gdGhpcy5kYXRhLml0ZW1JZHMuZ2V0KGluZGV4KTtcblxuICBnZXRDdXJyZW50ID0gKCkgPT4gdGhpcy5kYXRhLmN1cnJlbnQ7XG5cbiAgZ2V0TmV4dCA9ICgpID0+IHRoaXMuZGF0YS5uZXh0O1xuXG4gIGdldFByZXZpb3VzID0gKCkgPT4gdGhpcy5kYXRhLnByZXZpb3VzO1xuXG4gIGdldFN0cmluZyA9ICgpID0+IHRoaXMuZGF0YS5zdHJpbmc7XG5cbiAgZ2V0U2l6ZSA9ICgpID0+IHRoaXMuZGF0YS5zaXplO1xuXG4gIGdldFNpemVTdHJpbmcgPSAoKSA9PiBgLyR7dGhpcy5kYXRhLnNpemV9YDtcblxuICByZXNldCA9ICgpID0+IHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmdldEluaXRpYWwoKTtcbiAgfVxuXG4gIGdldEluaXRpYWwgPSAoKSA9PiAoe1xuICAgIGN1cnJlbnQ6IDAsXG4gICAgbmV4dDogMCxcbiAgICBwcmV2aW91czogMCxcbiAgICBzaXplOiAwLFxuICAgIHN0cmluZzogJycsXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtUG9zaXRpb247XG4iXX0=