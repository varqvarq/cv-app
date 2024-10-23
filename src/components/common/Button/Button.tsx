import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Button.module.scss';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps {
	className?: string;
	buttonText?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	icon?: IconDefinition;
	id?: string;
	ref?: React.RefObject<HTMLButtonElement>;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button
			className={`${style.button} ${props.className} ${props.disabled && style.disabled}`}
			onClick={props.onClick}
			id={props.id}
			ref={props.ref}
			type={props.type}
			disabled={props.disabled}
		>
			{props.icon && (
				<FontAwesomeIcon icon={props.icon} className={`${style.icon}`} />
			)}
			{props.buttonText && (
				<span className={style.text}>{props.buttonText} </span>
			)}
		</button>
	);
};

export default Button;
