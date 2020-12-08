import React from 'react'
import I18nContext, {context} from './context/I18nContext';
import CountriesContext, { value } from './context/CountriesContext'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TestView from './views/TestView';
import HomeView from './views/HomeView';

const App = () => {
    return (
        <I18nContext.Provider value={context}>
            <CountriesContext.Provider value={value}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={`/`} component={HomeView} />
                        <Route exact path={`/TestView`} component={TestView} />
                    </Switch>
                </BrowserRouter>
            </CountriesContext.Provider>
        </I18nContext.Provider>
    );
}

export default App
