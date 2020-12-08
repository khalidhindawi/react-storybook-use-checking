import React from 'react';

const defaultCountries = [
    {
      value: 'us',
      label: 'United States',
    },
    {
      value: 'fr',
      label: 'France',
    }
];

const defaultCountriesLanguagesMap = {
    us: ['en', 'es'],
    fr: ['fr', 'en']
};

const defaultHelpTextAPI = [
    {
      lang: 'en',
      country: 'us',
      content: 'help content us en',
    },
    {
      lang: 'es',
      country: 'us',
      content: 'help content us es',
    },
    {
      lang: 'fr',
      country: 'fr',
      content: 'help content fr fr',
    },
    {
      lang: 'en',
      country: 'fr',
      content: 'help content fr en',
    },
];

export const value = {
    countries: defaultCountries,
    countriesLanguagesMap: defaultCountriesLanguagesMap,
    helperTextAPI: defaultHelpTextAPI
};

export const CountriesContext = React.createContext(value);

CountriesContext.displayName = 'countriesContext';

export default CountriesContext;
