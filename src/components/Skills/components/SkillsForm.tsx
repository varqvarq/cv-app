import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import style from './SkillsForm.module.scss';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { ISkillsData } from '../../../helpers/types';
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import {
	addSkill,
	selectSkillsData,
} from '../../../redux/features/skills/skillsSlice';

const SkillsForm: React.FC = () => {
	const dispatch = useAppDispatch();
	const { skills } = useAppSelector(selectSkillsData);

	return (
		<Formik
			initialValues={{
				skillName: '',
				skillRange: '',
			}}
			validationSchema={Yup.object({
				skillName: Yup.string().required('Skill name is a required field'),
				skillRange: Yup.number()
					.required('Skill range is a required field')
					.typeError("Skill range must be a 'number' type")
					.min(10, 'Skill range must be greater than or equal to 10')
					.max(100, 'Skill range must be less than or equal to 100'),
			})}
			onSubmit={async (values, { setSubmitting, resetForm }) => {
				try {
					const newSkill: ISkillsData = {
						name: values.skillName,
						range: +values.skillRange,
					};

					if (
						!skills.some(
							(skill) => skill.name.toLowerCase() == newSkill.name.toLowerCase()
						)
					) {
						dispatch(addSkill(newSkill));
					} else {
						alert('This skill already exist');
					}

					resetForm();
				} catch (e) {
					console.error('Failed to add skill', e);
				} finally {
					setSubmitting(false);
				}
			}}
			validateOnBlur={false}
		>
			{({ isValid, values }) => {
				return (
					<Form className={style.form}>
						<Input
							label='Skill name:'
							name='skillName'
							type='text'
							placeholder='Enter skill name'
							id='skillName'
						/>

						<Input
							label='Skill range:'
							name='skillRange'
							type='text'
							placeholder='Enter skill range'
							id='skillRange'
						/>
						<Button
							type='submit'
							buttonText={`add skill`}
							className={style.button}
							disabled={!isValid || !values.skillName || !values.skillRange}
						/>
					</Form>
				);
			}}
		</Formik>
	);
};

export default SkillsForm;
