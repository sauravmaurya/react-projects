const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "increment counter":
            return state + action.payload;
        case "decrement counter":
            return state - 1;
        default: return state
    }
}

export default changeTheNumber;