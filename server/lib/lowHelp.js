const db = require('../../lowdb');
const { max, map, assign } = require('lodash');

module.exports = {
  iterate(table, data) {
    const tableData = db.get(table).value();
    const maxId = max(map(tableData, 'id'));
    const payload = assign(data, { id: maxId + 1 });
    if (payload) {
      return payload;
    }
    return 'There was an error';
  }
};
