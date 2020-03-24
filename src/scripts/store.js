import item from "./item.js";

const items = [];
const hideCheckedItems = false;

function findById(id) {
  return this.items.find(item => item.id === id);
}

function addItem(itemName) {
  try {
    item.validateName(itemName);
    this.items.push(item.create(itemName));
  } catch (error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findAndToggleChecked(id) {
  const item = this.findById(id);
  item.checked = !item.checked;
}

function findAndUpdateName(id, newName) {
  try {
    const item = this.findById(id);
    item.name = newName;
  } catch (error) {
    console.error(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(id) {
  this.items = this.items.filter(item => item.id !== id);
}

function toggleCheckedFilter() {
  this.hideCheckedItems = !this.hideCheckedItems;
}


export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};
