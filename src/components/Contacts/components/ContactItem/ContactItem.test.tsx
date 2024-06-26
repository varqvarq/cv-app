import { render } from '@testing-library/react';
import ContactItem, { ContactItemProps } from './ContactItem';
import icons from '../../../../helpers/faIcons';

describe('ContactItem Component', () => {
	const defaultProps: ContactItemProps = {
		icon: icons.faTwitter,
		link: 'https://example.com',
		text: 'Contact Us',
	};

	it('should render without crashing', () => {
		const { getByTestId } = render(<ContactItem {...defaultProps} />);
		const contactItem = getByTestId('contact-item');
		expect(contactItem).toBeInTheDocument();
	});

	it('should render the correct link', () => {
		const { getByTestId } = render(<ContactItem {...defaultProps} />);
		const contactItem = getByTestId('contact-item');
		expect(contactItem).toHaveAttribute('href', defaultProps.link);
	});

	it('should render the correct icon', () => {
		const { getByTestId } = render(<ContactItem {...defaultProps} />);
		const icon = getByTestId(`icon-${defaultProps.link}`);
		expect(icon).toBeInTheDocument();
	});

	it('should render the correct text', () => {
		const { getByText } = render(<ContactItem {...defaultProps} />);
		if (defaultProps.text) {
			const textElement = getByText(defaultProps.text);
			expect(textElement).toBeInTheDocument();
		}
	});
});
