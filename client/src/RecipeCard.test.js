import { render } from '@testing-library/react';
import React from 'react';
import RecipeCard from './RecipeCard';
import '@testing-library/react/cleanup-after-each';

describe('<RecipeCard />', () => {
    it('Should render a Card', () => {
        const recipeCard = render(<RecipeCard />)
        recipeCard.getByTestId("card");
    })
})