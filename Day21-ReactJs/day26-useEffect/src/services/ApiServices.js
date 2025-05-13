const ApiServices = {
  getListCarts: async () => {
    const res = await fetch("https://dummyjson.com/carts");
    return await res.json();
  },
  detailCarts: async (cartId) => {
    const res = await fetch(`https://dummyjson.com/carts/${cartId}`);
    return await res.json();
  }
};

export default ApiServices;
