const initState = {
  count: 0,
};

export const increment = () => ({
  type: "increment",
});

export const decrement = () => ({
  type: "decrement",
});

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };

    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;