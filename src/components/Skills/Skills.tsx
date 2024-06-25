import style from './Skills.module.scss';

import SkillsForm from './components/SkillsForm';
import { skillsData as data } from '../../helpers/constants';
import Button from '../common/Button/Button';
import icons from '../../helpers/faIcons';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import {
	selectSkillsData,
	toggleSkills,
} from '../../redux/features/skills/skillsSlice';

export const Skills: React.FC = () => {
	const dispatch = useAppDispatch();
	const { skills: data, skillFormIsOpen } = useAppSelector(selectSkillsData);

	return (
		<div className={style.container}>
			<Button
				buttonText={`${skillFormIsOpen ? 'close edit' : 'open edit'}`}
				className={style.openFormBtn}
				icon={icons.faPenToSquare}
				onClick={() => dispatch(toggleSkills(!skillFormIsOpen))}
			/>

			{skillFormIsOpen && <SkillsForm />}

			{data.map((skill) => {
				return (
					<div
						key={skill.name}
						className={style.skillBar}
						style={{ width: `${skill.range}%` }}
					>
						{skill.name}
					</div>
				);
			})}
			<div className={style.line}>
				<svg
					width='100%'
					height='10'
					viewBox='0 0 964 10'
					fill='none'
					preserveAspectRatio='none'
				>
					<rect y='9' width='964' height='1' fill='#667081' />
					<rect width='1' height='10' fill='#667081' />
					<rect x='201' width='1' height='10' fill='#667081' />
					<rect x='762' width='1' height='10' fill='#667081' />
					<rect x='963' width='1' height='10' fill='#667081' />
				</svg>
				<span className={style.label}>Beginner</span>
				<span className={style.label}>Proficient</span>
				<span className={style.label}>Expert</span>
				<span className={style.label}>Master</span>
			</div>
		</div>
	);
};

export default Skills;
