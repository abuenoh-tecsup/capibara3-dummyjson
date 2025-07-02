import axios from "axios";

export function getItems() {
  return axios.get("https://dummyjson.com/products");
}



import { createStore } from 'zustand/vanilla'
import { persist } from 'zustand/middleware'

export const itemsStore = createStore()(
  persist(
    (set) => ({
      items: [],
      setItemsGroup: (newItems) => set(newItems),
    }),
    { name: 'items' },
  ),
)
