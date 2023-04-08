import { configureStore } from '@reduxjs/toolkit';
import {
    formReducer,
    changeName,
    changeCost
} from './slices/formSlice'

import {
    carsReducer,
    changeSearchTerm,
    addCar,
    removeCar
} from './slices/carsSlice'

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
})

export {
    store,
    addCar,
    removeCar,
    changeSearchTerm,
    changeCost,
    changeName
}