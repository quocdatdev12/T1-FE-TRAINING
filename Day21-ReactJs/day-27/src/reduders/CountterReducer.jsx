
export const DECREMENT = "decrement";
export const INCREMENT = "increment";

function reducerCounter (state,action) {
    const {type, payload} = action;
    switch (action.type) {
        case DECREMENT:
            return {count: payload};
        case INCREMENT:
            return {count: payload}
        default:
            return state;
    }
}

export default reducerCounter;