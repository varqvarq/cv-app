import { render, screen } from '@testing-library/react';
import { Contacts } from './Contacts';
import { contactData } from '../../helpers/constants';

describe('Contacts Component', () => {
	test('renders all contact items', () => {
		render(<Contacts />);

		contactData.forEach((contact) => {
			if (contact.title) {
				expect(screen.getByText(contact.title)).toBeInTheDocument();
			}
			expect(screen.getByText(contact.text)).toBeInTheDocument();
		});
	});

	test('renders correct icons for each contact item', () => {
		render(<Contacts />);

		contactData.forEach((contact) => {
			const iconElement = screen.getByTestId(`icon-${contact.link}`);
			expect(iconElement).toBeInTheDocument();
		});
	});
});
