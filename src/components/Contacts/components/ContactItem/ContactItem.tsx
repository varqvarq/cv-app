import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './ContactItem.module.scss';

import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ContactItemProps {
	icon: IconProp;
	title?: string;
	text?: string;
	link?: string;
}

const ContactItem: React.FC<ContactItemProps> = (props) => {
	return (
		<a
			href={props.link}
			className={style.itemContainer}
			data-testid='contact-item'
		>
			<FontAwesomeIcon
				icon={props.icon}
				className={style.icon}
				data-testid={`icon-${props.link}`}
			/>

			<div className={style.textContainer}>
				{props.title && <span className={style.title}>{props.title}</span>}
				<p className={style.text}>{props.text}</p>
			</div>
		</a>
	);
};

export default ContactItem;
