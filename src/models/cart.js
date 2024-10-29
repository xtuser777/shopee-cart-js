import { Item } from "./item.js";

export class Cart {
  /**
   * 
   * @param {number} total 
   * @param {Item[]} items 
   */
  constructor(total = 0, items = []) {
    /** @type {number} */
    this.total = total;

    /** @type {Item[]} */
    this.items = items;
  }

  /**
   * Add item to cart and update total
   * @param {Item} item 
   * @returns {void}
   */
  addItem(item) {
    this.items.push(item);
    this.total += item.subtotal;
  }

  /**
   * Delete item from list and update total
   * @param {string} name 
   * @returns {void}
   */
  deleteItem(name) {
    const index = this.items.findIndex((item) => item.name === name);
  
    if (index !== -1) {
      this.total -= this.items[index].subtotal;
      this.items.splice(index, 1);
    }
  }

  /**
   * Decrement quantity of a item
   * @param {Item} item 
   * @returns {void}
   */
  removeItem(item) {
    //1. encontrar o indice do item
    const indexFound = this.items.findIndex((p) => p.name === item.name);
  
    //2. Caso não encontre o item
    if (indexFound == -1) {
      console.log("item não encontrado");
      return;
    }
  
    //3. item > 1 subtrair um item
    if (this.items[indexFound].quantity > 1) {
      this.items[indexFound].quantity -= 1;
      this.total -= this.items[indexFound].subtotal;
      this.items[indexFound].subtotal = (this.items[indexFound].price * this.items[indexFound].quantity);
      this.total += this.items[indexFound].subtotal;
      return;
    }
  
    //4. caso item = 1 deletar o item
    if (this.items[indexFound].quantity == 1) {
      this.deleteItem(this.items[indexFound].name);
      return;
    }
  }
}