import { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';

import style from './Portfolio.module.scss';

import { portfolioData as data } from '../../helpers/constants';

import PortfolioInfo from './components/PortfolioInfo/PortfolioInfo';
import Button from '../common/Button/Button';

interface PortfolioProps {}

export const Portfolio: React.FC<PortfolioProps> = () => {
	const [filterKey, setFilterKey] = useState('all');
	const isotope = useRef<Isotope | null>();
	const tabs = ['all', 'code', 'UI'];

	useEffect(() => {
		const isotopeInstance = new Isotope('.items', {
			itemSelector: '.item',
			layoutMode: 'fitRows',
		});

		isotope.current = isotopeInstance;

		return () => isotope.current?.destroy();
	}, [isotope.current]);

	useEffect(() => {
		if (filterKey === 'all') {
			isotope.current?.arrange({ filter: `*` });
		} else {
			isotope.current?.arrange({ filter: `.${filterKey.toLowerCase()}` });
		}
	});

	const handleFilterKeyChange = (key: string) => () => setFilterKey(key);

	return (
		<div>
			<ul className={style.tabs}>
				{tabs.map((tab) => {
					return (
						<li key={tab} className={style.tab}>
							<Button
								buttonText={tab}
								className={`${style.button} ${filterKey === tab && style.active}`}
								onClick={handleFilterKeyChange(tab)}
							/>
						</li>
					);
				})}
			</ul>

			<ul className={`${style.items} items`}>
				{data.map((item) => (
					<li key={item.id} className={`${style.item} ${item.type} item`}>
						<img
							src={require(`../../assets/images/${item.type}_card.jpg`)}
							alt={`${item.type}_card`}
							className={style.img}
						/>
						<PortfolioInfo className={style.info} item={item} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Portfolio;
