import { Shopping } from "../../db/schema";
import * as elements from "typed-html";
import { ShoppingItem } from "./ShopItem";

export function ShoppingList({ shoppingItems }: { shoppingItems: Shopping[] }) {
    return (
      <div>
        Shoppings
        {shoppingItems.map((shoppingItem: Shopping) => (
          <ShoppingItem {...shoppingItem} />
        ))}
      </div>
    );
  }