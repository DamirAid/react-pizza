import axios from "axios"


export const setLoaded = payload => ({
	type: 'SET_LOADED',
	payload
})

export const getPizzas = (category, sortBy) => async (dispatch) => {
	dispatch(setLoaded(false))
	const { data } = await axios(`http://localhost:8000/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
	dispatch({
		type: 'GET_PIZZAS',
		payload: data
	})
}

export const setSortBy = (item) => ({
	type: 'SET_SORT_BY',
	payload: item,
});

export const setCategory = (catIndex) => ({
	type: 'SET_CATEGORY',
	payload: catIndex,
});


export const addPizzaToCart = pizzaObj => ({
	type: 'ADD_PIZZA_CART',
	payload: pizzaObj
})