import { Cart } from "../models/cart.js";
import { Item } from "../models/item.js";
//quais açoes meu carrinho pode fazer

export class CartService {
  //CASOS DE USO
  /**
   * ✅ -> adicionar item no carrinho
   * @param {Cart} userCart
   * @param {Item} item
   * @returns {Promise<void>}
   */
  async addItem(userCart, item) {
    userCart.addItem(item);
  }

  /**
   * ✅ -> calcular o total do carrinho
   * @param {Cart} userCart
   * @returns {Promise<void>}
   */
  async calculateTotal(userCart) {
    console.log("\nShopee Cart TOTAL IS:");

    console.log(`🎁Total: ${userCart.total}`);
  }

  /**
   * -> deletar item do carrinho
   * @param {Cart} userCart
   * @param {string} name
   * @returns {Promise<void>}
   */
  async deleteItem(userCart, name) {
    userCart.deleteItem(name);
  }

  /**
   * -> ✅ remover um item - diminui um item
   * @param {Cart} userCart
   * @param {Item} item
   * @returns {Promise<void>}
   */
  async removeItem(userCart, item) {
    userCart.removeItem(item);
  }

  /**
   * ✅ mostra todos os items do carrinho
   * @param {Cart} userCart
   * @returns {Promise<void>}
   */
  async displaycart(userCart) {
    console.log("\nShopee cart list:");
    userCart.items.forEach((item, index) => {
      console.log(
        `${index + 1}. ${item.name} - R$ ${item.price} | ${
          item.quantity
        }x | Subtotal = ${item.subtotal}`
      );
    });
  }
}
