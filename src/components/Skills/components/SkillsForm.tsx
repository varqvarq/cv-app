import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import style from './SkillsForm.module.scss';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { ISkillsData } from '../../../helpers/types';
import { useAppDispatch } from '../../../redux/app/hooks';
import { addSkill } from '../../../redux/features/skills/skillsSlice';

const SkillsForm: React.FC = () => {
	const dispatch = useAppDispatch();

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
					alert(JSON.stringify(values, null, 2));

					const newSkill: ISkillsData = {
						name: values.skillName,
						range: +values.skillRange,
					};

					dispatch(addSkill(newSkill));

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
							buttonText='Add skill'
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
