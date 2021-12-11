const INIT_STATE = {
	items: {},
	totalPrice: 0,
	totalCount: 0
};

export const cartReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case 'ADD_PIZZA_CART': {
			const newItems = {
				...state.items, [action.payload.id]: !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id], action.payload]
			}

			const allPizzas = [].concat(...Object.values(newItems))
			const totalPrice = allPizzas.reduce((acc, el) => {
				return acc += el.price
			}, 0)
			return {
				...state, items: newItems,
				totalCount: allPizzas.length,
				totalPrice
			}
		}
		default: return state
	}
};

export default cartReducer;