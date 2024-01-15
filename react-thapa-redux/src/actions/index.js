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

export const updateUser = (data) => {
    return {
        type: "update user",
        payload: data
    }
}

export const fetchUsers = () => {
    return async function (dispatch) {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        console.log(data)
        dispatch(updateUser(data))
    }
}