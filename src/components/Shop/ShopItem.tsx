import * as elements from "typed-html";
import { Shopping } from "../../db/schema";

export function ShoppingItem({ id, name, purchased }: Shopping) {
    return (
      <div class="flex flex-row space-x-2">
        <p>{name}</p>
        <input type="checkbox" checked={purchased} />
        <button class="text-red-300">X</button>
      </div>
    );
  }