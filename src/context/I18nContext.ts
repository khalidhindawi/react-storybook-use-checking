import React from 'react';

/*
    This is a test component for localizations.
*/
export const defaultMessages = {
    "no_results": "no results",
    "home": "Home",
    "home.body": "Home home body",
    "home.testlink": "Test view",
    "test": "Test",
    "test.body": "Test home body",
    'en': 'English',
    'fr': 'French',
    'es': 'Spanish'
};

const getMessage = (code) => defaultMessages[code] || '';

export const context = {
    messages: defaultMessages,
    getMessage
};
const I18nContext = React.createContext(context);

I18nContext.displayName = 'i18nContext';

export default I18nContext;
