import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import {
    Container,
    LanguageSelect
} from '../components'
import StoryRouter from './StoryRouter';

import I18nContext from '../context/I18nContext';

const languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Spanish', value: 'es' },
];

const options = {
    noLanguage: [],
    defaultLanguages: languageOptions
};

export default {
    title: 'LanguageSelect',
    component: LanguageSelect,
    decorators: [withKnobs, storyFn => StoryRouter()(storyFn)],
};

export const Default = () => {
    const { getMessage } = React.useContext(I18nContext);
    return (
        <Container>
            <LanguageSelect
                placeholder={text('placeholder', 'Select a language')}
                getMessage={getMessage}
                languageOptions={select('languages', options, languageOptions)}
                setLanguage={action('onSelect')}
            />
        </Container>
    );
};