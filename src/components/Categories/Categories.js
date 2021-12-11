import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSortBy } from '../../redux/actions';


const pizzaTypes = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortIems = [
	{ name: 'популярности', type: 'rating', order: 'desc' },
	{ name: 'цене', type: 'price', order: 'desc' },
	{ name: 'алфавит', type: 'name', order: 'asc' },
];
const Categories = () => {


	const [visibleSort, setVisibleSort] = useState(false)
	const { category, sortBy } = useSelector(state => state.filterReducer)
	const dispatch = useDispatch()
	const handleOutsideClick = (event) => {
		const path = event.path || (event.composedPath && event.composedPath());
		if (!path.includes(sortRef.current)) {
			setVisibleSort(false);
		}
	};

	const handleClickSort = (item) => {
		dispatch(setSortBy(item))
		setVisibleSort(false)
	}
	const sortRef = useRef()
	useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick);
	}, []);
	return (
		<div className="content__top">
			<div className="categories">
				<ul>
					<li onClick={() => dispatch(setCategory(null))} className={category === null && 'active'}>Все</li>
					{
						pizzaTypes.map((type, index) => (
							<li onClick={() => dispatch(setCategory(index))} className={category === index ? 'active' : ''} key={index}>{type}</li>
						))
					}

				</ul>
			</div>
			<div className="sort" ref={sortRef}>
				<div className="sort__label">
					<svg
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
							fill="#2C2C2C"
						/>
					</svg>
					<b>Сортировка по:</b>
					<span onClick={() => setVisibleSort(!visibleSort)}>{sortBy.name}</span>
				</div>
				{
					visibleSort && (
						<div className="sort__popup">
							<ul>
								{
									sortIems.map((item, index) => (
										<li onClick={() => handleClickSort(item)} className={sortBy.name === item.name ? 'active' : ''} key={`${item.type}_${index}`}>{item.name}</li>
									))
								}
							</ul>
						</div>
					)
				}
			</div>
		</div>
	);
};

export default Categories;