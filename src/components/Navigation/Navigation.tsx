import { useEffect, useRef, useState } from 'react';

import style from './Navigation.module.scss';

import Button from '../common/Button/Button';

import icons from '../../helpers/faIcons';
import { navItems } from '../../helpers/constants';

export const Navigation: React.FC = () => {
	const [activeSection, setActiveSection] = useState('about');
	const observer = useRef<IntersectionObserver>();

	useEffect(() => {
		const callback = (entries: IntersectionObserverEntry[]) => {
			const visibleSection = entries.find(
				(entry) => entry.isIntersecting
			)?.target;

			if (visibleSection) {
				setActiveSection(visibleSection.id);
			}
		};

		const options = {
			rootMargin: '0px 0px -99% 0px',
		};

		observer.current = new IntersectionObserver(callback, options);

		const sections = document.querySelectorAll('[data-section]');

		sections.forEach((section) => {
			observer.current?.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.current?.unobserve(section);
			});
		};
	}, []);

	return (
		<ul className={`${style.navigation}`}>
			{navItems.map((item) => {
				return (
					<li key={item.name} className={`${style.item}  `}>
						<a href={`#${item.name}`}>
							<Button
								icon={icons[item.icon]}
								buttonText={item.name}
								className={`${style.button} ${activeSection === item.name ? style.active : ''}`}
							/>
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default Navigation;
