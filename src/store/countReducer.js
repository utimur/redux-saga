const defaultState = {
    count: 0
}

export const INCREMENT = "INCREMENT"
export const ASYNC_INCREMENT = "ASYNC_INCREMENT"
export const DECREMENT = "DECREMENT"
export const ASYNC_DECREMENT = "ASYNC_DECREMENT"

export default function countReducer(state = defaultState, action) {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1}
        case DECREMENT:
            return {...state, count: state.count - 1}
    }
    return state
}

export const incrementCreator = () => ({type: INCREMENT})
export const asyncIncrementCreator = () => ({type: ASYNC_INCREMENT})
export const decrementCreator = () => ({type: DECREMENT})
export const asyncDecrementCreator = () => ({type: ASYNC_DECREMENT})
