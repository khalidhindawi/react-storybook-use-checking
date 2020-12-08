import Proptypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import DropdownIndicator from './CustomDropdownIndicator';

const LanguageSelect = ({languageOptions, setLanguage, placeholder, getMessage, initValue, ...rest}) => {
    const [value, setValue] = React.useState<any>({});
    const onChange = React.useCallback(item => {
        setLanguage(item.value);
        setValue(item);
    }, [setLanguage]);
    const noOptionsMessage = React.useCallback(() => getMessage("no_results"), [getMessage]);
    React.useEffect(() => {
        setValue(initValue);
    }, [initValue]);
    return (
        <Select
            components={{ DropdownIndicator }}
            placeholder={placeholder}
            isOptionDisabled={(option) => option.disabled}
            onChange={onChange}
            noOptionsMessage={noOptionsMessage}
            options={languageOptions}
            styles={customStyle}
            value={value}
            {...rest}
        />
    );
}

const customStyle = {
    container: styles => ({
        ...styles,
        minWidth: 300,
    }),
    control: styles => ({
        ...styles,
        height: 48,
        border: 'none',
        borderRadius: 0,
        borderBottom: '1px solid #0000001f',
    }),
    valueContainer: styles => ({
        ...styles,
        paddingLeft: 0,
        paddingRight: 0,
    }),
    singleValue: styles => ({
        ...styles,
        fontFamily: '"Roboto", sans-serif',
        fontWeight: 400,
        fontSize: 14,
    }),
    placeholder: styles => ({
        ...styles,
        fontFamily: '"Roboto", sans-serif',
        fontWeight: 400,
        fontSize: 14,
    }),
    menu: styles => ({
        ...styles,
        borderRadius: 0,
    }),
    option: styles => ({
        ...styles,
        fontFamily: '"Roboto", sans-serif',
        fontWeight: 400,
        fontSize: 14,
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
}

LanguageSelect.propTypes = {
    languageOptions: Proptypes.arrayOf(
        Proptypes.shape({
            label: Proptypes.string,
            value: Proptypes.string
        })
    ),
    setLanguage: Proptypes.func,
    placeholder: Proptypes.string,
    getMessage: Proptypes.func,
    styles: Proptypes.object,
    width: Proptypes.string,
    className: Proptypes.string
};

export default LanguageSelect;
