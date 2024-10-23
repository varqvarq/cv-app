import React from 'react';
import { render, screen } from '@testing-library/react';
import { Feedback } from './Feedback';
import { feedbackData as data } from '../../helpers/constants';

describe('Feedback Component', () => {
	test('renders without crashing', () => {
		render(<Feedback />);
		const listElement = screen.getByRole('list');
		expect(listElement).toBeInTheDocument();
	});

	test('renders the correct number of feedback items', () => {
		render(<Feedback />);
		const listItemElements = screen.getAllByRole('listitem');
		expect(listItemElements.length).toBe(data.length);
	});
});
