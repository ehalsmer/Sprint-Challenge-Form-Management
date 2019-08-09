
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Form from './Form';
import '@testing-library/react/cleanup-after-each';

describe('<Form />', () => {
    it('Should display two inputs, with placeholders username, password', () => {
        const form = render(<Form />);
        form.getAllByPlaceholderText(/Username/);
    })
    it('Should fire event when submit button is clicked', () => {
        const form = render(<Form />);
        const button = form.getByText(/Submit/);
        fireEvent.click(button);
    })
})