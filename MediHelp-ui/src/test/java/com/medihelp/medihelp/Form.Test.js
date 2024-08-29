import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IssueForm from '../../../../../components/Login/IssueForm';

// Mocking axios or fetch if used in IssueForm to avoid real API calls
jest.mock('axios'); // or jest.mock('../path/to/fetchFunction');

describe('IssueForm Component', () => {
    test('renders IssueForm correctly', () => {
        render(<IssueForm />);
        expect(screen.getByLabelText(/issue title/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/issue description/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });

    test('handles input correctly', () => {
        render(<IssueForm />);
        const titleInput = screen.getByLabelText(/issue title/i);
        const descriptionInput = screen.getByLabelText(/issue description/i);
        
        fireEvent.change(titleInput, { target: { value: 'Bug in UI' } });
        fireEvent.change(descriptionInput, { target: { value: 'There is a bug in the UI that needs fixing.' } });

        expect(titleInput.value).toBe('Bug in UI');
        expect(descriptionInput.value).toBe('There is a bug in the UI that needs fixing.');
    });

    test('calls onSubmit when form is submitted', () => {
        const mockOnSubmit = jest.fn();
        render(<IssueForm onSubmit={mockOnSubmit} />);
        
        const submitButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);

        expect(mockOnSubmit).toHaveBeenCalled();
    });

    test('displays error messages for invalid input', async () => {
        render(<IssueForm />);
        const submitButton = screen.getByRole('button', { name: /submit/i });
        
        fireEvent.click(submitButton);

        // Using waitFor to handle async state updates
        await waitFor(() => {
            expect(screen.getByText(/title is required/i)).toBeInTheDocument();
            expect(screen.getByText(/description is required/i)).toBeInTheDocument();
        });
    });
});
