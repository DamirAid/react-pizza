const INIT_STATE = {
	pizzas: [],
	isLoaded: false
}
export const pizzaReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case 'GET_PIZZAS':
			return { ...state, pizzas: action.payload, isLoaded: true }
		case 'SET_LOADED':
			return { ...state, isLoaded: action.payload }
		default: return state
	}
}