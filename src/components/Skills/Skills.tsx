import style from './Skills.module.scss';

import SkillsForm from './components/SkillsForm';
import { skillsData as data } from '../../helpers/constants';
import Button from '../common/Button/Button';
import icons from '../../helpers/faIcons';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import {
	selectSkillsData,
	toggleSkills,
} from '../../redux/features/skills/skillsSlice';
import { useState } from 'react';

export const Skills: React.FC = () => {
	const dispatch = useAppDispatch();
	const { skills: data, skillFormIsOpen } = useAppSelector(selectSkillsData);
	const levels = ['Beginner', 'Proficient', 'Expert', 'Master'];

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
						role='progressbar'
					>
						<span>{skill.name}</span>
					</div>
				);
			})}
			<div className={style.scaleLineContainer}>
				<div className={style.scaleLine}>
					{levels.map((level) => {
						return (
							<div className={style.mark} key={level}>
								<div className={style.line} />
								<div className={style.label}>{level}</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Skills;
