import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './ContactItem.module.scss';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import icons from '../../../../helpers/faIcons';

export interface ContactItemProps {
	icon: IconProp;
	title?: string;
	text?: string;
	link?: string;
}

const ContactItem: React.FC<ContactItemProps> = (props) => {
	// const icons = icons

	return (
		<a href={props.link} className={style.item}>
			<FontAwesomeIcon
				icon={props.icon}
				className={style.icon}
				// data-testid={`icon-${icons[props.icon].iconName}`}
			/>

			<div className={style.textContainer}>
				{props.title && <span className={style.title}>{props.title}</span>}
				<p className={style.text}>{props.text}</p>
			</div>
		</a>
	);
};

export default ContactItem;
