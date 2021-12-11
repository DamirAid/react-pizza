import React from 'react';
import Categories from '../components/Categories/Categories';
import PizzaList from '../components/PizzaList/PizzaList';


const HomePage = () => {
	return (
		<div className='container'>
			<Categories />
			<PizzaList />
		</div>
	);
};

export default HomePage;