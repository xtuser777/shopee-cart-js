export class Item {
  /**
   * 
   * @param {string} name 
   * @param {number} price 
   * @param {number} quantity 
   * @param {number} subtotal 
   */
  constructor(name = '', price = 0.0, quantity = 0, subtotal = 0.0) {
    /** @type {string} */
    this.name = name;

    /** @type {number} */
    this.price = price;

    /** @type {number} */
    this.quantity = quantity;

    /** @type {number} */
    this.subtotal = subtotal;
  }
}