// In your Zustand store
import { create } from "zustand";

const useStore = create((set) => ({
  data: [],
  cart: {},
  addToTempOrder: (items) =>
    set((state) => ({
      ...state,
      cart: {
        ...state.cart,
        [items]: (state.cart[items] || 0) + 1 // Increment count for the item
      }
    })),
  remove: (items) =>
    set((state) => ({
      ...state,
      cart: {
        ...state.cart,
        [items]: (state.cart[items] || 0) - 1 // Decrement count for the item
      }
    })),
  // Action to update the data array with fetched data
  setData: (item) =>
    set((state) => ({
      ...state,
      data: item
    }))
}));

export default useStore;
