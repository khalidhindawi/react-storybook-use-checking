import React from 'react';
import styled from 'styled-components';

import I18nContext from '../context/I18nContext';
import CountriesContext from '../context/CountriesContext';
import {
    Container,
    Row,
    Col,
    CountrySelect,
    LanguageSelect
} from '../components';

const ContentBox = styled.div`
    margin-top: 80px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
`;

const TestView = () => {
    const [country, setCountry] = React.useState<string>('');
    const [language, setLanguage] = React.useState<string>('');
    const [content, setContent] = React.useState<string>('');
    const [languages, setLanguages] = React.useState<any[]>([]);
    const { countries, countriesLanguagesMap, helperTextAPI } = React.useContext(CountriesContext);
    const { getMessage } = React.useContext(I18nContext);

    React.useEffect(() => {
        if (countriesLanguagesMap['us']) {
            setCountry('us')
            setLanguage('en')
            setLanguages(countriesLanguagesMap['us'].map(item => {
                return {
                    value: item,
                    label: getMessage(item)
                }
            }));
        }
    }, [countriesLanguagesMap, getMessage])

    React.useEffect(() => {
        if (countriesLanguagesMap[country]) {
            setLanguages(countriesLanguagesMap[country].map(item => {
                return {
                    value: item,
                    label: getMessage(item)
                }
            }));
            setLanguage(countriesLanguagesMap[country][0])
        }
    }, [country, countriesLanguagesMap, getMessage]);

    React.useEffect(() => {
        if (country !== '' && language !== '') {
            const api = helperTextAPI.filter(item => item.country === country && item.lang === language)[0];
            setContent(api && api.content);
        }
    }, [country, language, helperTextAPI]);

    return (
        <div>
            <h1>{getMessage('test')}</h1>
            <p>{getMessage('test.body')}</p>

            <Container>
                <Row>
                    <Col>
                        <CountrySelect
                            placeholder="Select a Country"
                            getMessage={getMessage}
                            countryOptions={countries}
                            setCountry={setCountry}
                            initValue={countries[0]}
                        />
                    </Col>
                    <Col>
                        <LanguageSelect
                            placeholder="Select a Language"
                            getMessage={getMessage}
                            languageOptions={languages}
                            setLanguage={setLanguage}
                            initValue={languages[0]}
                        />
                    </Col>
                </Row>

                <ContentBox>
                    {content}
                </ContentBox>
            </Container>
        </div>
    );
}

export default TestView;
