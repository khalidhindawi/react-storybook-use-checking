import React from 'react'
import I18nContext from '../context/I18nContext';
import {Link} from 'react-router-dom';

const HomeView = () => {
    const {getMessage} = React.useContext(I18nContext);
    return (
        <div>
            <h1>{getMessage('home')}</h1>
            <p>{getMessage('home.body')}</p>
            <p><Link to="/TestView">{getMessage('home.testlink')}</Link></p>
        </div>
    );
}

export default HomeView;
