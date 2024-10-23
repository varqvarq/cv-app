import Box from './Box';
import { render, screen } from '@testing-library/react';
describe('Box Component', () => {
	test('renders title and content', () => {
		render(<Box title='Test Title' content={<p>Test Content</p>} />);

		expect(screen.getByText('Test Title')).toBeInTheDocument();
		expect(screen.getByText('Test Content')).toBeInTheDocument();
	});
});
