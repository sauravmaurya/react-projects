const initialState = { counter: 0, users: [] };

const changeTheNumber = (state = initialState, { type, payload }) => {
    switch (type) {
        case "increment counter":
            return {
                ...state,
                counter: state.counter + payload
            }
        case "decrement counter":
            return {
                ...state,
                counter: state.counter - 1
            };
        case "update user":
            return {
                ...state,
                users: [...payload]
            }

        default: return state
    }
}

export default changeTheNumber;