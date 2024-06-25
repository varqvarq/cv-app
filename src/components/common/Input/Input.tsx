import { useField } from 'formik';
import style from './Input.module.scss';

import classNames from 'classnames/bind';

interface InputProps {
	label: string;
	name: string;
	type: string;
	placeholder?: string;
	id?: string;
}

const cx = classNames.bind(style);

const Input: React.FC<InputProps> = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className={cx('container')}>
			<div className={cx('inputWrapper')}>
				<label htmlFor={props.id || props.name} className={cx('label')}>
					{label}
				</label>
				<input
					className={cx('input', meta.error && 'errorBorder')}
					placeholder={props.placeholder}
					{...field}
					{...props}
				/>
			</div>
			{meta.touched && meta.error ? (
				<div className={cx('error')}>{meta.error}</div>
			) : null}
		</div>
	);
};

export default Input;
