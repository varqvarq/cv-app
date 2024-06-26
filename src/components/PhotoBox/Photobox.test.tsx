import { render, screen } from '@testing-library/react';
import PhotoBox from './PhotoBox';

describe('PhotoBox Component', () => {
	const defaultProps = {
		name: 'John Doe',
		avatar: 'avatar-url.jpg',
	};

	test('renders the name and avatar', () => {
		render(<PhotoBox {...defaultProps} />);

		expect(screen.getByText('John Doe')).toBeInTheDocument();
		expect(screen.getByAltText('avatar')).toHaveAttribute(
			'src',
			expect.stringMatching(/avatar-url\.jpg$/)
		);
	});

	test('renders the title when provided', () => {
		render(<PhotoBox {...defaultProps} title='Developer' />);

		expect(screen.getByText('Developer')).toBeInTheDocument();
	});

	test('renders the description when provided', () => {
		render(
			<PhotoBox {...defaultProps} description='A passionate developer.' />
		);

		expect(screen.getByText('A passionate developer.')).toBeInTheDocument();
	});

	test('applies the sidebar class when sidebar prop is true', () => {
		render(<PhotoBox {...defaultProps} sidebar={true} />);

		const container = screen.getByText('John Doe').closest('div');
		expect(container).toHaveClass('sidebar');
	});

	test('applies additional className when provided', () => {
		render(<PhotoBox {...defaultProps} className='additional-class' />);

		const container = screen.getByText('John Doe').closest('div');
		expect(container).toHaveClass('additional-class');
	});
});
