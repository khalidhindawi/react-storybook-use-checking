import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { 
    Container,
    CountrySelect
} from '../components';
import StoryRouter from './StoryRouter';

import I18nContext from '../context/I18nContext';

const countryOptions = [
    {
      value: 'us',
      label: 'United States',
    },
    {
      value: 'fr',
      label: 'France',
    }
];

const options = {
    noCountry: [],
    defaultCountries: countryOptions,
};

export default {
    title: 'CountrySelect',
    component: CountrySelect,
    decorators: [withKnobs, storyFn => StoryRouter()(storyFn)],
};

export const Default = () => {
    const { getMessage } = React.useContext(I18nContext);
    return (
        <Container>
            <CountrySelect
                placeholder={text('placeholder', 'Select a country')}
                getMessage={getMessage}
                countryOptions={select('countris', options, countryOptions)}
                setCountry={action('onSelect')}
            />
        </Container>
    );
};