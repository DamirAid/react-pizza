import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getPizzas } from '../../redux/actions';
import LoadingPizzaItem from '../PizzaItem/LoadingPizzaItem';
import PizzaItem from '../PizzaItem/PizzaItem';


const PizzaList = () => {



	const dispatch = useDispatch()
	const { pizzas, isLoaded } = useSelector(state => state.pizzaReducer)
	const { category, sortBy } = useSelector(state => state.filterReducer)

	useEffect(() => {
		dispatch(getPizzas(category, sortBy))
	}, [category, sortBy])
	return (
		<>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoaded ? pizzas.map(item => (
					<PizzaItem key={item.id} item={item} />
				)) : Array(10).fill(0).map((_, index) => <LoadingPizzaItem key={index} />)
				}
			</div>
		</>
	);
};

export default PizzaList;