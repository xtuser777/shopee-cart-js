import { Cart } from "./models/cart.js";
import { CartService } from "./services/cart.js";
import { ItemService } from "./services/item.js";

const myCart = new Cart();
const myWhishList = [];

const cartService = new CartService();
const itemService = new ItemService();

async function main() {
  console.log("Welcome to the your Shopee Cart!");

  //criando dois itens
  const item1 = await itemService.createItem("hotwheels ferrari", 20.99, 1);
  const item2 = await itemService.createItem("hotwheels lamborghini", 39.99, 3);

  // adicionei dois itens ao carrinho
  await cartService.addItem(myCart, item1);
  await cartService.addItem(myCart, item2);

  await cartService.removeItem(myCart, item2);
  await cartService.removeItem(myCart, item2);
  await cartService.removeItem(myCart, item2);

  await cartService.displaycart(myCart);
  // deletei dois itens do carrinho
  // await cartService.deleteItem(myCart, item2.name);
  // await cartService.deleteItem(myCart, item1.name);
  await cartService.calculateTotal(myCart);
}

main();
