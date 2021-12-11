const INIT_STATE = {
	category: null,
	sortBy: {
		name: 'популярности',
		type: 'rating',
		order: 'desc'
	},
};

export const filterReducer = (state = INIT_STATE, action) => {
	if (action.type === 'SET_SORT_BY') {
		return {
			...state,
			sortBy: action.payload,
		};
	}
	if (action.type === 'SET_CATEGORY') {
		return {
			...state,
			category: action.payload,
		};
	}
	return state;
};

export default filterReducer;