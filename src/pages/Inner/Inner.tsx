import { useEffect, useRef, useState } from 'react';

import style from './Inner.module.scss';

import { aboutMe } from '../../helpers/constants';
import icons from '../../helpers/faIcons';

import Box from '../../components/common/Box/Box';
import Timeline from '../../components/Timeline/Timeline';
import Experience from '../../components/Experience/Experience';
import Skills from '../../components/Skills/Skills';
import Portfolio from '../../components/Portfolio/Portfolio';
import Contacts from '../../components/Contacts/Contacts';
import Feedback from '../../components/Feedback/Feedback';
import Panel from '../../components/Panel/Panel';
import Button from '../../components/common/Button/Button';

const Inner = () => {
	const [isOpen, setIsOpen] = useState(true);
	const [btnShown, setBtnShow] = useState(false);

	useEffect(() => {
		const handleIntersect = (entries: IntersectionObserverEntry[]) => {
			const entry = entries[0];

			if (entry.isIntersecting) {
				setBtnShow(false);
			} else {
				setBtnShow(true);
			}
		};

		const firstSection = document.getElementById('about');

		const options: IntersectionObserverInit = {
			threshold: 0,
		};

		const observer = new IntersectionObserver(handleIntersect, options);

		if (firstSection) {
			observer.observe(firstSection);
		}

		return () => {
			if (firstSection) {
				observer.unobserve(firstSection);
			}
		};
	});

	const goUp = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	return (
		<main id='wrapper' className={style.wrapper}>
			<Panel state={isOpen} setState={setIsOpen} />

			<div className={`${style.container} ${isOpen ? style.active : ''}`}>
				<Box id='about' title='About me' content={aboutMe} />
				<Box id='education' title='Education' content={<Timeline />} />
				<Box id='experience' title='Experience' content={<Experience />} />
				<Box id='skills' title='Skills' content={<Skills />} />
				<Box id='portfolio' title='Portfolio' content={<Portfolio />} />
				<Box id='contacts' title='Contacts' content={<Contacts />} />
				<Box id='feedbacks' title='Feedbacks' content={<Feedback />} />
			</div>

			<Button
				id='goUp'
				icon={icons.faChevronLeft}
				className={`${style.goUp} ${!btnShown && style.hidden}`}
				onClick={goUp}
			/>
		</main>
	);
};

export default Inner;
