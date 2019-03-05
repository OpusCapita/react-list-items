import { List } from 'immutable';

class ItemPosition {
  constructor() {
    this.data = this.getInitial();
  }

  set = (srcList, itemId) => {
    let list = srcList;
    if (!List.isList(list)) list = List(srcList);

    const index = list.findIndex(i => i === itemId);
    if (index !== -1) {
      this.data.itemIds = list;
      this.data.current = list.get(index);
      this.data.previous = index > 0 ? list.get(index - 1) : 0;
      this.data.next = index !== list.size - 1 ? list.get(index + 1) : 0;
      this.data.size = list.size;
      this.data.string = `${(index + 1)}/${list.size}`;
    }
  };

  getItem = index => this.data.itemIds.get(index);

  getCurrent = () => this.data.current;

  getNext = () => this.data.next;

  getPrevious = () => this.data.previous;

  getString = () => this.data.string;

  getSize = () => this.data.size;

  getSizeString = () => `/${this.data.size}`;

  reset = () => {
    this.data = this.getInitial();
  }

  getInitial = () => ({
    current: 0,
    next: 0,
    previous: 0,
    size: 0,
    string: '',
  });
}

export default ItemPosition;
