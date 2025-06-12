export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_DECREMENT = "DECREMENT_PRODUCT";
export const ADD_DELETE = "DELETE_PRODUCT";

export const cartReducer = (state, action) => {
  //carts
  switch (action.type) {
    case ADD_PRODUCT:
      // xử lí số lượng sản phẩm
      const axists = state.find((item) => item.id === action.payload.id);
      if (axists) {
        const updateCarts = state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        return [...updateCarts];
      }
      return [...state, { ...action.payload, quantity: 1 }];
    case ADD_DECREMENT:
      // xử lí trừ số lượng sản phẩm
      const updateCarts = state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity - 1
          };
        }
        return product;
      });
      return [...updateCarts];
    
    case ADD_DELETE:
        //xóa sản phẩm
        const updateProduct = state.filter((product) => {
            return product.id !== action.payload;
        })
        return[...updateProduct];

    default:
      return state;
  }
};

export default cartReducer;