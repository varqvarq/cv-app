import { render, fireEvent } from '@testing-library/react';
import Button from './Button';
import icons from '../../../helpers/faIcons';
describe('Button component', () => {
	test('renders with default props', () => {
		const { getByRole } = render(<Button />);
		const buttonElement = getByRole('button');
		expect(buttonElement).toBeInTheDocument();
	});

	test('renders with custom text', () => {
		const buttonText = 'Click Me';
		const { getByText } = render(<Button buttonText={buttonText} />);
		const textElement = getByText(buttonText);
		expect(textElement).toBeInTheDocument();
	});

	test('renders with an icon', () => {
		const { container } = render(<Button icon={icons.faRotate} />);
		const iconElement = container.querySelector('svg');
		expect(iconElement).toBeInTheDocument();
	});

	test('handles onClick event', () => {
		const handleClick = jest.fn();
		const { getByRole } = render(<Button onClick={handleClick} />);
		const buttonElement = getByRole('button');
		fireEvent.click(buttonElement);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	test('is disabled when disabled prop is true', () => {
		const { getByRole } = render(<Button disabled={true} />);
		const buttonElement = getByRole('button');
		expect(buttonElement).toBeDisabled();
	});
});
