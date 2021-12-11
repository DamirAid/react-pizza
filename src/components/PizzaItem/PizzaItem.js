import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPizzaToCart } from '../../redux/actions';


const availableTypes = ['тонкое', 'традиционное'];
const availableSizes = [26, 30, 40];

const PizzaItem = ({ item }) => {
	const dispatch = useDispatch()
	const find = availableSizes.findIndex(size => size === item.sizes[0])
	const [activeType, setActiveType] = useState(item.types[0]);
	const [activeSize, setActiveSize] = useState(find);
	const onSelectSize = (index) => {
		setActiveSize(index)
	}
	const { items } = useSelector((state) => state.cartReducer)
	console.log(items)
	const onAddPizza = () => {
		const obj = {
			id: item.id,
			name: item.name,
			imageUrl: item.imageUrl,
			price: item.price,
			size: availableSizes[activeSize],
			type: availableTypes[activeType]
		}
		dispatch(addPizzaToCart(obj))
	}
	return (
		<div key={item.id} className="pizza-block">
			<img className="pizza-block__image" src={item.imageUrl} alt="Pizza" />
			<h4 className="pizza-block__title">{item.name}</h4>
			<div className="pizza-block__selector">
				<ul>
					{
						availableTypes.map((type, index) => (
							<li
								onClick={() => setActiveType(index)}
								key={index}
								className={classNames({
									active: activeType === index,
									disabled: !item.types.includes(index),
								})} >
								{type}
							</li>
						))
					}
				</ul>
				<ul>
					{
						availableSizes.map((size, index) => (
							<li
								onClick={() => onSelectSize(index)}
								key={index}
								className={classNames({
									active: activeSize === index,
									disabled: !item.sizes.includes(size),
								})}
							>
								{size} см.
							</li>
						))
					}
				</ul>
			</div>
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">от {item.price} ₽</div>
				<button className="button--add" onClick={onAddPizza}>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white"
						/>
					</svg>
					<span>Добавить</span>
					{items[item.id] && <i>{items[item.id].length}</i>}
				</button>
			</div>
		</div>
	);
};

export default PizzaItem;