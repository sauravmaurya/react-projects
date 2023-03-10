export const incCounter = (num) => {
    return {
        type: "increment counter",
        payload: num
    }
}

export const decCounter = () => {
    return {
        type: "decrement counter"
    }
}