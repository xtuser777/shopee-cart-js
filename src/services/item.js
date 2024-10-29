import { Item } from "../models/item.js";
//CASOS DE USO DOS ITENS

export class ItemService {
  /**
   * -> criar item com subtotal certo
   * @param {string} name
   * @param {number} price
   * @param {number} quantity
   * @returns {Promise<void>}
   */
  async createItem(name, price, quantity) {
    return new Item(name, price, quantity, price * quantity);
  }
}
