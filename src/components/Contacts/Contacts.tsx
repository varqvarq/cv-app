import style from './Contacts.module.scss';

import icons from '../../helpers/faIcons';
import { contactData } from '../../helpers/constants';

import ContactItem from './components/ContactItem/ContactItem';

export const Contacts: React.FC = () => {
	return (
		<div className={style.container}>
			{contactData.map((contact, index: number) => (
				<ContactItem
					key={index}
					icon={icons[contact.icon]}
					title={contact.title}
					text={contact.text}
					link={contact.link}
				/>
			))}
		</div>
	);
};

export default Contacts;