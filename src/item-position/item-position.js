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
      this.data.previous = index > 0 ? list.get(index - 1) : 0;
      this.data.next = index !== list.size - 1 ? list.get(index + 1) : 0;
      this.data.string = `${(index + 1)}/${list.size}`;
    }
  };

  getNext = () => this.data.next;

  getPrevious = () => this.data.previous;

  getString = () => this.data.string;

  reset = () => {
    this.data = this.getInitial();
  }

  getInitial = () => ({
    next: 0,
    previous: 0,
    string: '',
  });
}

export default ItemPosition;
