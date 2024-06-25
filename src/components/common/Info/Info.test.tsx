import React from 'react';
import { render } from '@testing-library/react';
import Info from './Info';

describe('Info Component', () => {
	it('displays the correct text', () => {
		const { getByText } = render(<Info text='Sample text' />);
		expect(getByText('Sample text')).toBeInTheDocument();
	});

	it('displays the correct title when provided', () => {
		const { getByText } = render(
			<Info title='Sample title' text='Sample text' />
		);
		expect(getByText('Sample title')).toBeInTheDocument();
	});
});
