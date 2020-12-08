import React from 'react';
import { components } from 'react-select';

const DropdownIndicator = (
    props
    // props: ElementConfig<typeof components.DropdownIndicator>
) => {
    return (
        <components.DropdownIndicator {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28.429" height="14.341" viewBox="0 0 28.429 14.341"><path d="M37.6,29.757,23.735,43.044,9.867,29.757" transform="translate(-9.521 -29.396)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="1"/></svg>
        </components.DropdownIndicator>
    );
};

export default DropdownIndicator