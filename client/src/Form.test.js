import { render } from '@testing-library/react';
import React from 'react';
import Form from './Form';

describe('<Form />', () => {
    it('Should display two inputs, with placeholders username, password', () => {
        const form = render(<Form />);
        form.getAllByPlaceholderText(/Username/);
    })
})